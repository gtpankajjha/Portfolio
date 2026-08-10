import Container from "../../layout/Container";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-slate-900
        transition-colors
        duration-300
        dark:bg-slate-950
        dark:text-white
      "
    >
      <Container>
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-16
            lg:grid-cols-2
          "
        >
          <AboutImage />

          <AboutContent />
        </div>
      </Container>
    </section>
  );
};

export default About;