"use client";
import React from "react";

export default function Placement() {
  const logos = [
    "/assets/cse-mtech-assets/recruiters/accenture.webp",
    "/assets/cse-mtech-assets/recruiters/adani.webp",
    "/assets/cse-mtech-assets/recruiters/adobe.webp",
    "/assets/cse-mtech-assets/recruiters/airtel.webp",
    "/assets/cse-mtech-assets/recruiters/amazon.webp",
    "/assets/cse-mtech-assets/recruiters/american_express.webp",
    "/assets/cse-mtech-assets/recruiters/atlassian.webp",
    "/assets/cse-mtech-assets/recruiters/axtria.webp",
    "/assets/cse-mtech-assets/recruiters/capegmini.webp",
    "/assets/cse-mtech-assets/recruiters/cisco.webp",
    "/assets/cse-mtech-assets/recruiters/cognizant.webp",
    "/assets/cse-mtech-assets/recruiters/consult_add.webp",
    "/assets/cse-mtech-assets/recruiters/delliolite.webp",
    "/assets/cse-mtech-assets/recruiters/Federal_Bank.webp",
    "/assets/cse-mtech-assets/recruiters/flipkart.webp",
    "/assets/cse-mtech-assets/recruiters/freeCharge.webp",
    "/assets/cse-mtech-assets/recruiters/goldman_sacs.webp",
    "/assets/cse-mtech-assets/recruiters/google.webp",
    "/assets/cse-mtech-assets/recruiters/hcl.webp",
    "/assets/cse-mtech-assets/recruiters/indus_valley.webp",
    "/assets/cse-mtech-assets/recruiters/infosys.webp",
    "/assets/cse-mtech-assets/recruiters/innovacer.webp",
    "/assets/cse-mtech-assets/recruiters/jfg.webp",
    "/assets/cse-mtech-assets/recruiters/jpmorgan.webp",
    "/assets/cse-mtech-assets/recruiters/juspay.webp",
    "/assets/cse-mtech-assets/recruiters/jsw.webp",
    "/assets/cse-mtech-assets/recruiters/lutron.webp",
    "/assets/cse-mtech-assets/recruiters/mamaearth.webp",
    "/assets/cse-mtech-assets/recruiters/maq_software.webp",
    "/assets/cse-mtech-assets/recruiters/microsoft.webp",
    "/assets/cse-mtech-assets/recruiters/myntra.webp",
    "/assets/cse-mtech-assets/recruiters/new_gen.webp",
    "/assets/cse-mtech-assets/recruiters/nokia.webp",
    "/assets/cse-mtech-assets/recruiters/procdna.webp",
    "/assets/cse-mtech-assets/recruiters/rapipay.webp",
    "/assets/cse-mtech-assets/recruiters/samsung.webp",
    "/assets/cse-mtech-assets/recruiters/servuc_now.webp",
    "/assets/cse-mtech-assets/recruiters/sopra_steria.webp",
    "/assets/cse-mtech-assets/recruiters/tCamp.webp",
    "/assets/cse-mtech-assets/recruiters/tcs.webp",
    "/assets/cse-mtech-assets/recruiters/tech_mahindra.webp",
    "/assets/cse-mtech-assets/recruiters/tejas.webp",
    "/assets/cse-mtech-assets/recruiters/torrent.webp",
    "/assets/cse-mtech-assets/recruiters/ui_path.webp",
    "/assets/cse-mtech-assets/recruiters/ukg.webp",
    "/assets/cse-mtech-assets/recruiters/unilever.webp",
    "/assets/cse-mtech-assets/recruiters/unthinkable.webp",
    "/assets/cse-mtech-assets/recruiters/wipro.webp",
  ];

  return (
    <section id="placement" className="pt-5 bg-white position-relative overflow-hidden">
      <div className="container position-relative z-1 mb-5">
        <div className="text-center mb-5">
          <div className="mb-4 position-relative text-center">
            <h2 className="fs-2 fw-bold text-dark mb-2">
              Placement Statistics
            </h2>
            <div className="d-flex justify-content-center">
              <div className="rounded-pill" style={{ width: '6rem', height: '0.25rem', backgroundColor: '#F26520' }}></div>
            </div>
          </div>
          <p className="text-secondary mx-auto lead" style={{ maxWidth: '42rem' }}>
            The postgraduates of the CSE Department consistently secure top-tier
            placements across industry-leading organizations, reflecting our
            commitment to academic excellence and industry relevance.
          </p>
        </div>

        <div className="card border shadow-sm rounded-4 overflow-hidden mb-5">
          <div className="table-responsive">
            <table className="table table-hover mb-0 text-center align-middle">
              <thead style={{ backgroundColor: '#164265', color: 'white' }}>
                <tr>
                  <th className="py-3 px-3 fw-bold border-bottom" style={{ borderColor: '#11324c', whiteSpace: 'nowrap', backgroundColor: '#164265', color: 'white' }}>
                    S.No
                  </th>
                  <th className="py-3 px-3 fw-bold border-bottom" style={{ borderColor: '#11324c', whiteSpace: 'nowrap', backgroundColor: '#164265', color: 'white' }}>
                    Batch
                  </th>
                  <th className="py-3 px-3 fw-bold border-bottom" style={{ borderColor: '#11324c', whiteSpace: 'nowrap', backgroundColor: '#164265', color: 'white' }}>
                    Average Package
                  </th>
                  <th className="py-3 px-3 fw-bold border-bottom" style={{ borderColor: '#11324c', whiteSpace: 'nowrap', backgroundColor: '#164265', color: 'white' }}>
                    Highest Package
                  </th>
                  <th className="py-3 px-3 fw-bold border-bottom" style={{ borderColor: '#11324c', whiteSpace: 'nowrap', backgroundColor: '#164265', color: 'white' }}>
                    Percentage of Placement
                  </th>
                </tr>
              </thead>
              <tbody className="text-dark">
                 <tr className="transition-all-300 bg-light" style={{ cursor: 'default' }}>
                  <td className="py-4 px-3 border-end text-secondary fw-medium">
                    1
                  </td>
                  <td className="py-4 px-3 border-end fw-bold" style={{ color: '#164265' }}>
                    2025-2026
                  </td>
                  <td className="py-4 px-3 border-end fw-semibold">
                    7.58 LPA
                  </td>
                  <td className="py-4 px-3 border-end fw-semibold">
                    90 LPA
                  </td>
                  <td className="py-4 px-3 fw-semibold">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      84.76%
                    </div>
                  </td>
                </tr>
                <tr className="transition-all-300" style={{ cursor: 'default' }}>
                  <td className="py-4 px-3 border-end text-secondary fw-medium">
                    2
                  </td>
                  <td className="py-4 px-3 border-end fw-bold" style={{ color: '#164265' }}>
                    2024-2025
                  </td>
                  <td className="py-4 px-3 border-end fw-semibold">
                    5.95 LPA
                  </td>
                  <td className="py-4 px-3 border-end fw-semibold">
                    24.23 LPA
                  </td>
                  <td className="py-4 px-3 fw-semibold">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      90%
                    </div>
                  </td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="position-relative z-1 w-100 mb-5">
        <div className="text-center mb-4">
          <h2 className="fs-2 fw-bold mb-2" style={{ color: '#164265' }}>
            Our Top Recruiters
          </h2>
          <div className="rounded-pill mx-auto" style={{ width: '4rem', height: '0.25rem', backgroundColor: '#F26520' }}></div>
        </div>
        <div className="w-100 overflow-hidden py-4">
          <div className="marquee">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="d-flex align-items-center justify-content-center px-4"
                style={{ minWidth: '190px' }}
              >
                <img
                  src={logo}
                  alt="recruiter logo"
                  style={{
                    width: "150px",
                    height: "90px",
                    objectFit: "contain",
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: marquee 90s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
