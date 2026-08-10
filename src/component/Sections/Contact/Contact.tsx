import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-slate-900
        transition-colors
        duration-300
        dark:bg-slate-950
        dark:text-white
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <ContactHeader />

        {/* Contact Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;