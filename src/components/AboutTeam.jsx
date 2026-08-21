import React from 'react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Rohan Mehta',
    role: 'CEO & Founder',
    image: '/images/team_rohan.png',
    linkedin: '#',
    twitter: '#',
    email: '#'
  },
  {
    name: 'Anita Sharma',
    role: 'Strategy Director',
    image: '/images/team_anita.png',
    linkedin: '#',
    twitter: '#',
    email: '#'
  },
  {
    name: 'Vikram Joshi',
    role: 'Operations Head',
    image: '/images/team_vikram.png',
    linkedin: '#',
    twitter: '#',
    email: '#'
  },
  {
    name: 'Neha Kapoor',
    role: 'Consulting Lead',
    image: '/images/team_neha.png',
    linkedin: '#',
    twitter: '#',
    email: '#'
  }
];

const SocialIcon = ({ type, href }) => {
  const getIcon = () => {
    switch(type) {
      case 'linkedin':
        return (
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        );
      case 'email':
        return (
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a href={href} className="w-6 h-6 rounded-full bg-[#fbf5ee] flex items-center justify-center text-[#020d1c]/70 hover:text-[#de9e48] hover:bg-[#f6ebd8] transition-colors duration-200">
      {getIcon()}
    </a>
  );
};

const AboutTeam = () => {
  return (
    <section className="bg-[#fafafa] py-20 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h3 className="text-[#de9e48] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">
            OUR TEAM
          </h3>
          <h2 className="text-[#020d1c] text-3xl md:text-4xl lg:text-[2.25rem] font-bold font-serif">
            Meet the Experts Behind Your Success
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-shadow duration-300">
              
              {/* Image */}
              <div className="w-[85px] h-[95px] flex-shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(member.name) + "&background=020d1c&color=fff&size=100";
                  }}
                />
              </div>
              
              {/* Details */}
              <div className="flex flex-col">
                <h4 className="text-[#020d1c] font-bold text-[15px] mb-0.5">{member.name}</h4>
                <p className="text-gray-500 text-[12px] font-light mb-2.5">{member.role}</p>
                
                <div className="flex gap-2">
                  <SocialIcon type="linkedin" href={member.linkedin} />
                  <SocialIcon type="twitter" href={member.twitter} />
                  <SocialIcon type="email" href={member.email} />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <Link to="/about" className="inline-flex items-center justify-center border border-[#de9e48] text-[#de9e48] hover:bg-[#de9e48] hover:text-white font-medium text-[13px] py-2 px-6 rounded transition-colors duration-200">
            View All Team Members
            <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;
