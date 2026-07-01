import { contact, metaContentPages } from "../components/Data";
import ContactMeForm from "../components/ContactMeForm";

export const metadata = {
  title: metaContentPages.contactTitle,
  description: metaContentPages.contactDesc,
  alternates: {
    canonical: metaContentPages.contactCanonical,
  },
};

const Contact = () => {
  return (
    <section className="section">
      <div className="about-me">
        <h2
          data-aos="fade-up"
          className="section-heading"
        >
          Contact Me
        </h2>
      </div>
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-muted-foreground tracking-wide text-sm leading-normal md:text-base"
      >
        If you want to build something great and intuitive. Let's connect &
        create magic...
      </p>
      <div className="flex flex-col gap-4 my-4 items-start md:flex-row md:gap-0 md:my-8 md:items-center md:justify-between">
        {contact.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="p-2 bg-primary rounded-full text-white"
            >
              {item.icon}
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-foreground font-medium text-sm md:text-base"
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <ContactMeForm />
    </section>
  );
};

export default Contact;
