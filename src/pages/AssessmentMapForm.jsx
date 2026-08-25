import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const servicesConfig = {
  'nagar-nigam': {
    id: 'nagar-nigam',
    title: 'Nagar Nigam Property Assessment',
    description: 'We provide assistance with Nagar Nigam Property Assessment (House Tax Assessment).',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
      { id: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: 'Enter your mobile number' },
      { id: 'email', label: 'E-mail ID', type: 'email', placeholder: 'Enter your email address' },
    ],
    uploads: [
      { id: 'property-papers', label: 'Property Papers', desc: 'Scan or clear photo of property documents' },
      { id: 'gps-photo', label: 'GPS Property Photograph', desc: 'Photo of the property with GPS coordinates' },
      { id: 'electricity-bill', label: 'Latest Electricity Bill', desc: 'Recent electricity bill copy' },
      { id: 'owner-photo', label: 'Passport-size Photo', desc: 'Recent photograph of the property owner' }
    ],
    chargesText: 'Charges will be confirmed after receiving the documents and discussing the case with the concerned Nagar Nigam department.',
    disclaimer: 'Assessment is subject to approval by the concerned Nagar Nigam office. KTR Consultants acts only as a mediator/consultant, working as a bridge between the customer and the Nagar Nigam. We assist with the process and follow up with the Nagar Nigam on the customer\'s behalf. Final assessment/approval is solely at the discretion of the concerned authority.'
  },
  'lda-map': {
    id: 'lda-map',
    title: 'LDA Map Submission',
    description: 'We provide assistance with LDA Map Submission through approved architects and valuers.',
    fields: [
      { id: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: 'Enter your mobile number' },
      { id: 'email', label: 'E-mail ID', type: 'email', placeholder: 'Enter your email address' },
      { id: 'dimensions', label: 'Property Length × Breadth', type: 'text', placeholder: 'e.g., 30 ft x 40 ft' },
    ],
    uploads: [
      { id: 'pan-card', label: 'PAN Card', desc: 'PAN Card of Property Owner' },
      { id: 'aadhaar-card', label: 'Aadhaar Card', desc: 'Aadhaar Card of Property Owner' },
      { id: 'property-papers', label: 'Property Papers', desc: 'Scan or clear photo of property documents' },
      { id: 'property-photo', label: 'Property Photograph', desc: 'Clear photo of the current property state' }
    ],
    chargesText: 'Charges will be confirmed after reviewing the details and discussing the case.',
    disclaimer: 'This service is for map submission only and does not constitute approval of the map. KTR Consultants assists customers with the submission process through approved architects and valuers, helping make the property purchase/loan-related process easier. Final approval is solely subject to the concerned authority and applicable requirements.'
  },
  'map-estimate': {
    id: 'map-estimate',
    title: 'Map Estimate Layout',
    description: 'We provide Map Estimate Layout services to support property loan application and approval processes.',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
      { id: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: 'Enter your mobile number' },
    ],
    uploads: [
      { id: 'property-papers', label: 'Property Papers', desc: 'Scan or clear photo of property documents' }
    ],
    chargesText: 'Charges will be confirmed after reviewing the documents and discussing the requirement.',
    disclaimer: ''
  }
};

