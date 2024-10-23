import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Projects from "../src/components/softwareProjects";
import GraphicDesigningPage from "./components/Designing"
import About from "./components/About"


function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/softwareProjects" element={<Projects />}/>
            <Route path="/Designing" element={<GraphicDesigningPage />}/>
            <Route path="/About" element={<About />}/>
         </Routes>   
      </Router>
   );
}
export default App;
