"use client";

import Script from "next/script";

const StructuredData = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Parth Pala",
    alternateName: "Parth Pala",
    url: "https://parthpala.vercel.app",
    image: "https://parthpala.vercel.app/ParthPala.webp",
    jobTitle: "Senior Android Developer",
    worksFor: {
      "@type": "Organization",
      name: "Infosys",
    },
    sameAs: [
      "https://www.linkedin.com/in/parth-pala/",
      "https://github.com/parthpala",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Mumbai",
    },
    knowsAbout: [
      "Android Development",
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Coroutines",
    ],
    description:
      "Senior Android Developer with 7+ years of experience building scalable and user-focused apps using Kotlin, Jetpack Compose, and modern Android architecture.",
  };

  return (
    <Script
      id="json-ld-person"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default StructuredData;
