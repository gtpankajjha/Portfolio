import profileImage from "../../../assets/image/Pankaj_Profile.jpeg";
const AboutImage = () => {
  return (
    <div
     className="
relative
overflow-hidden
rounded-3xl
border
border-slate-700
bg-gradient-to-br
from-slate-900
via-slate-800
to-slate-900
p-5
transition-all
duration-500
hover:-translate-y-2
hover:border-indigo-500
hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
"
    >
      {/* Top Circle */}
    <img
  src={profileImage}
  alt="Pankaj Kumar"
  className="mx-auto h-30 w-30 rounded-full border-4 border-indigo-500 object-cover shadow-xl"
/>

      <h3 className="mt-6 text-center text-2xl font-bold text-white">
        Pankaj Kumar
      </h3>

      <p className="mt-2 text-center text-slate-400">
        Frontend Engineer
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">

  <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-300">
    React
  </span>

  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">
    Next.js
  </span>

  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300">
    React Native
  </span>

  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300">
    TypeScript
  </span>

</div>

      {/* Divider */}
      <div className="my-8 h-px bg-slate-700" />

      {/* Details */}
      <div className="space-y-5">

        <div className="flex justify-between">
          <span className="text-slate-400">Experience</span>
          <span className="font-semibold text-white">
            4+ Years
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Location</span>
          <span className="font-semibold text-white">
            Bengaluru, India
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Specialization</span>
          <span className="font-semibold text-white">
            Frontend
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Availability</span>
          <span className="font-semibold text-emerald-400">
            Open to Work
          </span>
        </div>

      </div>

      {/* Bottom Glow */}
      <div className="absolute -bottom-24 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
    </div>
  );
};

export default AboutImage;