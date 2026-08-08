import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    from_name: "", // This stores the visitor's email (as per your EmailJS template)
    subject: "",
    from_message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_z1pkdrl",
        "template_y3mjdpd",
        {
          name: formData.name,
          from_name: formData.from_name,
          subject: formData.subject,
          from_message: formData.from_message,
          time: new Date().toLocaleString(),
        },
        "4bZJpiUEFDoHLoPYY"
      );

      alert("✅ Message sent successfully!");

      setFormData({
        name: "",
        from_name: "",
        subject: "",
        from_message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur">
      <h3 className="text-3xl font-bold text-white">
        Send Me a Message
      </h3>

      <p className="mt-4 text-slate-400">
        Fill out the form below and I'll get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />

        {/* Email */}
        <input
          type="email"
          name="from_name"
          placeholder="Your Email"
          value={formData.from_name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />

        {/* Message */}
        <textarea
          rows={6}
          name="from_message"
          placeholder="Your Message"
          value={formData.from_message}
          onChange={handleChange}
          required
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-indigo-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-indigo-600 py-4 font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message →"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;