"use client";
import React, { useState } from "react";
import { ChevronRight, X } from 'lucide-react';

export default function Clubs() {
  const [selectedClub, setSelectedClub] = useState(null);

  const clubs = [
    {
      id: 1,
      name: "Google Developer Groups (GDG)",
      description:
        "The Google Developer Groups (GDG) at KIET, Ghaziabad is a dynamic, student-driven technical community dedicated to empowering learners through hands-on skills, innovation, and real-world problem-solving. Supported by Google Developers, the club provides a platform for students to explore emerging technologies such as web development, Android, cloud computing, machine learning, and AI. It conducts workshops, hackathons, coding sessions, and project-based learning activities to bridge the gap between academic knowledge and industry requirements. GDG KIET encourages collaboration, creativity, and leadership, helping students build strong technical portfolios while contributing to impactful community solutions and preparing them for future technological careers.",
      tags: ["Web", "Android", "Cloud"],
      image: "/assets/clubs/gdg.webp",
    },
    {
      id: 2,
      name: "Data Science and Deep Learning (DSDL)",
      description:
        "The Data Science and Deep Learning (DSDL) Club, guided by Dr. Vineet Sharma, is a vibrant student community committed to fostering excellence in AI, machine learning, and data-driven innovation. The club provides a platform for students to explore data science concepts, build intelligent systems, and apply deep learning techniques to real-world problems. Through hands-on workshops, industrial collaborations, research initiatives, and peer learning, DSDL enhances analytical thinking and technical expertise. The club nurtures curiosity, creativity, and teamwork, empowering students to become future-ready professionals capable of contributing impactful solutions in academia, industry, and society.",
      tags: ["Machine Learning", "AI", "Deep Learning"],
      image: "/assets/clubs/dsdl.webp",
    },
    {
      id: 3,
      name: "Microsoft Student Ambassadors",
      description:
        "Microsoft Learn Student Ambassadors (MLSA), KIET Ghaziabad is a student-led, innovation-focused community dedicated to building strong technical and leadership skills. Guided by experienced faculty and leadership, it offers hands-on learning through workshops, hackathons, mentorship programs, and expert sessions across domains like Cloud Computing, AI/ML, Web Development, Cybersecurity, and DevOps.Fostering collaboration, peer learning, and real-world exposure, MLSA KIET serves as a vibrant platform for innovation and prepares students to excel in the evolving tech industry.",
      tags: ["Azure", "Leadership", "Hackathons"],
      image: "/assets/clubs/mlsa.webp",
    },
    {
      id: 4,
      name: "FOSSCU (Open Source)",
      description: "FOSSCU (Free and Open Source Software Community), KIET Ghaziabad is a student-led initiative dedicated to promoting open-source culture, collaboration, and innovation. The community encourages students to contribute to real-world projects, enhance their coding skills, and understand the power of open technologies. Through workshops, contribution drives, and peer learning, FOSSCU empowers students to build, share, and grow while making meaningful contributions to the global open-source ecosystem",
      tags: ["Open Source", "Git", "Collaboration"],
      image: "/assets/clubs/fosscu.webp",
    },
  ];

  return (
    <section id="clubs" className="py-5 bg-white position-relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="mb-5 text-center position-relative">
          <h2 className="display-6 fw-bold text-dark mb-2">
            Clubs
          </h2>
          <div className="d-flex justify-content-center">
            <div className="rounded-pill" style={{ width: '6rem', height: '0.25rem', backgroundColor: '#F26520' }}></div>
          </div>
        </div>
        
        {/* Timeline Grid */}
        <div className="position-relative mt-5">
          {/* Continuous Line (Desktop Only) */}
          <div className="d-none d-lg-flex position-absolute top-50 start-0 end-0 translate-middle-y z-0" style={{ height: '2px' }}>
            <div className="w-50 h-100" style={{ background: 'linear-gradient(to right, transparent, #164265, #dee2e6)' }} />
            <div className="w-50 h-100" style={{ background: 'linear-gradient(to right, #dee2e6, #F26520, transparent)' }} />
          </div>

          <div className="row g-4 position-relative z-1">
            {clubs.map((club, index) => {
              const isTop = index % 2 === 0;

              return (
                <div key={club.id} className={`col-md-6 col-lg-3 d-flex flex-column position-relative g-hover-card ${isTop ? "mb-lg-5 pb-lg-5" : "mt-lg-5 pt-lg-5"}`}>
                  <div 
                    onClick={() => setSelectedClub(club)}
                    className="card h-100 border-0 shadow-sm rounded-4 cursor-pointer text-center group"
                    style={{ maxWidth: '280px', margin: '0 auto', transition: 'all 0.3s ease' }}
                  >
                    {/* Image Box */}
                    <div className="position-relative w-100 d-flex align-items-center justify-content-center p-4 bg-light" style={{ height: '140px', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}>
                      <img
                        src={club.image}
                        alt={club.name}
                        className="w-100 h-100 object-fit-contain transition-transform"
                        style={{ transition: 'transform 0.5s' }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                      />
                    </div>

                    {/* Content Box */}
                    <div className="card-body d-flex flex-column">
                      <h3 className="h6 fw-bold text-dark mb-3">
                        {club.name}
                      </h3>
                      {/* Explore Button */}
                      <button 
                        onClick={() => setSelectedClub(club)}
                        className="btn btn-outline-secondary w-100 mt-auto rounded-3 d-flex align-items-center justify-content-center gap-1 group-btn"
                        style={{ fontSize: '0.875rem', fontWeight: '600' }}
                      >
                        Explore
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedClub && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden position-relative">
              <button 
                type="button"
                className="btn-close position-absolute top-0 end-0 m-3 z-3 bg-white opacity-100 rounded-circle shadow-sm"
                style={{ padding: '0.75rem' }}
                onClick={() => setSelectedClub(null)}
                aria-label="Close"
              ></button>
              
              <div className="modal-body p-5 d-flex flex-column align-items-center text-center">
                <h2 className="h3 fw-bold mb-4" style={{ color: '#164265' }}>
                  {selectedClub.name}
                </h2>
                
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                  {selectedClub.tags.map(tag => (
                   <span key={tag} className="badge border fw-bold text-uppercase tracking-wider" style={{ backgroundColor: '#f8fafc', color: '#164265', borderColor: '#e2e8f0', letterSpacing: '0.05em' }}>
                     {tag}
                   </span>
                  ))}
                </div>
                
                <p className="text-secondary lh-lg mb-5" style={{ fontSize: '1rem', maxWidth: '36rem' }}>
                  {selectedClub.description}
                </p>
                
                <button 
                  className="btn btn-primary fw-bold px-5 py-2 rounded-3 shadow-sm"
                  style={{ backgroundColor: '#164265', borderColor: '#164265' }}
                  onClick={() => setSelectedClub(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
