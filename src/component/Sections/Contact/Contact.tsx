import ContactHeader from "./ContactHeader";
 import ContactInfo from "./ContactInfo";
 import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <ContactHeader />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

         <ContactInfo />

         <ContactForm />

        </div>

      </div>
    </section>
  );
};

export default Contact;