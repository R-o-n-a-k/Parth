import React from "react";
import Timeline from "../components/Timeline";
import { educationData, workData } from "../components/Data";

export const metadata = {
  title: "Career",
  description:
    "Led impactful Android projects including Google TV, mentoring teams and delivering production-grade mobile solutions.",
  alternates: {
    canonical: "https://parthpala.vercel.app/career",
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
