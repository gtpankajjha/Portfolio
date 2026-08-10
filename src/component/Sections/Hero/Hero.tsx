import BackgroundGlow from "./BackgroundGlow";
import HeroContent from "./HeroCont";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section id="home" className=" relative min-h-screen overflow-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      <BackgroundGlow />

      <div
        className="
          relative
          mx-auto
          grid
          min-h-screen
          max-w-7xl
          grid-cols-1
          items-center
          gap-12
          px-6
          py-24
          lg:grid-cols-2
        "
      >
        <HeroContent />

        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
