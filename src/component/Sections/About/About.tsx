import Container from "../../layout/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 py-23"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">

          <AboutImage />

          <AboutContent />

        </div>
      </Container>
    </section>
  );
};

export default About;