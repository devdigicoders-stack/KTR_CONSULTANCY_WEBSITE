import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const loanDocMap = {
  "Home Loan": [
    "PAN Card & Aadhaar Card",
    "Latest 3 Months Salary Slips / ITR",
    "Latest 6 Months Bank Statement",
    "Property Documents / Allotment Letter",
    "Passport Size Photograph"
  ],
  "Plot + Construction (P+C)": [
    "PAN & Aadhaar Card",
    "Plot Registry / Sale Deed",
    "Approved Map & Construction Estimate",
    "6 Months Bank Statement",
    "Income Proof (Salary Slip / ITR)"
  ],
  "Construction Loan": [
    "PAN & Aadhaar Card",
    "Land / Property Ownership Proof",
    "Building Plan & Cost Estimate by Architect",
    "6 Months Bank Statement",
    "Income Proof / ITR"
  ],
  "Loan Against Property (LAP)": [
    "PAN & Aadhaar Card",
    "Complete Property Chain Deeds",
    "Latest 1 Year Bank Statement",
    "Past 2–3 Years ITR / Financials",
    "Existing Loan Repayment Track (if any)"
  ],
  "LAP Takeover + Top-Up": [
    "PAN & Aadhaar Card",
    "Existing Loan Sanction Letter & Statement of Account (SOA)",
    "Property Documents Copy / LOD",
    "Latest 1 Year Bank Statement",
    "Latest 2–3 Years ITR"
  ],
  "MSME Loan": [
    "PAN & Aadhaar Card (Promoters & Business)",
    "GST Registration & Latest 12 Months GST Returns",
    "Past 2–3 Years Audited Financials & ITR",
    "12 Months Current Account Statement",
    "Business Vintage Proof & Address Proof"
  ],
  "MSME / Business Loan": [
    "PAN & Aadhaar Card (Promoters & Business)",
    "GST Registration & Latest 12 Months GST Returns",
    "Past 2–3 Years Audited Financials & ITR",
    "12 Months Current Account Statement",
    "Business Vintage Proof & Address Proof"
  ],
  "Mudra Loan": [
    "PAN & Aadhaar Card",
    "Business Registration / Udyam Certificate",
    "6 Months Bank Statement",
    "Quotation of Machinery / Items to purchase",
    "Passport Size Photographs"
  ],
  "Project Finance / Funding": [
    "Detailed Project Report (DPR)",
    "Land Title & Approvals / Clearances",
    "Promoter Profile & Net Worth Statement",
    "Provisional & Projected Balance Sheets",
    "Machinery / Civil Works Quotations"
  ],
  "Project Finance / Project Loan": [
    "Detailed Project Report (DPR)",
    "Land Title & Approvals / Clearances",
    "Promoter Profile & Net Worth Statement",
    "Provisional & Projected Balance Sheets",
    "Machinery / Civil Works Quotations"
  ],
  "CC / OD – Working Capital": [
    "PAN & Aadhaar of Directors / Partners / Proprietor",
    "GST Returns & Stock Statement",
    "12 Months Bank Statements (All active accounts)",
    "Past 2–3 Years Financial Statements with Audit Report",
    "Collateral Property Documents"
  ],
  "Term Loan": [
    "PAN & Aadhaar of Business & Promoters",
    "Past 2–3 Years ITR & Audit Report",
    "Bank Statements (Past 12 Months)",
    "Quotation / Invoices for Machinery or Purpose",
    "Business Proof & GST Certificate"
  ],
  "Business Loan Takeover + Top-Up": [
    "Existing Loan Sanction Letters & Foreclosure Letters",
    "12 Months Bank Statement",
    "Latest 2–3 Years ITR & Financials",
    "Property Documents (if secured loan)",
    "Repayment Track Record (SOA)"
  ],
  "Home Loan Balance Transfer + Top-Up": [
    "Current Loan Sanction Letter & SOA",
    "List of Documents (LOD) from existing bank",
    "Latest 6 Months Bank Statement & Salary Slips / ITR",
    "Property Chain Documents Copy",
    "KYC (PAN & Aadhaar)"
  ],
  "Property Purchase Loan": [
    "PAN & Aadhaar Card",
    "Agreement to Sale / Draft Deed",
    "Parent Documents / Title Search Report",
    "Income Proof (ITR / Form 16 / Salary Slips)",
    "6 Months Bank Statement"
  ],
  "Commercial Property Loan": [
    "PAN & Aadhaar Card",
    "Commercial Property Sale Deed / Allotment Letter",
    "Business Financials (Past 3 Years)",
    "12 Months Bank Statement",
    "GST Registration & Returns"
  ],
  "Other": [
    "PAN Card",
    "Aadhaar Card",
    "Bank Statement (Past 6 to 12 months)",
    "Income Proof (Salary Slips / ITR)",
    "Supporting Property / Business Records"
  ]
};

