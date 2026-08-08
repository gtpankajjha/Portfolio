import Hero from "../component/Sections/Hero/Hero";
import Navbar from "../component/layout/Navbar";
import About from "../component/Sections/About/About";
import Experience from "../component/Sections/Experience/Experience";
import Projects from "../component/Sections/Projects/Projects";
// import Skills from "../component/Sections/Skills";

// import Contact from "../component/Sections/Contact";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

     <Experience />

     <Projects/>

      {/*  <Skills />

      <Contact /> */}
    </>
  );
};

export default Home;