import { useEffect, useRef } from "react";
import cmdGlobalContact from "../assets/cmdglobalcontact.jpg";
import Navbar from "../components/navbar";
import "./Contact.css";
import chicagoContact from "../assets/chicagoContact.jpeg";
import dublinContact from "../assets/dublinContact.jpg";
import miamiContact from "../assets/miamiContact.jpeg";
import ContactCard from "../components/contactCard";

const Contact = () => {
  const contactTextRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    if (contactTextRef.current) observer.observe(contactTextRef.current);
  });

  const Locations = [
    {
      city: "Chicago",
      address1: "123 N. Wacker Drive Suite 1375",
      address2: "Chicago Illinois 60606",
      email: "info@cmdglobal.com",
      careers: "Recruiting@cmdglobal.com",
      image: chicagoContact,
    },
    {
      city: "Dublin",
      address1: "Suite 102 56 Fitzwilliam Square North",
      address2: "Dublin 2, D02 X224 Ireland",
      email: "info@cmdglobal.com",
      careers: "Recruiting@cmdglobal.com",
      image: dublinContact,
    },
    {
      city: "Miami",
      address1: "3100 Ray Ferraro Jr Blvd. 5th Floor",
      address2: "Davie, FL 33314",
      email: "info@cmdglobal.com",
      careers: "Recruiting@cmdglobal.com",
      image: miamiContact,
    },
  ];
  return (
    <div>
      <section className="contactHero">
        <img className="contactBackground" src={cmdGlobalContact}></img>
        <Navbar></Navbar>
      </section>
      <section className="contactText">
        <p className="contactParagraph" ref={contactTextRef}>
          CMD Global delivers strategic expertise and actionable solutions. We
          collaborate with industry leaders, forward-thinking organizations, and
          exceptional talent to drive transformative results.
        </p>
      </section>
      <section className="contactForm">
        <button className="contactButton">SEND A GENERAL INQUIRY</button>
      </section>
      <section className="contactOffices">
        <div className="contactContainer">
          {Locations.map((location, index) => (
            <ContactCard
              key={index}
              location={location}
              image={location.image}
            ></ContactCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
