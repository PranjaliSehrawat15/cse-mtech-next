"use client";
import React, { useState } from 'react';
import { BookOpen, Users, Award, TrendingUp, Briefcase, GraduationCap, Rocket, X } from 'lucide-react';
import PathwaysModal from './PathwaysModal';
import { pathwaysData } from '../../src/pathwaysData';

export default function Overview() {
  const [selectedPathway, setSelectedPathway] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActionCard, setSelectedActionCard] = useState(null);

  const buttons = [
    {
      id: 'curriculum',
      label: 'View Curriculum',
      icon: BookOpen,
      description: 'Semester-wise subjects, labs & electives',
    },
    {
      id: 'eligibility',
      label: 'Eligibility',
      icon: Users,
      description: 'Qualification criteria & age limit',
    },
    {
      id: 'scholarship',
      label: 'Fee & Scholarship',
      icon: Award,
      description: 'Tuition, hostel & merit scholarships',
    },
    {
      id: 'apply',
      label: 'Apply Now',
      icon: TrendingUp,
      description: 'Applications open for 2026-27',
    },
  ];

  const pathwayIcons = {
    1: Briefcase,
    2: GraduationCap,
    3: Rocket
  };

  const handlePathwayClick = (pathway) => {
    setSelectedPathway(pathway);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPathway(null), 300);
  };

  const handleActionCardClick = (id) => {
    if (id === 'apply') return;
    if (id === 'curriculum') {
      const pathwaysSection = document.getElementById('pathways-section');
      if (pathwaysSection) {
        pathwaysSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setSelectedActionCard(id);
    }
  };

  return (
    <section id="overview" className="py-5 bg-white">
      <div className="container">
        {/* Header */}
        <h2 className="display-6 fw-bold text-center text-dark mb-2">
          M.Tech (CSE) Overview
        </h2>
        <div className="d-flex justify-content-center mb-5">
          <div
            className="rounded-pill"
            style={{ width: '6rem', height: '0.25rem', backgroundColor: '#F26520' }}
          ></div>
        </div>

        <div className="row align-items-center g-5 mb-5">
          {/* Content */}
          <div className="col-lg-8 d-flex flex-column gap-4">
            <div className="position-relative bg-white p-4 p-md-5 shadow border-0" style={{ borderLeft: '4px solid #F26520', borderRadius: '0.75rem' }}>
              <div className="position-absolute top-0 end-0 opacity-25 p-3">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.1, color: '#164265' }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <h3 className="h4 fw-bold mb-4" style={{ color: '#164265' }}>
                Dear Aspirants,
              </h3>
              
              <div className="text-secondary" style={{ textAlign: 'justify', position: 'relative', zIndex: 10, lineHeight: '1.8' }}>
                <p className="fs-6 fw-medium fst-italic mb-4 text-dark">
                  &quot;It is my privilege to welcome you to the Department of Computer Science &amp; 
                  Engineering, accredited by NBA until June 2027. The department offers 
                  well-structured 4-year B.Tech and 2-year M.Tech programmes designed to build 
                  strong computational foundations and prepare students for the evolving global 
                  technology landscape.&quot;
                </p>

                <p className="mb-3">
                  Our academic framework integrates core computer science with emerging domains 
                  such as Artificial Intelligence, Data Science, Cloud Computing, and Cyber Security, 
                  enabling students to develop strong technical depth and advanced problem-solving 
                  abilities required in modern industries.
                </p>

                <p className="mb-3">
                  Students benefit from a premium learning ecosystem supported by modern laboratories, 
                  research-driven initiatives, and continuous industry exposure. Opportunities such as 
                  internships, live projects, technical competitions, and collaborative activities help 
                  transform academic learning into real-world competence.
                </p>

                <p className="mb-3">
                  With focused placement orientation, dedicated faculty mentorship, and structured skill 
                  development support, we aim to nurture confident engineers, innovative thinkers, and 
                  responsible technology professionals ready to build impactful and successful careers.
                </p>
              </div>
            </div>
          </div>

          {/* Dean's Image */}
          <div className="col-lg-4 position-relative d-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0 pb-4">
            <div className="card border-0 shadow-sm text-center position-relative" style={{ width: '100%', maxWidth: '360px', backgroundColor: '#f8f9fa', borderRadius: '1rem' }}>
                <div className="card-body pt-5 px-3 d-flex justify-content-center align-items-end" style={{ height: '380px' }}> 
                  <img
                    src="/assets/images/Dr._Vineet_Sharma_4478-removebg-preview.png"
                    alt="Dr. Vineet Kumar Sharma - Dean, CSE"
                    className="img-fluid w-100 h-100 object-fit-contain"
                    style={{ objectPosition: 'bottom' }}
                  />
                </div>
                
                {/* Floating Nameplate */}
                <div className="position-absolute start-50 translate-middle-x" style={{ bottom: '-1.5rem', width: '90%', zIndex: 10 }}>
                  <div className="py-3 px-2" style={{ backgroundColor: '#164265', borderRadius: '0.5rem', boxShadow: '0px 6px 0px 0px #F26520' }}>
                    <h4 className="fw-bold h6 mb-1 text-white">Dr. Vineet Kumar Sharma</h4>
                    <p className="small text-uppercase fw-medium mb-0" style={{ color: '#ced4da', letterSpacing: '0.05em', fontSize: '0.75rem' }}>Senior Professor & Dean, CSE</p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* Action Cards Grid */}
        <div className="row g-4 mt-4">
          {buttons.map((button) => {
            const Icon = button.icon;
            const isApplyButton = button.id === 'apply';

            const Wrapper = isApplyButton ? 'a' : 'div';
            const wrapperProps = isApplyButton 
              ? { href: 'https://admission.kiet.edu/', target: '_blank', rel: 'noopener noreferrer' } 
              : { onClick: () => handleActionCardClick(button.id) };

            return (
              <div key={button.id} className="col-md-6 col-lg-3">
                <Wrapper
                  className={`card h-100 border-0 shadow-sm text-decoration-none p-4 ${isApplyButton ? 'text-white' : 'g-hover-card'}`}
                  style={isApplyButton ? { backgroundColor: '#164265', cursor: 'pointer', transition: 'transform 0.3s' } : { backgroundColor: '#ffffff', cursor: 'pointer', transition: 'all 0.3s' }}
                  {...wrapperProps}
                  onMouseEnter={isApplyButton ? (e) => e.currentTarget.style.transform = 'translateY(-4px)' : (e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,.15)'; }}
                  onMouseLeave={isApplyButton ? (e) => e.currentTarget.style.transform = 'none' : (e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)'; }}
                >
                  <div className="mb-3 d-inline-flex rounded p-2 align-items-center justify-content-center" style={{ backgroundColor: isApplyButton ? 'rgba(255,255,255,0.1)' : 'rgba(22,66,101,0.1)', color: isApplyButton ? '#fff' : '#164265', width: 'fit-content' }}>
                    <Icon size={24} strokeWidth={2.5} />
                  </div>
                  <h5 className={`fw-bold mb-2 ${isApplyButton ? 'text-white' : 'text-dark'}`}>{button.label}</h5>
                  <p className={`small mb-4 ${isApplyButton ? 'text-white-50' : 'text-secondary'}`}>{button.description}</p>
                  <div className="mt-auto fw-bold text-uppercase small" style={{ color: isApplyButton ? '#F26520' : '#164265' }}>
                    {isApplyButton ? 'Apply Now →' : 'Learn more →'}
                  </div>
                </Wrapper>
              </div>
            );
          })}
        </div>

        {/* THREE DISTINCT PATHWAYS SECTION */}
        <div id="pathways-section" className="mt-5 pt-5 pb-5">
          <div className="text-center mb-5">
            <h3 className="h2 fw-bold mb-3 text-dark">
              Three Distinct Pathways. One Unified Excellence.
            </h3>
            <p className="text-secondary lead mx-auto" style={{ maxWidth: '48rem' }}>
              Choose the pathway that aligns with your career aspirations and professional goals
            </p>
            <div className="d-flex justify-content-center mt-3">
              <div
                className="rounded-pill"
                style={{ width: '5rem', height: '0.25rem', backgroundColor: '#F26520' }}
              ></div>
            </div>
          </div>

          <div className="row g-4">
            {pathwaysData.map((pathway) => {
              const IconComponent = pathwayIcons[pathway.id];
              return (
                <div key={pathway.id} className="col-md-4">
                  <div
                    onClick={() => handlePathwayClick(pathway)}
                    className="card h-100 border-0 shadow-sm p-4 text-center g-hover-card"
                    style={{ borderBottom: `4px solid ${pathway.color}`, cursor: 'pointer', transition: 'all 0.3s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 1rem 3rem rgba(0,0,0,.175)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)'; }}
                  >
                    <h4 className="h5 fw-bold mb-3 text-dark">{pathway.title}</h4>
                    <p className="small fw-bold text-secondary mb-3">{pathway.subtitle}</p>
                    <p className="small text-secondary mb-4">{pathway.shortDesc}</p>
                    <div className="mt-auto">
                      <button className="btn w-100 fw-bold text-white shadow-sm" style={{ backgroundColor: '#164265', border: 'none', transition: 'background-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#11324c'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#164265'}>
                        View Complete Curriculum →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pathways Modal */}
      <PathwaysModal
        open={isModalOpen}
        onClose={closeModal}
        pathway={selectedPathway}
      />

      {/* Action Card Modal */}
      {selectedActionCard && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }} onClick={() => setSelectedActionCard(null)}>
          <div className="modal-dialog modal-lg modal-dialog-centered" onClick={e => e.stopPropagation()}>
            <div className="modal-content border-0 shadow-lg rounded-4">
              <div className="modal-header border-bottom-0 pb-0 pt-4 px-4">
                <h5 className="modal-title h4 fw-bold" style={{ color: '#164265', borderBottom: '3px solid #F26520', display: 'inline-block', paddingBottom: '0.5rem' }}>
                  {buttons.find(b => b.id === selectedActionCard)?.label}
                </h5>
                <button type="button" className="btn-close" onClick={() => setSelectedActionCard(null)}></button>
              </div>
              <div className="modal-body p-4">
                {selectedActionCard === 'eligibility' && (
                  <div className="table-responsive">
                    <table className="table table-bordered table-hover align-middle mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="w-25 text-dark fw-bold py-3" style={{ color: '#164265' }}>Criteria</th>
                          <th className="text-dark fw-bold py-3" style={{ color: '#164265' }}>Requirement</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="fw-semibold text-dark py-3">Qualification</td>
                          <td className="text-secondary py-3">B.E./B.Tech (CSE / IT / Allied) or MCA</td>
                        </tr>
                        <tr>
                          <td className="fw-semibold text-dark py-3">Minimum Academic Requirement</td>
                          <td className="text-secondary py-3">6.5 CGPA</td>
                        </tr>
                        <tr>
                          <td className="fw-semibold text-dark py-3">Preference</td>
                          <td className="text-secondary py-3">GATE qualified candidates preferred</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {selectedActionCard === 'scholarship' && (
                  <div>
                    <div className="alert border shadow-sm rounded-3 mb-4 p-4" style={{ backgroundColor: '#FFF8F5', borderColor: 'rgba(242,101,32,0.2)' }}>
                      <h4 className="fw-bold mb-3 d-flex align-items-center">
                        <span className="me-2">Total Annual Tuition Fee:</span> 
                        <span style={{ color: '#F26520' }}>₹1,70,000 / Year</span>
                      </h4>
                      <ul className="mb-0 text-dark fw-medium list-unstyled d-flex flex-column gap-2">
                        <li><span className="me-2 text-secondary">•</span> Exam Fee: ₹10,000 / Year</li>
                        <li><span className="me-2 text-secondary">•</span> Caution Money: ₹5,000 <span className="text-secondary fw-normal fst-italic ms-1">(Refundable)</span></li>
                      </ul>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover align-middle mb-0">
                        <thead className="table-light">
                          <tr>
                            <th className="py-3" style={{ color: '#164265' }}>Scholarship %</th>
                            <th className="py-3" style={{ color: '#164265' }}>Eligibility (CGPA)</th>
                            <th className="py-3" style={{ color: '#164265' }}>Tuition Fee Relaxation</th>
                            <th className="py-3" style={{ color: '#164265' }}>Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="fw-bold py-3" style={{ color: '#164265' }}>40%</td>
                            <td className="fw-medium text-dark py-3">8.0 & above</td>
                            <td className="text-secondary fw-medium py-3">₹68,000</td>
                            <td className="text-secondary py-3">Highest merit scholarship</td>
                          </tr>
                          <tr>
                            <td className="fw-bold py-3" style={{ color: '#164265' }}>30%</td>
                            <td className="fw-medium text-dark py-3">7.5 – &lt; 8.0</td>
                            <td className="text-secondary fw-medium py-3">₹51,000</td>
                            <td className="text-secondary py-3">Merit-based</td>
                          </tr>
                          <tr>
                            <td className="fw-bold py-3" style={{ color: '#164265' }}>20%</td>
                            <td className="fw-medium text-dark py-3">7.0 – &lt; 7.5</td>
                            <td className="text-secondary fw-medium py-3">₹34,000</td>
                            <td className="text-secondary py-3">Merit-based</td>
                          </tr>
                          <tr className="border-top" style={{ backgroundColor: '#FFF8F5' }}>
                            <td className="fw-bold py-3" style={{ color: '#F26520' }}>+5%</td>
                            <td className="fw-medium text-dark py-3">KIET Alumni</td>
                            <td className="text-secondary fw-medium py-3">Additional Relaxation</td>
                            <td className="text-secondary py-3">Extra benefit for alumni</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}