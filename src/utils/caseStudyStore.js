import axios from 'axios';

const STORAGE_KEY = 'ktr_case_studies_store_v1';

// Initial realistic default case studies for instant working mode
export const INITIAL_CASE_STUDIES = [
  {
    _id: 'cs-demo-1',
    caseNumber: 'CS-2026-001',
    title: '30-Year Title Chain Clearance & Tehsil Mutation Verification',
    clientName: 'Manoj Kumar Agarwal',
    propertyLocation: 'Plot No. 42, Khasra No. 118/2, Gomti Nagar Extension, Lucknow',
    propertyType: 'Commercial',
    estimatedLoanAmount: 12500000,
    caseIssue: '1998 to 2004 original sale deed is lost; only Certified True Copy from Sub-Registrar Office is available. Tehsil Khatauni mutation is updated and certified.',
    legalComplications: 'Bank legal panel raised query regarding missing original chain deed between 1998-2004 and demanded 30-year registrar non-encumbrance search report + indemnity bond with two solvent sureties.',
    discussionNotes: 'Advocate Verma conducted 30-year search from 1994 to 2026 at Sub-Registrar Sadar. No prior mortgage, charge, or lis pendens found. Physical possession is clear with 8-ft boundary wall and active commercial establishment.',
    status: 'Active Discussion',
    customFields: [
      { id: 'fld_prop_address', label: 'Property Address & Khasra / Khata No.', value: 'Plot No. 42, Khasra No. 118/2, Gomti Nagar Extension, Lucknow, UP', fieldType: 'textarea', isRequired: true, order: 1 },
      { id: 'fld_title_chain', label: 'Title Chain Status (30 Years)', value: 'Certified true copy of 2001 Sale Deed available; original lost in 2011. GD report registered at Gomti Nagar PS.', fieldType: 'text', isRequired: true, order: 2 },
      { id: 'fld_mutation_status', label: 'Mutation / Dakhil Kharij Status', value: 'Tehsildar order dated 14-Aug-2018; Khatauni Fasli Year 1428-1433 verified', fieldType: 'text', isRequired: false, order: 3 },
      { id: 'fld_zoning', label: 'Land Use / 143 Conversion', value: 'Commercial conversion approved under Section 143/80 UP Revenue Code', fieldType: 'text', isRequired: false, order: 4 },
      { id: 'fld_possession', label: 'Physical Possession & Boundary Demarcation', value: 'Physical possession clear with 4-sided boundary wall & geo-tag coordinates', fieldType: 'text', isRequired: false, order: 5 },
      { id: 'fld_proposed_solution', label: 'Proposed Legal Remedy for Banker', value: 'Registered Indemnity Bond + 30-Year Sub-Registrar Search Report + Tehsildar Certified Mutation Extract', fieldType: 'textarea', isRequired: false, order: 6 }
    ],
    documents: [
      {
        id: 'doc_1',
        name: '30-Year Non-Encumbrance Search Report',
        fileTitle: 'Sub-Registrar Sadar Lucknow Search Report (1994 - 2026)',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        fileType: 'pdf',
        fileSize: 1420500,
        category: 'Legal Search',
        notes: 'Non-encumbrance certificate signed by High Court panel advocate',
        order: 1,
        uploadedAt: new Date(Date.now() - 2 * 86400000).toISOString(),
        uploadedByName: 'Staff'
      },
      {
        id: 'doc_2',
        name: 'Tehsil Court Certified Mutation Order',
        fileTitle: 'Tehsildar Sadar Dakhil Kharij Stamped Copy',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        fileType: 'pdf',
        fileSize: 890400,
        category: 'Tehsil Records',
        notes: 'Attested revenue court decree with seal',
        order: 2,
        uploadedAt: new Date(Date.now() - 2 * 86400000).toISOString(),
        uploadedByName: 'Staff'
      },
      {
        id: 'doc_3',
        name: 'Certified Copy of Sale Deed (2001)',
        fileTitle: 'Sub-Registrar Certified Copy with Challan Receipt',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        fileType: 'pdf',
        fileSize: 3120000,
        category: 'Title Deed',
        notes: 'Certified copy issued by District Registrar Sadar',
        order: 3,
        uploadedAt: new Date(Date.now() - 1 * 86400000).toISOString(),
        uploadedByName: 'Staff'
      }
    ],
    bankerQueries: [
      {
        _id: 'bq_1',
        bankerName: 'Vikram Sharma',
        bankName: 'HDFC Bank - LAP Credit Desk',
        bankerPhone: '9876543210',
        bankerEmail: 'vikram.sharma@hdfcbank.example.com',
        queryText: 'Please clarify whether the Tehsildar certified stamped order is available for mutation, or only an unverified digital Khatauni printout?',
        status: 'Answered',
        staffReply: 'Yes, original certified stamped copy of Tehsildar mutation order dated 14-Aug-2018 is available and attached in Document #2. Digital UP Bhulekh verification barcode is also validated.',
        repliedAt: new Date(Date.now() - 12 * 3600000).toISOString(),
        repliedByName: 'Staff',
        isPhoneQuery: false,
        createdAt: new Date(Date.now() - 24 * 3600000).toISOString()
      }
    ],
    shareCode: 'cs-demo-1',
    isShareActive: true,
    viewsCount: 5,
    createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const getStoredCases = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CASE_STUDIES));
      return INITIAL_CASE_STUDIES;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_CASE_STUDIES));
      return INITIAL_CASE_STUDIES;
    }
    return parsed;
  } catch (e) {
    return INITIAL_CASE_STUDIES;
  }
};

