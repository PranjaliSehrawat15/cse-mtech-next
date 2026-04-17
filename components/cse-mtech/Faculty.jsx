"use client";
import React, { useMemo, useState, useCallback } from "react";
import { Mail, Check } from "lucide-react";
import FilterButton from "./FilterButton";

const normalizeKey = (value) =>
  value
    .toLowerCase()
    .replace(/\b(dr|mr|ms)\.?\b/g, "")
    .replace(/[^a-z]/g, "");

const imageByKey = {
  amansrivastav: "/assets/cse-mtech-assets/images/Aman_Srivastav_21780-removebg-preview.png",
  anikeshkumar: "/assets/cse-mtech-assets/images/Anikesh_Kumar_21879-removebg-preview.png",
  anikesh: "/assets/cse-mtech-assets/images/Anikesh_Kumar_21879-removebg-preview.png",
  anshumankalia: "/assets/cse-mtech-assets/images/Anshuman_Kalia_21647-removebg-preview.png",
  bharti: "/assets/cse-mtech-assets/images/Bharti_21325-removebg-preview.png",
  deeptisingh: "/assets/cse-mtech-assets/images/Deepti_Singh_21456-removebg-preview.png",
  ankurbhardwaj: "/assets/cse-mtech-assets/images/Dr._Ankur_Bhardwaj_8172-removebg-preview.png",
  dilkeshwarpandey:
    "/assets/cse-mtech-assets/images/Dr._Dilkeshwar_Pandey_21018-removebg-preview.png",
  himanshichaudhary:
    "/assets/cse-mtech-assets/images/Dr._Himanshi_Chaudhary_20975-removebg-preview.png",
  madhugautam: "/assets/cse-mtech-assets/images/Dr._Madhu_Gautam_21036-removebg-preview.png",
  nehayadav: "/assets/cse-mtech-assets/images/Dr._Neha_Yadav_9356-removebg-preview.png",
  paritajain: "/assets/cse-mtech-assets/images/Dr._Parita_Jain_12075-removebg-preview.png",
  pranaymadhukarmeshram:
    "/assets/cse-mtech-assets/images/Dr._Pranay_Madhukar_Meshram_21717-removebg-preview.png",
  preetigarg: "/assets/cse-mtech-assets/images/Dr._Preeti_Garg_21073-removebg-preview.png",
  seemamaitrey: "/assets/cse-mtech-assets/images/Dr._Seema_Maitrey_5248-removebg-preview.png",
  swatisharma: "/assets/cse-mtech-assets/images/Dr._Swati_Sharma_6095-removebg-preview.png",
  upendramishra: "/assets/cse-mtech-assets/images/Dr._Upendra_Mishra_21138-removebg-preview.png",
  vineetsharma: "/assets/cse-mtech-assets/images/Dr._Vineet_Sharma_4478-removebg-preview.png",
  vineetkumarsharma:
    "/assets/cse-mtech-assets/images/Dr._Vineet_Sharma_4478-removebg-preview.png",
  gaganthakral: "/assets/cse-mtech-assets/images/Gagan_Thakral_21395-removebg-preview.png",
  gauravparashar: "/assets/cse-mtech-assets/images/Gaurav_Parashar_21081-removebg-preview.png",
  harshmodi: "/assets/cse-mtech-assets/images/Harsh_Modi_21650-removebg-preview.png",
  maitree: "/assets/cse-mtech-assets/images/Maitree_21779-removebg-preview.png",
  manidwivedi: "/assets/cse-mtech-assets/images/Mani_Dwivedi_21429-removebg-preview.png",
  mohittanwar: "/assets/cse-mtech-assets/images/Mohit_Tanwar_21781-removebg-preview.png",
  nandkishoryadav:
    "/assets/cse-mtech-assets/images/Nand_Kishor_Yadav_21838-removebg-preview.png",
  navdeshsingh: "/assets/cse-mtech-assets/images/Navdesh_Singh-removebg-preview.png",
  neetipahuja: "/assets/cse-mtech-assets/images/Neeti_Pahuja_21774-removebg-preview.png",
  nishugupta: "/assets/cse-mtech-assets/images/Nishu_Gupta.png",
  nitinkumar: "/assets/cse-mtech-assets/images/Nitin_Kumar_21908-removebg-preview.png",
  omprakashkushwaha:
    "/assets/cse-mtech-assets/images/Omprakash_Kushwaha_21641-removebg-preview.png",
  pavansharma: "/assets/cse-mtech-assets/images/Pavan_Sharma_21681-removebg-preview.png",
  prabhjotkaur: "/assets/cse-mtech-assets/images/Prabhjotkaur_21831-removebg-preview.png",
  pramodnath: "/assets/cse-mtech-assets/images/Pramod_Nath_21899-removebg-preview.png",
  pushpendrakumar: "/assets/cse-mtech-assets/images/Pushpendra_Kumar_21326-removebg-preview.png",
  rahulkumarsharma:
    "/assets/cse-mtech-assets/images/Rahul_Kumar_Sharma_21380-removebg-preview.png",
  rajanishkumarjain:
    "/assets/cse-mtech-assets/images/Rajanish_Kumar_Jain_21777-removebg-preview.png",
  ravitomer: "/assets/cse-mtech-assets/images/Ravi_Tomer_16824-removebg-preview.png",
  rishabhsinghrathore:
    "/assets/cse-mtech-assets/images/Rishabh_Singh_Rathore_21877-removebg-preview.png",
  rishabsinghrathore:
    "/assets/cse-mtech-assets/images/Rishabh_Singh_Rathore_21877-removebg-preview.png",
  sandeepkumar: "/assets/cse-mtech-assets/images/Sandeep_Kumar_9301-removebg-preview.png",
  sauravchandra: "/assets/cse-mtech-assets/images/Saurav_Chandra_21113-removebg-preview.png",
  soniaverma: "/assets/cse-mtech-assets/images/Sonia_Verma_21906-removebg-preview.png",
  surbhijain: "/assets/cse-mtech-assets/images/Surbhi_Jain_21778-removebg-preview.png",
  umangrastogi: "/assets/cse-mtech-assets/images/Umang_Rastogi_21105-removebg-preview.png",
  vaibhawkori: "/assets/cse-mtech-assets/images/Vaibhaw_Kori_21824-removebg-preview.png",
  vipindeval: "/assets/cse-mtech-assets/images/Vipin_Deval_21104-removebg-preview.png",
  yogendrapal: "/assets/cse-mtech-assets/images/Yogendra_Pal_21645-removebg-preview.png",
  jaskiratsingh: "/assets/cse-mtech-assets/images/jaskirat_singh.png",
  riturai: "/assets/cse-mtech-assets/images/ritu-removebg-preview(3).png",
};

