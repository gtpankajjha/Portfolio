import profileImage from "../../../assets/image/Pankaj_Profile.jpeg";
import FloatingBadge from "./FloatingBadge";
const HeroImage = () => {
  return (
    <div className="relative flex justify-center">

      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[100px]" />

      {/* Image Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-slate-700
          bg-gradient-to-br
          from-indigo-500/20
          via-slate-800
          to-cyan-500/20
          p-2
          shadow-2xl
          transition-all
          duration-500
         
          hover:scale-105
hover:-rotate-1
          
        "
      >
        <img
          src={profileImage}
          alt="Pankaj Kumar"
          className="
            h-[320px]
            w-[250px]
            rounded-[28px]
            object-cover
          "
        />
      </div>
        {/* React */}
<FloatingBadge
  text="⚛ React"
  className="top-4 -left-0"
/>

{/* Next.js */}
<FloatingBadge
  text="▲ Next.js"
  className="top-44 -left-2"
/>

{/* TypeScript */}
<FloatingBadge
  text="💙 TypeScript"
  className="top-24 -right-0"
/>

{/* React Native */}
<FloatingBadge
  text="📱 React Native"
  className="-bottom-18 left-1/2 -translate-x-1/2"
/>
    </div>
  );
};

export default HeroImage;