"use client";
import React from "react";

export default function Placement() {
  const logos = [
    "/assets/recruiters/accenture.webp",
    "/assets/recruiters/adani.webp",
    "/assets/recruiters/adobe.webp",
    "/assets/recruiters/airtel.webp",
    "/assets/recruiters/amazon.webp",
    "/assets/recruiters/american_express.webp",
    "/assets/recruiters/atlassian.webp",
    "/assets/recruiters/axtria.webp",
    "/assets/recruiters/capegmini.webp",
    "/assets/recruiters/cisco.webp",
    "/assets/recruiters/cognizant.webp",
    "/assets/recruiters/consult_add.webp",
    "/assets/recruiters/delliolite.webp",
    "/assets/recruiters/Federal_Bank.webp",
    "/assets/recruiters/flipkart.webp",
    "/assets/recruiters/freeCharge.webp",
    "/assets/recruiters/goldman_sacs.webp",
    "/assets/recruiters/google.webp",
    "/assets/recruiters/hcl.webp",
    "/assets/recruiters/indus_valley.webp",
    "/assets/recruiters/infosys.webp",
    "/assets/recruiters/innovacer.webp",
    "/assets/recruiters/jfg.webp",
    "/assets/recruiters/jpmorgan.webp",
    "/assets/recruiters/juspay.webp",
    "/assets/recruiters/jsw.webp",
    "/assets/recruiters/lutron.webp",
    "/assets/recruiters/mamaearth.webp",
    "/assets/recruiters/maq_software.webp",
    "/assets/recruiters/microsoft.webp",
    "/assets/recruiters/myntra.webp",
    "/assets/recruiters/new_gen.webp",
    "/assets/recruiters/nokia.webp",
    "/assets/recruiters/procdna.webp",
    "/assets/recruiters/rapipay.webp",
    "/assets/recruiters/samsung.webp",
    "/assets/recruiters/servuc_now.webp",
    "/assets/recruiters/sopra_steria.webp",
    "/assets/recruiters/tCamp.webp",
    "/assets/recruiters/tcs.webp",
    "/assets/recruiters/tech_mahindra.webp",
    "/assets/recruiters/tejas.webp",
    "/assets/recruiters/torrent.webp",
    "/assets/recruiters/ui_path.webp",
    "/assets/recruiters/ukg.webp",
    "/assets/recruiters/unilever.webp",
    "/assets/recruiters/unthinkable.webp",
    "/assets/recruiters/wipro.webp",
  ];

  return (
    <section id="placement" className="py-5 bg-white position-relative overflow-hidden">
      <div className="container position-relative z-1 mb-5">
        <div className="text-center mb-5">
          <div className="mb-4 position-relative text-center">
            <h2 className="display-6 fw-bold text-dark mb-2">
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
                <tr className="transition-all-300" style={{ cursor: 'default' }}>
                  <td className="py-4 px-3 border-end text-secondary fw-medium">
                    1
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
                <tr className="transition-all-300 bg-light" style={{ cursor: 'default' }}>
                  <td className="py-4 px-3 border-end text-secondary fw-medium">
                    2
                  </td>
                  <td className="py-4 px-3 border-end fw-bold" style={{ color: '#164265' }}>
                    2023-2024
                  </td>
                  <td className="py-4 px-3 border-end fw-semibold">
                    6.15 LPA
                  </td>
                  <td className="py-4 px-3 border-end fw-semibold">
                    60 LPA
                  </td>
                  <td className="py-4 px-3 fw-semibold">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      79.24%
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
          <h2 className="h2 fw-bold mb-2" style={{ color: '#164265' }}>
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
