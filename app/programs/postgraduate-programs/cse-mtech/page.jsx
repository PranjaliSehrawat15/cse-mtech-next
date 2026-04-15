import React from "react";
import Header from "@/components/cse-mtech/Header.jsx";
import Overview from "@/components/cse-mtech/Overview.jsx";
import Highlights from "@/components/cse-mtech/Highlights.jsx";
import COE from "@/components/cse-mtech/COE.jsx";
import Clubs from "@/components/cse-mtech/Clubs.jsx";
import Faculty from "@/components/cse-mtech/Faculty.jsx";
import Publications from "@/components/cse-mtech/Publications.jsx";
import ProgramDetails from "@/components/cse-mtech/ProgramDetails.jsx";
import Infrastructure from "@/components/cse-mtech/Infrastructure.jsx";
import Placement from "@/components/cse-mtech/Placement.jsx";
import Testimonials from "@/components/cse-mtech/Testimonials.jsx";

export default function Page() {
  return (
    <div className="container-fluid bg-white p-0">
      <Header />
      <main>
        <Overview />
        <Highlights />
        <COE />
        <Clubs />
        <Faculty />
        <Publications />
        <ProgramDetails />
        <Infrastructure />
        <Placement />
        <Testimonials />
      </main>
    </div>
  );
}
