import Hero from "../component/Sections/Hero/Hero";
import Navbar from "../component/layout/Navbar";
import About from "../component/Sections/About/About";
import Experience from "../component/Sections/Experience/Experience";
import Projects from "../component/Sections/Projects/Projects";
// import Skills from "../component/Sections/Skills";
import Contact from "../component/Sections/Contact/Contact";
import BackToTop from "../component/common/BackToTop";
import Footer from "../component/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

     <Experience />

     <Projects/>

      {/*  <Skills />*/}

      <Contact /> 
      <Footer/>
      <BackToTop/>
    </>
  );
};

export default Home;