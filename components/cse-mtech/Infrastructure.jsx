"use client";
import React from 'react';

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="pt-5 pb-5 bg-light position-relative">
      <div className="container">
        {/* Header */}
        <div className="mb-5 position-relative text-center">
          <h2 className="display-6 fw-bold text-dark mb-2">
            Infrastructure &amp; Facilities
          </h2>
          <div className="d-flex justify-content-center">
            <div className="rounded-pill" style={{ width: '6rem', height: '0.25rem', backgroundColor: '#F26520' }}></div>
          </div>
        </div>

        {/* Showcase Sections */}
        <div className="d-flex flex-column gap-5">
          
          {/* Classes */}
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <div className="infra-image-wrapper shadow-sm">
                 <img src="/assets/Infrastructure/classes.webp" alt="Modern Classrooms" />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
               <h3 className="h2 fw-bolder mb-4 lh-sm" style={{ color: '#164265' }}>
                 State-of-the-Art <br/><span style={{ color: '#F26520' }}>Learning Spaces</span>
               </h3>
               <p className="text-secondary mb-4 text-justify" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                 Experience learning in highly advanced, air-conditioned smart classrooms designed to foster a deeply collaborative and interactive learning environment. They feature premium audio-visual systems, high-speed connectivity, and ergonomic layouts carefully tailored for group discussions and modern teaching methodologies.
               </p>
               <div className="row g-3">
                 {['Smart interactive boards', 'Acoustically designed spaces', 'High-end projection systems', 'Flexible collaborative seating'].map((item, i) => (
                    <div key={i} className="col-sm-6">
                      <div className="d-flex align-items-center fw-semibold text-dark" style={{ fontSize: '14px' }}>
                        <div className="rounded-circle flex-shrink-0 me-2 shadow-sm" style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#164265' }} />
                        {item}
                      </div>
                    </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Labs */}
          <div className="row flex-lg-row-reverse align-items-center g-4 g-lg-5 mt-3 mt-lg-5">
            <div className="col-lg-6">
              <div className="infra-image-wrapper shadow-sm">
                 <img src="/assets/Infrastructure/labs.webp" alt="High-Tech Laboratories" />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
               <h3 className="h2 fw-bolder mb-4 lh-sm" style={{ color: '#164265' }}>
                 Advanced <br/><span style={{ color: '#F26520' }}>Laboratories &amp; HPC</span>
               </h3>
               <p className="text-secondary mb-4 text-justify" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                 Immerse yourself in world-class research facilities powered by enterprise-grade hardware. Our computing laboratories contain extensive toolsets for AI, data science, and deep learning, fully supported by robust networking architecture to seamlessly handle data-intensive computational challenges.
               </p>
               <div className="row g-3">
                 {['NVIDIA DGX Supercomputing', 'Gigabit campus ethernet', '24/7 cloud resource access', 'Dedicated AI & ML hardware'].map((item, i) => (
                    <div key={i} className="col-sm-6">
                      <div className="d-flex align-items-center fw-semibold text-dark" style={{ fontSize: '14px' }}>
                        <div className="rounded-circle flex-shrink-0 me-2 shadow-sm" style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#F26520' }} />
                        {item}
                      </div>
                    </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
