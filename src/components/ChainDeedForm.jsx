import React, { useState, useRef } from 'react';

const ChainDeedForm = () => {
  const [formData, setFormData] = useState({
    deedType: 'after2016',
    name: '',
    mobile: '',
    email: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert("Please fill in all mandatory fields.");
      return;
    }
    if (!selectedFile) {
      alert("Please upload the required property registry page.");
      return;
    }
    alert(`Application Submitted Successfully!\nType: ${formData.deedType}\nName: ${formData.name}\nMobile: ${formData.mobile}\nFile: ${selectedFile.name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 mt-12 mb-12">
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
                className="w-full h-[46px] px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" 
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-bold text-[#020d1c]">Mobile Number <span className="text-red-500">*</span></label>
              <div className="flex h-[46px] border border-gray-200 rounded-lg focus-within:border-[#de9e48] overflow-hidden">
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
                className="w-full h-[46px] px-4 border border-gray-200 rounded-lg outline-none focus:border-[#de9e48] text-[14px] text-gray-700 placeholder-gray-400" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. FULL WIDTH UPLOAD SECTION */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] mt-8 overflow-hidden">
        <div className="p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Side: Instructions & Examples */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h2 className="text-[#020d1c] text-[16px] md:text-lg font-bold tracking-wide uppercase">3. UPLOAD PROPERTY REGISTRY DOCUMENT</h2>
            </div>
            <p className="text-gray-500 text-[13.5px] font-medium mb-1 leading-relaxed">
              Please upload a clear image of the relevant page from your property registry.
            </p>
            <p className="text-gray-500 text-[13.5px] font-medium mb-6 leading-relaxed">
              You can upload either the last page of the registry <span className="font-bold text-[#020d1c]">OR</span> the page where Chain Deed information is mentioned.
            </p>

            {/* Examples Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {/* Example 1 */}
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center bg-[#fdfdfd] shadow-sm hover:border-gray-300 transition-colors">
                <div className="bg-[#020d1c] text-white w-5 h-5 rounded flex items-center justify-center text-[11px] font-bold mb-3">1</div>
                <h4 className="text-[12.5px] font-bold text-[#020d1c] mb-3 text-center">Registry Last Page</h4>
                <div className="bg-white p-1 border border-gray-200 rounded shadow-sm w-full aspect-[3/4] mb-3 overflow-hidden flex items-center justify-center">
                   <img src="/example3.png" alt="Registry Last Page" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-[11px] text-gray-500 text-center leading-relaxed">Upload the last page of the property registry document.</p>
              </div>

              {/* Example 2 */}
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center bg-[#fdfdfd] shadow-sm hover:border-gray-300 transition-colors">
                <div className="bg-[#020d1c] text-white w-5 h-5 rounded flex items-center justify-center text-[11px] font-bold mb-3">2</div>
                <h4 className="text-[12.5px] font-bold text-[#020d1c] mb-3 text-center min-h-[38px] flex items-center">Chain Deed Information Page</h4>
                <div className="bg-white p-1 border border-gray-200 rounded shadow-sm w-full aspect-[3/4] mb-3 overflow-hidden flex items-center justify-center">
                   <img src="/example1.png" alt="Chain Deed Page" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-[11px] text-gray-500 text-center leading-relaxed">Upload the page where Chain Deed information is mentioned.</p>
              </div>

              {/* Example 3 */}
              <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center bg-[#fdfdfd] shadow-sm hover:border-gray-300 transition-colors">
                <div className="bg-[#020d1c] text-white w-5 h-5 rounded flex items-center justify-center text-[11px] font-bold mb-3">3</div>
                <h4 className="text-[12.5px] font-bold text-[#020d1c] mb-3 text-center">Details Clearly Visible</h4>
                <div className="bg-white p-1 border border-gray-200 rounded shadow-sm w-full aspect-[3/4] mb-3 overflow-hidden flex items-center justify-center">
                   <img src="/example2.png" alt="Details clearly visible" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-[11px] text-gray-500 text-center leading-relaxed">Ensure the following details are clearly visible and readable.</p>
              </div>
            </div>

            {/* Warning Box */}
            <div className="bg-[#fff9e6] border border-[#fef0d8] rounded-xl p-4 flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border border-[#d69f4c] text-[#d69f4c] flex-shrink-0 flex items-center justify-center text-xs font-bold">i</div>
              <p className="text-[#8c6b2e] text-[12.5px] font-medium leading-relaxed">
                Blurry, cropped or incomplete images may prevent us from tracing the required deed.
              </p>
            </div>

          </div>

          {/* Vertical Separator with OR */}
          <div className="hidden lg:flex flex-col items-center justify-center relative w-px bg-gray-200">
            <div className="absolute w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[12px] font-bold text-gray-500 shadow-sm z-10">
              OR
            </div>
          </div>

          {/* Right Side: Upload Options */}
          <div className="lg:w-[350px] xl:w-[400px] flex-shrink-0 flex flex-col pt-2 lg:pt-0">
             <h3 className="text-[#020d1c] font-bold text-[15px] mb-1">UPLOAD YOUR DOCUMENT</h3>
             <p className="text-gray-500 text-[13px] mb-6 font-medium">Choose one of the options below</p>

             <div className="space-y-4 flex-1">
               
               {/* Option 1 Button */}
               <button
                 type="button"
                 onClick={() => fileInputRef.current?.click()}
                 className="w-full text-left bg-white border hover:border-[#de9e48] border-gray-200 rounded-xl p-5 transition-all shadow-sm hover:shadow-md group flex items-start gap-4 relative overflow-hidden"
               >
                 <div className="mt-1 flex-shrink-0">
                   <svg className="w-7 h-7 text-gray-500 group-hover:text-[#de9e48] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                     <text x="12" y="14" fontSize="8" fill="currentColor" textAnchor="middle" fontWeight="bold">1</text>
                   </svg>
                 </div>
                 <div className="flex-1 pr-6">
                   <h4 className="text-[#020d1c] font-bold text-[14px] mb-1 group-hover:text-[#de9e48] transition-colors">Option 1<br/>Last Page of Registry</h4>
                   <p className="text-gray-500 text-[12px] leading-relaxed">Upload clear photo/PDF of the last page of the registry.</p>
                 </div>
                 <svg className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 group-hover:text-[#de9e48] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
               </button>

               {/* Option 2 Button */}
               <button
                 type="button"
                 onClick={() => fileInputRef.current?.click()}
                 className="w-full text-left bg-white border hover:border-[#de9e48] border-gray-200 rounded-xl p-5 transition-all shadow-sm hover:shadow-md group flex items-start gap-4 relative overflow-hidden"
               >
                 <div className="mt-1 flex-shrink-0">
                   <svg className="w-7 h-7 text-gray-500 group-hover:text-[#de9e48] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                     <text x="12" y="14" fontSize="8" fill="currentColor" textAnchor="middle" fontWeight="bold">2</text>
                   </svg>
                 </div>
                 <div className="flex-1 pr-6">
                   <h4 className="text-[#020d1c] font-bold text-[14px] mb-1 group-hover:text-[#de9e48] transition-colors">Option 2<br/>Chain Deed Information Page</h4>
                   <p className="text-gray-500 text-[12px] leading-relaxed">Upload clear photo/PDF of the page where Chain Deed information is mentioned.</p>
                 </div>
                 <svg className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 group-hover:text-[#de9e48] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
               </button>

             </div>

             <div className="mt-6 pt-4 border-t border-gray-100">
               <p className="text-[#020d1c] font-bold text-[12px] mb-0.5">Supported formats: JPG, PNG, PDF (Max. 10 MB)</p>
               <p className="text-gray-500 text-[11.5px]">Make sure the image is clear and readable.</p>
               {selectedFile && (
                 <div className="mt-4 bg-green-50 text-green-700 text-[12.5px] font-bold px-4 py-3 rounded-xl border border-green-200 flex items-center justify-between">
                   <span className="truncate max-w-[200px]">{selectedFile.name}</span>
                   <button type="button" onClick={() => {setSelectedFile(null); if(fileInputRef.current) fileInputRef.current.value = '';}} className="text-green-800 hover:text-red-500 p-1 bg-green-100 rounded-full transition-colors ml-2">
                     <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12"/></svg>
                   </button>
                 </div>
               )}
             </div>

             <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*,.pdf"
             />

          </div>
        </div>
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
          Review & Submit Application 
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

    </form>
  );
};

export default ChainDeedForm;
