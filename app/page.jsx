// import { redirect } from 'next/navigation';

// export default function Home() {
//   redirect('/programs/postgraduate-programs/cse-mtech');
// }
import React from "react";
import Header from "@/app/mtech-cse/components/cse-mtech/Header.jsx";
import Overview from "@/app/mtech-cse/components/cse-mtech/Overview.jsx";
import Highlights from "@/app/mtech-cse/components/cse-mtech/Highlights.jsx";
import COE from "@/app/mtech-cse/components/cse-mtech/COE.jsx";
import Clubs from "@/app/mtech-cse/components/cse-mtech/Clubs.jsx";
import Faculty from "@/app/mtech-cse/components/cse-mtech/Faculty.jsx";
import Publications from "@/app/mtech-cse/components/cse-mtech/Publications.jsx";
import ProgramDetails from "@/app/mtech-cse/components/cse-mtech/ProgramDetails.jsx";
import Infrastructure from "@/app/mtech-cse/components/cse-mtech/Infrastructure.jsx";
import Placement from "@/app/mtech-cse/components/cse-mtech/Placement.jsx";
import Testimonials from "@/app/mtech-cse/components/cse-mtech/Testimonials.jsx";

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
