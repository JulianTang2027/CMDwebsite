import Navbar from "../components/navbar";
import services from "../assets/services.jpg";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <section className="servicesHero">
        <img className="servicesBackground" src={services}></img>
        <Navbar></Navbar>
      </section>
    </div>
  );
};

export default Services;
