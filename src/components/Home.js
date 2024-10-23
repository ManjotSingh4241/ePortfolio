import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin-logo.png";
import software from "../assets/softwareDevelopment-logo.png";
import graphic from "../assets/graphicDesign-logo.png";
import gmail from "../assets/gmail-logo.png";
import instagram from "../assets/instagram-logo.png";

function Home() {
  const navigate = useNavigate();

  const openProjects = () => {
    navigate("/softwareProjects");
  };
  const openGraphicDesigning = () => {
    navigate("/Designing");
  };

  return (
    <>
      <Navbar />
      <div className="body">
        <div className="profile-photo" />
        <div className="Name">
          <h1 className="agdasima-regular">
            Manjot Singh | Graphic Designer | Web Developer | Android Developer
          </h1>
        </div>
        <div className="Name-Responsive">
          <h1 className="agdasima-regular">Manjot Singh</h1>
        </div>
        <div className="work">
          <h1 className="agdasima-regular">
            Graphic Designer | Web Developer | Android Developer
          </h1>
        </div>

        <div id="cards">
          <div id="github" onClick={() => window.open("https://github.com/ManjotSingh4241", "_blank")}>
            <img src={github} alt="GitHub Logo" className="logo" />
            <h3 className="roboto-slab-bold">Github</h3>
          </div>

          <div id="linkedin" onClick={() => window.open("https://www.linkedin.com/in/manjot-singh777/", "_blank")}>
            <img src={linkedin} alt="Project Logo" class="logo" />
            <h3 className="roboto-slab-bold">Linked in</h3>
          </div>

          <div
            id="projects"
            onClick={openProjects}
            style={{ curson: "pointer" }}
          >
            <img src={software} alt="Project Logo" class="logo" />
            <h3 className="roboto-slab-bold">Software Projects</h3>
          </div>

          <div
            id="graphic-designing"
            onClick={openGraphicDesigning}
            style={{ cursor: "pointer" }}
          >
            <img src={graphic} alt="Project Logo" class="logo" />
            <h3 className="roboto-slab-bold">Graphic Designing</h3>
          </div>

          <div id="gmail" onClick={() => window.open("mailto:mjotsingh.dev@gmail.com")}>
            <img src={gmail} alt="Project Logo" class="logo" />
            <h3 className="roboto-slab-bold">Gmail</h3>
          </div>

          <div id="instagram" onClick={() => window.open("https://www.instagram.com/code_helowrld/profilecard/?igsh=bnp1ZXppc3pyaHhn", "_blank")}>
            <img src={instagram} alt="Project Logo" class="logo" />
            <h3 className="roboto-slab-bold">Instagram</h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
