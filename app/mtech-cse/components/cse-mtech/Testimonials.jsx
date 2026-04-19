"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Neha",
    role: "M.Tech Scholar",
    initials: "AK",
    image: "/cse-mtech-assets/Testimonials/Neha.webp",
    avatarBg: "#164265",
    message:
      "The M.Tech program at KIET provided me with comprehensive knowledge in AI and ML. The hands-on projects and industry mentorship were invaluable in my career growth.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sakshi",
    role: "Data Scientist",
    initials: "PS",
    image: "/cse-mtech-assets/Testimonials/Sakshi.webp",
    avatarBg: "#1a5c8a",
    message:
      "KIET's DGX supercomputing center gave me access to cutting-edge technology. The faculty guidance and peer learning environment accelerated my professional development significantly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Abhishek",
    role: "Assistant Professor",
    initials: "RP",
    image: "/cse-mtech-assets/Testimonials/Abhishek.webp",
    avatarBg: "#0f3d5c",
    message:
      "The research opportunities and collaboration with industry experts during the M.Tech program gave me a significant advantage. The faculty are genuinely committed educators.",
    rating: 5,
  },
  {
    id: 4,
    name: "Kajal Tyagi",
    role: "System and Function Developer",
    initials: "KT",
    image: "/cse-mtech-assets/Testimonials/Kajal_Tyagi.jpeg",
    avatarBg: "#164265",
    message:
      "The M.Tech program at KIET equipped me with the right skills and practical exposure to excel in the AI/ML domain. The industry-oriented curriculum helped me land my dream role.",
    rating: 5,
  },
  {
    id: 5,
    name: "Nidhi",
    role: "Programmer Analyst (Cognizant)",
    initials: "N",
    image: "/cse-mtech-assets/Testimonials/Nidhi.png",
    avatarBg: "#1a5c8a",
    message:
      "Studying at KIET gave me hands-on experience and excellent mentorship. The program's focus on real-world problem-solving was key to securing my position at Cognizant.",
    rating: 5,
  },
  {
    id: 6,
    name: "Shweta Singh",
    role: "M.Tech Scholar",
    initials: "SS",
    image: "/cse-mtech-assets/Testimonials/shweta.png",
    avatarBg: "#9c6644",
    message:
      "My experience during the core technical coursework was amazing. The emphasis on practical research and problem solving made all the difference in my learning journey.",
    rating: 5,
  },
  {
    id: 7,
    name: "Vrinda Mishra",
    role: "IP Consultant (VisionLex)",
    initials: "VM",
    image: "/cse-mtech-assets/Testimonials/vrinda_mishra.png",
    avatarBg: "#606c38",
    message:
      "Choosing this program was the best decision for my career. The collaborative learning environment and advanced computing facilities were truly un-matched.",
    rating: 5,
  },
];

const VISIBLE = 3;
// Extend the array so the carousel can loop seamlessly
const EXTENDED = [...TESTIMONIALS, ...TESTIMONIALS.slice(0, VISIBLE)];

function TestimonialCard({ testimonial }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid #E5E7EB",
        height: "248px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      {/* Left — photo panel */}
      <div
        style={{
          width: "36%",
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
          backgroundColor: testimonial.avatarBg,
        }}
      >
        <img
          src={testimonial.image}
          alt={testimonial.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* Subtle gradient overlay at the bottom edge */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: `linear-gradient(to top, ${testimonial.avatarBg}99, transparent)`,
          }}
        />
      </div>

      {/* Right — content panel */}
      <div
        style={{
          flex: 1,
          padding: "18px 20px",
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {/* Star rating */}
        <div style={{ display: "flex", gap: "3px", marginBottom: "10px" }}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              size={13}
              fill="#F26520"
              style={{ color: "#F26520" }}
            />
          ))}
        </div>

        {/* Quote */}
        <p
          style={{
            color: "#4B5563",
            fontSize: "12.5px",
            lineHeight: "1.7",
            fontStyle: "italic",
            flex: 1,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            margin: 0,
            textAlign: "justify",
          }}
        >
          &ldquo;{testimonial.message}&rdquo;
        </p>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "#F3F4F6",
            margin: "12px 0 10px",
          }}
        />

        {/* Name & designation */}
        <div>
          <p
            style={{
              fontWeight: "700",
              color: "#111827",
              fontSize: "13.5px",
              margin: "0 0 2px",
            }}
          >
            {testimonial.name}
          </p>
          <p
            style={{
              color: "#6B7280",
              fontSize: "12px",
              margin: "0 0 1px",
            }}
          >
            {testimonial.role}
          </p>
          <p
            style={{
              color: "#F26520",
              fontSize: "11.5px",
              fontWeight: "600",
              margin: 0,
            }}
          >
            {testimonial.company}{testimonial.passoutYear ? ` · ${testimonial.passoutYear}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animated, setAnimated] = useState(true);

  // Default responsive config
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentExtended = [...TESTIMONIALS, ...TESTIMONIALS.slice(0, visibleCount)];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  // When we reach the cloned segment, snap silently back to the real start
  useEffect(() => {
    if (current === TESTIMONIALS.length) {
      const snap = setTimeout(() => {
        setAnimated(false);
        setCurrent(0);
      }, 620);
      return () => clearTimeout(snap);
    }
  }, [current]);

  useEffect(() => {
    if (!animated) {
      const restore = setTimeout(() => setAnimated(true), 50);
      return () => clearTimeout(restore);
    }
  }, [animated]);

  const translateX = -(current * (100 / visibleCount));
  const activeDot = current % TESTIMONIALS.length;

  return (
    <section id="testimonials" className="pb-5 bg-white">
      <div className="container">
        {/* Section header */}
        <div className="mb-5 text-center">
          <h2 className="fs-2 fw-bold text-dark mb-2">
            Student Testimonials
          </h2>
          <div className="d-flex justify-content-center">
            <div
              className="rounded-pill"
              style={{ backgroundColor: "#F26520", width: "6rem", height: "0.25rem" }}
            />
          </div>
        </div>

        {/* Carousel track */}
        <div style={{ overflow: "hidden", margin: "0 -10px" }}>
          <div
            style={{
              display: "flex",
              transform: `translateX(${translateX}%)`,
              transition: animated
                ? "transform 0.62s cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            }}
          >
            {currentExtended.map((testimonial, i) => (
              <div
                key={i}
                style={{
                  width: `calc(100% / ${visibleCount})`,
                  flexShrink: 0,
                  padding: "0 10px",
                  boxSizing: "border-box",
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "36px",
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === activeDot ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: i === activeDot ? "#F26520" : "#D1D5DB",
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
