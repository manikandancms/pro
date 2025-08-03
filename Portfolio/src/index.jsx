import "./style.css";
import ReactDom from "react-dom/client";
import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import BodySection from "./Body/Body";
import Footer from "./Footer/Footer.jsx";
import ContactMe from "./Contact/Contact.jsx";
import ProjectsPage from "./Project/Project.jsx";
import About from "./About/About";
import Form from "./Form/Form.jsx";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home component combining home page sections and Footer
const Home = () => (
  <>
    <HeroSection />
    <ProjectsPage />
    <BodySection />
    <Form/>
 


  </>
);

const App = () => (
  <Router>
    <Header />
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactMe />} />
     
    </Routes>
     <Footer/>
  </Router>
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
