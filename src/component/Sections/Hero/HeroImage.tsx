import profileImage from "../../../assets/image/Pankaj_Profile.jpeg";
import FloatingBadge from "./FloatingBadge";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Background Glow */}
      <div
        className="
          absolute
          h-[420px]
          w-[420px]
          rounded-full
          bg-indigo-500/20
          blur-[100px]
          transition-all
          duration-500
          dark:bg-indigo-500/20
        "
      />

      {/* Image Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-slate-200
          bg-gradient-to-br
          from-indigo-100
          via-slate-100
          to-cyan-100
          p-2
          shadow-2xl
          transition-all
          duration-500
          hover:scale-105
          hover:-rotate-1
          dark:border-slate-700
          dark:from-indigo-500/20
          dark:via-slate-800
          dark:to-cyan-500/20
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
        text="⚛️ React"
        className="absolute -left-12 top-12"
      />

      {/* Next.js */}
      <FloatingBadge
        text="▲ Next.js"
        className="absolute -left-16 top-48"
      />

      {/* TypeScript */}
      <FloatingBadge
        text="💙 TypeScript"
        className="absolute -right-20 top-32"
      />

      {/* React Native */}
      <FloatingBadge
        text="📱 React Native"
        className="absolute -right-4 bottom-4"
      />
    </div>
  );
};

export default HeroImage;