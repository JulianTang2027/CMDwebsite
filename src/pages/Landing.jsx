"use client";

import { useState, useEffect, useRef } from "react";
import industryCoverage from "../assets/industryCoverage.jpeg";
// import NewsSwiper from "../components/newsSwiper";
import teamImage from "../assets/businessteam.jpg";
// import cmdLogo from "../assets/cmdlogo.png";
import NavBar from "../components/navbar";
import cmdGlobalTeam from "../assets/cmdGlobalTeam.jpg";
import finalTransitionVideo from "../assets/finalTransitionVideo.mp4";
import {
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  Award,
  ChevronDown,
} from "lucide-react";
import "./landing.css";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const contentLineRef = useRef(null);
  const contentParagraphRef = useRef(null);
  const industryHeaderRef = useRef(null);
  const industryLineRef = useRef(null);
  const industryParagraphRef = useRef(null);
  const industryButtonRef = useRef(null);
  const newsRef = useRef(null);
  const careerHeaderRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    if (contentLineRef.current) observer.observe(contentLineRef.current);
    if (contentParagraphRef.current)
      observer.observe(contentParagraphRef.current);
    if (industryHeaderRef.current) observer.observe(industryHeaderRef.current);
    if (industryParagraphRef.current)
      observer.observe(industryParagraphRef.current);
    if (industryLineRef.current) observer.observe(industryLineRef.current);
    if (industryButtonRef.current) observer.observe(industryButtonRef.current);
    if (newsRef.current) observer.observe(newsRef.current);
    if (careerHeaderRef.current) observer.observe(careerHeaderRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 1,
      title: "Global M&A Transactions",
      value: "$2.4T",
      subtitle: "Transaction Volume 2024",
      position: { top: "20%", right: "15%" },
      delay: 0,
    },
    {
      id: 2,
      title: "Client Satisfaction",
      value: "98%",
      subtitle: "Customer Retention Rate",
      position: { top: "45%", left: "10%" },
      delay: 500,
    },
    {
      id: 3,
      title: "Global Offices",
      value: "47",
      subtitle: "Worldwide Presence",
      position: { bottom: "30%", right: "20%" },
      delay: 1000,
    },
  ];

  const rankings = [
    { advisor: "Houlihan Lokey", deals: 415, rank: 1 },
    { advisor: "Rothschild", deals: 406, rank: 2 },
    { advisor: "Goldman Sachs", deals: 371, rank: 3 },
    { advisor: "JP Morgan", deals: 342, rank: 4 },
    { advisor: "Morgan Stanley", deals: 309, rank: 5 },
  ];

  return (
    <div className="landing-container">
      {/* Hero Section with Video Background */}
      <section className="hero">
        <video className="video-background" autoPlay muted loop>
          <source src={finalTransitionVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>

        {/* Enhanced Navbar */}
        <NavBar></NavBar>
        {/* Hero Content */}
        <div className="hero-content">
          <div className={`hero-badge ${isVisible ? "visible" : ""}`}>
            #1 Investment Bank for Global M&A
          </div>

          <h1 className={`hero-title ${isVisible ? "visible" : ""}`}>
            No. 1 Investment Bank for All
            <span className="hero-title-highlight">
              Global M&A Transactions
            </span>
          </h1>

          <p className={`hero-subtitle ${isVisible ? "visible" : ""}`}>
            Trusted financial advisors to a diverse universe of entrepreneurs,
            businesses and financial institutions worldwide
          </p>
        </div>

        {/* Animated Stats Popups */}
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`stat-popup ${isVisible ? "visible" : ""} ${
              activePopup === stat.id ? "active" : ""
            }`}
            style={{
              ...stat.position,
              animationDelay: `${stat.delay}ms`,
            }}
            onClick={() =>
              setActivePopup(activePopup === stat.id ? null : stat.id)
            }
          >
            <div className="stat-value">{stat.value}</div>
            <div className="stat-title">{stat.title}</div>
            <div className="stat-subtitle">{stat.subtitle}</div>
          </div>
        ))}

        {/* Rankings Table Popup */}
        <div className={`rankings-popup ${isVisible ? "visible" : ""}`}>
          <div className="rankings-header">
            <span>ADVISOR</span>
            <span>DEALS</span>
          </div>
          <div className="rankings-list">
            {rankings.map((item) => (
              <div key={item.advisor} className="ranking-item">
                <span className="advisor-name">{item.advisor}</span>
                <span className="deal-count">{item.deals}</span>
              </div>
            ))}
          </div>
          <div className="rankings-footer">
            <p>2024 M&A Advisory Rankings—All Global Transactions</p>
            <p>
              Source: LSEG (formerly Refinitiv). Excludes accounting firms and
              brokers.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <ChevronDown className="scroll-icon" />
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <p className="content-paragraph" ref={contentParagraphRef}>
          CMD Global excels in a broad range of strategic and capital markets
          advisory and corporate development support services
        </p>
        <div className="content-line" ref={contentLineRef}></div>
      </section>

      {/* Industry Coverage Section */}
      <section className="industry-coverage">
        <img
          className="industry-image"
          src={industryCoverage}
          alt="Industry Coverage"
        />
        <div className="industry-content">
          <h1 ref={industryHeaderRef}>Industry Coverage</h1>
          <div className="industry-line" ref={industryLineRef}></div>
          <p ref={industryParagraphRef}>
            CMD Global combines deep expertise and strategic insight to guide
            clients through complex mergers, acquisitions, restructurings, and
            capital markets transactions. With tailored advisory and corporate
            development support, we deliver customized solutions aligned with
            your goals to help you achieve lasting success.
          </p>
          <button className="industry-button" ref={industryButtonRef}>
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2>Our Services</h2>
            <div className="services-line"></div>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <TrendingUp className="service-icon" />
              <h3>M&A Advisory</h3>
              <p>
                Strategic guidance through complex mergers, acquisitions, and
                corporate restructuring.
              </p>
            </div>

            <div className="service-card">
              <DollarSign className="service-icon" />
              <h3>Capital Markets</h3>
              <p>
                Comprehensive capital raising solutions and market access
                strategies.
              </p>
            </div>

            <div className="service-card">
              <Users className="service-icon" />
              <h3>Corporate Development</h3>
              <p>
                Tailored advisory services for sustainable growth and strategic
                positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <h1 ref={newsRef}>News</h1>
        <div className="news-placeholder">
          <p>Latest financial news and insights coming soon...</p>
        </div>
      </section>

      {/* Careers Section */}
      <section className="careers-section">
        <h1 ref={careerHeaderRef}>
          Since the 1980s, our careers have intersected at Morgan Stanley,
          Lazard, Salomon Brothers and Deutsche Bank.
        </h1>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <img src={cmdGlobalTeam} alt="CMD Global Team" />
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-brand">CMD Global</div>
          <p className="footer-subtitle">
            Excellence in Investment Banking Since 1980
          </p>
          <div className="footer-badge">
            <Award className="footer-icon" />
            <span>Trusted by Fortune 500 Companies Worldwide</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// import { useEffect, useRef } from "react";
