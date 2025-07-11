import React from "react";
import Skills from "../components/Skills";
import Counter from "../components/Counter";
import { aboutData } from "../components/Data";
import SkillsCodeBlock from "../components/CodeBlock";

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
            {/* <Skills /> */}
            {/* <SkillsCodeBlock /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
