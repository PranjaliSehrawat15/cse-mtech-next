"use client";
import React from 'react';
import { Target, Compass, Zap, BookOpen, Brain, Settings, FileSearch, Monitor, Shield, Users, Briefcase, GraduationCap } from 'lucide-react';

export default function ProgramDetails() {
  const gains = [
    {
      id: 'PO1',
      title: 'Advanced Knowledge',
      desc: 'Apply in-depth knowledge of computer science, including AI, data science, algorithms, and software systems, to solve complex problems.',
      icon: Brain,
    },
    {
      id: 'PO2',
      title: 'Problem Analysis',
      desc: 'Identify, analyze, and formulate solutions for complex computing problems using logical reasoning and modern techniques.',
      icon: FileSearch,
    },
    {
      id: 'PO3',
      title: 'Design & Development',
      desc: 'Design innovative and efficient computing systems, applications, or processes that meet specified needs with real-world constraints.',
      icon: Settings,
    },
    {
      id: 'PO4',
      title: 'Research Capability',
      desc: 'Conduct research involving literature review, experimentation, and data analysis to generate meaningful insights and publishable outcomes.',
      icon: BookOpen,
    },
    {
      id: 'PO5',
      title: 'Modern Tool Usage',
      desc: 'Use advanced tools, platforms, and technologies such as AI frameworks, cloud computing, DevOps, and HPC systems effectively.',
      icon: Monitor,
    },
    {
      id: 'PO6',
      title: 'Professional Ethics',
      desc: 'Understand and apply ethical principles, intellectual property rights, and professional responsibilities in computing practices.',
      icon: Shield,
    },
    {
      id: 'PO7',
      title: 'Communication Skills',
      desc: 'Communicate technical ideas effectively through reports, presentations, and collaboration in multidisciplinary teams.',
      icon: Users,
    },
    {
      id: 'PO8',
      title: 'Project Management',
      desc: 'Apply management principles to plan, execute, and deliver projects efficiently in individual and team settings.',
      icon: Briefcase,
    },
    {
      id: 'PO9',
      title: 'Industry Readiness',
      desc: 'Demonstrate practical skills through internships, projects, and industry exposure to perform effectively in professional environments.',
      icon: Zap,
    },
    {
      id: 'PO10',
      title: 'Lifelong Learning',
      desc: 'Engage in continuous learning to adapt to rapidly evolving technologies and maintain professional competence.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="details" className="pt-5 pb-5 bg-light position-relative">
      <div className="container">

        {/* Header */}
        <div className="mb-5 position-relative text-center">
          <h2 className="display-6 fw-bold text-dark mb-2">
            Program Details
          </h2>
          <div className="d-flex justify-content-center">
            <div className="rounded-pill" style={{ width: '6rem', height: '0.25rem', backgroundColor: '#F26520' }}></div>
          </div>
        </div>

        {/* Vision & Mission Split Section */}
        <div className="row g-5 mb-5">

          {/* Vision */}
          <div className="col-lg-6">
            <div className="card h-100 border-0 bg-white rounded-4 p-4 p-md-5 shadow-sm vm-card">
              <div className="d-flex align-items-center mb-4">
                <h3 className="h3 fw-bold mb-0" style={{ color: '#164265' }}>Vision</h3>
              </div>
              <ul className="list-unstyled text-secondary m-0 position-relative z-1 d-flex flex-column gap-3">
                {[
                  'To achieve pre-eminence in providing skill-enabled technical education in the domain of Computer Science Engineering, the focus is on creating a strong academic environment that blends theoretical knowledge with practical expertise.',
                  'This involves designing a curriculum that is industry-relevant, continuously updated, and aligned with emerging technologies such as artificial intelligence, data science, cybersecurity, and cloud computing.',
                  'By incorporating hands-on projects, internships, and real-world problem-solving approaches, students are equipped not only with technical proficiency but also with critical thinking and innovation skills.'
                ].map((item, idx) => (
                  <li key={idx} className="d-flex align-items-start">
                    <span className="rounded-circle flex-shrink-0 mt-2 me-3" style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#F26520' }}></span>
                    <span className="text-justify lh-base" style={{ fontSize: '1rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mission */}
          <div className="col-lg-6">
            <div className="card h-100 border-0 bg-white rounded-4 p-4 p-md-5 shadow-sm vm-card">
              <div className="d-flex align-items-center mb-4">
                <h3 className="h3 fw-bold mb-0" style={{ color: '#164265' }}>Mission</h3>
              </div>
              <ul className="list-unstyled text-secondary m-0 position-relative z-1 d-flex flex-column gap-3">
                {[
                  'To provide students with necessary skills and knowledge to meet current and future requirements using innovative teaching and learning approaches.',
                  'To impart skill-based computer science and engineering education by adopting contemporary tools and technologies.',
                  'To develop industry-academia alliance for practicing industry-oriented projects and internships to open new opportunities in industry, research, and entrepreneurship.',
                  'To keep the intellectual capital of the department motivated for learning about technological changes by providing them with a conductive environment.'
                ].map((item, idx) => (
                  <li key={idx} className="d-flex align-items-start">
                    <span className="rounded-circle flex-shrink-0 mt-2 me-3" style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#F26520' }}></span>
                    <span className="text-justify lh-base" style={{ fontSize: '1rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Program Outcomes */}
        <div>
          <div className="text-center mb-5">
            <h3 className="h2 fw-bolder mb-3" style={{ color: '#164265' }}>
              Program Outcomes
            </h3>
            <p className="text-secondary mx-auto lead" style={{ maxWidth: '42rem' }}>
              10 crucial program outcomes designed to transform you into a global technology leader.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {gains.map((gain) => {
              const Icon = gain.icon;
              return (
                <div key={gain.id} className="col-12 col-md-6 col-lg-4 col-xl-2" style={{ flex: '1 0 18%' }}>
                  <div className="card h-100 shadow-sm rounded-4 p-4 po-card">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      {/* Icon wrapper */}
                      <div className="po-icon-wrap d-flex align-items-center justify-content-center rounded-3 shadow-sm" style={{ width: '3rem', height: '3rem', backgroundColor: '#164265', color: '#ffffff' }}>
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      <span className="po-id fw-bold" style={{ fontSize: '0.75rem', color: '#F26520' }}>
                        {gain.id}
                      </span>
                    </div>
                    <h4 className="h6 fw-bold mb-2 lh-sm" style={{ color: '#164265' }}>{gain.title}</h4>
                    <p className="small text-secondary mb-0 text-justify lh-base flex-grow-1">{gain.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
