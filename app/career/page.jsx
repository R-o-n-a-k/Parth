import React from "react";
import Timeline from "../components/Timeline";
import { educationData, metaContentPages, workData } from "../components/Data";

export const metadata = {
  title: metaContentPages.careerTitle,
  description: metaContentPages.careerDesc,
  alternates: {
    canonical: metaContentPages.careerCanonical,
  },
};

const career = () => {
  return (
    <section className="section">
      <Timeline data={workData} heading="Work Experience" />
      <Timeline data={educationData} heading="Education" />
    </section>
  );
};

export default career;
