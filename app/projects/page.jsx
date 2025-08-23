import ProjectSection from "../components/ProjectSection";
import { metaContentPages } from "../components/Data";

export const metadata = {
  title: metaContentPages.projectsTitle,
  description: metaContentPages.projectsDesc,
  alternates: {
    canonical: metaContentPages.projectsCanonical,
  },
};

const Project = () => {
  return (
    <section className="section">
      <h2 data-aos="fade-right" data-aos-offset="5" className="section-heading">
        Projects
      </h2>
      <div className="projects grid grid-cols-1 gap-6 justify-center">
        <ProjectSection />
      </div>
    </section>
  );
};

export default Project;