const AssessmentMapForm = () => {
  const [searchParams] = useSearchParams();
  const [showGpsModal, setShowGpsModal] = useState(false);
  const navigate = useNavigate();
  
  // Get service from URL, default to nagar-nigam
  const serviceParam = searchParams.get('service');
  const [activeServiceId, setActiveServiceId] = useState(
    servicesConfig[serviceParam] ? serviceParam : 'nagar-nigam'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeServiceId]);

  const activeConfig = servicesConfig[activeServiceId];

  const handleServiceChange = (e) => {
    const newService = e.target.value;
    setActiveServiceId(newService);
    navigate(`/property-assessment-map/apply?service=${newService}`, { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
  };

  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* Form Page Header */}
      <section className="bg-[#020d1c] py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 text-center">
          <h1 className="text-white font-bold font-serif text-[28px] md:text-[36px] leading-tight mb-3">
            Service Application
          </h1>
          <p className="text-[#de9e48] text-[15px] md:text-[16px] max-w-2xl mx-auto font-medium">
            Property Assessment, Valuation and Map Services
          </p>
        </div>
      </section>

      {/* Main Form Area */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            
            {/* Step 1: Service Selection */}
            <div className="p-6 md:p-8 border-b border-gray-100 bg-gray-50/50">
              <label className="block text-[#020d1c] text-[14px] font-bold mb-3 uppercase tracking-wide">
                1. Select Service
              </label>
              <div className="max-w-2xl">
                <div className="relative">
                  <select 
                    value={activeServiceId}
                    onChange={handleServiceChange}
                    className="w-full appearance-none bg-white border border-gray-200 text-gray-800 text-[15px] font-semibold rounded-xl px-5 py-4 outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-all cursor-pointer shadow-sm"
                  >
                    <option value="nagar-nigam">Nagar Nigam Property Assessment</option>
                    <option value="lda-map">LDA Map Submission</option>
                    <option value="map-estimate">Map Estimate Layout</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                <p className="mt-3 text-[13.5px] text-gray-500 font-medium">
                  {activeConfig.description}
                </p>
              </div>
            </div>

            {/* Step 2: Customer Details */}
            <div className="p-6 md:p-8 border-b border-gray-100">
              <label className="block text-[#020d1c] text-[14px] font-bold mb-6 uppercase tracking-wide">
                2. Customer Details
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeConfig.fields.map(field => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label className="text-gray-700 text-[13px] font-semibold ml-1">
                      {field.label} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      className="w-full bg-[#f8f9fa] border border-gray-200 text-gray-800 text-[14px] rounded-xl px-4 py-3.5 outline-none focus:border-[#de9e48] focus:bg-white focus:ring-1 focus:ring-[#de9e48] transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Required Documents */}
            <div className="p-6 md:p-8 border-b border-gray-100 bg-[#fffdf9]">
              <div className="mb-6">
                <label className="block text-[#020d1c] text-[14px] font-bold mb-2 uppercase tracking-wide">
                  3. Required Documents
                </label>
                <p className="text-gray-500 text-[13px]">Please upload clear and readable copies of the following documents to avoid delays.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {activeConfig.uploads.filter(doc => doc.id !== 'gps-photo').map(doc => (
                  <div key={doc.id} className="bg-white border border-dashed border-gray-300 rounded-xl p-5 hover:border-[#de9e48] hover:bg-orange-50/30 transition-all group relative cursor-pointer flex flex-col h-full">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4 text-[#de9e48] group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                    </div>
                    <h4 className="text-[#020d1c] font-bold text-[14px] mb-1">{doc.label}</h4>
                    <p className="text-gray-400 text-[12px] leading-tight mb-4 flex-1">{doc.desc}</p>
                    
                    <div className="text-[#de9e48] text-[13px] font-semibold flex items-center gap-1 group-hover:text-[#c98e41]">
                      Choose File
                    </div>
                    {/* Invisible File Input covering the entire box */}
                    <input 
                      type="file" 
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Special GPS Photo Section */}
              {activeConfig.uploads.some(doc => doc.id === 'gps-photo') && (
                <div className="mt-10 bg-white border border-[#de9e48]/30 rounded-2xl overflow-hidden shadow-sm">
                  {/* Header */}
                  <div className="bg-[#fffcf5] border-b border-[#de9e48]/20 px-6 py-4">
                    <h3 className="text-[#020d1c] font-bold text-[16px] mb-1">GPS Property Photograph <span className="text-red-500">*</span></h3>
                    <p className="text-gray-600 text-[13px]">Upload clear GPS-enabled photographs of your property. Ensure location details (Latitude, Longitude, Date/Time) are visible.</p>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col items-center justify-center text-center">
                    
                    <div className="w-full max-w-md mx-auto bg-gray-50 border-2 border-dashed border-[#de9e48] rounded-2xl p-8 hover:bg-orange-50/50 transition-colors flex flex-col items-center justify-center text-center group cursor-pointer relative">
                      <div className="w-16 h-16 bg-[#de9e48]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <h4 className="text-[#020d1c] font-bold text-[16px] mb-2">Upload GPS Photos</h4>
                      <p className="text-gray-500 text-[13px] mb-6">Select multiple photos</p>
                      <span className="bg-[#020d1c] text-white px-6 py-2.5 rounded-lg text-[13.5px] font-bold shadow-sm group-hover:bg-[#de9e48] transition-colors relative z-10">
                        Browse Files
                      </span>
                      <input type="file" required multiple accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
                    </div>

                    <button type="button" onClick={() => setShowGpsModal(true)} className="mt-6 text-[#de9e48] hover:text-[#c98e41] font-bold text-[14px] flex items-center gap-2 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      How to take GPS Photo? View Examples
                    </button>

                  </div>
                </div>
              )}
            </div>

            {/* Step 4: Pricing & Submit */}
            <div className="p-6 md:p-8">
              
              {/* Charges Block */}
              <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-xl p-5 mb-8 flex items-start gap-4">
                <svg className="w-6 h-6 text-[#0ea5e9] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <h4 className="text-[#0284c7] font-bold text-[14px] mb-1">Price / Charges</h4>
                  <p className="text-[#0369a1] text-[13px] font-medium leading-relaxed">
                    {activeConfig.chargesText}
                  </p>
                </div>
              </div>

              {/* Dynamic Disclaimer */}
              {activeConfig.disclaimer && (
                <div className="mb-8 border-l-4 border-[#de9e48] pl-4">
                  <h4 className="text-[#020d1c] font-bold text-[13px] uppercase tracking-wider mb-2">Important Disclaimer</h4>
                  <p className="text-gray-600 text-[13px] leading-relaxed">
                    {activeConfig.disclaimer}
                  </p>
                </div>
              )}

              {/* Submit Area */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-t border-gray-100 pt-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" required className="w-5 h-5 accent-[#1a73e8] rounded cursor-pointer" />
                  <span className="text-gray-700 font-semibold text-[13.5px]">I confirm that all details provided are correct.</span>
                </label>
                
                <button 
                  type="submit"
                  className="w-full md:w-[300px] bg-[#d69f4c] hover:bg-[#c98e41] text-white font-bold text-[15px] py-4 rounded-xl transition-all shadow-[0_4px_15px_-3px_rgba(214,159,76,0.4)] flex justify-center items-center gap-2"
                >
                  Submit Application 
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>

            </div>
          </form>
          
        </div>
      </section>

      {/* GPS Sample Modal */}
      {showGpsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowGpsModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
            <div className="bg-[#020d1c] px-6 py-4 flex justify-between items-center text-white">
              <h3 className="font-bold text-[15px] tracking-wide uppercase">How to take GPS Photo</h3>
              <button onClick={() => setShowGpsModal(false)} className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            
            <div className="p-4 md:p-8 overflow-y-auto max-h-[80vh]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Example 1 */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm relative group aspect-[3/4] bg-gray-50">
                    <div className="absolute top-2 left-2 bg-[#de9e48] text-white text-[10px] font-bold px-2 py-1 rounded">Example 1</div>
                    <img src="/new_gps1.jpg" alt="House/Building" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[14px] text-[#020d1c]">House/Building</h5>
                    <p className="text-[12px] text-gray-500 leading-snug mt-1">Property ka front/clear view GPS information ke saath.</p>
                  </div>
                </div>

                {/* Example 2 */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm relative group aspect-[3/4] bg-gray-50">
                    <div className="absolute top-2 left-2 bg-[#de9e48] text-white text-[10px] font-bold px-2 py-1 rounded">Example 2</div>
                    <img src="/new_gps2.jpg" alt="Plot/Property" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[14px] text-[#020d1c]">Plot/Property</h5>
                    <p className="text-[12px] text-gray-500 leading-snug mt-1">Plot/property ki clear photograph GPS location details ke saath.</p>
                  </div>
                </div>

                {/* Example 3 */}
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm relative group aspect-[3/4] bg-gray-50">
                    <div className="absolute top-2 left-2 bg-[#de9e48] text-white text-[10px] font-bold px-2 py-1 rounded">Example 3</div>
                    <img src="/new_gps3.jpg" alt="Property View" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[14px] text-[#020d1c]">Property View</h5>
                    <p className="text-[12px] text-gray-500 leading-snug mt-1">Different angle se property ki photograph, GPS details visible hon.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button type="button" onClick={() => setShowGpsModal(false)} className="bg-[#020d1c] hover:bg-gray-800 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md">
                  Got it, Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssessmentMapForm;
