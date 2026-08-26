import React, { useState } from 'react';

const NonApprovedEligibilityForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    location: '',
    propertyName: '',
    propertyType: '',
    loanRequirement: '',
    propertyStatus: '',
    existingDocs: '',
    additionalDetails: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.mobile || !formData.location || !formData.propertyType || !formData.loanRequirement) {
      setError('Please fill in all required fields marked with *');
      return;
    }

    try {
      setLoading(true);
      const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

      const payload = {
        fullName: formData.fullName,
        mobile: formData.mobile,
        location: formData.location,
        propertyName: formData.propertyName,
        propertyType: formData.propertyType,
        loanRequirement: formData.loanRequirement,
        propertyStatus: formData.propertyStatus,
        existingDocs: formData.existingDocs,
        additionalDetails: formData.additionalDetails
      };

      const res = await fetch(`${BACKEND_URL}/eligibility-checks/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await res.json();
      
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to connect to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-16 lg:py-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        <div className="flex flex-col lg:flex-row bg-white border border-gray-200 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
          
          {/* Left Panel */}
          <div className="lg:w-[35%] xl:w-[32%] bg-[#020d1c] p-8 lg:p-10 xl:p-12 relative overflow-hidden flex flex-col justify-center">
            
            {/* Background Houses SVG Pattern */}
            <div className="absolute bottom-0 left-0 w-full opacity-[0.07] pointer-events-none">
              <svg viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-white">
                <path d="M50 150V80L100 40L150 80V150H50Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M85 150V110H115V150" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M75 90H85V100H75V90Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M115 90H125V100H115V90Z" stroke="currentColor" strokeWidth="2"/>
                
                <path d="M160 150V60L210 20L260 60V150H160Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M195 150V100H225V150" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M185 70H195V80H185V70Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M225 70H235V80H225V70Z" stroke="currentColor" strokeWidth="2"/>
                
                <path d="M270 150V90L310 50L350 90V150H270Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M295 150V120H325V150" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-10 h-10 text-[#de9e48] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h2 className="text-[#de9e48] text-2xl lg:text-[26px] font-bold leading-[1.25] font-serif">
                  Check Your Property Eligibility Now!
                </h2>
              </div>
              <p className="text-gray-300 text-[14px] lg:text-[14.5px] leading-relaxed">
                Share a few basic details about your property and requirement. Our experts will assess your case and get back to you with suitable loan options.
              </p>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="lg:w-[65%] xl:w-[68%] p-8 lg:p-10 xl:p-12 bg-white">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 h-full text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5 text-green-500 border-4 border-green-100">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#020d1c] mb-2">Details Submitted Successfully!</h3>
                <p className="text-gray-500 text-sm max-w-sm mx-auto mb-6">
                  Thank you for submitting your property details. Our experts will review your case and get back to you within 24-48 hours.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: '', mobile: '', location: '', propertyName: '', propertyType: '', loanRequirement: '', propertyStatus: '', existingDocs: '', additionalDetails: '' });
                  }} 
                  className="bg-[#de9e48] hover:bg-[#c88d3e] text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm font-semibold">{error}</div>}
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[12.5px] font-bold text-[#020d1c] mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" className="w-full border border-gray-200 rounded-md px-4 py-3 text-[13.5px] focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48]" />
                </div>
                <div>
                  <label className="block text-[12.5px] font-bold text-[#020d1c] mb-2">Mobile Number <span className="text-red-500">*</span></label>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter your mobile number" className="w-full border border-gray-200 rounded-md px-4 py-3 text-[13.5px] focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48]" />
                </div>
                <div>
                  <label className="block text-[12.5px] font-bold text-[#020d1c] mb-2">Property Location <span className="text-red-500">*</span></label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter city / locality" className="w-full border border-gray-200 rounded-md px-4 py-3 text-[13.5px] focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48]" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[12.5px] font-bold text-[#020d1c] mb-2">Property / Society Name</label>
                  <input type="text" name="propertyName" value={formData.propertyName} onChange={handleChange} placeholder="Enter society / property name" className="w-full border border-gray-200 rounded-md px-4 py-3 text-[13.5px] focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48]" />
                </div>
                <div className="relative">
                  <label className="block text-[12.5px] font-bold text-[#020d1c] mb-2">Property Type <span className="text-red-500">*</span></label>
                  <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="w-full border border-gray-200 rounded-md px-4 py-3 text-[13.5px] text-gray-600 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] appearance-none bg-white">
                    <option value="">Select Property Type</option>
                    <option value="Residential Plot">Residential Plot</option>
                    <option value="Built-up House">Built-up House</option>
                    <option value="Flat / Apartment">Flat / Apartment</option>
                    <option value="Commercial Shop">Commercial Shop</option>
                  </select>
                  <div className="absolute right-3 top-[34px] pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-[12.5px] font-bold text-[#020d1c] mb-2">Loan Requirement (₹) <span className="text-red-500">*</span></label>
                  <select name="loanRequirement" value={formData.loanRequirement} onChange={handleChange} className="w-full border border-gray-200 rounded-md px-4 py-3 text-[13.5px] text-gray-600 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] appearance-none bg-white">
                    <option value="">Select Loan Requirement</option>
                    <option value="Upto 20 Lakhs">Upto 20 Lakhs</option>
                    <option value="20 Lakhs - 50 Lakhs">20 Lakhs - 50 Lakhs</option>
                    <option value="50 Lakhs - 1 Crore">50 Lakhs - 1 Crore</option>
                    <option value="Above 1 Crore">Above 1 Crore</option>
                  </select>
                  <div className="absolute right-3 top-[34px] pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="relative">
                  <label className="block text-[12.5px] font-bold text-[#020d1c] mb-2">Property Status</label>
                  <select name="propertyStatus" value={formData.propertyStatus} onChange={handleChange} className="w-full border border-gray-200 rounded-md px-4 py-3 text-[13.5px] text-gray-600 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] appearance-none bg-white">
                    <option value="">Select Status</option>
                    <option value="Registry Done">Registry Done</option>
                    <option value="Agreement to Sale">Agreement to Sale</option>
                    <option value="Under Construction">Under Construction</option>
                  </select>
                  <div className="absolute right-3 top-[34px] pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-[12.5px] font-bold text-[#020d1c] mb-2">Existing Property Documents</label>
                  <select name="existingDocs" value={formData.existingDocs} onChange={handleChange} className="w-full border border-gray-200 rounded-md px-4 py-3 text-[13.5px] text-gray-600 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] appearance-none bg-white">
                    <option value="">Select</option>
                    <option value="Chain Deed Available">Chain Deed Available</option>
                    <option value="Map Approved">Map Approved</option>
                    <option value="No Documents Yet">No Documents Yet</option>
                  </select>
                  <div className="absolute right-3 top-[34px] pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                <div>
                  <label className="block text-[12.5px] font-bold text-[#020d1c] mb-2">Additional Details (Optional)</label>
                  <input type="text" name="additionalDetails" value={formData.additionalDetails} onChange={handleChange} placeholder="Any other details..." className="w-full border border-gray-200 rounded-md px-4 py-3 text-[13.5px] focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48]" />
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-5 mt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-500">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-[12.5px]">Your information is safe with us and will not be shared.</span>
                </div>
                <button type="submit" disabled={loading} className="w-full sm:w-auto bg-[#c88d3e] hover:bg-[#b57d32] disabled:opacity-50 text-white font-bold text-[14px] py-3 px-8 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm">
                  {loading ? 'Submitting...' : 'Submit & Check Eligibility'}
                  {!loading && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </div>

            </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default NonApprovedEligibilityForm;