// import "./Landing.css";
// import VideoSection from "../components/videoSection";
// import industryCoverage from "../assets/industryCoverage.jpeg";
// import NewsSwiper from "../components/newsSwiper";
// import teamImage from "../assets/businessteam.jpg";
// import cmdLogo from "../assets/cmdlogo.png";
// import cmdGlobalTeam from "../assets/cmdGlobalTeam.jpg";
// // import VerticalLine from "../components/verticalLine";

// const Landing = () => {
//   const contentLineRef = useRef(null);
//   const contentParagraphRef = useRef(null);
//   const industryHeaderRef = useRef(null);
//   const industryLineRef = useRef(null);
//   const industryParagraphRef = useRef(null);
//   const industryButtonRef = useRef(null);
//   const newsRef = useRef(null);
//   const careerHeaderRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//         } else {
//           entry.target.classList.remove("visible");
//         }
//       });
//     });
//     if (contentLineRef.current) observer.observe(contentLineRef.current);
//     if (contentParagraphRef.current)
//       observer.observe(contentParagraphRef.current);
//     if (industryHeaderRef.current) observer.observe(industryHeaderRef.current);
//     if (industryParagraphRef.current)
//       observer.observe(industryParagraphRef.current);
//     if (industryLineRef.current) observer.observe(industryLineRef.current);
//     if (industryButtonRef.current) observer.observe(industryButtonRef.current);
//     if (newsRef.current) observer.observe(newsRef.current);
//     if (careerHeaderRef.current) observer.observe(careerHeaderRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <section className="hero">
//         <VideoSection />
//       </section>
//       <section className="content">
//         <p className="contentParagraph" ref={contentParagraphRef}>
//           CMD Global excels in a broad range of strategic and capital markets
//           advisory and corporate development support services
//         </p>
//         <div className="contentLine" ref={contentLineRef}></div>
//       </section>
//       <section className="industryCoverage">
//         <img className="industryCoverageImage" src={industryCoverage}></img>
//         <div className="industryCoverageContent">
//           <h1 ref={industryHeaderRef}>Industry Coverage</h1>
//           <div className="industryCoverageLine" ref={industryLineRef}></div>
//           <p ref={industryParagraphRef}>
//             CMD Global combines deep expertise and strategic insight to guide
//             clients through complex mergers, acquisitions, restructurings, and
//             capital markets transactions. With tailored advisory and corporate
//             development support, we deliver customized solutions aligned with
//             your goals to help you achieve lasting success.
//           </p>
//           <button ref={industryButtonRef}>Learn More</button>
//         </div>
//       </section>
//       <section className="news">
//         <h1 ref={newsRef}>News</h1>
//         <NewsSwiper></NewsSwiper>
//       </section>
//       <section className="careers">
//         <h1 ref={careerHeaderRef}>
//           Since the 1980s, our careers have intersected at Morgan Stanley,
//           Lazard, Salomon Brothers and Deutsche Bank.
//         </h1>
//       </section>
//       <section className="team">
//         <img src={cmdGlobalTeam}></img>
//       </section>
//       <section className="end">
//         <img src={cmdLogo}></img>
//       </section>
//     </>
//   );
// };

// export default Landing;
