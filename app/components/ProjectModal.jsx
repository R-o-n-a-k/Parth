"use client";
import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-background border border-grey-2 rounded-lg p-4 max-w-lg w-full shadow-lg relative">
        <button
          className="cursor-pointer absolute top-2 right-3 text-2xl font-bold text-accent hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-title-color text-lg font-bold mb-2">
          {project.title}
        </h2>
        <ul className="list-disc px-4 mb-2 space-y-1 text-sm md:text-base text-content text-justify">
          {project.details?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-medium"
          >
            View Live <FaExternalLinkAlt className="text-xs" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
