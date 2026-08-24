import React, { useState } from 'react';
import ChainDeedForm from './ChainDeedForm';

const LegalServicesList = () => {
  const [expandedService, setExpandedService] = useState('chain-deeds');

  const services = [
    {
      id: 'chain-deeds',
      title: 'Chain Deeds Application',
      shortDesc: 'Establish the chain of ownership of the property with previous ownership deeds.',
      content: (
        <div className="text-gray-600 text-[14px] leading-relaxed">
          <h4 className="text-[#020d1c] font-bold text-[15px] mb-2">What are Chain Deeds?</h4>
          <p className="mb-6">
            Chain Deeds are the previous ownership deeds/documents mentioned in the current property registry, establishing the chain of ownership of the property.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Charges */}
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <h4 className="text-[#de9e48] font-bold text-[14px] mb-3 uppercase tracking-wide">Service Charges</h4>
              <ul className="space-y-3">
                <li className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-700">Deeds after 2016</span>
                  <span className="font-bold text-[#020d1c]">₹900 + GST</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-700">Deeds before 2016 <span className="text-[11px] text-gray-500 font-normal block">(excluding Record Room)</span></span>
                  <span className="font-bold text-[#020d1c]">₹1,350 + GST</span>
                </li>
                <li className="flex items-center justify-between pb-1">
                  <span className="font-medium text-gray-700">Deeds from Record Room</span>
                  <span className="font-bold text-[#020d1c]">₹2,250 + GST</span>
                </li>
              </ul>
            </div>

            {/* Timelines & Important Notes */}
            <div className="space-y-4">
               <div className="bg-[#fcf4e8] border border-[#fef0d8] rounded-xl p-5">
                 <h4 className="text-[#de9e48] font-bold text-[14px] mb-2 flex items-center gap-2">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   Expected Timeline
                 </h4>
                 <p className="font-medium text-[#020d1c]">Remaining deeds — 1 working day.</p>
               </div>
               
               <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                 <div className="flex">
                   <div className="flex-shrink-0">
                     <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <div className="ml-3">
                     <h3 className="text-[13px] font-bold text-yellow-800">Important Note</h3>
                     <p className="mt-1 text-[12px] text-yellow-700">
                       Record Room deeds may be delayed due to the unavailability of Record Room staff. Delivery depends entirely on staff availability.
                     </p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
          
          <ChainDeedForm />
        </div>
      )
    },
    // Future services can be added here easily
    // {
    //   id: 'property-registration',
    //   title: 'Property Registration Support',
    //   shortDesc: 'Coming Soon',
    //   content: <div>Details coming soon...</div>
    // }
  ];

  return (
    <section id="legal-services-list" className="bg-gray-50/50 py-16 lg:py-24">
      <div className="max-w-[1000px] mx-auto px-4 lg:px-6 xl:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-[#020d1c] text-3xl md:text-4xl font-bold font-serif mb-4">Our Legal Services</h2>
          <p className="text-gray-500 text-[14.5px] max-w-[600px] mx-auto">
            Select a service below to view details and apply online. More services are being added regularly.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service) => {
            const isExpanded = expandedService === service.id;
            
            return (
              <div 
                key={service.id} 
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'border-[#de9e48] shadow-lg' : 'border-gray-200 hover:border-[#de9e48]/50 shadow-sm'
                }`}
              >
                {/* Accordion Header */}
                <button 
                  onClick={() => setExpandedService(isExpanded ? '' : service.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between group focus:outline-none bg-white"
                >
                  <div>
                    <h3 className={`font-bold text-[16px] md:text-[18px] transition-colors ${
                      isExpanded ? 'text-[#de9e48]' : 'text-[#020d1c] group-hover:text-[#de9e48]'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-[13px] mt-1 pr-8">{service.shortDesc}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isExpanded ? 'bg-[#de9e48] text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-[#fdfaf5] group-hover:text-[#de9e48]'
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {/* Accordion Content */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-6 md:p-8 pt-0 border-t border-gray-100 mt-2">
                    {service.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LegalServicesList;
