"use client";
import React, { useMemo, useState } from "react";
import { Mail } from "lucide-react";
import FilterButton from "./FilterButton";

const normalizeKey = (value) =>
  value
    .toLowerCase()
    .replace(/\b(dr|mr|ms)\.?\b/g, "")
    .replace(/[^a-z]/g, "");

const imageByKey = {
  amansrivastav: "/assets/images/Aman_Srivastav_21780-removebg-preview.png",
  anikeshkumar: "/assets/images/Anikesh_Kumar_21879-removebg-preview.png",
  anikesh: "/assets/images/Anikesh_Kumar_21879-removebg-preview.png",
  anshumankalia: "/assets/images/Anshuman_Kalia_21647-removebg-preview.png",
  bharti: "/assets/images/Bharti_21325-removebg-preview.png",
  deeptisingh: "/assets/images/Deepti_Singh_21456-removebg-preview.png",
  ankurbhardwaj: "/assets/images/Dr._Ankur_Bhardwaj_8172-removebg-preview.png",
  dilkeshwarpandey: "/assets/images/Dr._Dilkeshwar_Pandey_21018-removebg-preview.png",
  himanshichaudhary: "/assets/images/Dr._Himanshi_Chaudhary_20975-removebg-preview.png",
  madhugautam: "/assets/images/Dr._Madhu_Gautam_21036-removebg-preview.png",
  nehayadav: "/assets/images/Dr._Neha_Yadav_9356-removebg-preview.png",
  paritajain: "/assets/images/Dr._Parita_Jain_12075-removebg-preview.png",
  pranaymadhukarmeshram: "/assets/images/Dr._Pranay_Madhukar_Meshram_21717-removebg-preview.png",
  preetigarg: "/assets/images/Dr._Preeti_Garg_21073-removebg-preview.png",
  seemamaitrey: "/assets/images/Dr._Seema_Maitrey_5248-removebg-preview.png",
  swatisharma: "/assets/images/Dr._Swati_Sharma_6095-removebg-preview.png",
  upendramishra: "/assets/images/Dr._Upendra_Mishra_21138-removebg-preview.png",
  vineetsharma: "/assets/images/Dr._Vineet_Sharma_4478-removebg-preview.png",
  vineetkumarsharma: "/assets/images/Dr._Vineet_Sharma_4478-removebg-preview.png",
  gaganthakral: "/assets/images/Gagan_Thakral_21395-removebg-preview.png",
  gauravparashar: "/assets/images/Gaurav_Parashar_21081-removebg-preview.png",
  harshmodi: "/assets/images/Harsh_Modi_21650-removebg-preview.png",
  maitree: "/assets/images/Maitree_21779-removebg-preview.png",
  manidwivedi: "/assets/images/Mani_Dwivedi_21429-removebg-preview.png",
  mohittanwar: "/assets/images/Mohit_Tanwar_21781-removebg-preview.png",
  nandkishoryadav: "/assets/images/Nand_Kishor_Yadav_21838-removebg-preview.png",
  navdeshsingh: "/assets/images/Navdesh_Singh-removebg-preview.png",
  neetipahuja: "/assets/images/Neeti_Pahuja_21774-removebg-preview.png",
  nishugupta: "/assets/images/Nishu_Gupta_21433-removebg-preview.png",
  nitinkumar: "/assets/images/Nitin_Kumar_21908-removebg-preview.png",
  omprakashkushwaha: "/assets/images/Omprakash_Kushwaha_21641-removebg-preview.png",
  pavansharma: "/assets/images/Pavan_Sharma_21681-removebg-preview.png",
  prabhjotkaur: "/assets/images/Prabhjotkaur_21831-removebg-preview.png",
  pramodnath: "/assets/images/Pramod_Nath_21899-removebg-preview.png",
  pushpendrakumar: "/assets/images/Pushpendra_Kumar_21326-removebg-preview.png",
  rahulkumarsharma: "/assets/images/Rahul_Kumar_Sharma_21380-removebg-preview.png",
  rajanishkumarjain: "/assets/images/Rajanish_Kumar_Jain_21777-removebg-preview.png",
  ravitomer: "/assets/images/Ravi_Tomer_16824-removebg-preview.png",
  rishabhsinghrathore: "/assets/images/Rishabh_Singh_Rathore_21877-removebg-preview.png",
  rishabsinghrathore: "/assets/images/Rishabh_Singh_Rathore_21877-removebg-preview.png",
  sandeepkumar: "/assets/images/Sandeep_Kumar_9301-removebg-preview.png",
  sauravchandra: "/assets/images/Saurav_Chandra_21113-removebg-preview.png",
  soniaverma: "/assets/images/Sonia_Verma_21906-removebg-preview.png",
  surbhijain: "/assets/images/Surbhi_Jain_21778-removebg-preview.png",
  umangrastogi: "/assets/images/Umang_Rastogi_21105-removebg-preview.png",
  vaibhawkori: "/assets/images/Vaibhaw_Kori_21824-removebg-preview.png",
  vipindeval: "/assets/images/Vipin_Deval_21104-removebg-preview.png",
  yogendrapal: "/assets/images/Yogendra_Pal_21645-removebg-preview.png",
  jaskiratsingh: "/assets/images/jaskirat_singh.png",
};

