import React, { useState, useRef } from 'react';

const ChainDeedForm = () => {
  const [step, setStep] = useState(1);
  const [showSampleModal, setShowSampleModal] = useState(false);
  
  const [formData, setFormData] = useState({
    deedType: 'after2016',
    name: '',
    mobile: '',
    email: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const PRICING = {
    after2016: { label: 'Deeds after 2016', price: 900, desc: 'For deeds executed after the year 2016' },
    before2016: { label: 'Deeds before 2016', price: 1350, desc: 'For deeds executed before the year 2016 (excluding Record Room)' },
    recordRoom: { label: 'Deeds from Record Room', price: 2250, desc: 'For deeds required from the Record Room' }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (val) => {
    setFormData(prev => ({ ...prev, deedType: val }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const proceedToReview = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert("Please fill in all mandatory fields (Name & Mobile).");
      return;
    }
    if (!selectedFile) {
      alert("Please upload the required property registry page.");
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(2);
  };

  const handlePayment = () => {
    setStep(3);
    setTimeout(() => {
      setStep(4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2500);
  };

  const handlePrint = () => {
    const invoice = document.getElementById('invoice-card');
    if (!invoice) return;
    
    // Clone the invoice
    const clone = invoice.cloneNode(true);
    clone.id = 'print-clone';
    
    // Append to body
    document.body.appendChild(clone);
    // Add printing class to hide root
    document.body.classList.add('printing');
    
    // Print
    window.print();
    
    // Cleanup
    document.body.classList.remove('printing');
    document.body.removeChild(clone);
  };

  const resetForm = () => {
    setFormData({
      deedType: 'after2016',
      name: '',
      mobile: '',
      email: '',
    });
    setSelectedFile(null);
    setStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedService = PRICING[formData.deedType];
  const basePrice = selectedService.price;
  const gstAmount = Math.round(basePrice * 0.18);
  const totalAmount = basePrice + gstAmount;
  
  // Format dates for invoice
  const today = new Date();
  const dateString = today.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeString = today.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const txId = `TXN${Math.floor(Math.random() * 100000000).toString().padStart(8, '0')}`;

  // ==========================================
  // RENDER: STEP 1 (APPLICATION FORM)
  // ==========================================
  if (step === 1) {
    return (
      <form onSubmit={proceedToReview} className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 mt-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* LEFT COLUMN: SERVICE CHARGES */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] h-full">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="text-[#020d1c] text-lg font-bold tracking-wide">1. SERVICE CHARGES</h2>
            </div>
            <p className="text-gray-500 text-[13.5px] font-medium mb-6">Select the type of deed you require</p>
  
            {/* Radio Cards */}
            <div className="space-y-4 mb-8">
              
              {/* Card 1 */}
              <div 
                onClick={() => handleRadioChange('after2016')}
                className={`border ${formData.deedType === 'after2016' ? 'border-green-500 bg-green-50/10' : 'border-gray-200'} rounded-xl p-4 cursor-pointer transition-colors flex items-start gap-4`}
              >
                <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.deedType === 'after2016' ? 'border-green-600' : 'border-gray-300'}`}>
                  {formData.deedType === 'after2016' && <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#020d1c] font-bold text-[15px]">Deeds after 2016</h4>
                    <div className="text-right">
                      <span className="text-[#020d1c] font-bold text-lg">₹900</span>
                      <p className="text-gray-500 text-[11px] font-bold">+ GST</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-[13px] mt-1">For deeds executed after the year 2016</p>
                </div>
              </div>
  
              {/* Card 2 */}
              <div 
                onClick={() => handleRadioChange('before2016')}
                className={`border ${formData.deedType === 'before2016' ? 'border-green-500 bg-green-50/10' : 'border-gray-200'} rounded-xl p-4 cursor-pointer transition-colors flex items-start gap-4`}
              >
                <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.deedType === 'before2016' ? 'border-green-600' : 'border-gray-300'}`}>
                  {formData.deedType === 'before2016' && <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#020d1c] font-bold text-[15px]">Deeds before 2016</h4>
                    <div className="text-right">
                      <span className="text-[#020d1c] font-bold text-lg">₹1,350</span>
                      <p className="text-gray-500 text-[11px] font-bold">+ GST</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-[13px] mt-1">For deeds executed before the year 2016<br/>(excluding Record Room)</p>
                </div>
              </div>
  
              {/* Card 3 */}
              <div 
                onClick={() => handleRadioChange('recordRoom')}
                className={`border ${formData.deedType === 'recordRoom' ? 'border-green-500 bg-green-50/10' : 'border-gray-200'} rounded-xl p-4 cursor-pointer transition-colors flex items-start gap-4`}
              >
                <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.deedType === 'recordRoom' ? 'border-green-600' : 'border-gray-300'}`}>
                  {formData.deedType === 'recordRoom' && <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[#020d1c] font-bold text-[15px]">Deeds from Record Room</h4>
                    <div className="text-right">
                      <span className="text-[#020d1c] font-bold text-lg">₹2,250</span>
                      <p className="text-gray-500 text-[11px] font-bold">+ GST</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-[13px] mt-1">For deeds required from the Record Room</p>
                </div>
              </div>
  
            </div>
  
            {/* Warning Box */}
            <div className="bg-[#fff5f5] border border-red-100 rounded-xl p-4 flex gap-3 mb-4">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-red-700 text-[12.5px] font-medium leading-relaxed">
                <span className="font-bold">Important:</span> Record Room deeds may be delayed due to the unavailability of Record Room staff. Delivery depends entirely on staff availability.
              </p>
            </div>
  
            {/* Info Box */}
            <div className="bg-[#f4f7fb] border border-blue-100 rounded-xl p-4 flex gap-3">
              <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-blue-900 text-[13px] font-medium">
                <span className="font-bold">Expected Timeline:</span> Remaining deeds — 1 working day.
              </p>
            </div>
  
          </div>
  
          {/* RIGHT COLUMN: APPLICATION FORM */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] h-full flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <h2 className="text-[#020d1c] text-lg font-bold tracking-wide">2. APPLICATION FORM</h2>
            </div>
            <p className="text-gray-500 text-[13.5px] font-medium mb-8">Please provide accurate details to process your request</p>
  
            <div className="space-y-6 flex-1">
              
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-[#020d1c]">Full Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name" 
                  className="w-full h-[46px] px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400 transition-colors" 
                  required
                />
              </div>
  
              {/* Mobile Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-[#020d1c]">Mobile Number <span className="text-red-500">*</span></label>
                <div className="flex h-[46px] border border-gray-200 rounded-lg focus-within:border-[#de9e48] overflow-hidden transition-colors">
                   <select className="bg-white border-r border-gray-200 px-3 text-[14px] text-[#020d1c] font-medium outline-none h-full cursor-pointer">
                      <option>+91</option>
                   </select>
                   <input 
                     type="tel" 
                     name="mobile"
                     value={formData.mobile}
                     onChange={handleInputChange}
                     placeholder="Enter your mobile number" 
                     className="flex-1 px-4 outline-none text-[14px] text-gray-700 placeholder-gray-400" 
                     required
                     pattern="[0-9]{10}"
                     maxLength="10"
                   />
                </div>
                <p className="text-[11.5px] text-gray-500 mt-1 leading-relaxed">
                  Please ensure the mobile number is correct. Our team may contact you for any queries or clarification.
                </p>
              </div>
  
              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-bold text-[#020d1c]">Email Address <span className="text-gray-400 font-normal">(Optional)</span></label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address" 
                  className="w-full h-[46px] px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400 transition-colors" 
                />
              </div>
            </div>
          </div>
        </div>
  
        {/* 3. FULL WIDTH UPLOAD SECTION (CLEAN UI) */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] mt-8 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center text-center">
          
          <div className="flex items-center gap-3 mb-3">
            <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h2 className="text-[#020d1c] text-[16px] md:text-lg font-bold tracking-wide uppercase">3. UPLOAD PROPERTY REGISTRY DOCUMENT</h2>
          </div>
          
          <p className="text-gray-500 text-[14px] font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
            Please upload the last page of your property registry <span className="font-bold text-[#020d1c]">OR</span> the page containing Chain Deed information.
          </p>

          <div className="w-full max-w-md mx-auto bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-8 hover:border-[#de9e48] transition-colors cursor-pointer group flex flex-col items-center justify-center" onClick={() => fileInputRef.current?.click()}>
            <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <h3 className="text-[#020d1c] font-bold text-[16px] mb-1">Click to Upload Document</h3>
            <p className="text-gray-500 text-[12px]">Supported formats: JPG, PNG, PDF (Max. 10 MB)</p>
            
            {selectedFile && (
              <div className="mt-4 w-full bg-green-50 text-green-700 text-[13px] font-bold px-4 py-3 rounded-xl border border-green-200 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                <span className="truncate max-w-[200px]">{selectedFile.name}</span>
                <button type="button" onClick={() => {setSelectedFile(null); if(fileInputRef.current) fileInputRef.current.value = '';}} className="text-green-800 hover:text-red-500 p-1 bg-green-100 rounded-full transition-colors ml-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
            )}
          </div>

          <button type="button" onClick={() => setShowSampleModal(true)} className="mt-6 text-[#de9e48] hover:text-[#c98e41] font-bold text-[14px] flex items-center gap-2 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            How to upload? View Sample
          </button>

          <input 
             type="file" 
             ref={fileInputRef} 
             onChange={handleFileChange} 
             className="hidden" 
             accept="image/*,.pdf"
          />
        </div>
  
        {/* Red Alert */}
        <div className="mt-8 bg-[#fff0f0] border border-[#ffd6d6] rounded-xl p-4 flex items-center justify-center gap-4 text-center">
          <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-[#8b0000] text-[13px] md:text-[13.5px] font-medium leading-relaxed">
            <span className="font-bold">If any of the above details are unclear, blurred, cut off or incomplete, the required deed cannot be provided.</span><br/>
            <span className="font-bold text-red-600">Please upload a clear and readable document to avoid delays or rejection.</span>
          </p>
        </div>
  
        {/* Important Disclaimer Section */}
        <div className="mt-6 bg-[#fffdf9] border border-[#f5ead6] rounded-xl p-6 md:p-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-[#de9e48] w-12"></div>
            <h2 className="text-[#020d1c] text-[15px] md:text-[16px] font-bold tracking-wide uppercase">IMPORTANT DISCLAIMER</h2>
            <div className="h-px bg-[#de9e48] w-12"></div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4 text-[12.5px] text-gray-700 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <span className="text-[#de9e48] text-[20px] leading-none mt-[-4px]">•</span>
                <p>All deeds/documents are subject to availability with the concerned court/record office.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#de9e48] text-[20px] leading-none mt-[-4px]">•</span>
                <p>The service is dependent on the correct and complete details provided by the applicant. If the details provided are incorrect, incomplete, or unclear, the required deed may not be traceable or provided.</p>
              </div>
            </div>
  
            {/* Column 2 */}
            <div className="flex flex-col gap-4 text-[12.5px] text-gray-700 leading-relaxed md:px-6 md:border-l md:border-r border-[#f5ead6]">
              <div className="flex items-start gap-2.5">
                <span className="text-[#de9e48] text-[20px] leading-none mt-[-4px]">•</span>
                <p><span className="font-bold text-[#8b0000]">The concerned Court/Record Room</span> must be operational and <span className="font-bold text-[#8b0000]">the relevant staff</span> must be available for processing. Any delay due to court closure, staff unavailability, records being unavailable, or other circumstances beyond our control will not be the responsibility of KTR Consultants.</p>
              </div>
            </div>
  
            {/* Column 3 */}
            <div className="flex flex-col gap-4 text-[12.5px] text-gray-700 leading-relaxed md:pl-2">
              <div className="flex items-start gap-2.5">
                <span className="text-[#de9e48] text-[20px] leading-none mt-[-4px]">•</span>
                <p><span className="font-bold text-[#8b0000]">Record Room deeds</span> may take additional time depending on staff and record availability.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#de9e48] text-[20px] leading-none mt-[-4px]">•</span>
                <p>This service is currently available only for properties/records in Lucknow.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#de9e48] text-[20px] leading-none mt-[-4px]">•</span>
                <p>Submission of an application does not guarantee that a deed will be available or successfully obtained.</p>
              </div>
            </div>
  
          </div>
        </div>
  
        {/* Checkbox & Submit */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <label className="flex-1 bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-4 cursor-pointer hover:border-[#de9e48] transition-colors shadow-sm">
            <input type="checkbox" required className="w-5 h-5 accent-[#1a73e8] cursor-pointer" />
            <span className="text-[#020d1c] font-bold text-[14px]">I have read and understood the above disclaimer.</span>
          </label>
          
          <button 
            type="submit"
            className="md:w-[350px] bg-[#d69f4c] hover:bg-[#c98e41] text-white font-bold text-[15px] py-4 rounded-xl transition-all shadow-[0_4px_15px_-3px_rgba(214,159,76,0.4)] flex justify-center items-center gap-2"
          >
            Review & Proceed to Pay 
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
  
      {/* Sample Modal */}
      {showSampleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowSampleModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
            <div className="bg-[#020d1c] px-6 py-4 flex justify-between items-center text-white">
              <h3 className="font-bold text-[15px] tracking-wide">HOW TO UPLOAD - SAMPLE DOCUMENTS</h3>
              <button onClick={() => setShowSampleModal(false)} className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            
            <div className="p-4 md:p-8 overflow-y-auto max-h-[80vh]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Example 1 */}
                <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center bg-[#fdfdfd]">
                  <div className="bg-[#020d1c] text-white w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold mb-3">1</div>
                  <h4 className="text-[14px] font-bold text-[#020d1c] mb-3 text-center">Registry Last Page</h4>
                  <div className="bg-white p-2 border border-gray-200 rounded shadow-sm w-full aspect-[3/4] mb-3 overflow-hidden flex items-center justify-center">
                     <img src="/registry_last_page_new.png" alt="Registry Last Page" className="max-w-full max-h-full object-contain" />
                  </div>
                  <p className="text-[12px] text-gray-500 text-center leading-relaxed">Upload the last page of the property registry document.</p>
                </div>
  
                {/* Example 2 */}
                <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center bg-[#fdfdfd]">
                  <div className="bg-[#020d1c] text-white w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold mb-3">2</div>
                  <h4 className="text-[14px] font-bold text-[#020d1c] mb-3 text-center min-h-[42px] flex items-center">Chain Deed Information Page</h4>
                  <div className="bg-white p-2 border border-gray-200 rounded shadow-sm w-full aspect-[3/4] mb-3 overflow-hidden flex items-center justify-center">
                     <img src="/chain_deed_new.png" alt="Chain Deed Page" className="max-w-full max-h-full object-contain" />
                  </div>
                  <p className="text-[12px] text-gray-500 text-center leading-relaxed">Upload the page where Chain Deed information is mentioned.</p>
                </div>
  
                {/* Example 3 */}
                <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center bg-[#fdfdfd]">
                  <div className="bg-[#020d1c] text-white w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold mb-3">3</div>
                  <h4 className="text-[14px] font-bold text-[#020d1c] mb-3 text-center">Details Clearly Visible</h4>
                  <div className="bg-white p-2 border border-gray-200 rounded shadow-sm w-full aspect-[3/4] mb-3 overflow-hidden flex items-center justify-center">
                     <img src="/details_clearly_visible_new.png" alt="Details clearly visible" className="max-w-full max-h-full object-contain" />
                  </div>
                  <p className="text-[12px] text-gray-500 text-center leading-relaxed">Ensure all relevant details are clearly visible and readable.</p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button onClick={() => setShowSampleModal(false)} type="button" className="bg-[#020d1c] hover:bg-gray-800 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md">
                  Got it, Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      </form>
    );
  }

  // ==========================================
  // RENDER: STEP 2 (REVIEW & PAYMENT CALCULATION)
  // ==========================================
  if (step === 2) {
    return (
      <div className="max-w-[800px] mx-auto px-4 lg:px-6 mt-12 mb-20 font-sans">
        
        {/* Progress Tracker */}
        <div className="flex items-center justify-center gap-3 mb-10 text-[13px] font-bold">
          <div className="text-green-600 flex items-center gap-2 cursor-pointer" onClick={() => setStep(1)}>
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">✓</div>
            Application
          </div>
          <div className="w-10 h-[2px] bg-gray-200"></div>
          <div className="text-[#020d1c] flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#020d1c] text-white flex items-center justify-center">2</div>
            Review & Pay
          </div>
          <div className="w-10 h-[2px] bg-gray-200"></div>
          <div className="text-gray-400 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">3</div>
            Invoice
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
          
          <div className="bg-[#020d1c] px-8 py-6 text-white text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Review Your Application</h2>
            <p className="text-gray-400 text-[14px]">Please verify your details and payment breakdown.</p>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            
            {/* Customer Details */}
            <div>
              <h3 className="text-[#d69f4c] text-[13px] font-bold uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Customer Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 text-[12px] mb-1">Full Name</p>
                  <p className="text-[#020d1c] font-bold text-[15px]">{formData.name}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-[12px] mb-1">Mobile Number</p>
                  <p className="text-[#020d1c] font-bold text-[15px]">+91 {formData.mobile}</p>
                </div>
                {formData.email && (
                  <div className="col-span-2">
                    <p className="text-gray-500 text-[12px] mb-1">Email Address</p>
                    <p className="text-[#020d1c] font-bold text-[15px]">{formData.email}</p>
                  </div>
                )}
                <div className="col-span-2 mt-2">
                  <p className="text-gray-500 text-[12px] mb-1">Uploaded Document</p>
                  <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded-lg text-[13px] font-bold inline-flex">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    {selectedFile.name}
                  </div>
                </div>
              </div>
            </div>

            {/* Service & Payment Summary */}
            <div>
              <h3 className="text-[#d69f4c] text-[13px] font-bold uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Payment Summary</h3>
              
              <div className="bg-[#fcfcfd] border border-gray-200 rounded-xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-[#020d1c] font-bold text-[15px]">{selectedService.label}</h4>
                    <p className="text-gray-500 text-[12px] mt-1">{selectedService.desc}</p>
                  </div>
                  <span className="text-[#020d1c] font-bold text-[16px]">₹{basePrice.toLocaleString()}</span>
                </div>
                
                <div className="my-4 border-t border-dashed border-gray-300"></div>
                
                <div className="flex justify-between items-center mb-2 text-[14px]">
                  <span className="text-gray-600 font-medium">Subtotal</span>
                  <span className="text-[#020d1c] font-bold">₹{basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-4 text-[14px]">
                  <span className="text-gray-600 font-medium">GST (18%)</span>
                  <span className="text-[#020d1c] font-bold">₹{gstAmount.toLocaleString()}</span>
                </div>
                
                <div className="bg-[#020d1c] rounded-lg p-4 flex justify-between items-center mt-2 shadow-sm">
                  <span className="text-white font-bold text-[16px]">Total Amount</span>
                  <span className="text-[#de9e48] font-bold text-[22px]">₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
              <button 
                onClick={() => setStep(1)}
                className="px-6 py-4 border border-gray-300 rounded-xl text-gray-700 font-bold text-[15px] hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 sm:w-1/3"
              >
                Edit Details
              </button>
              
              <button 
                onClick={handlePayment}
                className="flex-1 bg-[#25d366] hover:bg-[#1ebe5b] text-white font-bold text-[16px] py-4 rounded-xl transition-all shadow-[0_4px_15px_-3px_rgba(37,211,102,0.4)] flex justify-center items-center gap-2"
              >
                Pay Securely ₹{totalAmount.toLocaleString()}
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // RENDER: STEP 3 (PROCESSING PAYMENT)
  // ==========================================
  if (step === 3) {
    return (
      <div className="max-w-[600px] mx-auto px-4 mt-20 mb-32 flex flex-col items-center justify-center font-sans">
        <div className="w-20 h-20 relative animate-spin mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
          <div className="absolute inset-0 rounded-full border-4 border-[#de9e48] border-t-transparent"></div>
        </div>
        <h2 className="text-[#020d1c] text-2xl font-bold mb-3">Processing Payment...</h2>
        <p className="text-gray-500 text-[15px] text-center max-w-[300px]">
          Please do not refresh the page or click back button while we securely process your payment.
        </p>
      </div>
    );
  }

  // ==========================================
  // RENDER: STEP 4 (SUCCESS & INVOICE)
  // ==========================================
  if (step === 4) {
    return (
      <div className="max-w-[800px] mx-auto px-4 lg:px-6 mt-12 mb-24 font-sans">
        
        {/* Success Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-[#020d1c] text-3xl font-bold font-serif mb-3">Payment Successful!</h2>
          <p className="text-gray-600 text-[15px]">
            Your application for <span className="font-bold text-[#020d1c]">Chain Deed</span> has been successfully submitted.
          </p>
        </div>

        {/* Invoice Card (Printable Area) */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden mb-8" id="invoice-card">
          {/* Header */}
          <div className="bg-[#020d1c] px-8 py-6 flex justify-between items-center text-white">
            <div>
              <h2 className="text-2xl font-bold tracking-wider">INVOICE</h2>
              <p className="text-[#de9e48] text-[13px] font-medium mt-1">Application Summary</p>
            </div>
            <div className="text-right">
              <p className="text-gray-300 text-[12px]">Transaction ID</p>
              <p className="font-bold font-mono text-[15px]">{txId}</p>
            </div>
          </div>

          <div className="p-8 md:p-10">
            {/* Meta Data */}
            <div className="flex justify-between items-start mb-8 pb-8 border-b border-gray-200">
              <div>
                <p className="text-gray-500 text-[12px] font-bold uppercase mb-1">Billed To</p>
                <p className="text-[#020d1c] font-bold text-[16px]">{formData.name}</p>
                <p className="text-gray-600 text-[14px] mt-0.5">+91 {formData.mobile}</p>
                {formData.email && <p className="text-gray-600 text-[14px]">{formData.email}</p>}
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-[12px] font-bold uppercase mb-1">Date & Time</p>
                <p className="text-[#020d1c] font-bold text-[15px]">{dateString}</p>
                <p className="text-gray-600 text-[14px] mt-0.5">{timeString}</p>
              </div>
            </div>

            {/* Service Details */}
            <div className="overflow-x-auto">
              <table className="w-full mb-8 min-w-[300px]">
              <thead>
                <tr className="border-b-2 border-[#020d1c] text-left">
                  <th className="pb-3 text-[#020d1c] font-bold text-[13px] uppercase">Service Description</th>
                  <th className="pb-3 text-[#020d1c] font-bold text-[13px] uppercase text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4">
                    <p className="text-[#020d1c] font-bold text-[15px]">{selectedService.label}</p>
                    <p className="text-gray-500 text-[12.5px] mt-1 line-clamp-1">{selectedService.desc}</p>
                  </td>
                  <td className="py-4 text-right">
                    <p className="text-[#020d1c] font-bold text-[15px]">₹{basePrice.toLocaleString()}</p>
                  </td>
                </tr>
              </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="flex justify-end">
              <div className="w-full md:w-1/2 space-y-3">
                <div className="flex justify-between items-center text-[14px]">
                  <span className="text-gray-600 font-bold">Subtotal</span>
                  <span className="text-[#020d1c] font-bold">₹{basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-[14px]">
                  <span className="text-gray-600 font-bold">GST (18%)</span>
                  <span className="text-[#020d1c] font-bold">₹{gstAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t-2 border-gray-200 mt-2">
                  <span className="text-[#020d1c] font-bold text-[18px]">Total Paid</span>
                  <span className="text-[#de9e48] font-bold text-[24px]">₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 text-center text-gray-400 text-[12px] pt-6 border-t border-dashed border-gray-200">
              <p>This is a computer-generated invoice and does not require a physical signature.</p>
              <p className="mt-1 font-bold">KTR Consultants | Property Loan & Legal Services</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={handlePrint}
            className="bg-white border border-gray-300 hover:border-[#020d1c] text-[#020d1c] font-bold text-[15px] px-8 py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
            Download / Print Invoice
          </button>
          
          <button 
            onClick={resetForm}
            className="bg-[#020d1c] hover:bg-gray-800 text-white font-bold text-[15px] px-8 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            Submit Another Request
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>

      </div>
    );
  }

  // Fallback
  return null;
};

export default ChainDeedForm;
