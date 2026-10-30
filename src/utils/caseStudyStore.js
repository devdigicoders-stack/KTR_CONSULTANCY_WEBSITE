import axios from 'axios';

const STORAGE_KEY = 'ktr_case_studies_store_v2';

export const caseStudyService = {
  async getSharedCase(code, passcode = '') {
    try {
      const baseUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL?.replace(/\/api\/?$/, '') || '';
      const queryParam = passcode ? `?passcode=${encodeURIComponent(passcode)}` : '';
      const res = await axios.get(`${baseUrl}/api/case-studies/shared/${code}${queryParam}`);
      if (res.data?.success && res.data.data) {
        return { success: true, data: res.data.data };
      }
      if (res.data?.requiresPasscode) {
        return { 
          success: false, 
          requiresPasscode: true, 
          message: res.data.message, 
          recipientType: res.data.recipientType, 
          caseNumber: res.data.caseNumber 
        };
      }
    } catch (e) {
      if (e.response?.data?.requiresPasscode) {
        return { 
          success: false, 
          requiresPasscode: true, 
          message: e.response.data.message, 
          recipientType: e.response.data.recipientType, 
          caseNumber: e.response.data.caseNumber 
        };
      }
      console.warn('Backend shared fetch failed, checking local store:', e.message);
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('ktr_case_studies_store_v1');
      if (raw) {
        const cases = JSON.parse(raw);
        const localCase = cases.find(c => 
          String(c._id) === String(code) || 
          String(c.caseNumber).toLowerCase() === String(code).toLowerCase() ||
          String(c.shareCode).toLowerCase() === String(code).toLowerCase() ||
          (c.shareSettings && c.shareSettings.some(s => s.shareCode.toLowerCase() === String(code).toLowerCase()))
        );

        if (localCase) {
          const matchedShare = (localCase.shareSettings || []).find(
            s => s.shareCode.toLowerCase() === code.toLowerCase()
          );

          if (matchedShare?.passcode && matchedShare.passcode.trim()) {
            if (!passcode || passcode.trim() !== matchedShare.passcode.trim()) {
              return {
                success: false,
                requiresPasscode: true,
                recipientType: matchedShare.recipientType,
                caseNumber: localCase.caseNumber,
                message: 'This case is protected with a security passcode. Please enter the passcode to access.'
              };
            }
          }

          let customFields = (localCase.customFields || []).filter(f => !f.isConfidential).slice().sort((a, b) => (a.order || 0) - (b.order || 0));
          if (matchedShare && matchedShare.visibleFieldIds && matchedShare.visibleFieldIds.length > 0) {
            customFields = customFields.filter(f => matchedShare.visibleFieldIds.includes(f.id));
          }

          let documents = (localCase.documents || []).filter(d => !d.isConfidential).slice().sort((a, b) => (a.order || 0) - (b.order || 0));
          if (matchedShare && matchedShare.visibleDocumentIds && matchedShare.visibleDocumentIds.length > 0) {
            documents = documents.filter(d => matchedShare.visibleDocumentIds.includes(d.id));
          }

          const safeCopy = {
            _id: localCase._id,
            caseNumber: localCase.caseNumber,
            caseType: localCase.caseType || 'Property Legal Issues',
            title: localCase.title,
            clientName: localCase.clientName,
            propertyLocation: localCase.propertyLocation,
            propertyType: localCase.propertyType,
            estimatedLoanAmount: localCase.estimatedLoanAmount,
            caseIssue: localCase.caseIssue,
            legalComplications: localCase.legalComplications,
            status: localCase.status,
            customFields,
            documents,
            queries: (localCase.bankerQueries || []).map(q => ({
              _id: q._id,
              authorName: q.authorName,
              authorRole: q.authorRole,
              source: q.source,
              bankName: q.bankName,
              queryText: q.queryText,
              status: q.status,
              staffReply: q.staffReply,
              replies: q.replies || [],
              createdAt: q.createdAt
            })),
            allowQueries: matchedShare ? matchedShare.allowQueries !== false : true,
            recipientName: matchedShare?.recipientName || '',
            recipientType: matchedShare?.recipientType || 'Expert'
          };
          return { success: true, data: safeCopy };
        }
      }
    } catch (err) {}

    return { success: false, message: 'Case discussion not found or link has expired.' };
  },

  async submitBankerQueryFromShare(code, queryData) {
    try {
      const baseUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL?.replace(/\/api\/?$/, '') || '';
      const res = await axios.post(`${baseUrl}/api/case-studies/shared/${code}/query`, queryData);
      if (res.data?.success) {
        return { success: true, message: res.data.message };
      }
    } catch (e) {
      console.warn('Backend query submit failed, storing locally:', e.message);
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('ktr_case_studies_store_v1');
      if (raw) {
        const cases = JSON.parse(raw);
        const idx = cases.findIndex(c => String(c.shareCode) === String(code) || String(c._id) === String(code));
        if (idx !== -1) {
          const newQuery = {
            _id: `bq_${Date.now()}`,
            authorName: queryData.authorName || 'External Recipient',
            authorRole: queryData.authorRole || 'banker',
            source: 'portal',
            bankName: queryData.bankName || '',
            authorPhone: queryData.authorPhone || '',
            queryText: (queryData.queryText || '').trim(),
            status: 'Open',
            staffReply: '',
            createdAt: new Date().toISOString()
          };
          cases[idx].bankerQueries = [newQuery, ...(cases[idx].bankerQueries || [])];
          localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
          return { success: true, message: 'Query submitted successfully' };
        }
      }
    } catch (err) {}

    return { success: false, message: 'Failed to record query.' };
  }
};

export default caseStudyService;
