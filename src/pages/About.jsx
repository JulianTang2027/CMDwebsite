import "./about.css";
import Navbar from "../components/navbar";
import AboutBackground from "../assets/about.jpg";
import AboutSection from "../components/aboutSection";

const About = () => {
  return (
    <>
      <section className="aboutHero">
        <img className="aboutBackground" src={AboutBackground}></img>
        <Navbar />
      </section>
      <AboutSection></AboutSection>
    </>
  );
};

export default About;
