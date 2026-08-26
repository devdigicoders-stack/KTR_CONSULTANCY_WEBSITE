import React, { useState } from 'react';

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

const SUBJECTS = [
  'Loan Enquiry',
  'Application Status',
  'Document Support',
  'Interest Rate Query',
  'Eligibility Check',
  'Complaint / Feedback',
  'General Query',
  'Other'
];

const ContactForm = () => {
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
      setError('Please fill in all required fields.');
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
        setError(result.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to connect to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pb-20 lg:pb-28 px-6 md:px-8 max-w-[1240px] mx-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Left Column: Send Us a Message */}
        <div className="bg-white rounded-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-8 lg:p-10">
          
          <h3 className="text-[#020d1c] font-bold text-[22px] lg:text-[24px] font-serif mb-2">
            Send Us a Message
          </h3>
          <div className="w-10 h-[3px] bg-[#de9e48] mb-6"></div>
          
          {submitted ? (
            /* Success State */
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-[#020d1c] font-bold text-[20px] mb-2">Message Sent!</h4>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-6 max-w-xs">
                Thank you for reaching out. Our team will get back to you within 24–48 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 bg-[#de9e48] hover:bg-[#c88d3e] text-white font-bold text-[13px] px-6 py-2.5 rounded-lg transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Error */}
              {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 text-[13px] font-medium px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {/* Row 1: Name */}
              <div>
                <label className="block text-[12.5px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-700 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-colors"
                />
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12.5px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-700 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[12.5px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-700 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Subject */}
              <div>
                <label className="block text-[12.5px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Subject <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-700 appearance-none focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-colors"
                  >
                    <option value="">Select a subject</option>
                    {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 4: Service Interested In */}
              <div>
                <label className="block text-[12.5px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Service Interested In
                </label>
                <div className="relative">
                  <select
                    name="serviceInterested"
                    value={formData.serviceInterested}
                    onChange={handleChange}
                    className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-700 appearance-none focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-colors"
                  >
                    <option value="">Select a service (optional)</option>
                    {LOAN_SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 5: Message */}
              <div>
                <label className="block text-[12.5px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows="5"
                  className="w-full bg-[#fcfcfc] border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-700 focus:outline-none focus:border-[#de9e48] focus:ring-1 focus:ring-[#de9e48] transition-colors resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c88d3e] disabled:opacity-70 text-[#020d1c] font-bold text-[14.5px] px-8 py-3.5 rounded-lg transition-colors duration-300 gap-2"
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Office Location */}
        <div className="bg-white rounded-[14px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 p-8 lg:p-10 flex flex-col">
          
          <h3 className="text-[#020d1c] font-bold text-[22px] lg:text-[24px] font-serif mb-2">
            Our Office Location
          </h3>
          <div className="w-10 h-[3px] bg-[#de9e48] mb-8"></div>
          
          {/* Map Embed Placeholder */}
          <div className="w-full h-[240px] bg-gray-100 rounded-xl mb-8 overflow-hidden relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528001004!2d-74.14482813137996!3d40.69748809072494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
             ></iframe>
          </div>

          <h4 className="text-[#020d1c] font-bold text-[16px] mb-4 font-sans">
            Contact Information
          </h4>

          <div className="flex flex-col flex-grow divide-y divide-gray-100">
            <div className="flex items-center gap-4 py-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#fbf5ed] flex items-center justify-center text-[#de9e48]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h5 className="text-[#020d1c] font-bold text-[14px]">Phone</h5>
                <p className="text-gray-500 text-[12.5px]">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#fbf5ed] flex items-center justify-center text-[#de9e48]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h5 className="text-[#020d1c] font-bold text-[14px]">Email</h5>
                <p className="text-gray-500 text-[12.5px]">info@ktrconsultants.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#fbf5ed] flex items-center justify-center text-[#de9e48]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-[#020d1c] font-bold text-[14px]">Office Address</h5>
                <p className="text-gray-500 text-[12.5px]">KTR Consultants, Main Branch,<br/>City, State, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#fbf5ed] flex items-center justify-center text-[#de9e48]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-[#020d1c] font-bold text-[14px]">Business Hours</h5>
                <p className="text-gray-500 text-[12.5px]">Mon – Sat: 10:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
