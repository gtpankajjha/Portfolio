const ContactForm = () => {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl">

      <h3 className="text-3xl font-bold text-white">
        Send Me a Message
      </h3>

      <p className="mt-4 text-slate-400">
        Fill out the form below and I'll get back to you as soon as possible.
      </p>

      <form className="mt-10 space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />

        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-indigo-600 py-4 font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30"
        >
          Send Message →
        </button>

      </form>

    </div>
  );
};

export default ContactForm;