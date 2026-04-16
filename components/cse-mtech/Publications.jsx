"use client";
import React, { useState } from 'react';
import { BookOpen, Users, Book, BookMarked, Lightbulb, GraduationCap, FileText, X } from 'lucide-react';

export default function Publications() {
  const [activePdf, setActivePdf] = useState(null);
  const [activeResearch, setActiveResearch] = useState(null);

  const featuredResearchList = [
    {
      id: 1,
      title: 'Quantifying overall agreement between explanation methods to address the disagreement problem',
      journal: 'Evolutionary Intelligence',
      publisher: 'Springer nature',
      faculty: 'Mr. Gaurav Parashar',
      impactFactor: '2.6',
      link: 'https://link.springer.com/article/10.1007/s12065-026-01145-y'
    },
    {
      id: 2,
      title: 'Hybrid CNN–transformer model with BM3D and YOLOv8 for early detection of lung cancer in low-dose CT scans',
      journal: 'Scientific Reports',
      publisher: 'Nature',
      faculty: 'Mr. Gagan Thakral',
      impactFactor: '3.9',
      link: 'https://www.nature.com/articles/s41598-026-43517-5'
    },
    {
      id: 3,
      title: 'SGELAN-T3: A Novel Lightweight Convolutional Block for Efficient Sugarcane Stem Health Detection',
      journal: 'Journal of Intelligent & Fuzzy Systems: Applications in Engineering and Technology',
      publisher: 'Sage Journals, IoS Press',
      faculty: 'Mr. Pushpendra Kumar',
      impactFactor: '1.0',
      link: 'https://journals.sagepub.com/home/IFS'
    },
    {
      id: 4,
      title: 'Real time sugarcane stem health detection with YOLOv8 tinier and RepNCSP ELAN',
      journal: 'Scientific Reports',
      publisher: 'Nature',
      faculty: 'Mr. Pushpendra Kumar',
      impactFactor: '3.9',
      link: 'https://www.nature.com/articles/s41598-025-27502-y'
    }
  ];

  const annualReports = [
    { id: 1, title: 'Research and Publications 2024-25', file: '/assets/pdf/Session 2024-25  .pdf' },
    { id: 2, title: 'Research and Publications 2023-24', file: '/assets/pdf/Session 2023-24 .pdf' },
    { id: 3, title: 'Research and Publications 2022-23', file: '/assets/pdf/Session 2022-23.pdf' },
  ];

  const publicationCategories = [
    { id: 1, title: 'JOURNAL', count: '94+', icon: BookOpen },
    { id: 2, title: 'CONFERENCE', count: '144+', icon: Users },
    { id: 3, title: 'BOOK', count: '3+', icon: Book },
    { id: 4, title: 'BOOK CHAPTER', count: '26+', icon: BookMarked },
    { id: 5, title: 'PATENT PUBLISHED', count: '68+', icon: Lightbulb },
    { id: 6, title: 'Ph.D GUIDANCE', count: '9+', icon: GraduationCap },
  ];

  return (
    <section id="publications" className="pt-5 pb-4 bg-light position-relative">
      <div className="container">
        {/* Header */}
        <div className="mb-5 text-center position-relative">
          <h2 className="display-6 fw-bold text-dark mb-2">
            Publications &amp; Research
          </h2>
          <div className="d-flex justify-content-center mb-3">
            <div className="rounded-pill" style={{ width: '6rem', height: '0.25rem', backgroundColor: '#F26520' }}></div>
          </div>
          <p className="text-secondary fw-medium lead mb-0">
            (Last 3 Years)
          </p>
        </div>

        {/* Publication Cards */}
        <div className="mb-5 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="row g-4 justify-content-center">
            {publicationCategories.map((category) => {
              const Icon = category.icon;
              return (
              <div key={category.id} className="col-sm-6 col-lg-4 d-flex justify-content-center">
                <div
                  className="card border-0 d-flex flex-row align-items-center justify-content-center px-4 py-4 w-100 shadow-sm"
                  style={{ borderRadius: '16px', transition: 'all 0.3s', cursor: 'pointer' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0px 8px 32px rgba(0,0,0,0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)'; }}
                >
                  {/* Icon */}
                  <div className="text-dark me-4 flex-shrink-0">
                    <Icon size={54} strokeWidth={1.2} />
                  </div>

                  {/* Text Container */}
                  <div className="d-flex flex-column align-items-center justify-content-center" style={{ minWidth: '120px' }}>
                    <span className="text-dark fw-semibold text-uppercase tracking-wide mb-1 text-center" style={{ fontSize: '13px' }}>
                      {category.title}
                    </span>
                    <span className="fw-bolder lh-1" style={{ color: '#164265', fontSize: '42px', letterSpacing: '-0.05em' }}>
                      {category.count}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>

        {/* Featured Research */}
        <div className="mb-5 mx-auto card border-0 shadow-sm p-4 p-md-5 bg-white" style={{ maxWidth: '1000px', borderRadius: '16px' }}>
          <h3 className="h4 fw-bold text-dark mb-4 text-center text-md-start">
            Recent Research Highlights
          </h3>
          <div className="row g-4">
            {featuredResearchList.map((research) => (
              <div key={research.id} className="col-md-6 d-flex">
                <div
                  onClick={() => setActiveResearch(research)}
                  className="research-card d-flex align-items-start p-3 rounded-3 border bg-light w-100 position-relative"
                  style={{ cursor: 'pointer', transition: 'all 0.2s ease-in-out' }}
                  onMouseEnter={(e) => { e.currentTarget.classList.add('shadow-sm'); e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.classList.remove('shadow-sm'); e.currentTarget.style.transform = 'none'; }}
                >
                  <FileText className="kiet-text-primary flex-shrink-0 mt-1 me-3" fill="#dbeafe" size={28} />
                  <div>
                    <p className="text-dark fw-semibold mb-1" style={{ fontSize: '15px' }}>
                      {research.title}
                    </p>
                    <p className="text-secondary mb-0" style={{ fontSize: '13px' }}>
                      Published by {research.publisher}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Annual Research Reports */}
        <div className="mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="d-flex flex-column gap-3">
            {annualReports.map((report) => (
              <div
                key={report.id}
                onClick={() => setActivePdf(report.id)}
                className="card bg-white d-flex flex-row align-items-center p-3 shadow-sm cursor-pointer"
                style={{ border: '1px solid #dee2e6', borderRadius: '8px', transition: 'all 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#F26520'; e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,.15)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#dee2e6'; e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)'; }}
              >
                <FileText className="kiet-text-primary me-3 flex-shrink-0" fill="#dbeafe" size={24} />
                <span className="fw-medium font-size-lg" style={{ color: '#164265' }}>
                  {report.title}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Research Details Modal */}
      {activeResearch && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)' }} onClick={() => setActiveResearch(null)}>
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '16px' }}>
              {/* Modal Header */}
              <div className="modal-header bg-light border-bottom">
                <h3 className="modal-title h5 fw-bold text-dark">
                  Research Details
                </h3>
                <button type="button" className="btn-close" onClick={() => setActiveResearch(null)}></button>
              </div>

              {/* Modal Body (Table) */}
              <div className="modal-body p-4 p-md-5">
                <div className="table-responsive border rounded-3 overflow-hidden shadow-sm">
                  <table className="table table-hover mb-0 align-middle">
                    <thead className="table-light">
                      <tr>
                        <th className="fw-semibold text-secondary w-25 py-3 px-4">Detail</th>
                        <th className="fw-semibold text-secondary py-3 px-4">Information</th>
                      </tr>
                    </thead>
                    <tbody className="border-top-0">
                      <tr>
                        <td className="fw-semibold text-dark py-3 px-4">Title</td>
                        <td className="text-secondary py-3 px-4">{activeResearch.title}</td>
                      </tr>
                      <tr>
                        <td className="fw-semibold text-dark py-3 px-4">Name of Journal</td>
                        <td className="text-secondary py-3 px-4">{activeResearch.journal}</td>
                      </tr>
                      <tr>
                        <td className="fw-semibold text-dark py-3 px-4">Publisher</td>
                        <td className="text-secondary py-3 px-4">{activeResearch.publisher}</td>
                      </tr>
                      <tr>
                        <td className="fw-semibold text-dark py-3 px-4">Name of faculty</td>
                        <td className="text-secondary py-3 px-4">{activeResearch.faculty}</td>
                      </tr>
                      <tr>
                        <td className="fw-semibold text-dark py-3 px-4">Impact factor</td>
                        <td className="text-secondary py-3 px-4">{activeResearch.impactFactor}</td>
                      </tr>
                      <tr>
                        <td className="fw-semibold text-dark py-3 px-4">Link</td>
                        <td className="py-3 px-4">
                          <a href={activeResearch.link} target="_blank" rel="noopener noreferrer" className="text-primary fw-medium text-decoration-none">
                            View Publication
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PDF Modal */}
      {activePdf && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)' }} onClick={() => setActivePdf(null)}>
          <div className="modal-dialog modal-dialog-centered modal-xl" onClick={(e) => e.stopPropagation()} style={{ height: '90vh' }}>
            <div className="modal-content border-0 shadow-lg h-100" style={{ borderRadius: '16px' }}>
              {/* Modal Header */}
              <div className="modal-header bg-light border-bottom">
                <h3 className="modal-title h6 fw-bold text-dark">
                  {annualReports.find((r) => r.id === activePdf)?.title}
                </h3>
                <button type="button" className="btn-close" onClick={() => setActivePdf(null)}></button>
              </div>
              {/* Modal Body */}
              <div className="modal-body p-4 bg-light d-flex justify-content-center align-items-center">
                {annualReports.find((r) => r.id === activePdf)?.file === 'about:blank' ? (
                  <div className="text-center bg-white p-5 rounded shadow-sm border">
                    <p className="text-secondary fw-medium mb-2">PDF source will be added here...</p>
                    <p className="small text-muted">Update the &apos;file&apos; property in the annualReports array.</p>
                  </div>
                ) : (
                  <div className="w-100 h-100 bg-white rounded shadow-sm border overflow-hidden">
                    <iframe
                      src={`${encodeURI(annualReports.find((r) => r.id === activePdf)?.file)}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      title="PDF Viewer"
                      className="w-100 h-100 border-0"
                    />
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
