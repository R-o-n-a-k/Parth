import React from "react";
import Counter from "../components/Counter";
import { skills, aboutData } from "../components/Data";
import SkillsAccordion from "../components/SkillsAccordion";

const About = () => {
  return (
    <>
      <section className="section">
        <div className="about-me">
          <h1 className="section-heading">About Me</h1>
          <p className="text-content w-full text-justify tracking-wide text-sm leading-normal md:text-lg">
            {aboutData.firstPara}
          </p>
          <p className="text-content w-full text-justify tracking-wide text-sm leading-normal md:text-lg mt-4">
            {aboutData.secondPara}
          </p>
        </div>

        <div className="flex flex-wrap mt-8 justify-around">
          <Counter end={aboutData.experience} label="Yrs Experience" />
          <Counter end={aboutData.appsDelivered} label="Apps Delivered" />
          <Counter end={aboutData.issuesResolved} label="Issues Resolved" />
        </div>

        <div className="skills mt-8">
          <h1 className="section-heading">Technical Skills</h1>
          <div className="mt-4">
            {Object.entries(skills).map(([category, items]) => (
              <SkillsAccordion key={category} title={category} items={items} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
