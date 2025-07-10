import React from "react";
// import Skills from "../components/Skills";
import Counter from "../components/Counter";

const About = () => {
  return (
    <>
      <section className="section">
        <div className="about-me">
          <h1 className="section-heading">About Me</h1>
          <p className="text-content w-full text-justify text-base md:text-lg">
            👋 Hi, I’m a passionate Android Developer with over 7 years of
            experience building high-quality, scalable mobile applications
            across phones, tablets, and TV platforms.
          </p>
          <p className="text-content w-full text-justify text-base md:text-lg mt-4">
            I specialize in Kotlin, MVVM, Jetpack Compose, and Coroutines, with
            20+ published apps and a consistent 99-100% crash-free rate. I've
            led key contributions to Google TV, mentored teams, and earned
            multiple Employee of the Quarter awards. I'm driven by clean
            architecture, performance optimization, and delivering seamless user
            experiences. Currently, I'm open to new opportunities in Android
            development.
          </p>
        </div>

        <div className="flex flex-wrap mt-8 justify-around">
          <Counter end={7} label="Years Experience" />
          <Counter end={20} label="Apps Delivered" />
          <Counter end={200} label="Issues Resolved" />
        </div>

        <div className="skills mt-8">
          <h1 className="section-heading">Technical Skills</h1>
          <div className="mt-4">{/* <Skills /> */}</div>
        </div>
      </section>
    </>
  );
};

export default About;
