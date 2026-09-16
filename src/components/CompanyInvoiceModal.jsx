import React, { useRef } from 'react';
import { X, Printer, Download, CheckCircle, Building2 } from 'lucide-react';

const CompanyInvoiceModal = ({ isOpen, onClose, reportData }) => {
  const printRef = useRef(null);

  if (!isOpen || !reportData) return null;

  const {
    companyName = 'Company',
    companyType = 'Private Limited',
    companyPan = 'N/A',
    doi = 'N/A',
    companyAddress = 'N/A',
    pinCode = '',
    mobile = 'N/A',
    email = 'N/A',
    directors = [],
    paymentId = 'N/A',
    invoiceNumber = 'KTR/CMR/' + new Date().getFullYear() + '/' + Math.floor(10000 + Math.random() * 90000),
    date = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    pricing = {}
  } = reportData;

  const basePrice = pricing.basePrice || 1500;
  const taxableValue = basePrice;
  const totalGst = pricing.gstAmount !== undefined ? pricing.gstAmount : 270;
  const cgst = (totalGst / 2).toFixed(2);
  const sgst = (totalGst / 2).toFixed(2);
  const totalAmount = pricing.totalPayable || (taxableValue + totalGst);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="invoice-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#020d1c]/80 backdrop-blur-sm overflow-y-auto">
      {/* Print-only styling */}
      <style>{`
        @media print {
          @page {
            size: portrait;
            margin: 8mm;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
          .invoice-modal-backdrop {
            position: static !important;
            background: transparent !important;
            padding: 0 !important;
            margin: 0 !important;
            overflow: visible !important;
            display: block !important;
          }
          .invoice-modal-card {
            position: static !important;
            width: 100% !important;
            max-width: 100% !important;
            border: none !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
            display: block !important;
          }
          #cmr-invoice-print-area {
            display: block !important;
            position: static !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
            background: #ffffff !important;
            color: #000000 !important;
          }
        }
      `}</style>

      <div className="invoice-modal-card relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="no-print bg-[#020d1c] px-5 py-3.5 flex items-center justify-between text-white border-b border-gray-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#de9e48]"></span>
            <h3 className="text-sm font-bold tracking-wide">Tax Invoice (Official Receipt)</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Invoice Container */}
        <div id="cmr-invoice-print-area" ref={printRef} className="p-6 sm:p-8 bg-white text-gray-800 font-sans text-xs">
          
          {/* Header Brand Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start pb-6 border-b-2 border-gray-900 gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-9 h-9 rounded-lg bg-[#020d1c] flex items-center justify-center text-[#de9e48] font-serif font-black text-lg shadow-sm">
                  K
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-extrabold text-[#020d1c] tracking-tight">
                    KTR CONSULTANTS
                  </h1>
                  <p className="text-[10.5px] font-semibold text-[#de9e48] uppercase tracking-wider">
                    Commercial Credit & Financial Advisory
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 leading-tight mt-1">
                Address: 3/52, Virat Khand, Gomti Nagar, Lucknow, UP - 226010
              </p>
              <p className="text-[11px] text-gray-500 leading-tight">
                Website: www.ktrconsultants.in | Email: info@ktrconsultants.in | Tel: +91 99186 99696
              </p>
            </div>

            <div className="sm:text-right">
              <span className="inline-block bg-[#020d1c] text-[#de9e48] font-black text-[11px] px-3 py-1 rounded-md uppercase tracking-wider mb-2">
                ORIGINAL TAX INVOICE
              </span>
              <p className="text-[11.5px] font-bold text-gray-800">
                Invoice No: <span className="font-mono text-[#020d1c]">{invoiceNumber}</span>
              </p>
              <p className="text-[11px] text-gray-600">
                Date: <span className="font-semibold text-gray-800">{date}</span>
              </p>
              <p className="text-[11px] text-gray-600">
                Place of Supply: <span className="font-semibold text-gray-800">Uttar Pradesh (09)</span>
              </p>
            </div>
          </div>

          {/* Billed To & Payment Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-b border-gray-200">
            <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
              <h4 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                Billed To (Company Details)
              </h4>
              <p className="text-sm font-bold text-gray-900">{companyName}</p>
              <p className="text-xs text-gray-600 mt-0.5">
                Company Type: <span className="font-semibold text-gray-800">{companyType}</span>
              </p>
              <p className="text-xs text-gray-600">
                Company PAN: <span className="font-mono font-bold text-gray-900">{companyPan}</span>
              </p>
              {doi && doi !== 'N/A' && (
                <p className="text-xs text-gray-600">
                  Date of Incorporation: <span className="font-medium text-gray-800">{doi}</span>
                </p>
              )}
              {companyAddress && companyAddress !== 'N/A' && (
                <p className="text-xs text-gray-600 leading-snug mt-1">
                  Address: <span className="text-gray-700">{companyAddress} {pinCode ? `- ${pinCode}` : ''}</span>
                </p>
              )}
              <div className="pt-2 mt-2 border-t border-gray-200/60 text-[11px] text-gray-600">
                <span>Contact: +91 {mobile} | {email}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
              <h4 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                Payment & Fulfillment Meta
              </h4>
              <p className="text-xs text-gray-700 flex justify-between">
                <span>Payment Mode:</span>
                <span className="font-semibold text-gray-900">Online (Razorpay Gateway)</span>
              </p>
              <p className="text-xs text-gray-700 flex justify-between mt-1">
                <span>Transaction ID:</span>
                <span className="font-mono font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded border border-green-200">{paymentId}</span>
              </p>
              <p className="text-xs text-gray-700 flex justify-between mt-1">
                <span>Payment Status:</span>
                <span className="font-bold text-green-600 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Paid & Verified
                </span>
              </p>
              <p className="text-xs text-gray-700 flex justify-between mt-1">
                <span>Service Category:</span>
                <span className="font-semibold text-gray-900">Commercial Credit Report (CMR)</span>
              </p>
              <div className="mt-2.5 p-2 bg-amber-50 rounded-lg border border-amber-200/80 text-[11px] text-amber-900 leading-tight">
                ⏳ <strong>Delivery Guarantee:</strong> Official CMR Report will be delivered to your WhatsApp and Email in <strong>45 to 90 minutes</strong>.
              </div>
            </div>
          </div>

          {/* Directors / Partners Summary if available */}
          {directors && directors.length > 0 && (
            <div className="py-3 border-b border-gray-200 text-xs">
              <h4 className="text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                Directors / Partners / Proprietors Listed ({directors.length}):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {directors.map((d, index) => (
                  <div key={index} className="bg-gray-50/70 p-2 rounded-lg border border-gray-100 flex justify-between items-center text-[11px]">
                    <div>
                      <span className="font-bold text-gray-800">{index + 1}. {d.name || 'Director'}</span>
                      {d.dob && <span className="text-gray-500 ml-1.5">DOB: {d.dob}</span>}
                    </div>
                    <span className="font-mono font-bold text-gray-900 bg-white px-1.5 py-0.5 rounded border border-gray-200">
                      {d.pan || 'PAN N/A'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Line Items Table */}
          <div className="py-5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 text-[10.5px] font-bold uppercase tracking-wider text-gray-600">
                  <th className="py-2">Description of Services</th>
                  <th className="py-2 text-center">HSN/SAC</th>
                  <th className="py-2 text-right">Taxable Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                <tr>
                  <td className="py-3 pr-2">
                    <p className="font-bold text-gray-900">
                      TransUnion Company CIBIL Report (CMR) & CIBIL Rank Verification
                    </p>
                    <p className="text-[10.5px] text-gray-500 mt-0.5">
                      Comprehensive commercial credit history, credit facilities, bank guarantees, and commercial CIBIL Rank (1-10) assessment for {companyName}.
                    </p>
                  </td>
                  <td className="py-3 text-center font-mono text-gray-700">998311</td>
                  <td className="py-3 text-right font-mono font-bold text-gray-900">₹{basePrice.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tax Calculation Section */}
          <div className="flex justify-end pt-3 border-t-2 border-gray-200">
            <div className="w-full sm:w-64 space-y-1.5 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Taxable Amount:</span>
                <span className="font-mono font-semibold text-gray-900">₹{taxableValue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>CGST (9.0%):</span>
                <span className="font-mono font-semibold text-gray-900">₹{cgst}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>SGST (9.0%):</span>
                <span className="font-mono font-semibold text-gray-900">₹{sgst}</span>
              </div>
              <div className="flex justify-between pt-2 border-t-2 border-gray-900 text-sm font-extrabold text-[#020d1c]">
                <span>Total Amount Paid:</span>
                <span className="font-mono text-base text-[#de9e48]">₹{totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Terms & Official Seal */}
          <div className="mt-8 pt-5 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 text-[10.5px] text-gray-500">
            <div className="max-w-xs space-y-1">
              <p className="font-bold text-gray-700">Terms & Conditions:</p>
              <p>1. This is a computer-generated official tax invoice; physical signature is not required.</p>
              <p>2. Payment processed securely through RBI authorized payment aggregator.</p>
              <p>3. CMR delivery timeline is 45-90 minutes via official WhatsApp & Email channel.</p>
            </div>
            <div className="sm:text-right">
              <div className="w-32 h-10 border-b border-gray-300 sm:ml-auto mb-1 flex items-end justify-center sm:justify-end">
                <span className="font-serif italic font-bold text-[#de9e48] text-sm">KTR Consultants</span>
              </div>
              <p className="font-bold text-gray-700">Authorized Signatory</p>
              <p>KTR Consultants, Lucknow</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CompanyInvoiceModal;
