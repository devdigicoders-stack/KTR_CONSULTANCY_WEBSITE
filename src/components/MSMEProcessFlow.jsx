
const MSMEProcessFlow = () => {
  const steps = [
    {
      num: "01",
      title: "Initial Case Assessment",
      desc: "Understand your business, project and funding requirement.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Clipboard */}
          <rect x="20" y="8" width="24" height="42" rx="3" stroke="#020d1c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26 8V6C26 4.89543 26.8954 4 28 4H36C37.1046 4 38 4.89543 38 6V8" stroke="#020d1c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26 22H38" stroke="#020d1c" strokeWidth="3" strokeLinecap="round"/>
          <path d="M26 30H32" stroke="#020d1c" strokeWidth="3" strokeLinecap="round"/>
          {/* Magnifying Glass (Orange) */}
          <circle cx="42" cy="42" r="10" stroke="#de9e48" strokeWidth="3"/>
          <path d="M49 49L56 56" stroke="#de9e48" strokeWidth="4" strokeLinecap="round"/>
          <path d="M44 38L38 44" stroke="#de9e48" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      num: "02",
      title: "Document Management",
      desc: "Help identify, organize and manage the documents required for the case.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Back Paper */}
          <rect x="22" y="10" width="26" height="34" rx="2" fill="white" stroke="#de9e48" strokeWidth="3"/>
          <path d="M28 20H42" stroke="#de9e48" strokeWidth="3" strokeLinecap="round"/>
          <path d="M28 28H38" stroke="#de9e48" strokeWidth="3" strokeLinecap="round"/>
          {/* Folder */}
          <path d="M8 26C8 24.8954 8.89543 24 10 24H22L26 28H54C55.1046 28 56 28.8954 56 30V50C56 51.1046 55.1046 52 54 52H10C8.89543 52 8 51.1046 8 50V26Z" fill="#020d1c"/>
        </svg>
      )
    },
    {
      num: "03",
      title: "CMA Data Preparation",
      desc: "Preparation and coordination of CMA data as required for bank processing.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bars */}
          <rect x="12" y="34" width="8" height="20" fill="#020d1c"/>
          <rect x="28" y="24" width="8" height="30" fill="#020d1c"/>
          <rect x="44" y="14" width="8" height="40" fill="#020d1c"/>
          {/* Arrow */}
          <path d="M12 28L28 16L36 24L52 10" stroke="#de9e48" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M42 10H52V20" stroke="#de9e48" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      num: "04",
      title: "Financial Projections",
      desc: "Projected financial statements and other financial information required for the case.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Axis */}
          <path d="M8 54H56" stroke="#020d1c" strokeWidth="3" strokeLinecap="round"/>
          <path d="M12 10V54" stroke="#020d1c" strokeWidth="3" strokeLinecap="round"/>
          {/* Line Chart */}
          <path d="M12 40L24 28L36 34L50 16" stroke="#de9e48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="50" cy="16" r="4" fill="#de9e48"/>
          {/* Small Bars */}
          <rect x="20" y="42" width="6" height="12" fill="#020d1c"/>
          <rect x="32" y="38" width="6" height="16" fill="#020d1c"/>
          <rect x="44" y="26" width="6" height="28" fill="#020d1c"/>
        </svg>
      )
    },
    {
      num: "05",
      title: "Project Report / DPR",
      desc: "Assistance with project reports and detailed project documentation.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Buildings */}
          <rect x="14" y="28" width="12" height="26" stroke="#020d1c" strokeWidth="3"/>
          <rect x="26" y="14" width="16" height="40" stroke="#020d1c" strokeWidth="3"/>
          <rect x="42" y="22" width="12" height="32" stroke="#020d1c" strokeWidth="3"/>
          {/* Windows */}
          <rect x="18" y="34" width="4" height="4" fill="#de9e48"/>
          <rect x="18" y="42" width="4" height="4" fill="#de9e48"/>
          <rect x="32" y="20" width="4" height="4" fill="#de9e48"/>
          <rect x="32" y="28" width="4" height="4" fill="#de9e48"/>
          <rect x="32" y="36" width="4" height="4" fill="#de9e48"/>
          <rect x="46" y="28" width="4" height="4" fill="#de9e48"/>
          <rect x="46" y="36" width="4" height="4" fill="#de9e48"/>
        </svg>
      )
    },
    {
      num: "06",
      title: "Funding Structure",
      desc: "Help determine the appropriate funding structure based on the requirement.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Big Gear */}
          <path d="M28 46C37.9411 46 46 37.9411 46 28C46 18.0589 37.9411 10 28 10C18.0589 10 10 18.0589 10 28C10 37.9411 18.0589 46 28 46Z" stroke="#020d1c" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 6"/>
          <circle cx="28" cy="28" r="14" stroke="#020d1c" strokeWidth="3"/>
          {/* Rupee Symbol */}
          <path d="M24 22H33M24 26H33M28 26L32 34M25 22C25 22 30 22 30 25C30 27.5 27 28 25 28" stroke="#de9e48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Small Gear */}
          <path d="M48 54C53.5228 54 58 49.5228 58 44C58 38.4772 53.5228 34 48 34C42.4772 34 38 38.4772 38 44C38 49.5228 42.4772 54 48 54Z" stroke="#de9e48" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4"/>
          <circle cx="48" cy="44" r="6" stroke="#de9e48" strokeWidth="2"/>
        </svg>
      )
    },
    {
      num: "07",
      title: "Bank Coordination",
      desc: "Coordinate with the concerned bank throughout the processing.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bank Building */}
          <path d="M32 10L10 22H54L32 10Z" fill="#020d1c"/>
          <rect x="14" y="26" width="6" height="20" fill="#020d1c"/>
          <rect x="28" y="26" width="8" height="20" fill="#020d1c"/>
          <rect x="44" y="26" width="6" height="20" fill="#020d1c"/>
          <path d="M8 50H56" stroke="#020d1c" strokeWidth="4" strokeLinecap="round"/>
          <path d="M12 46H52" stroke="#de9e48" strokeWidth="3" strokeLinecap="round"/>
          <path d="M32 16A4 4 0 1032 24A4 4 0 1032 16Z" fill="#de9e48"/>
        </svg>
      )
    },
    {
      num: "08",
      title: "Queries & Pendency Management",
      desc: "Help track and coordinate responses to bank queries and pending documents.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Orange Bubble */}
          <path d="M38 46H50C52.2091 46 54 44.2091 54 42V26C54 23.7909 52.2091 22 50 22H38C35.7909 22 34 23.7909 34 26V42C34 44.2091 35.7909 46 38 46Z" fill="#de9e48"/>
          <path d="M50 46L54 52V46H50Z" fill="#de9e48"/>
          {/* Blue Bubble */}
          <path d="M14 42H34C36.2091 42 38 40.2091 38 38V16C38 13.7909 36.2091 12 34 12H14C11.7909 12 10 13.7909 10 16V38C10 40.2091 11.7909 42 14 42Z" fill="#020d1c"/>
          <path d="M14 42L10 48V42H14Z" fill="#020d1c"/>
          {/* Dots */}
          <circle cx="20" cy="27" r="2.5" fill="white"/>
          <circle cx="28" cy="27" r="2.5" fill="white"/>
          <circle cx="36" cy="27" r="2.5" fill="white"/>
        </svg>
      )
    },
    {
      num: "09",
      title: "Regular Follow-Up",
      desc: "Continuous coordination so the client does not have to independently manage every stage.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Phone */}
          <path d="M46.7269 41.5978C44.7579 40.0638 42.0626 40.0768 40.1068 41.644L36.8778 44.2289C28.2148 40.0963 23.9037 35.7852 19.7711 27.1222L22.356 23.8932C23.9232 21.9374 23.9362 19.2421 22.4022 17.2731L16.294 9.43264C14.6186 7.282 11.4746 6.9537 9.38787 8.71801C7.62534 10.2084 6.13627 12.0122 5.09341 13.9168C2.5857 18.4975 1.10674 24.3639 5.86435 34.0042C12.3023 47.0494 21.6841 55.4338 35.1017 58.6291C41.8021 60.2245 47.7816 58.7497 51.5273 55.6705C53.1118 54.3683 54.4988 52.8804 55.6322 51.2721C57.1994 49.0487 56.6669 45.8687 54.4323 44.1287L46.7269 41.5978Z" fill="#020d1c"/>
          {/* Waves */}
          <path d="M38 10C44.6274 10 50 15.3726 50 22" stroke="#de9e48" strokeWidth="4" strokeLinecap="round"/>
          <path d="M44 14C48.4183 14 52 17.5817 52 22" stroke="#de9e48" strokeWidth="4" strokeLinecap="round"/>
          <path d="M50 18C52.2091 18 54 19.7909 54 22" stroke="#de9e48" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      num: "10",
      title: "End-to-End Case Management",
      desc: "One team coordinating the complete journey from application to bank decision.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Folder */}
          <path d="M12 24C12 22.8954 12.8954 22 14 22H24L28 26H50C51.1046 26 52 26.8954 52 28V46C52 47.1046 51.1046 48 50 48H14C12.8954 48 12 47.1046 12 46V24Z" fill="#020d1c"/>
          <path d="M16 16C16 14.8954 16.8954 14 18 14H32L36 18H44" stroke="#de9e48" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Check Badge */}
          <circle cx="46" cy="46" r="10" fill="#de9e48" stroke="white" strokeWidth="2"/>
          <path d="M42 46L45 49L51 43" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#fcfcfd] py-16 lg:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <h2 className="text-[#020d1c] font-bold text-3xl md:text-[34px] lg:text-[40px] mb-4 font-serif tracking-tight">
            What We Manage
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 md:w-24 h-[1px] bg-[#de9e48]"></div>
            <div className="text-[#de9e48] bg-white rounded-full p-1 border border-[#de9e48]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="w-16 md:w-24 h-[1px] bg-[#de9e48]"></div>
          </div>
        </div>

        {/* 10-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
          {steps.map((step, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-[14px] p-6 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300">
              
              {/* Icon */}
              <div className="w-20 h-20 mb-3 flex items-center justify-center">
                {step.icon}
              </div>
              
              {/* Number Badge */}
              <div className="bg-[#de9e48] text-white text-[12px] font-bold rounded-full px-3 py-0.5 mb-4">
                {step.num}
              </div>
              
              {/* Title */}
              <h3 className="text-[#020d1c] font-bold text-[15px] lg:text-[16px] mb-2 leading-snug">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-[13px] leading-relaxed">
                {step.desc}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MSMEProcessFlow;
