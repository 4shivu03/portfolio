import Navbar from "./component/commonComponent/header";
import Footer from "./component/commonComponent/footer";
import Home from "./component/mainComponent/home";
import About from "./component/mainComponent/about";
import Contact from "./component/mainComponent/contact";
import Project from "./component/mainComponent/project";
import { Routes ,Route } from "react-router-dom";
import './app.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />}  />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
