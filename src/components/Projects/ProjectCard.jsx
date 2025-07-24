import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CategoryIcon from "@mui/icons-material/Category";
import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import "./Projects.css";

const ProjectCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-item"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ 
        scale: 1.03,
        rotateY: 5,
        rotateX: 5,
        boxShadow: "0 25px 50px rgba(51, 153, 255, 0.2)"
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <div className="project-image">
        <img src={item.image} alt={`${item.name} project screenshot`} loading="lazy" />
        <motion.div 
          className="project-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="overlay-content"
            initial={{ y: 20 }}
            animate={{ y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {item.category && (
              <div className="project-category">
                <CategoryIcon className="category-icon" />
                <span>{item.category}</span>
              </div>
            )}
            {item.metrics && (
              <div className="project-metrics">
                <TrendingUpIcon className="metrics-icon" />
                <span>{item.metrics}</span>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
      <div className="project-details">
        <div className="project-title">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <div className="project-stacks">
          <div className="stacks">
            {item.techStack.map((tech) => {
              return (
                <motion.p 
                  key={tech} 
                  className="tech-stack"
                  whileHover={{ scale: 1.1, backgroundColor: "var(--primary-color)" }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.p>
              );
            })}
          </div>
          <div className="project-btns">
            <div
              className="code-btn"
              style={{
                padding: '15px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '8px',
                border: '1px solid var(--primary-color)',
                cursor: 'pointer',
                background: 'none',
                transition: 'all 0.3s ease'
              }}
              onClick={(e) => {
                e.stopPropagation();
                
                if (item.github && item.github !== '#') {
                  window.open(item.github, '_blank', 'noopener,noreferrer');
                } else {
                  alert('No GitHub repository available');
                }
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--primary-color)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <CodeIcon className="code-icon" />
            </div>
            <motion.a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View ${item.name} live website`}
              onClick={(e) => {
                e.preventDefault();
                if (item.website && item.website !== '#') {
                  window.open(item.website, '_blank');
                } else {
                  alert('Live website not available');
                }
              }}
            >
              <LanguageIcon className="live-icon" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
    item: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
      github: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      metrics: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
  };
  

export default ProjectCard;