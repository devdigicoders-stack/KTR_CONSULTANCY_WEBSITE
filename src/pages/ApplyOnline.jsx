import React from 'react';
import ApplyHero from '../components/ApplyHero';
import ApplyForm from '../components/ApplyForm';
import ApplySidebar from '../components/ApplySidebar';
import ApplyFeatures from '../components/ApplyFeatures';

const ApplyOnline = () => {
  return (
    <div className="bg-white min-h-screen">
      <ApplyHero />
      
      <section className="pb-16 lg:pb-24 pt-4 lg:pt-8">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-10">
            {/* Left Main Form Area */}
            <div className="w-full lg:w-[68%] xl:w-[72%]">
              <ApplyForm />
            </div>
            
            {/* Right Sidebar Area */}
            <div className="w-full lg:w-[32%] xl:w-[28%] space-y-6 lg:space-y-8">
              <ApplySidebar />
            </div>
          </div>
        </div>
      </section>

      <ApplyFeatures />
    </div>
  );
};

export default ApplyOnline;