const allServices = [
  { id: 'Home Loan', label: 'Home Loan' },
  { id: 'Plot + Construction (P+C)', label: 'Plot + Construction (P+C)' },
  { id: 'Construction Loan', label: 'Construction Loan' },
  { id: 'Loan Against Property (LAP)', label: 'Loan Against Property (LAP)' },
  { id: 'LAP Takeover + Top-Up', label: 'LAP Takeover + Top-Up' },
  { id: 'MSME / Business Loan', label: 'MSME / Business Loan' },
  { id: 'Mudra Loan', label: 'Mudra Loan' },
  { id: 'CC / OD – Working Capital', label: 'CC / OD – Working Capital' },
  { id: 'Project Finance / Project Loan', label: 'Project Finance / Project Loan' },
  { id: 'Term Loan', label: 'Term Loan' },
  { id: 'Business Loan Takeover + Top-Up', label: 'Business Loan Takeover + Top-Up' },
  { id: 'Home Loan Balance Transfer + Top-Up', label: 'Home Loan Balance Transfer + Top-Up' },
  { id: 'Property Purchase Loan', label: 'Property Purchase Loan' },
  { id: 'Commercial Property Loan', label: 'Commercial Property Loan' },
  { id: 'Other', label: 'Other' }
];

const msmeServices = [
  { id: 'Mudra Loan', label: 'Mudra Loan' },
  { id: 'MSME Loan', label: 'MSME Loan' },
  { id: 'Project Finance / Funding', label: 'Project Funding / Finance' }
];

const businessServices = [
  { id: 'MSME / Business Loan', label: 'MSME / Business Loan' },
  { id: 'CC / OD – Working Capital', label: 'CC / OD – Working Capital' },
  { id: 'Project Finance / Project Loan', label: 'Project Finance / Project Loan' },
  { id: 'Term Loan', label: 'Term Loan' },
  { id: 'Business Loan Takeover + Top-Up', label: 'Business Loan Takeover + Top-Up' },
  { id: 'Mudra Loan', label: 'Mudra Loan' },
  { id: 'Commercial Property Loan', label: 'Commercial Property Loan' },
  { id: 'Other', label: 'Other Business Requirement' }
];

