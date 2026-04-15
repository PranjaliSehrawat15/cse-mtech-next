"use client";
import React from 'react';
import { Award, Medal, Clock, GraduationCap, Wallet, Lightbulb, Rocket, Briefcase, Star } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    {
      id: 1,
      title: 'Strong Industry Connect & Collaboration',
      description:
        'The department maintains a robust industry ecosystem, connecting students with leading tech companies, startups, and R&D organizations. Through internships, live projects, expert talks, and mentorship, students gain real-world exposure, making them industry-ready and highly employable from day one.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 2,
      title: 'Curriculum Highlights',
      description:
        'The M.Tech (CSE) curriculum is designed to deliver a perfect blend of strong fundamentals, emerging technologies, and real-world application. Students build expertise in core areas like Data Structures, DBMS, and Software Engineering, while advancing into AI, Machine Learning, Blockchain, and Quantum Computing.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 3,
      title: 'Outstanding Placements',
      description:
        'Our graduates secure highly competitive roles at top multinational companies and promising startups. With dedicated placement cell support, rigorous interview preparation, and skill enhancement programs, we ensure a smooth transition from academics to successful professional careers.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 4,
      title: 'Cutting-Edge Research',
      description:
        'Engage in groundbreaking research across specialized domains like AI, Data Science, and Cyber Security. We provide extensive support for publishing in reputed journals, participating in international conferences, and collaborating on government-funded and industry-sponsored projects.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 5,
      title: 'State-of-the-art Infrastructure',
      description:
        'Experience learning in world-class facilities equipped with high-end computing laboratories, smart classrooms, and collaborative workspaces. Our advanced labs are powered by the latest software and hardware to support intensive computing tasks and complex project developments.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 6,
      title: 'Best Results & Academic Excellence',
      description:
        'Our students consistently top university examinations and secure prestigious awards. This legacy of academic brilliance is driven by experienced faculty, continuous evaluations, and a learning environment that encourages analytical thinking and problem-solving.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?fit=crop&w=400&h=400&q=80',
    },
  ];

  const programHighlights = [
    { text: '15+ Years of Academic Excellence in postgraduate computing education', icon: Award },
    { text: 'A Legacy of University Medalist', icon: Medal },
    { text: 'Full-time programme with flexible schedule and extended laboratory access', icon: Clock },
    { text: 'GATE scholarships (GoI norms)', icon: GraduationCap },
    { text: 'Fee reimbursement for eligible SC/ST & EWS students', icon: Wallet },
    { text: 'Financial & mentorship support for Research publications', icon: Lightbulb },
    { text: 'Startup grants up to ₹10 Lakhs via KIET Technology Business Incubator', icon: Rocket },
    { text: '100% placement support', icon: Briefcase },
    { text: 'Merit-Based Scholarships', icon: Star },
  ];

  return (
    <section id="highlights" className="py-5 bg-light">
      <div className="container">
        {/* Program Highlights Section */}
        <div className="mb-5 text-center">
          <h2 className="display-6 fw-bold text-dark mb-2">
            Program Highlights
          </h2>
          <div className="d-flex justify-content-center mb-4">
            <div className="rounded-pill" style={{ width: '6rem', height: '0.25rem', backgroundColor: '#F26520' }}></div>
          </div>
          <div className="row g-4">
            {programHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm p-4 rounded-4 position-relative g-hover-card">
                    {/* Subtle accent line on hover could be handled via global css, using top border here */}
                    <div className="position-absolute top-0 start-0 w-100 bg-kiet-secondary" style={{ height: '3px', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}></div>
                    
                    <div className="d-flex gap-3 align-items-start mt-2">
                      <div className="flex-shrink-0 d-flex align-items-center justify-content-center border rounded-3 p-2" style={{ backgroundColor: '#16426510', borderColor: '#16426520', width: '3rem', height: '3rem' }}>
                        <Icon size={24} strokeWidth={1.5} className="kiet-text-tertiary" />
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 text-dark fw-bold small lh-base">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Header */}
        <div className="mb-5 text-center">
          <h2 className="display-6 fw-bold text-dark mb-2">
            Department's Highlights
          </h2>
          <div className="d-flex justify-content-center">
            <div className="rounded-pill" style={{ width: '6rem', height: '0.25rem', backgroundColor: '#F26520' }}></div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="row g-4">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 row g-0">
                {/* Content aligned row -> actually we can use flex */}
                <div className="d-flex flex-column flex-sm-row gap-4 align-items-center align-items-sm-start h-100">
                  {/* Image Container */}
                  <div className="flex-shrink-0 rounded-3 overflow-hidden shadow-sm" style={{ width: '100px', height: '100px' }}>
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow-1">
                    <h3 className="h5 fw-bold text-dark mb-2">
                      {highlight.title}
                    </h3>
                    <p className="small text-secondary mb-0" style={{ textAlign: 'justify' }}>
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-5 pt-5 text-center">
          <h3 className="h3 fw-bold text-dark mb-4">
            Why Choose Our Program?
          </h3>
          <div className="row g-4 mt-2">
            {[
              {
                number: '18+',
                label: 'Years of Excellence',
              },
              {
                number: '100+',
                label: 'Industry Partners',
              },
              {
                number: '95%',
                label: 'Placement Rate',
              },
            ].map((stat, index) => (
              <div key={index} className="col-md-4">
                <div className="card border-0 shadow-sm p-5 rounded-4 h-100">
                  <p className="display-4 fw-bold mb-3" style={{ color: '#F26520' }}>
                    {stat.number}
                  </p>
                  <p className="h5 text-dark fw-bold mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