const facultyMembers = [
  { id: 1, name: "Dr. Vineet Kumar Sharma", designation: "Senior Professor\nDean CSE" },
  { id: 2, name: "Dr. Madhu Gautam", designation: "Associate Professor\nProgram Head of M.Tech" },
  { id: 3, name: "Dr. Dilkeshwar Pandey", designation: "Professor" },
  { id: 4, name: "Dr. Swati Sharma", designation: "Associate Professor" },
  { id: 5, name: "Dr. Parita Jain", designation: "Professor" },
  { id: 6, name: "Dr. Seema Maitrey", designation: "Associate Professor" },
  { id: 7, name: "Dr. Ankur Bhardwaj", designation: "Associate Professor" },
  { id: 8, name: "Dr. Neha Yadav", designation: "Associate Professor" },
  { id: 9, name: "Dr. Pranay Madhukar Meshram", designation: "Associate Professor" },
  { id: 10, name: "Dr. Preeti Garg", designation: "Associate Professor" },
  { id: 11, name: "Dr. Upendra Mishra", designation: "Associate Professor" },
  { id: 12, name: "Mr. Saurav Chandra", designation: "Assistant Professor" },
  { id: 13, name: "Dr. Himanshi Chaudhary", designation: "Assistant Professor" },
  { id: 14, name: "Mr. Gaurav Parashar", designation: "Assistant Professor" },
  { id: 15, name: "Mr. Vipin Deval", designation: "Assistant Professor" },
  { id: 16, name: "Mr. Umang Rastogi", designation: "Assistant Professor" },
  { id: 17, name: "Dr. Bharti", designation: "Assistant Professor" },
  { id: 18, name: "Mr. Pushpendra Kumar", designation: "Assistant Professor" },
  { id: 19, name: "Mr. Rahul Kumar Sharma", designation: "Assistant Professor" },
  { id: 20, name: "Mr. Gagan Thakral", designation: "Assistant Professor" },
  { id: 21, name: "Ms. Mani Dwivedi", designation: "Assistant Professor" },
  { id: 22, name: "Ms. Nishu Gupta", designation: "Assistant Professor" },
  { id: 23, name: "Ms. Deepti Singh", designation: "Assistant Professor" },
  { id: 24, name: "Mr. Omprakash Kushwaha", designation: "Assistant Professor" },
  { id: 25, name: "Mr. Yogendra Pal", designation: "Assistant Professor" },
  { id: 26, name: "Mr. Anshuman Kalia", designation: "Assistant Professor" },
  { id: 27, name: "Mr. Harsh Modi", designation: "Assistant Professor" },
  { id: 28, name: "Mr. Pavan Sharma", designation: "Assistant Professor" },
  { id: 29, name: "Ms. Neeti Pahuja", designation: "Assistant Professor" },
  { id: 30, name: "Mr. Rajanish Kumar Jain", designation: "Assistant Professor" },
  { id: 31, name: "Ms. Surbhi Jain", designation: "Assistant Professor" },
  { id: 32, name: "Ms. Maitree", designation: "Assistant Professor" },
  { id: 33, name: "Mr. Aman Srivastav", designation: "Assistant Professor" },
  { id: 34, name: "Mr. Mohit Tanwar", designation: "Assistant Professor" },
  { id: 35, name: "Ms. Prabhjot Kaur", designation: "Assistant Professor" },
  { id: 36, name: "Dr. Nand Kishor Yadav", designation: "Assistant Professor" },
  { id: 37, name: "Mr. Navdesh Singh", designation: "Assistant Professor" },
  { id: 38, name: "Mr. Rishab Singh Rathore", designation: "Assistant Professor" },
  { id: 39, name: "Mr. Anikesh", designation: "Assistant Professor" },
  { id: 40, name: "Mr. Ravi Tomer", designation: "Assistant Manager" },
  { id: 41, name: "Mr. Sandeep Kumar", designation: "Officer-IT" },
  { id: 42, name: "Mr. Jaskirat Singh", designation: "Adjunct Faculty" },
];

