import "./contactCard.css";

const ContactCard = ({ location, image }) => {
  return (
    <div className="contactCard">
      <img className="contactImage" src={image}></img>
      <div className="contactOverlay">
        <h3>{location.city}</h3>
        <p>{location.address1}</p>
        <p>{location.address2}</p>
        <p>Email: {location.email}</p>
        <p>Career Inquiries: {location.careers}</p>
      </div>
    </div>
  );
};

export default ContactCard;
