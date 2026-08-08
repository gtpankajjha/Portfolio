import BackgroundGlow from "./BackgroundGlow";
import HeroContent from "./HeroCont"
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section  id="home" className="relative min-h-screen overflow-hidden bg-slate-950 pt-22">

      <BackgroundGlow />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">

        <HeroContent />

        <HeroImage />

      </div>

    </section>
  );
};

export default Hero;