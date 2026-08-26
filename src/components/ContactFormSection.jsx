import React, { useState } from 'react';

const SUBJECTS = [
  'General Inquiry',
  'Loan Assistance',
  'Property Consultation',
  'CIBIL Services',
  'Loan Enquiry',
  'Application Status',
  'Document Support',
  'Interest Rate Query',
  'Eligibility Check',
  'Complaint / Feedback',
  'Other'
];

const LOAN_SERVICES = [
  'Home Loan',
  'Plot + Construction (P+C)',
  'Construction Loan',
  'Loan Against Property (LAP)',
  'LAP Takeover + Top-Up',
  'MSME / Business Loan',
  'Mudra Loan',
  'CC / OD – Working Capital',
  'Project Finance / Project Loan',
  'Term Loan',
  'Business Loan Takeover + Top-Up',
  'Home Loan Balance Transfer + Top-Up',
  'Property Purchase Loan',
  'Commercial Property Loan',
  'Other'
];

const ContactFormSection = () => {
  const features = [
    {
      title: "100% Transparent Process",
      desc: "We believe in transparency at every step of your journey.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Expert Guidance",
      desc: "Get advice from experienced professionals for the best solutions.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Quick & Easy Support",
      desc: "We make the process simple, smooth and hassle-free.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Secure & Confidential",
      desc: "Your information is protected with highest security.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    serviceInterested: '',
    message: ''
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
    if (!formData.fullName || !formData.phone || !formData.subject || !formData.message) {
      setError('Please fill in all required fields (Name, Phone, Subject, Message).');
      return;
    }
    try {
      setLoading(true);
      const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const res = await fetch(`${BACKEND_URL}/enquiries/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', subject: '', serviceInterested: '', message: '' });
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to server. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#fafafa] py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-[42%] xl:w-[40%] bg-[#020d1c] rounded-2xl p-5 md:p-6 lg:p-8 shadow-2xl relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#de9e48]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-2 relative z-10">
              <h3 className="text-white font-bold font-serif text-[20px] md:text-[22px]">
                Send Us a Message
              </h3>
              <div className="h-[2px] w-8 bg-[#de9e48] mt-1"></div>
            </div>
            
            <p className="text-gray-400 text-[12.5px] mb-6 relative z-10">
              Fill out the form below and we'll get back to you.
            </p>

            {submitted ? (
              /* Success State */
              <div className="relative z-10 flex flex-col items-center justify-center py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-green-500/20 border-2 border-green-400/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-[18px] mb-2">Message Sent!</h4>
                <p className="text-gray-400 text-[13px] leading-relaxed mb-6 max-w-[240px]">
                  Thank you for reaching out. Our team will get back to you within 24–48 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#de9e48] hover:bg-[#c98e41] text-white font-bold text-[13px] px-6 py-2.5 rounded-md transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-4 relative z-10" onSubmit={handleSubmit}>
                
                {/* Error */}
                {error && (
                  <div className="bg-red-500/20 border border-red-400/30 text-red-300 text-[12px] font-medium px-3 py-2.5 rounded-md">
                    {error}
                  </div>
                )}

                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-gray-300 text-[12px]">Full Name <span className="text-[#de9e48]">*</span></label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full h-10 px-3.5 rounded-md bg-white border border-transparent outline-none focus:border-[#de9e48] transition-all text-gray-800 text-[13.5px] placeholder-gray-400"
                  />
                </div>

                {/* Email & Phone */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col gap-1 w-full">
                    <label className="text-gray-300 text-[12px]">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full h-10 px-3.5 rounded-md bg-white border border-transparent outline-none focus:border-[#de9e48] transition-all text-gray-800 text-[13.5px] placeholder-gray-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label className="text-gray-300 text-[12px]">Phone Number <span className="text-[#de9e48]">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full h-10 px-3.5 rounded-md bg-white border border-transparent outline-none focus:border-[#de9e48] transition-all text-gray-800 text-[13.5px] placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1">
                  <label className="text-gray-300 text-[12px]">Subject <span className="text-[#de9e48]">*</span></label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full h-10 px-3.5 rounded-md bg-white border border-transparent outline-none focus:border-[#de9e48] transition-all text-gray-600 text-[13.5px] appearance-none cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <svg className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                {/* Service Interested */}
                <div className="flex flex-col gap-1">
                  <label className="text-gray-300 text-[12px]">Service Interested In</label>
                  <div className="relative">
                    <select
                      name="serviceInterested"
                      value={formData.serviceInterested}
                      onChange={handleChange}
                      className="w-full h-10 px-3.5 rounded-md bg-white border border-transparent outline-none focus:border-[#de9e48] transition-all text-gray-600 text-[13.5px] appearance-none cursor-pointer"
                    >
                      <option value="">Select a service (optional)</option>
                      {LOAN_SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <svg className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1 mb-2">
                  <label className="text-gray-300 text-[12px]">Message <span className="text-[#de9e48]">*</span></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full p-3.5 rounded-md bg-white border border-transparent outline-none focus:border-[#de9e48] transition-all text-gray-800 text-[13.5px] placeholder-gray-400 min-h-[90px] resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="flex justify-center mt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#de9e48] hover:bg-[#c98e41] disabled:opacity-70 text-white font-bold text-[14px] px-8 py-2.5 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm w-[220px]"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Why Choose Us + Image Container */}
          <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col md:flex-row bg-white rounded-2xl shadow-[0_8px_30px_-5px_rgba(0,0,0,0.05)] overflow-hidden">
            
            {/* Info Section */}
            <div className="w-full md:w-[50%] p-6 lg:p-8 flex flex-col justify-center">
              <h3 className="text-[#020d1c] font-bold font-serif text-[18px] md:text-[20px] mb-2">
                Why Choose KTR Consultants?
              </h3>
              <div className="w-8 h-[2px] bg-[#de9e48] mb-6"></div>
              
              <div className="flex flex-col gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3.5">
                    <div className="w-[36px] h-[36px] rounded-full bg-[#fdfaf5] flex items-center justify-center text-[#020d1c] flex-shrink-0 border border-[#de9e48]/20 shadow-sm">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-[#020d1c] font-bold text-[13px] mb-0.5 leading-tight">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-[12px] leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-[50%] h-[250px] md:h-auto relative">
              <img 
                src="/contactside.png" 
                alt="KTR Consultants Office" 
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