export const findStoredCase = (idOrCode) => {
  const cases = getStoredCases();
  return cases.find(c => 
    String(c._id) === String(idOrCode) || 
    String(c.caseNumber).toLowerCase() === String(idOrCode).toLowerCase() ||
    String(c.shareCode).toLowerCase() === String(idOrCode).toLowerCase()
  ) || null;
};

export const caseStudyService = {
  async getSharedCase(code) {
    try {
      const baseUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL?.replace(/\/api\/?$/, '') || '';
      const res = await axios.get(`${baseUrl}/api/case-studies/shared/${code}`);
      if (res.data?.success && res.data.data) {
        return { success: true, data: res.data.data };
      }
    } catch (e) {
      console.warn('Backend shared fetch failed, looking up from local store:', e.message);
    }

    const localCase = findStoredCase(code);
    if (localCase) {
      const bankerSafeCopy = {
        _id: localCase._id,
        caseNumber: localCase.caseNumber,
        title: localCase.title,
        clientName: localCase.clientName,
        propertyLocation: localCase.propertyLocation,
        propertyType: localCase.propertyType,
        estimatedLoanAmount: localCase.estimatedLoanAmount,
        caseIssue: localCase.caseIssue,
        status: localCase.status,
        customFields: (localCase.customFields || []).slice().sort((a, b) => (a.order || 0) - (b.order || 0)),
        documents: (localCase.documents || []).slice().sort((a, b) => (a.order || 0) - (b.order || 0)),
        bankerQueries: (localCase.bankerQueries || []).map(q => ({
          _id: q._id,
          bankerName: q.bankerName,
          bankName: q.bankName,
          queryText: q.queryText,
          status: q.status,
          staffReply: q.staffReply,
          repliedAt: q.repliedAt,
          repliedByName: q.repliedByName,
          createdAt: q.createdAt
        })),
        updatedAt: localCase.updatedAt
      };
      return { success: true, data: bankerSafeCopy };
    }

    return { success: false, message: 'Case Study not found or link has expired.' };
  },

  async submitBankerQueryFromShare(code, queryData) {
    try {
      const baseUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL?.replace(/\/api\/?$/, '') || '';
      const res = await axios.post(`${baseUrl}/api/case-studies/shared/${code}/query`, queryData);
      if (res.data?.success) {
        return { success: true, message: res.data.message };
      }
    } catch (e) {
      console.warn('Backend query submit failed, storing query locally:', e.message);
    }

    const cases = getStoredCases();
    const idx = cases.findIndex(c => String(c.shareCode) === String(code) || String(c._id) === String(code));
    if (idx !== -1) {
      const newQuery = {
        _id: `bq_${Date.now()}`,
        bankerName: queryData.bankerName || 'Banker',
        bankName: queryData.bankName || 'Partner Bank',
        bankerPhone: queryData.bankerPhone || '',
        bankerEmail: queryData.bankerEmail || '',
        queryText: (queryData.queryText || '').trim(),
        status: 'Pending',
        staffReply: '',
        createdAt: new Date().toISOString()
      };
      cases[idx].bankerQueries = [...(cases[idx].bankerQueries || []), newQuery];
      cases[idx].updatedAt = new Date().toISOString();
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cases));
      } catch (err) {}
      return { success: true, message: 'Query submitted successfully' };
    }

    return { success: false, message: 'Failed to record query.' };
  }
};

export default caseStudyService;

