import Navbar from "./navbar";
// import chicagoVideo from "./assets/chicagovideo.mp4";
// import chicagoVideo4k from "./assets/chicago4k1.mov";
import finalTransitionVideo from "../assets/finalTransitionVideo.mp4";
import "./videoSection.css";
import chetsTransitionVideo from "../assets/chetsTransitionVideo.mp4";

const VideoSection = () => {
  return (
    <>
      <div>
        <video className="video" autoPlay muted loop>
          <source src={finalTransitionVideo} type="video/mp4"></source>
        </video>
        <Navbar></Navbar>
        <h1 className="introHeader">A Global Investment Bank</h1>
        <p className="Intro">
          Trusted financial advisors to a diverse universe of entrepreneurs ,
          business and financial institutions worldwide
        </p>
      </div>
    </>
  );
};

export default VideoSection;