const facultyMembers = [
  {
    id: 1,
    name: "Dr. Vineet Kumar Sharma",
    designation: "Senior Professor\nDean CSE",
    email: "vineet.sharma@kiet.edu",
  },
  {
    id: 2,
    name: "Dr. Madhu Gautam",
    designation: "Associate Professor\nProgram Head (M.Tech)",
    email: "madhu.gautam@kiet.edu",
  },
  {
    id: 3,
    name: "Dr. Dilkeshwar Pandey",
    designation: "Professor",
    email: "dilkeshwar.pandey@kiet.edu",
  },
  {
    id: 4,
    name: "Dr. Swati Sharma",
    designation: "Associate Professor",
    email: "swati.sharma@kiet.edu",
  },
  {
    id: 5,
    name: "Dr. Parita Jain",
    designation: "Professor",
    email: "parita.jain@kiet.edu",
  },
  {
    id: 6,
    name: "Dr. Seema Maitrey",
    designation: "Associate Professor",
    email: "seema.maitrey@kiet.edu",
  },
  {
    id: 7,
    name: "Dr. Ankur Bhardwaj",
    designation: "Associate Professor",
    email: "ankur.bhardwaj@kiet.edu",
  },
  {
    id: 8,
    name: "Dr. Neha Yadav",
    designation: "Associate Professor",
    email: "neha.yadav@kiet.edu",
  },
  {
    id: 9,
    name: "Dr. Pranay Madhukar Meshram",
    designation: "Associate Professor",
    email: "pranay.meshram@kiet.edu",
  },
  {
    id: 10,
    name: "Dr. Preeti Garg",
    designation: "Associate Professor",
    email: "preeti.garg@kiet.edu",
  },
  {
    id: 11,
    name: "Dr. Upendra Mishra",
    designation: "Associate Professor",
    email: "upendra.mishra@kiet.edu",
  },
  {
    id: 12,
    name: "Mr. Saurav Chandra",
    designation: "Assistant Professor",
    email: "saurav.chandra@kiet.edu",
  },
  {
    id: 13,
    name: "Dr. Himanshi Chaudhary",
    designation: "Assistant Professor",
    email: "himanshi.chaudhary@kiet.edu",
  },
  {
    id: 14,
    name: "Mr. Gaurav Parashar",
    designation: "Assistant Professor",
    email: "gaurav.parashar@kiet.edu",
  },
  {
    id: 15,
    name: "Mr. Vipin Deval",
    designation: "Assistant Professor",
    email: "vipin.deval@kiet.edu",
  },
  {
    id: 16,
    name: "Mr. Umang Rastogi",
    designation: "Assistant Professor",
    email: "umang.rastogi@kiet.edu",
  },
  {
    id: 17,
    name: "Dr. Bharti",
    designation: "Assistant Professor",
    email: "bharti.cse@kiet.edu",
  },
  {
    id: 18,
    name: "Mr. Pushpendra Kumar",
    designation: "Assistant Professor",
    email: "pushpendra.kumar@kiet.edu",
  },
  {
    id: 19,
    name: "Mr. Rahul Kumar Sharma",
    designation: "Assistant Professor",
    email: "rahul.sharma@kiet.edu",
  },
  {
    id: 20,
    name: "Mr. Gagan Thakral",
    designation: "Assistant Professor",
    email: "gagan.thakral@kiet.edu",
  },
  {
    id: 21,
    name: "Ms. Mani Dwivedi",
    designation: "Assistant Professor",
    email: "mani.dwivedi@kiet.edu",
  },
  {
    id: 22,
    name: "Ms. Nishu Gupta",
    designation: "Assistant Professor",
    email: "nishu.gupta@kiet.edu",
  },
  {
    id: 23,
    name: "Ms. Deepti Singh",
    designation: "Assistant Professor",
    email: "deepti.singh@kiet.edu",
  },
  {
    id: 24,
    name: "Mr. Omprakash Kushwaha",
    designation: "Assistant Professor",
    email: "omprakash.kushwaha@kiet.edu",
  },
  {
    id: 25,
    name: "Mr. Yogendra Pal",
    designation: "Assistant Professor",
    email: "yogendra.pal@kiet.edu",
  },
  {
    id: 26,
    name: "Mr. Anshuman Kalia",
    designation: "Assistant Professor",
    email: "anshuman.kalia@kiet.edu",
  },
  {
    id: 27,
    name: "Mr. Harsh Modi",
    designation: "Assistant Professor",
    email: "harsh.modi@kiet.edu",
  },
  {
    id: 28,
    name: "Mr. Pavan Sharma",
    designation: "Assistant Professor",
    email: "pavan.sharma@kiet.edu",
  },
  {
    id: 29,
    name: "Ms. Neeti Pahuja",
    designation: "Assistant Professor",
    email: "neeti.pahuja@kiet.edu",
  },
  {
    id: 30,
    name: "Mr. Rajanish Kumar Jain",
    designation: "Assistant Professor",
    email: "rajanish.jain@kiet.edu",
  },
  {
    id: 31,
    name: "Ms. Surbhi Jain",
    designation: "Assistant Professor",
    email: "surbhi.jain@kiet.edu",
  },
  {
    id: 32,
    name: "Ms. Maitree",
    designation: "Assistant Professor",
    email: "maitree.cse@kiet.edu",
  },
  {
    id: 33,
    name: "Mr. Aman Srivastav",
    designation: "Assistant Professor",
    email: "aman.srivastav@kiet.edu",
  },
  {
    id: 34,
    name: "Mr. Mohit Tanwar",
    designation: "Assistant Professor",
    email: "mohit.tanwar@kiet.edu",
  },
  {
    id: 35,
    name: "Mr. Vaibhaw Kori",
    designation: "Assistant Professor",
    email: "vaibhaw.kori@kiet.edu",
  },
  {
    id: 36,
    name: "Ms. Prabhjot Kaur",
    designation: "Assistant Professor",
    email: "prabhjot.kaur@kiet.edu",
  },
  {
    id: 37,
    name: "Dr. Nand Kishor Yadav",
    designation: "Assistant Professor",
    email: "nand.yadav@kiet.edu",
  },
  {
    id: 38,
    name: "Mr. Navdesh Singh",
    designation: "Assistant Professor",
    email: "navdesh.singh@kiet.edu",
  },
  {
    id: 39,
    name: "Mr. Rishab Singh Rathore",
    designation: "Assistant Professor",
    email: "rishab.rathore@kiet.edu",
  },
  {
    id: 40,
    name: "Mr. Anikesh Kumar",
    designation: "Assistant Professor",
    email: "anikesh.kumar@kiet.edu",
  },
  {
    id: 41,
    name: "Mr. Pramod Nath",
    designation: "Assistant Professor",
    email: "pramod.nath@kiet.edu",
  },
  {
    id: 42,
    name: "Ms. Sonia Verma",
    designation: "Assistant Professor",
    email: "sonia.verma@kiet.edu",
  },
  {
    id: 43,
    name: "Mr. Nitin Kumar",
    designation: "Assistant Professor",
    email: "nitin.kumar@kiet.edu",
  },
  {
    id: 44,
    name: "Ms. Ritu Rai",
    designation: "Assistant Professor",
    email: "ritu.rai@kiet.edu",
  },
  {
    id: 45,
    name: "Mr. Ravi Tomer",
    designation: "Assistant Manager",
    email: "ravi.tomer@kiet.edu",
  },
  {
    id: 46,
    name: "Mr. Sandeep Kumar",
    designation: "Officer-IT",
    email: "sandeep.kumar@kiet.edu",
  },
  {
    id: 47,
    name: "Mr. Jaskirat Singh",
    designation: "Adjunct Faculty",
    email: "jaskirat.singh@kiet.edu",
  },
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

// Per-image style overrides for photos that are not removebg cutouts
const imageStyleOverrides = {
  "Nishu_Gupta.png": {
    objectFit: "cover",
    objectPosition: "center 20%",
  },
};

const getImageStyle = (src) => {
  if (!src) return {};
  const filename = src.split("/").pop();
  return imageStyleOverrides[filename] || {};
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
  others: { label: "Instructors", color: "#164265" },
};

function FacultyCard({ faculty }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(faculty.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [faculty.email]);

  return (
    <div
      className="card border-0 shadow-sm rounded-4 flex-shrink-0 faculty-card position-relative transition-all d-flex flex-column"
      style={{ width: "200px", height: "290px" }}
    >
      {/* Top photo area */}
      <div
        className="bg-light d-flex align-items-end justify-content-center position-relative w-100 rounded-top-4"
        style={{ height: "200px", overflow: "hidden" }}
      >
        {faculty.imageSrc ? (
          <img
            src={faculty.imageSrc}
            alt={faculty.name}
            className="w-100 h-100"
            style={{
              transition: "transform 0.5s",
              objectFit: faculty.imageSrc.includes("removebg")
                ? "contain"
                : "cover",
              objectPosition: faculty.imageSrc.includes("removebg")
                ? "bottom"
                : "top center",
              ...getImageStyle(faculty.imageSrc),
            }}
            loading="lazy"
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          <div className="h-100 w-100" />
        )}
      </div>

      <div className="card-body flex-grow-1 d-flex flex-column align-items-center text-center px-2 pt-2 pb-2 bg-white rounded-bottom-4">
        <h4
          className="fs-6 fw-bold mb-1 lh-sm w-100 text-truncate"
          style={{ color: "#164265", fontSize: "0.82rem" }}
        >
          {faculty.name}
        </h4>
        <p
          className="text-secondary mb-0 lh-sm text-center"
          style={{ fontSize: "0.72rem", whiteSpace: "pre-line" }}
        >
          {faculty.designation}
        </p>

        {/* Mail copy button */}
        <div className="mt-auto pt-2 w-100 d-flex justify-content-center">
          <div
            className={`faculty-mail-pill d-flex align-items-center rounded-pill border overflow-hidden${copied ? " copied" : ""}`}
            title={copied ? "Copied!" : `Click to copy: ${faculty.email}`}
            onClick={handleCopy}
          >
            <div
              className="mail-icon-wrapper d-flex flex-shrink-0 align-items-center justify-content-center"
              style={{ width: "30px", height: "30px" }}
            >
              {copied ? <Check size={14} /> : <Mail size={14} />}
            </div>
            <span
              className="mail-text fw-semibold text-truncate"
              style={{ fontSize: "0.68rem" }}
            >
              {copied ? "Copied!" : faculty.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Faculty() {
  const [activeFilter, setActiveFilter] = useState("all");

  const facultyWithMeta = useMemo(
    () =>
      facultyMembers.map((member) => ({
        ...member,
        degree: inferDegree(member.name),
        email: member.email || generateEmail(member.name),
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

  return (
    <section id="faculty" className="py-5 bg-light">
      <style>{`
        .faculty-card {
          transition: box-shadow 0.3s;
        }
        .faculty-card:hover {
          box-shadow: 0 10px 25px rgba(0,0,0,0.12) !important;
          z-index: 10;
        }
        /* Mail pill */
        .faculty-mail-pill {
          height: 30px;
          max-width: 30px;
          cursor: pointer;
          background: #f8f9fa;
          color: #6c757d;
          border-color: #dee2e6 !important;
          transition: max-width 0.4s cubic-bezier(0.23,1,0.32,1),
                      background-color 0.3s,
                      border-color 0.3s,
                      color 0.3s;
          white-space: nowrap;
        }
        .faculty-mail-pill .mail-text {
          opacity: 0;
          max-width: 0;
          padding: 0;
          transition: opacity 0.3s, max-width 0.4s cubic-bezier(0.23,1,0.32,1), padding 0.3s;
          overflow: hidden;
        }
        .faculty-mail-pill:hover,
        .faculty-mail-pill.copied {
          max-width: 220px !important;
          background-color: #273e5a !important;
          color: white !important;
          border-color: #273e5a !important;
        }
        .faculty-mail-pill:hover .mail-text,
        .faculty-mail-pill.copied .mail-text {
          opacity: 1;
          max-width: 180px;
          padding-right: 10px;
          padding-left: 2px;
        }
        .faculty-mail-pill.copied {
          background-color: #1a7a4a !important;
          border-color: #1a7a4a !important;
        }
        /* Hide scrollbar */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <div className="container text-center">
        <div className="mb-5 position-relative">
          <h2 className="fs-2 fw-bold text-dark mb-2">Faculty</h2>
          <div className="d-flex justify-content-center">
            <div
              className="rounded-pill"
              style={{
                width: "6rem",
                height: "0.25rem",
                backgroundColor: "#F26520",
              }}
            ></div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-4 overflow-x-auto no-scrollbar pb-2 pt-2">
          <div
            className="d-flex gap-3 justify-content-xl-center"
            style={{ minWidth: "max-content" }}
          >
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
              label="Instructors"
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
