const stats = [
  {
    value: "4+",
    label: "Years Experience",
  },
  {
    value: "20+",
    label: "Projects Delivered",
  },
  {
    value: "100%",
    label: "Responsive UI",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-10 grid grid-cols-3 gap-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white/70
            p-4
            shadow-sm
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-indigo-300
            hover:shadow-md
            dark:border-slate-800
            dark:bg-slate-900/50
            dark:hover:border-indigo-500/50
          "
        >
          <h3
            className="
              text-3xl
              font-bold
              text-slate-900
              transition-colors
              duration-300
              dark:text-white
            "
          >
            {item.value}
          </h3>

          <p
            className="
              mt-2
              text-sm
              text-slate-600
              transition-colors
              duration-300
              dark:text-slate-400
            "
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;