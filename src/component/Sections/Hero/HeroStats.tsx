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
    <div className="mt-6 grid grid-cols-3 gap-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/40
            p-3
            backdrop-blur-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-indigo-500
          "
        >
          <h3 className="text-3xl font-bold text-white">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;