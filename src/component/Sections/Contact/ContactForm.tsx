import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    from_name: "",
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

      toast.success("Message sent successfully! 🚀");

      setFormData({
        name: "",
        from_name: "",
        subject: "",
        from_message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error(
        "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-xl
        transition-all
        duration-300
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      {/* Heading */}
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
        Send Me a Message
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          text-slate-600
          transition-colors
          duration-300
          dark:text-slate-400
        "
      >
        Fill out the form below and I'll get back to you
        as soon as possible.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-700
              dark:text-slate-300
            "
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              bg-slate-50
              px-5
              py-4
              text-slate-900
              placeholder:text-slate-400
              outline-none
              transition-all
              duration-300
              focus:border-indigo-500
              focus:ring-2
              focus:ring-indigo-500/20
              dark:border-slate-700
              dark:bg-slate-950
              dark:text-white
              dark:placeholder:text-slate-500
            "
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-700
              dark:text-slate-300
            "
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            name="from_name"
            placeholder="Your Email"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              bg-slate-50
              px-5
              py-4
              text-slate-900
              placeholder:text-slate-400
              outline-none
              transition-all
              duration-300
              focus:border-indigo-500
              focus:ring-2
              focus:ring-indigo-500/20
              dark:border-slate-700
              dark:bg-slate-950
              dark:text-white
              dark:placeholder:text-slate-500
            "
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-700
              dark:text-slate-300
            "
          >
            Subject
          </label>

          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              bg-slate-50
              px-5
              py-4
              text-slate-900
              placeholder:text-slate-400
              outline-none
              transition-all
              duration-300
              focus:border-indigo-500
              focus:ring-2
              focus:ring-indigo-500/20
              dark:border-slate-700
              dark:bg-slate-950
              dark:text-white
              dark:placeholder:text-slate-500
            "
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-700
              dark:text-slate-300
            "
          >
            Message
          </label>

          <textarea
            id="message"
            rows={6}
            name="from_message"
            placeholder="Your Message"
            value={formData.from_message}
            onChange={handleChange}
            required
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-slate-300
              bg-slate-50
              px-5
              py-4
              text-slate-900
              placeholder:text-slate-400
              outline-none
              transition-all
              duration-300
              focus:border-indigo-500
              focus:ring-2
              focus:ring-indigo-500/20
              dark:border-slate-700
              dark:bg-slate-950
              dark:text-white
              dark:placeholder:text-slate-500
            "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-xl
            bg-indigo-600
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-indigo-500
            hover:shadow-lg
            hover:shadow-indigo-500/30
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? "Sending..." : "Send Message →"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;