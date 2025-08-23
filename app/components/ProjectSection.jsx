"use client";
import { useState } from "react";
import { projects } from "../components/Data";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import ProjectModal from "../components/ProjectModal";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (proj) => {
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
      {projects.map((proj) => (
        <div
          data-aos="fade-up"
          data-aos-offset="5"
          key={proj.id}
          className="flex flex-col md:flex-row gap-0.5 border-[1.5px] md:border-2 rounded-md border-grey-1 bg-transparent"
        >
          <div className="relative h-45 w-full md:max-w-100 md:h-50 rounded-md">
            <Image
              src={proj.image}
              alt={proj.title}
              fill
              className="object-cover rounded-md"
            />
          </div>

          <div className="sm:flex-col px-4 py-2">
            <h3 className="text-title-color text-base md:text-lg font-semibold mb-1">
              {proj.title}
            </h3>
            <p className="text-content text-sm md:text-base mb-2 md:mb-8 md:mt-4 text-justify ">
              {proj.description}
            </p>
            <button
              onClick={() => handleOpenModal(proj)}
              className="btn-small mb-2"
            >
              Checkout <FaArrowRight className="animate-send" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectSection;
