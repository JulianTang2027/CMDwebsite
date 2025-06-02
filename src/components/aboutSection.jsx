import React, { useEffect, useRef } from "react";
import "./aboutSection.css";

const AboutSection = () => {
  // Animation refs
  const sectionRefs = {
    intro: useRef(null),
    history: useRef(null),
    global: useRef(null),
    approach: useRef(null),
  };

  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all section refs
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-content">
      {/* Hero statement */}
      <div className="about-intro section" ref={sectionRefs.intro}>
        <h1>
          The evolution of CMD Global Partners into an independent boutique
          Investment Bank
        </h1>
        <div className="about-divider"></div>
      </div>

      {/* History & Leadership */}
      <div className="about-history section" ref={sectionRefs.history}>
        <h2>Our Foundation</h2>
        <p>
          CMD Global was founded by a group of experienced investment bankers
          who had worked closely together at another firm. In establishing CMD,
          its founders have assembled a strong and cohesive network of
          similar-minded investment banking boutiques located throughout Europe
          and Asia.
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>1980s</h3>
              <p>
                Our founders began working together at preeminent Wall Street
                firms
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>1990s</h3>
              <p>
                Careers spanning Morgan Stanley, Lazard, Salomon Brothers and
                Deutsche Bank
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>1990s</h3>
              <p>Partners left to form CMD Global</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>2000s</h3>
              <p>Placeholder information, lorem ipsum</p>
            </div>
          </div>
        </div>

        <p>
          It is noteworthy that certain of the CMD founders have been working
          together since the late 1980s. In each case, our founders have spent
          virtually their entire careers at preeminent Wall Street firms such as
          Lazard, Morgan Stanley, Salomon Brothers and Deutsche Bank. While the
          senior leadership of the firm have much in common, they also each have
          brought to CMD a unique set of expertise and experiences.
        </p>
      </div>

      {/* Global Presence */}
      <div className="about-global section" ref={sectionRefs.global}>
        <h2>Global Reach</h2>
        <div className="two-column">
          <div className="column">
            <p>
              While headquartered in Chicago, our senior bankers live and work
              in various locations throughout the U.S., Europe and Asia. We have
              a highly diversified client base spanning such target sectors as
              Automotive, Industrial/Processing Equipment, Aerospace & Defense,
              Factory Automation, Test & Measurement, Flow Control, Healthcare
              and MedTech, among others.
            </p>
          </div>
          <div className="column stats">
            <div className="stat-item">
              <span className="stat-number">$5B+</span>
              <span className="stat-label">Largest deal value</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Global</span>
              <span className="stat-label">Cross-border expertise</span>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="about-approach section" ref={sectionRefs.approach}>
        <h2>Our Approach</h2>
        <p>
          We have deliberately developed a very collaborative culture throughout
          our firm and have adopted the rare approach of committing to our
          clients that at least two of our most senior partners will be actively
          involved in every engagement we take on. We have learned through our
          past experience that such an approach results in our clients receiving
          the best possible advice and our firm attracting the best talent
          available in the market.
        </p>

        <p>
          We typically work for publicly-traded and privately-owned companies,
          PE firms and SPAC management teams who seek to leverage the breadth of
          our relationships, depth of our industry knowledge and global reach of
          our firm. That has resulted in us serving as exclusive advisor on M&A,
          Capital Raising and Restructuring assignments with transaction values
          as small as $40-50 million, as well as on several deals valued at over
          $5 billion.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>M&A Advisory</h3>
            <p>Exclusive advisor on strategic transactions</p>
          </div>
          <div className="service-card">
            <h3>Capital Raising</h3>
            <p>Supporting growth and investment needs</p>
          </div>
          <div className="service-card">
            <h3>Restructuring</h3>
            <p>Strategic corporate restructuring solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
