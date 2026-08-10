const ContactHeader = () => {
  return (
    <div>
      {/* Section Label */}
      <p className="text-lg font-semibold text-indigo-500 dark:text-indigo-400">
        Contact
      </p>

      {/* Heading */}
      <h2
        className="
          mt-4
          text-5xl
          font-extrabold
          text-slate-900
          transition-colors
          duration-300
          sm:text-6xl
          dark:text-white
        "
      >
        Let's Work Together
      </h2>

      {/* Description */}
      <p
        className="
          mt-6
          text-xl
          leading-9
          text-slate-600
          transition-colors
          duration-300
          dark:text-slate-400
        "
      >
        Have a project, job opportunity, or just want to
        connect? I'd love to hear from you.
      </p>
    </div>
  );
};

export default ContactHeader;