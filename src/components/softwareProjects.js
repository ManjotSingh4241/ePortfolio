import "./softwareProjects.css";
import Cards from "./cards";
import Navbar from "./Navbar";

function softwareProjects() {
  return (
    <>
      <body className="background">
        <div className="navbar">
          <Navbar />
        </div>

        <Cards />
      </body>
    </>
  );
}
export default softwareProjects;
