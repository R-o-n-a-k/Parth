import React from "react";
import { contact } from "../components/Data";
import ContactMeForm from "../components/ContactMeForm";

export const metadata = {
  title: "Contact",
  description:
    "Interested in working together? Reach out to discuss Android development collaborations and opportunities.",
  alternates: {
    canonical: "https://parthpala.vercel.app/contact",
  },
};

const Contact = () => {
  return (
    <section className="section">
      <div className="about-me">
        <h2 className="section-heading">Contact Me</h2>
      </div>
      <p className="text-content tracking-wide text-sm leading-normal md:text-base">
        If you want to build something great and intuitive. Let's connect &
        create magic...
      </p>
      <div className="flex flex-col gap-4 my-4 items-start md:flex-row md:gap-0 md:my-8 md:items-center md:justify-between">
        {contact.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="p-3 bg-accent rounded-full text-white">
              {item.icon}
            </div>
            <p className="text-content font-medium tracking-wide text-sm leading-normal md:text-lg">
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
