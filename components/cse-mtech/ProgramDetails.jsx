"use client";
import React from 'react';
import { Target, Compass, Zap, BookOpen, Brain, Settings, FileSearch, Monitor, Shield, Users, Briefcase, GraduationCap } from 'lucide-react';

export default function ProgramDetails() {


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
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card border-0 bg-white rounded-4 p-4 p-md-5 shadow-sm vm-card">
              <div className="d-flex align-items-center mb-4">
                <h3 className="h3 fw-bold mb-0" style={{ color: '#164265' }}>Program Outcomes</h3>
              </div>
              <ul className="list-unstyled text-secondary m-0 position-relative z-1 d-flex flex-column gap-3">
                {[
                  'Students will be able to apply advanced knowledge and skills in Computer Science and Engineering to design and develop innovative solutions, addressing real-world challenges in various domains.',
                  'Students will exhibit leadership qualities and effectively work in multidisciplinary teams, contributing to project management, decision-making, and innovation within the industry or academia.',
                  'Students will engage in cutting-edge research, contributing to advancements in science and engineering through research publications, patents, and the development of innovative solutions to address current and future challenges.'
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

      </div>
    </section>
  );
}
