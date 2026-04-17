"use client";
import React from 'react';

export default function PathwaysModal({ open, onClose, pathway }) {
  if (!open || !pathway) return null;

  return (
    <>
      <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }} onClick={onClose}>
        <div 
          className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable" 
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '1rem' }}>
            {/* Header Section */}
            <div className="modal-header border-bottom p-4">
              <div className="w-100 pe-3">
                <h2 className="modal-title fs-3 fw-bold text-dark mb-2">
                  {pathway.title}
                </h2>
                <p className="text-secondary fw-medium fs-5 mb-2">
                  {pathway.subtitle}
                </p>
                <p className="text-secondary small mb-0 lh-base">
                  {pathway.shortDesc}
                </p>
              </div>
              <button 
                type="button" 
                className="btn-close flex-shrink-0" 
                aria-label="Close" 
                onClick={onClose}
                style={{ alignSelf: 'flex-start', marginTop: '0.25rem' }}
              ></button>
            </div>

            {/* Curriculum Flow Section */}
            <div className="modal-body p-4 bg-white">
              <h3 
                className="fs-4 fw-bold mb-4 pb-2 border-bottom"
                style={{ borderBottomColor: pathway.color + ' !important', borderBottomWidth: '2px !important', color: '#1F2937' }}
              >
                Complete Curriculum Flow
              </h3>

              <div className="d-flex flex-column gap-4">
                {pathway.details.map((section, idx) => (
                  <div 
                    key={idx} 
                    className="bg-light rounded p-4 border-start border-4 shadow-sm g-hover-card"
                    style={{ borderStartColor: pathway.color + ' !important', transition: 'box-shadow 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,.15)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)'}
                  >
                    {/* Phase Header */}
                    <div className="mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span 
                          className="badge text-white rounded-pill px-3 py-1 fw-bold fs-6"
                          style={{ backgroundColor: pathway.color }}
                        >
                          {section.semester}
                        </span>
                        <h4 
                          className="fs-5 fw-bold mb-0"
                          style={{ color: pathway.color }}
                        >
                          {section.phase}
                        </h4>
                      </div>
                      <p className="text-secondary fw-semibold fst-italic small mb-0">
                        {section.description}
                      </p>
                    </div>

                    {/* Points List */}
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                      {section.points.map((point, i) => (
                        <li 
                          key={i} 
                          className="d-flex align-items-start text-dark"
                        >
                          <span 
                            className="rounded-circle flex-shrink-0 mt-1 me-3"
                            style={{ width: '0.5rem', height: '0.5rem', backgroundColor: pathway.color }}
                          ></span>
                          <span className="small lh-base">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        /* Add native scrollbar styling if necessary */
        .modal-body::-webkit-scrollbar {
          width: 8px;
        }
        .modal-body::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .modal-body::-webkit-scrollbar-thumb {
          background: ${pathway.color};
          border-radius: 10px;
        }
        .modal-body::-webkit-scrollbar-thumb:hover {
          background: ${pathway.color}dd;
        }
      `}</style>
    </>
  );
}