const ApplyForm = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category')?.toLowerCase() || '';
  const serviceParam = searchParams.get('service') || '';

  const isMsmeCategory = categoryParam === 'msme' || categoryParam === 'msme-loans';
  const isBusinessCategory = categoryParam === 'business' || categoryParam === 'business-finance' || categoryParam === 'business-loan';

  let availableServices = allServices;
  let defaultService = 'Home Loan';

  if (isMsmeCategory) {
    availableServices = msmeServices;
    defaultService = 'Mudra Loan';
  } else if (isBusinessCategory) {
    availableServices = businessServices;
    defaultService = 'MSME / Business Loan';
  }

  const [selectedService, setSelectedService] = useState(
    serviceParam || defaultService
  );

  useEffect(() => {
    if (isMsmeCategory) {
      if (!msmeServices.some(s => s.id === selectedService)) {
        setSelectedService('Mudra Loan');
      }
    } else if (isBusinessCategory) {
      if (!businessServices.some(s => s.id === selectedService)) {
        setSelectedService('MSME / Business Loan');
      }
    }
  }, [isMsmeCategory, isBusinessCategory]);

  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    source: '',
    loanAmount: '',
    otherServiceType: '',
    employmentType: '',
    message: ''
  });
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileSelect = (e) => {
    const selected = Array.from(e.target.files || []);
    if (!selected.length) return;

    const valid = [];
    for (const f of selected) {
      if (f.size > 15 * 1024 * 1024) {
        showNotification(`File "${f.name}" exceeds 15MB size limit.`, 'error');
        return;
      }
      valid.push(f);
    }

    if (files.length + valid.length > 10) {
      showNotification('You can upload a maximum of 10 documents.', 'error');
      return;
    }

    setFiles(prev => [...prev, ...valid]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile || !formData.employmentType) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }

    if (selectedService === 'Other' && !formData.otherServiceType) {
      showNotification('Please specify the service you are looking for.', 'error');
      return;
    }

    try {
      setLoading(true);
      const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const chosenService = selectedService === 'Other' ? (formData.otherServiceType || 'Other') : selectedService;

      const data = new FormData();
      data.append('serviceType', selectedService);
      data.append('purpose', chosenService);
      data.append('fullName', formData.fullName);
      data.append('mobile', formData.mobile);
      if (formData.email) data.append('email', formData.email);
      if (formData.source) data.append('source', formData.source);
      if (formData.loanAmount) data.append('loanAmount', formData.loanAmount);
      if (formData.otherServiceType) data.append('otherServiceType', formData.otherServiceType);
      data.append('employmentType', formData.employmentType);
      if (formData.message) data.append('message', formData.message);

      files.forEach(file => {
        data.append('documents', file);
      });

      const response = await fetch(`${BACKEND_URL}/applications/submit`, {
        method: 'POST',
        body: data
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmittedData(result.data);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        showNotification(result.message || 'Something went wrong', 'error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showNotification('Failed to connect to the server.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const printReceipt = (data) => {
    const printWindow = window.open('', '_blank', 'width=700,height=800');
    const submittedDate = new Date(data.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    printWindow.document.write(`<!DOCTYPE html><html><head><title>Receipt - ${data.applicationId}</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',Arial,sans-serif;background:#f4f5f7;display:flex;justify-content:center;padding:40px 20px}.receipt{width:520px;background:white;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,.12)}.rh{background:#020d1c;padding:24px;display:flex;justify-content:space-between;align-items:flex-start}.ct{color:#de9e48;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:4px}.cn{color:white;font-size:18px;font-weight:900}.rl{color:#9ca3af;font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-align:right;margin-bottom:4px}.ri{color:#de9e48;font-size:15px;font-weight:900;letter-spacing:1px}.rb{padding:24px}.row{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:18px;margin-bottom:18px;border-bottom:1px solid #f1f5f9}.fl{font-size:10px;color:#9ca3af;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px}.fv{font-size:15px;color:#020d1c;font-weight:800}.fvs{font-size:13px;color:#020d1c;font-weight:700}.sb{background:#fffbeb;border:1px solid #fde68a;color:#b45309;font-size:10px;font-weight:800;padding:5px 12px;border-radius:99px;text-transform:uppercase;letter-spacing:1px}.gr{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding-bottom:18px;margin-bottom:18px;border-bottom:1px solid #f1f5f9}.ib{background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:14px;display:flex;gap:10px}.it{font-size:11.5px;color:#1d4ed8;line-height:1.6}.rf{background:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 24px;display:flex;justify-content:space-between}.ft{font-size:11px;color:#94a3b8;font-weight:600}.fn{font-size:11px;color:#64748b;font-weight:700}@media print{body{background:white;padding:0}.receipt{box-shadow:none;border-radius:0;width:100%}}</style></head><body><div class="receipt"><div class="rh"><div><div class="ct">Application Receipt</div><div class="cn">KTR Financial Services</div></div><div><div class="rl">Reference ID</div><div class="ri">${data.applicationId}</div></div></div><div class="rb"><div class="row"><div><div class="fl">Applicant Name</div><div class="fv">${data.fullName}</div></div><div style="text-align:right"><div class="fl">Mobile</div><div class="fvs">+91 ${data.mobile}</div></div></div><div class="row"><div><div class="fl">Service Applied For</div><div class="fvs">${data.serviceType}${data.serviceType==='Other'&&data.otherServiceType?' ('+data.otherServiceType+')':''}</div></div><div class="sb">Pending Review</div></div><div class="gr"><div><div class="fl">Purpose</div><div class="fvs">${data.purpose==='Other'?data.otherPurpose:data.purpose}</div></div><div><div class="fl">Employment Type</div><div class="fvs">${data.employmentType}</div></div>${data.loanAmount?'<div><div class="fl">Loan Amount</div><div class="fvs">&#8377; '+data.loanAmount+'</div></div>':''}<div><div class="fl">Submitted On</div><div class="fvs">${submittedDate}</div></div></div><div class="ib"><div style="color:#3b82f6;font-size:18px;flex-shrink:0">&#9432;</div><div class="it">Please save your Reference ID <strong>${data.applicationId}</strong>. Our team will contact you on <strong>+91 ${data.mobile}</strong> within 24–48 business hours.</div></div></div><div class="rf"><div class="ft">KTR Financial Services &copy; ${new Date().getFullYear()}</div><div class="fn">Printed on ${new Date().toLocaleDateString('en-IN')}</div></div></div><script>window.onload=function(){window.print();window.onafterprint=function(){window.close();};}<\/script></body></html>`);
    printWindow.document.close();
  };

  const SectionTitle = ({ title, num }) => (
    <div className="flex items-center gap-2 mb-6">
      <div className="w-1.5 h-5 bg-[#de9e48] rounded-sm"></div>
      <h3 className="text-[#020d1c] font-bold text-[16px] md:text-[18px]">
        {num}. {title}
      </h3>
    </div>
  );

  return (
    <div className="space-y-12 relative">
      {notification && (
        <div className={`fixed top-6 right-6 z-50 px-6 py-3 rounded-xl shadow-xl border font-bold text-sm ${
          notification.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-600 border-green-100'
        }`}>
          {notification.message}
        </div>
      )}

      {/* ===== RECEIPT SCREEN ===== */}
      {submittedData ? (
        <div className="flex flex-col items-center justify-center py-8">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-[#020d1c] font-bold text-[22px] md:text-[26px] mb-1">Application Submitted!</h2>
          <p className="text-gray-500 text-[14px] mb-8 text-center max-w-md">Your application has been received. Our team will contact you shortly.</p>

          {/* Receipt Card */}
          <div className="w-full max-w-[580px] bg-white border border-gray-100 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.07)] overflow-hidden">
            {/* Receipt Header */}
            <div className="bg-[#020d1c] px-6 py-5 flex items-center justify-between">
              <div>
                <p className="text-[#de9e48] text-[11px] font-bold uppercase tracking-widest mb-1">Application Receipt</p>
                <p className="text-white font-black text-[18px]">KTR Financial Services</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">Reference ID</p>
                <p className="text-[#de9e48] font-black text-[15px] tracking-wider">{submittedData.applicationId}</p>
              </div>
            </div>

            {/* Receipt Body */}
            <div className="p-6 space-y-5">
              {/* Applicant Row */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Applicant Name</p>
                  <p className="text-[#020d1c] font-black text-[16px]">{submittedData.fullName}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Mobile</p>
                  <p className="text-[#020d1c] font-bold text-[14px]">+91 {submittedData.mobile}</p>
                </div>
              </div>

              {/* Service */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Service Applied For</p>
                  <p className="text-[#020d1c] font-bold text-[14px]">
                    {submittedData.serviceType}
                    {submittedData.serviceType === 'Other' && submittedData.otherServiceType && (
                      <span className="block text-gray-500 text-[12px] font-medium mt-0.5">({submittedData.otherServiceType})</span>
                    )}
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[11px] font-black uppercase tracking-wider">
                  Pending Review
                </span>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Purpose</p>
                  <p className="text-[#020d1c] font-bold text-[13px]">
                    {submittedData.purpose === 'Other' ? submittedData.otherPurpose : submittedData.purpose}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Employment Type</p>
                  <p className="text-[#020d1c] font-bold text-[13px]">{submittedData.employmentType}</p>
                </div>
                {submittedData.loanAmount && (
                  <div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Loan Amount</p>
                    <p className="text-[#020d1c] font-bold text-[13px]">₹ {submittedData.loanAmount}</p>
                  </div>
                )}
                <div>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Submitted On</p>
                  <p className="text-[#020d1c] font-bold text-[13px]">
                    {new Date(submittedData.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>

              {/* Info Note */}
              <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl p-3.5">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-blue-700 text-[12px] font-medium leading-relaxed">
                  Please save your Reference ID <strong>{submittedData.applicationId}</strong> for future tracking. Our team will contact you on <strong>+91 {submittedData.mobile}</strong> within 24–48 business hours.
                </p>
              </div>

              {/* Recommended Quick Actions (Check CIBIL & Contact Us) */}
              <div className="pt-2">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                  Recommended Next Steps:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <Link
                    to="/cibil-services"
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-200/80 rounded-xl transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-black shadow-xs">
                        📊
                      </span>
                      <div className="text-left">
                        <p className="text-xs font-bold text-[#020d1c] group-hover:text-blue-700">Check CIBIL</p>
                        <p className="text-[10px] text-gray-500">Official Report</p>
                      </div>
                    </div>
                    <svg className="w-3.5 h-3.5 text-blue-600 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <a
                    href={`https://wa.me/919918699696?text=Hi%20KTR%20Consultants%2C%20I%20have%20submitted%20my%20Loan%20Application.%20Reference%20ID%3A%20${submittedData.applicationId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 border border-emerald-200/80 rounded-xl transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center text-sm font-black shadow-xs">
                        💬
                      </span>
                      <div className="text-left">
                        <p className="text-xs font-bold text-[#020d1c] group-hover:text-emerald-700">WhatsApp Us</p>
                        <p className="text-[10px] text-gray-500">Fast Response</p>
                      </div>
                    </div>
                    <svg className="w-3.5 h-3.5 text-emerald-600 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    href="tel:9918699696"
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border border-amber-200/80 rounded-xl transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-lg bg-[#de9e48] text-white flex items-center justify-center text-sm font-black shadow-xs">
                        📞
                      </span>
                      <div className="text-left">
                        <p className="text-xs font-bold text-[#020d1c] group-hover:text-amber-800">Call Us Now</p>
                        <p className="text-[10px] text-gray-500">+91 99186 99696</p>
                      </div>
                    </div>
                    <svg className="w-3.5 h-3.5 text-[#de9e48] transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Receipt Footer */}
            <div className="bg-gray-50 border-t border-gray-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => printReceipt(submittedData)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-[13px] font-bold text-gray-600 hover:bg-white hover:border-gray-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print Receipt
              </button>
              <button
                onClick={() => {
                  setSubmittedData(null);
                  setFormData({ fullName: '', mobile: '', email: '', source: '', loanAmount: '', otherServiceType: '', employmentType: '', message: '' });
                  setSelectedService(defaultService);
                  setFiles([]);
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#de9e48] hover:bg-[#c98e41] text-white rounded-lg text-[13px] font-bold transition-colors"
              >
                Submit Another Application
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
      <form onSubmit={handleSubmit}>
        <div>
          <SectionTitle num="1" title="What are you looking for?" />
        
          <div className="max-w-xl">
            <label className="block text-[13px] font-bold text-[#020d1c] mb-2">
              Select Required Service / Loan <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-xl outline-none focus:border-[#de9e48] focus:ring-2 focus:ring-[#de9e48]/20 text-[14px] sm:text-[15px] font-semibold text-[#020d1c] bg-white shadow-xs appearance-none cursor-pointer transition-all"
              >
                {availableServices.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#de9e48]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        
          {selectedService === 'Other' && (
            <div className="mt-4 flex flex-col gap-1.5 animate-in fade-in zoom-in duration-200">
              <label className="text-[13px] font-bold text-[#020d1c]">Please Specify Service <span className="text-red-500">*</span></label>
              <input type="text" name="otherServiceType" value={formData.otherServiceType} onChange={handleChange} required placeholder="Enter the service you are looking for" className="w-full max-w-xl h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
            </div>
          )}
        </div>

      {/* 2. Your Basic Details */}
      <div className="mt-12">
        <SectionTitle num="2" title="Your Basic Details" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Full Name <span className="text-red-500">*</span></label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter your full name" className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Mobile Number <span className="text-red-500">*</span></label>
            <div className="flex h-11 border border-gray-200 rounded-lg focus-within:border-[#de9e48] overflow-hidden">
               <select className="bg-gray-50 border-r border-gray-200 px-3 text-[14px] text-gray-700 outline-none h-full font-medium">
                  <option>+91</option>
               </select>
               <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="Enter mobile number" className="flex-1 px-4 outline-none text-[14px] text-gray-700 placeholder-gray-400" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">How did you hear about us?</label>
            <select name="source" value={formData.source} onChange={handleChange} className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white">
               <option value="" disabled>Select Option</option>
               <option value="Social Media">Social Media</option>
               <option value="Friend / Family">Friend / Family</option>
               <option value="Google Search">Google Search</option>
               <option value="Advertisement">Advertisement</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Service Requirement Details */}
      <div className="mt-12">
        <SectionTitle num="3" title="Service Requirement Details" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Loan / Service Amount (₹)</label>
            <input type="text" name="loanAmount" value={formData.loanAmount} onChange={handleChange} placeholder="Enter amount (Optional)" className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-bold text-[#020d1c]">Employment Type / Business Type <span className="text-red-500">*</span></label>
            <select name="employmentType" value={formData.employmentType} onChange={handleChange} required className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 bg-white">
               <option value="" disabled>Select Type</option>
               <option value="Salaried">Salaried</option>
               <option value="Self-Employed (Business)">Self-Employed (Business)</option>
               <option value="Self-Employed (Professional)">Self-Employed (Professional)</option>
            </select>
          </div>
        </div>
      </div>

        {/* 4. Upload Documents */}
        <div className="mt-12">
          <SectionTitle num="4" title="Upload Documents (Optional)" />

          <div className="mb-3.5">
            <h4 className="text-xs sm:text-[14px] font-bold text-[#020d1c] flex items-center gap-1.5">
              <span>Already have the documents ready? Upload them now and let us get started.</span>
              <span className="text-base">🔒</span>
            </h4>
            <p className="text-[12px] sm:text-[13px] text-gray-500 mt-1 leading-relaxed">
              You may upload the documents you currently have — our team will guide you if anything else is required.
            </p>
          </div>

          {/* Helpful Checklist of Required Documents for this Service */}
          <div className="bg-[#fdfaf5] border border-[#f5e3cd] rounded-xl p-4 mb-4">
            <p className="text-xs font-bold text-[#965a14] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>📄 Required Documents for {selectedService === 'Other' && formData.otherServiceType ? formData.otherServiceType : selectedService}:</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {(loanDocMap[selectedService] || loanDocMap["Other"]).map((doc, idx) => (
                <span key={idx} className="bg-white px-2.5 py-1 rounded-lg border border-[#ebd0ad] text-xs font-medium text-gray-700 flex items-center gap-1.5 shadow-2xs">
                  <span className="text-[#de9e48] font-bold">✓</span>
                  {doc}
                </span>
              ))}
            </div>
          </div>

          {/* Dropzone File Picker */}
          <div 
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            className="border-2 border-dashed border-gray-300 hover:border-[#de9e48] bg-gray-50/70 hover:bg-[#fdfaf5] rounded-xl p-6 text-center cursor-pointer transition-all group"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              multiple
              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx,.zip"
              className="hidden"
            />
            <div className="w-11 h-11 rounded-full bg-white group-hover:bg-[#de9e48]/15 text-gray-500 group-hover:text-[#de9e48] flex items-center justify-center mx-auto mb-2 transition-colors shadow-2xs">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-sm font-bold text-[#020d1c] group-hover:text-[#de9e48] transition-colors flex items-center justify-center gap-1.5">
              <span>📤</span>
              <span>Upload Your Documents</span>
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Upload available documents to help us review your requirement faster
            </p>
            <p className="text-[11.5px] text-gray-400 mt-0.5">
              PDF, JPG, PNG, DOC, XLS — Up to 15MB each (Max 10 files)
            </p>
          </div>

          {/* Small trust message below upload */}
          <div className="mt-2.5 flex items-start gap-2 text-xs text-gray-600 bg-emerald-50/70 border border-emerald-100 rounded-lg p-2.5">
            <span className="text-sm">🔐</span>
            <p className="leading-snug">
              <strong className="text-emerald-800 font-semibold">Secure & Confidential:</strong> Your documents are used only to assess and process your requested service.
            </p>
          </div>

          {/* Uploaded File List */}
          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                Attached Files ({files.length}):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {files.map((f, i) => (
                  <div 
                    key={i} 
                    className="bg-white border border-gray-200 rounded-lg p-2.5 flex items-center justify-between shadow-2xs"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <span className="text-base">📎</span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#020d1c] truncate">{f.name}</p>
                        <p className="text-[10px] text-gray-400">{formatFileSize(f.size)}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(i)}
                      className="text-gray-400 hover:text-red-500 p-1 rounded transition-colors cursor-pointer"
                      title="Remove file"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-1.5 mb-8">
          <label className="text-[13px] font-bold text-[#020d1c]">Additional Requirements / Message (Optional)</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message or additional requirements..." 
            className="w-full p-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400 resize-none min-h-[120px]"
          ></textarea>
          <p className="text-[11px] text-gray-500 mt-1">Please provide accurate information to help us serve you better.</p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center xl:justify-start">
           <button disabled={loading} className="bg-[#de9e48] hover:bg-[#c98e41] text-white font-bold text-[14.5px] px-8 py-3.5 rounded-md transition-colors w-full sm:w-[300px] flex items-center justify-center gap-2 shadow-md disabled:opacity-50">
             {loading ? (
               <svg className="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
             ) : (
               <>
                 Submit Application
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </>
             )}
           </button>
        </div>

      </form>
      )}
    </div>
  );
};

export default ApplyForm;