const inferDegree = (name) => (name.startsWith("Dr.") ? "Ph.D." : "");

const generateEmail = (name) => {
  const localPart = name
    .replace(/\b(Dr|Mr|Ms)\.?\s*/gi, "")
    .replace(/[^a-zA-Z\s]/g, " ")
    .trim()
    .split(/\s+/)
    .join(".")
    .toLowerCase();
  return `${localPart}@kiet.edu`;
};

const candidateKeysForName = (name) => {
  const stripped = name
    .replace(/\b(Dr|Mr|Ms)\.?\s*/gi, "")
    .replace(/[^a-zA-Z\s]/g, " ");
  const parts = stripped.trim().split(/\s+/).filter(Boolean);
  const keys = [];
  keys.push(normalizeKey(name));
  keys.push(normalizeKey(stripped));
  if (parts.length >= 2) {
    keys.push(normalizeKey(`${parts[0]} ${parts[parts.length - 1]}`));
  }
  if (parts.length >= 3) {
    keys.push(
      normalizeKey(`${parts[0]} ${parts[1]} ${parts[parts.length - 1]}`),
    );
  }
  return Array.from(new Set(keys)).filter(Boolean);
};

const findImageForFaculty = (name) => {
  const keys = candidateKeysForName(name);
  for (const key of keys) {
    const src = imageByKey[key];
    if (src) return src;
  }
  return null;
};

const tierForDesignation = (designation) => {
  if (
    designation.startsWith("Senior Professor") ||
    designation.startsWith("Professor")
  )
    return "professors";
  if (designation.startsWith("Associate Professor")) return "associates";
  if (designation.startsWith("Assistant Professor")) return "assistants";
  if (designation === "Adjunct Faculty") return "adjunct";
  return "others";
};

const tierMeta = {
  professors: { label: "Professors", color: "#164265" },
  associates: { label: "Associate Professors", color: "#164265" },
  assistants: { label: "Assistant Professors", color: "#164265" },
  adjunct: { label: "Adjunct Faculty", color: "#164265" },
  others: { label: "Other Roles", color: "#164265" },
};

