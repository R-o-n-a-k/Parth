import React from "react";
import Timeline from "../components/Timeline";
import { educationData, workData } from "../components/Data";

const career = () => {
  return (
    <section className="section">
      <Timeline data={workData} heading="Work Experience" />
      <Timeline data={educationData} heading="Education" />
    </section>
  );
};

export default career;
