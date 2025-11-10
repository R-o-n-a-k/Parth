import Counter from "../components/Counter";
import { skills, aboutData, metaContentPages } from "../components/Data";
import Skills from "../components/Skills";
import StructuredData from "../components/StructuredData";
import { Accordion } from "@/components/ui/accordion"


export const metadata = {
  description: metaContentPages.aboutDesc,
  alternates: {
    canonical: metaContentPages.aboutCanonical,
  },
};

const About = () => {
  return (
    <>
      <StructuredData />
      <section className="section">
        <div className="about-me">
          <h2
            data-aos="fade-right"
            data-aos-offset="5"
            className="section-heading"
          >
            About Me
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="5"
            className="text-muted-foreground w-full text-justify tracking-wide text-sm leading-normal md:text-base"
          >
            {aboutData.firstPara}
          </p>
          <p
            data-aos="fade-up"
            data-aos-offset="5"
            className="text-muted-foreground w-full text-justify tracking-wide text-sm leading-normal md:text-base mt-4"
          >
            {aboutData.secondPara}
          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-offset="5"
          className="flex flex-wrap mt-8 justify-around"
        >
          <Counter end={aboutData.experience} label="Yrs Experience" />
          <Counter end={aboutData.appsDelivered} label="Apps Delivered" />
          <Counter end={aboutData.issuesResolved} label="Issues Resolved" />
        </div>

        <div className="skills mt-8">
          <h2
            data-aos="fade-right"
            data-aos-offset="5"
            className="section-heading"
          >
            Technical Skills
          </h2>
          <div className="mt-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {Object.entries(skills).map(([category, items], index) => (
                <Skills index={index} title={category} items={items} key={index} />
              ))}
            </Accordion>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