export default function Faculty() {
  const [activeFilter, setActiveFilter] = useState("all");

  const facultyWithMeta = useMemo(
    () =>
      facultyMembers.map((member) => ({
        ...member,
        degree: inferDegree(member.name),
        email: generateEmail(member.name),
        imageSrc: findImageForFaculty(member.name),
      })),
    [],
  );

  const grouped = useMemo(() => {
    return facultyWithMeta.reduce(
      (acc, faculty) => {
        const tier = tierForDesignation(faculty.designation);
        acc[tier].push(faculty);
        return acc;
      },
      {
        professors: [],
        associates: [],
        assistants: [],
        adjunct: [],
        others: [],
      },
    );
  }, [facultyWithMeta]);

  // Get filtered faculty based on active filter
  const filteredFaculty = useMemo(() => {
    if (activeFilter === "all") {
      return facultyWithMeta;
    }
    return grouped[activeFilter] || [];
  }, [activeFilter, facultyWithMeta, grouped]);

  // Handle filter button click
  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  const FacultyCard = ({ faculty }) => (
    <div className="card border-0 shadow-sm rounded-4 flex-shrink-0 faculty-card position-relative transition-all d-flex flex-column" style={{ width: '200px', height: '290px', overflow: 'hidden' }}>
      {/* Top photo area - edge to edge */}
      <div className="bg-light flex-shrink-0 d-flex align-items-end justify-content-center position-relative w-100" style={{ height: '170px' }}>
        {faculty.imageSrc ? (
          <img
            src={faculty.imageSrc}
            alt={faculty.name}
            className="w-100 h-100 object-fit-contain object-position-bottom transition-transform"
            style={{ transition: 'transform 0.5s' }}
            loading="lazy"
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          />
        ) : (
          <div className="h-100 w-100" />
        )}
      </div>

      <div className="card-body flex-grow-1 d-flex flex-column align-items-center text-center p-3 z-1 bg-white position-relative">
        <h4 className="h6 fw-bold text-dark mb-1 lh-sm w-100 text-truncate" style={{ color: '#164265' }}>
          {faculty.name}
        </h4>
        <p className="small text-secondary mb-1 lh-sm whitespace-pre-line" style={{ fontSize: '0.75rem' }}>
          {faculty.designation}
        </p>
        
        {/* Email Display Effect */}
        <div className="mt-auto pt-2 w-100 d-flex justify-content-center faculty-mail-container">
          <div className="d-flex align-items-center rounded-pill border bg-light text-secondary transition-all overflow-hidden faculty-mail-pill" style={{ height: '32px', maxWidth: '32px', cursor: 'pointer' }}>
            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle mail-icon-wrapper" style={{ width: '30px', height: '30px' }}>
              <Mail size={14} />
            </div>
            <div className="mail-text fw-semibold tracking-wide text-truncate" style={{ fontSize: '0.7rem' }}>
              {faculty.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="faculty" className="py-5 bg-light">
      <style>{`
        .faculty-card:hover {
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
          z-index: 10;
        }
        .faculty-mail-pill {
          transition: max-width 0.4s cubic-bezier(0.23,1,0.32,1), background-color 0.3s, border-color 0.3s, color 0.3s !important;
        }
        .faculty-mail-pill .mail-text {
          opacity: 0;
          transition: opacity 0.3s;
        }
        .faculty-mail-pill:hover {
          max-width: 200px !important;
          background-color: #273e5a !important;
          color: white !important;
          border-color: #273e5a !important;
        }
        .faculty-mail-pill:hover .mail-text {
          opacity: 1;
          padding-right: 12px;
          padding-left: 4px;
        }
        .faculty-mail-pill:hover .mail-icon-wrapper {
          color: white !important;
        }
        /* Hide scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="container text-center">
        <div className="mb-5 position-relative">
          <h2 className="display-6 fw-bold text-dark mb-2">
            Faculty
          </h2>
          <div className="d-flex justify-content-center">
            <div className="rounded-pill" style={{ width: '6rem', height: '0.25rem', backgroundColor: '#F26520' }}></div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-4 overflow-x-auto no-scrollbar pb-2 pt-2">
          <div className="d-flex gap-3 justify-content-xl-center" style={{ minWidth: "max-content" }}>
            <FilterButton
              filterId="all"
              label="All Faculty"
              count={facultyWithMeta.length}
              isActive={activeFilter === "all"}
              color="#F26520"
              onClick={handleFilterClick}
            />
            <FilterButton
              filterId="professors"
              label="Professors"
              count={grouped.professors.length}
              isActive={activeFilter === "professors"}
              color={tierMeta.professors.color}
              onClick={handleFilterClick}
            />
            <FilterButton
              filterId="associates"
              label="Associate Professors"
              count={grouped.associates.length}
              isActive={activeFilter === "associates"}
              color={tierMeta.associates.color}
              onClick={handleFilterClick}
            />
            <FilterButton
              filterId="assistants"
              label="Assistant Professors"
              count={grouped.assistants.length}
              isActive={activeFilter === "assistants"}
              color={tierMeta.assistants.color}
              onClick={handleFilterClick}
            />
            <FilterButton
              filterId="adjunct"
              label="Adjunct Faculty"
              count={grouped.adjunct.length}
              isActive={activeFilter === "adjunct"}
              color={tierMeta.adjunct.color}
              onClick={handleFilterClick}
            />
            <FilterButton
              filterId="others"
              label="Others"
              count={grouped.others.length}
              isActive={activeFilter === "others"}
              color={tierMeta.others.color}
              onClick={handleFilterClick}
            />
          </div>
        </div>

        {/* Faculty Grid - using native browser scrolling */}
        <div className="overflow-x-auto no-scrollbar pb-4 pt-2">
          <div className="d-flex gap-4" style={{ minWidth: "max-content" }}>
            {filteredFaculty.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredFaculty.length === 0 && (
          <div className="text-center py-5">
            <p className="text-secondary">
              No faculty members found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
