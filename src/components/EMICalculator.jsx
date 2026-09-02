import React, { useState, useMemo } from 'react';
import QuickLoanApplyModal from './QuickLoanApplyModal';

const loanPresets = [
  { id: 'home', label: 'Home Loan', amount: 5000000, rate: 8.5, tenureYears: 20 },
  { id: 'lap', label: 'Loan Against Property (LAP)', amount: 3000000, rate: 9.5, tenureYears: 15 },
  { id: 'business', label: 'Business / MSME Loan', amount: 1500000, rate: 11.5, tenureYears: 5 },
  { id: 'construction', label: 'Plot + Construction', amount: 4000000, rate: 8.75, tenureYears: 20 },
  { id: 'commercial', label: 'Commercial Property', amount: 7500000, rate: 9.75, tenureYears: 12 },
];

const formatINR = (val) => {
  if (val === null || val === undefined || isNaN(val)) return '0';
  return Math.round(val).toLocaleString('en-IN');
};

const EMICalculator = ({ embedded = false, defaultLoanType = 'home' }) => {
  const [activePreset, setActivePreset] = useState(defaultLoanType);
  const initialPreset = loanPresets.find(p => p.id === defaultLoanType) || loanPresets[0];

  const [loanAmount, setLoanAmount] = useState(initialPreset.amount);
  const [interestRate, setInterestRate] = useState(initialPreset.rate);
  const [tenureYears, setTenureYears] = useState(initialPreset.tenureYears);
  const [tenureUnit, setTenureUnit] = useState('years'); // 'years' or 'months'
  const [activeScheduleTab, setActiveScheduleTab] = useState('yearly'); // 'yearly' or 'monthly'
  const [expandedYear, setExpandedYear] = useState(null);

  // Apply modal
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Switch preset
  const handlePresetSelect = (preset) => {
    setActivePreset(preset.id);
    setLoanAmount(preset.amount);
    setInterestRate(preset.rate);
    setTenureYears(preset.tenureYears);
    setTenureUnit('years');
  };

  // Calculations
  const calculations = useMemo(() => {
    const P = Math.max(0, Number(loanAmount) || 0);
    const R = Math.max(0, Number(interestRate) || 0);
    const totalMonths = tenureUnit === 'years' ? (Number(tenureYears) || 0) * 12 : (Number(tenureYears) || 0);

    if (P <= 0 || totalMonths <= 0) {
      return {
        emi: 0,
        totalInterest: 0,
        totalPayment: 0,
        principalPercent: 100,
        interestPercent: 0,
        payoffDate: '',
        yearlySchedule: [],
        monthlySchedule: []
      };
    }

    const monthlyRate = R / 12 / 100;
    let emi = 0;

    if (monthlyRate === 0) {
      emi = P / totalMonths;
    } else {
      const pow = Math.pow(1 + monthlyRate, totalMonths);
      emi = (P * monthlyRate * pow) / (pow - 1);
    }

    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - P;

    const principalPercent = totalPayment > 0 ? (P / totalPayment) * 100 : 100;
    const interestPercent = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;

    // Estimated completion date
    const today = new Date();
    today.setMonth(today.getMonth() + totalMonths);
    const payoffDate = today.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });

    // Build Monthly & Yearly Amortization Schedule
    let balance = P;
    const monthlySchedule = [];
    const yearlyMap = {};

    for (let m = 1; m <= totalMonths; m++) {
      const interestPaid = balance * monthlyRate;
      const principalPaid = Math.min(balance, emi - interestPaid);
      const prevBalance = balance;
      balance = Math.max(0, balance - principalPaid);

      const currentDate = new Date();
      currentDate.setMonth(currentDate.getMonth() + m);
      const monthName = currentDate.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
      const yearNumber = Math.ceil(m / 12);

      const row = {
        month: m,
        monthName,
        yearNumber,
        openingBalance: prevBalance,
        principalPaid,
        interestPaid,
        totalPayment: principalPaid + interestPaid,
        closingBalance: balance,
        paidPercentage: ((P - balance) / P) * 100
      };

      monthlySchedule.push(row);

      // Aggregate into yearlyMap
      if (!yearlyMap[yearNumber]) {
        yearlyMap[yearNumber] = {
          yearNumber,
          yearLabel: `Year ${yearNumber} (${currentDate.getFullYear()})`,
          openingBalance: prevBalance,
          principalPaid: 0,
          interestPaid: 0,
          totalPayment: 0,
          closingBalance: balance,
          paidPercentage: 0,
          months: []
        };
      }

      yearlyMap[yearNumber].principalPaid += principalPaid;
      yearlyMap[yearNumber].interestPaid += interestPaid;
      yearlyMap[yearNumber].totalPayment += (principalPaid + interestPaid);
      yearlyMap[yearNumber].closingBalance = balance;
      yearlyMap[yearNumber].paidPercentage = ((P - balance) / P) * 100;
      yearlyMap[yearNumber].months.push(row);
    }

    const yearlySchedule = Object.values(yearlyMap);

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
      principalPercent,
      interestPercent,
      payoffDate,
      yearlySchedule,
      monthlySchedule
    };
  }, [loanAmount, interestRate, tenureYears, tenureUnit]);

  // Current active service name for Apply modal
  const selectedPresetObj = loanPresets.find(p => p.id === activePreset) || loanPresets[0];

  return (
    <div className={`w-full font-sans ${embedded ? '' : 'py-8 lg:py-12'}`}>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Preset Selector Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap mr-1">
            Choose Loan:
          </span>
          {loanPresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handlePresetSelect(preset)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activePreset === preset.id
                  ? 'bg-[#020d1c] text-[#de9e48] shadow-md scale-102 border border-[#de9e48]/30'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {activePreset === preset.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#de9e48] animate-pulse"></span>
              )}
              {preset.label}
            </button>
          ))}
        </div>

        {/* 2-Column Grid: Sliders & Live Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-gray-200/90 rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-sm space-y-7">
            
            {/* 1. Loan Amount */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <label className="text-xs sm:text-sm font-bold text-[#020d1c] uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#de9e48]"></span>
                  Loan Amount
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-sm font-bold text-[#de9e48]">₹</span>
                  <input
                    type="number"
                    value={loanAmount}
                    min={10000}
                    max={100000000}
                    step={50000}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-36 sm:w-44 h-10 pl-7 pr-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-black text-[#020d1c] text-right focus:outline-none focus:border-[#de9e48] focus:bg-white transition-all font-mono"
                  />
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min={100000}
                max={50000000}
                step={50000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#de9e48]"
              />

              {/* Quick Preset Buttons */}
              <div className="flex items-center justify-between text-[11px] text-gray-500 font-bold mt-2">
                <span>₹1 Lakh</span>
                <div className="hidden sm:flex gap-1.5">
                  {[1000000, 2500000, 5000000, 10000000].map(amt => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setLoanAmount(amt)}
                      className="px-2 py-0.5 rounded bg-gray-100 hover:bg-[#de9e48]/20 hover:text-[#020d1c] transition-colors"
                    >
                      ₹{amt >= 10000000 ? `${amt/10000000}Cr` : `${amt/100000}L`}
                    </button>
                  ))}
                </div>
                <span>₹5 Crore</span>
              </div>
            </div>

            {/* 2. Interest Rate */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <label className="text-xs sm:text-sm font-bold text-[#020d1c] uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#de9e48]"></span>
                  Rate of Interest (p.a.)
                </label>
                <div className="relative flex items-center">
                  <input
                    type="number"
                    value={interestRate}
                    min={1}
                    max={30}
                    step={0.1}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-28 sm:w-32 h-10 px-3 pr-7 bg-gray-50 border border-gray-200 rounded-lg text-sm font-black text-[#020d1c] text-right focus:outline-none focus:border-[#de9e48] focus:bg-white transition-all font-mono"
                  />
                  <span className="absolute right-3 text-xs font-bold text-gray-400">%</span>
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min={5}
                max={20}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#de9e48]"
              />

              <div className="flex items-center justify-between text-[11px] text-gray-500 font-bold mt-2">
                <span>5%</span>
                <div className="hidden sm:flex gap-1.5">
                  {[7.5, 8.5, 9.5, 11.0, 13.5].map(r => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setInterestRate(r)}
                      className="px-2 py-0.5 rounded bg-gray-100 hover:bg-[#de9e48]/20 hover:text-[#020d1c] transition-colors"
                    >
                      {r}%
                    </button>
                  ))}
                </div>
                <span>20%</span>
              </div>
            </div>

            {/* 3. Loan Tenure */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <label className="text-xs sm:text-sm font-bold text-[#020d1c] uppercase tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#de9e48]"></span>
                    Loan Tenure
                  </label>
                  {/* Years / Months Toggle */}
                  <div className="inline-flex rounded-lg border border-gray-200 p-0.5 bg-gray-50 text-[11px] font-bold">
                    <button
                      type="button"
                      onClick={() => {
                        if (tenureUnit === 'months') {
                          setTenureYears(Math.max(1, Math.round(tenureYears / 12)));
                          setTenureUnit('years');
                        }
                      }}
                      className={`px-2.5 py-0.5 rounded-md transition-all ${
                        tenureUnit === 'years' ? 'bg-[#020d1c] text-[#de9e48] shadow-xs' : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      Yr
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (tenureUnit === 'years') {
                          setTenureYears(tenureYears * 12);
                          setTenureUnit('months');
                        }
                      }}
                      className={`px-2.5 py-0.5 rounded-md transition-all ${
                        tenureUnit === 'months' ? 'bg-[#020d1c] text-[#de9e48] shadow-xs' : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      Mo
                    </button>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <input
                    type="number"
                    value={tenureYears}
                    min={1}
                    max={tenureUnit === 'years' ? 30 : 360}
                    step={1}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-28 sm:w-32 h-10 px-3 pr-10 bg-gray-50 border border-gray-200 rounded-lg text-sm font-black text-[#020d1c] text-right focus:outline-none focus:border-[#de9e48] focus:bg-white transition-all font-mono"
                  />
                  <span className="absolute right-3 text-xs font-bold text-gray-400">
                    {tenureUnit === 'years' ? 'Yrs' : 'Mos'}
                  </span>
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min={tenureUnit === 'years' ? 1 : 12}
                max={tenureUnit === 'years' ? 30 : 360}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#de9e48]"
              />

              <div className="flex items-center justify-between text-[11px] text-gray-500 font-bold mt-2">
                <span>{tenureUnit === 'years' ? '1 Year' : '12 Months'}</span>
                <div className="hidden sm:flex gap-1.5">
                  {(tenureUnit === 'years' ? [5, 10, 15, 20, 25, 30] : [60, 120, 180, 240, 360]).map(t => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTenureYears(t)}
                      className="px-2 py-0.5 rounded bg-gray-100 hover:bg-[#de9e48]/20 hover:text-[#020d1c] transition-colors"
                    >
                      {t}{tenureUnit === 'years' ? 'Y' : 'M'}
                    </button>
                  ))}
                </div>
                <span>{tenureUnit === 'years' ? '30 Years' : '360 Months'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Results & Graphical Breakdown (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary EMI Result Box */}
            <div className="bg-[#020d1c] text-white rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#de9e48]/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <span className="text-[11px] font-black uppercase tracking-wider text-gray-400 mb-1 block">
                  Monthly Installment (EMI)
                </span>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#de9e48] font-mono tracking-tight">
                    ₹{formatINR(calculations.emi)}
                  </span>
                  <span className="text-gray-400 text-xs font-bold">/ month</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-5 border-t border-gray-800/80 mb-6">
                  <div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Principal Amount</p>
                    <p className="text-base sm:text-lg font-bold text-white font-mono">₹{formatINR(loanAmount)}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Total Interest</p>
                    <p className="text-base sm:text-lg font-bold text-[#de9e48] font-mono">₹{formatINR(calculations.totalInterest)}</p>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-gray-800/50 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Total Amount (P + I)</p>
                      <p className="text-lg sm:text-xl font-black text-white font-mono">₹{formatINR(calculations.totalPayment)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Payoff Date</p>
                      <p className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">{calculations.payoffDate}</p>
                    </div>
                  </div>
                </div>

                {/* Visual Ratio Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-[11px] font-bold mb-1.5">
                    <span className="text-gray-300 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-white"></span> Principal ({calculations.principalPercent.toFixed(1)}%)
                    </span>
                    <span className="text-[#de9e48] flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#de9e48]"></span> Interest ({calculations.interestPercent.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden flex">
                    <div 
                      className="bg-white transition-all duration-500" 
                      style={{ width: `${calculations.principalPercent}%` }} 
                    />
                    <div 
                      className="bg-[#de9e48] transition-all duration-500" 
                      style={{ width: `${calculations.interestPercent}%` }} 
                    />
                  </div>
                </div>

                {/* Instant Apply CTA */}
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(true)}
                  className="w-full py-3.5 bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-xs sm:text-sm rounded-xl transition-all shadow-[0_4px_14px_rgba(222,158,72,0.3)] hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Apply For ₹{formatINR(loanAmount)} Loan</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

              </div>
            </div>

            {/* Quick Benefits / Assurance Card */}
            <div className="bg-[#fffdf9] border border-[#e8d5b7] rounded-2xl p-5 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#020d1c] mb-3 flex items-center gap-2">
                <span className="text-[#de9e48]">⚡</span> Why Apply Through KTR Consultants?
              </h4>
              <ul className="text-xs text-gray-600 space-y-2 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Direct liaison with 20+ Nationalized & Private Banks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Non-Approved Society Property eligibility specialists
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Zero hidden fees, fastest sanction & disbursement
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Amortization Schedule Table & Monthly Breakdown */}
        <div className="bg-white border border-gray-200/90 rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-[#020d1c]">
                Loan Repayment Schedule (Amortization)
              </h3>
              <p className="text-gray-500 text-xs mt-0.5">
                Detailed breakdown of principal and interest payments over the loan tenure
              </p>
            </div>

            {/* View Switcher Tabs */}
            <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50 text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveScheduleTab('yearly')}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activeScheduleTab === 'yearly' ? 'bg-[#020d1c] text-[#de9e48] shadow-xs' : 'text-gray-600 hover:text-black'
                }`}
              >
                Yearly View
              </button>
              <button
                type="button"
                onClick={() => setActiveScheduleTab('monthly')}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activeScheduleTab === 'monthly' ? 'bg-[#020d1c] text-[#de9e48] shadow-xs' : 'text-gray-600 hover:text-black'
                }`}
              >
                Full Monthly View ({calculations.monthlySchedule.length} Mos)
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto max-h-[500px] overflow-y-auto hide-scrollbar">
            <table className="w-full text-left text-xs font-medium">
              <thead className="bg-[#020d1c] text-white uppercase text-[11px] font-bold sticky top-0 z-10 tracking-wider">
                <tr>
                  <th className="py-3 px-4 rounded-l-lg">
                    {activeScheduleTab === 'yearly' ? 'Year' : 'Month / Date'}
                  </th>
                  <th className="py-3 px-4 text-right">Opening Balance</th>
                  <th className="py-3 px-4 text-right">Principal Paid</th>
                  <th className="py-3 px-4 text-right">Interest Paid</th>
                  <th className="py-3 px-4 text-right">Total Payment</th>
                  <th className="py-3 px-4 text-right">Closing Balance</th>
                  <th className="py-3 px-4 text-right rounded-r-lg">Loan Paid %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {activeScheduleTab === 'yearly' ? (
                  calculations.yearlySchedule.map((row) => (
                    <React.Fragment key={row.yearNumber}>
                      <tr className="hover:bg-amber-50/40 transition-colors group">
                        <td className="py-3.5 px-4 font-bold text-[#020d1c]">
                          <button
                            type="button"
                            onClick={() => setExpandedYear(expandedYear === row.yearNumber ? null : row.yearNumber)}
                            className="flex items-center gap-1.5 text-[#020d1c] hover:text-[#de9e48] font-bold cursor-pointer"
                          >
                            <svg className={`w-3.5 h-3.5 transform transition-transform ${expandedYear === row.yearNumber ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                            <span>{row.yearLabel}</span>
                          </button>
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono text-gray-600">₹{formatINR(row.openingBalance)}</td>
                        <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-700">₹{formatINR(row.principalPaid)}</td>
                        <td className="py-3.5 px-4 text-right font-mono text-[#b87e2f] font-bold">₹{formatINR(row.interestPaid)}</td>
                        <td className="py-3.5 px-4 text-right font-mono font-bold text-[#020d1c]">₹{formatINR(row.totalPayment)}</td>
                        <td className="py-3.5 px-4 text-right font-mono text-gray-600">₹{formatINR(row.closingBalance)}</td>
                        <td className="py-3.5 px-4 text-right font-mono font-bold text-gray-800">
                          <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[10px]">
                            {row.paidPercentage.toFixed(1)}%
                          </span>
                        </td>
                      </tr>

                      {/* Nested Monthly Breakdown if Expanded */}
                      {expandedYear === row.yearNumber && row.months.map((mRow) => (
                        <tr key={mRow.month} className="bg-gray-50/80 text-[11px] text-gray-600">
                          <td className="py-2.5 px-6 pl-10 font-medium text-gray-700">
                            Month {mRow.month} ({mRow.monthName})
                          </td>
                          <td className="py-2.5 px-4 text-right font-mono">₹{formatINR(mRow.openingBalance)}</td>
                          <td className="py-2.5 px-4 text-right font-mono text-emerald-700">₹{formatINR(mRow.principalPaid)}</td>
                          <td className="py-2.5 px-4 text-right font-mono text-amber-700">₹{formatINR(mRow.interestPaid)}</td>
                          <td className="py-2.5 px-4 text-right font-mono">₹{formatINR(mRow.totalPayment)}</td>
                          <td className="py-2.5 px-4 text-right font-mono">₹{formatINR(mRow.closingBalance)}</td>
                          <td className="py-2.5 px-4 text-right font-mono text-gray-500">{mRow.paidPercentage.toFixed(1)}%</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))
                ) : (
                  calculations.monthlySchedule.map((row) => (
                    <tr key={row.month} className="hover:bg-amber-50/30 transition-colors">
                      <td className="py-2.5 px-4 font-bold text-[#020d1c]">
                        Month {row.month} <span className="text-gray-400 font-normal">({row.monthName})</span>
                      </td>
                      <td className="py-2.5 px-4 text-right font-mono text-gray-600">₹{formatINR(row.openingBalance)}</td>
                      <td className="py-2.5 px-4 text-right font-mono font-bold text-emerald-700">₹{formatINR(row.principalPaid)}</td>
                      <td className="py-2.5 px-4 text-right font-mono text-amber-700">₹{formatINR(row.interestPaid)}</td>
                      <td className="py-2.5 px-4 text-right font-mono font-bold text-[#020d1c]">₹{formatINR(row.totalPayment)}</td>
                      <td className="py-2.5 px-4 text-right font-mono text-gray-600">₹{formatINR(row.closingBalance)}</td>
                      <td className="py-2.5 px-4 text-right font-mono font-bold text-gray-800">{row.paidPercentage.toFixed(1)}%</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>

      {/* Quick Loan Apply Modal */}
      <QuickLoanApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        service={{
          title: selectedPresetObj.label,
          amount: loanAmount.toString()
        }}
      />
    </div>
  );
};

export default EMICalculator;
