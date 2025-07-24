import projectsData from "../../constants/projectConstant";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Show first 6 projects initially (your most impressive ones)
  const featuredProjects = projectsData.slice(0, 6);
  const displayedProjects = showAll ? projectsData : featuredProjects;

  return (
    <div className="projects" id="projects">
      <div className="projects-content">
        <motion.div
          className="projects-content-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          //   viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="section-title">Personal Projects</h1>
        </motion.div>
        <motion.div
          className="projects-content-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          //   viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="section-desc">
            Featured Work & Case Studies - Building tomorrow's web experiences today
          </p>
          <p className="projects-count">
            {showAll ? `All ${projectsData.length}` : `Featured ${featuredProjects.length} of ${projectsData.length}`} Projects
          </p>
        </motion.div>
        <div className="projects-content-items">
          {displayedProjects.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard item={item} />
              </motion.div>
            );
          })}
        </div>
        
        {/* Show More/Less Button */}
        {projectsData.length > 6 && (
          <motion.div
            className="projects-show-more"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </>
              ) : (
                <>
                  <span>Show All {projectsData.length} Projects</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;