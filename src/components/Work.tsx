import { useState, useEffect } from "react";
import "./styles/Work.css";
import ProjectPreview from "./ProjectPreview";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects, Project } from "../data";

gsap.registerPlugin(useGSAP);


const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return;
      const container = document.querySelector(".work-container");
      if (!container) return;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project: Project, index: number) => (
            <div className="work-box" key={project.id || index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.number || `0${index + 1}`}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools & stack</h4>
                <p>{project.tools}</p>
                <button
                  type="button"
                  className="work-detail-btn"
                  onClick={() => setSelectedProject(project)}
                  data-cursor="disable"
                >
                  Explore Architecture <span>↗</span>
                </button>
              </div>
              <ProjectPreview
                projectId={project.id}
                title={project.title}
                category={project.category}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- Detailed Architecture & Case Study Modal --- */}
      {selectedProject && (
        <div
          className="work-modal-overlay"
          onClick={() => setSelectedProject(null)}
          data-cursor="disable"
        >
          <div
            className="work-modal-card"
            onClick={(e) => e.stopPropagation()}
            data-cursor="disable"
          >
            <button
              className="work-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close details"
              data-cursor="disable"
            >
              ✕
            </button>

            <div className="work-modal-header">
              <div className="work-modal-badge-row">
                <span className="work-modal-number">{selectedProject.number}</span>
                <span className="work-modal-domain">{selectedProject.domain}</span>
              </div>
              <h3 className="work-modal-title">{selectedProject.title}</h3>
              <p className="work-modal-subtitle">{selectedProject.subtitle}</p>
            </div>

            <div className="work-modal-section">
              <h4>System Overview</h4>
              <p className="work-modal-desc">{selectedProject.description}</p>
            </div>

            <div className="work-modal-section">
              <h4>Key Architecture Highlights</h4>
              <ul className="work-modal-highlights">
                {selectedProject.highlights?.map((highlight, idx) => (
                  <li key={idx} className="work-modal-highlight-item">
                    <span className="work-modal-highlight-bullet">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="work-modal-section">
              <h4>Production Tech Stack</h4>
              <div className="work-modal-tags">
                {selectedProject.stack?.map((tech, idx) => (
                  <span key={idx} className="work-modal-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
