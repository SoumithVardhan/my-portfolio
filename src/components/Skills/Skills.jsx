import skillsData from "../../constants/skillConstant";
import { motion } from "framer-motion";
import { useState } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "Core", "Frontend", "Backend", "Database", "AI/ML", "DevOps", "Tools", "Specialized"];
  
  const filteredSkills = skillsData.filter(skill => 
    filter === "All" ? true : skill.category === filter
  );
  
  const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 12);

  return (
    <div className="skills" id="skills">
      <div className="skills-content">
        <motion.div
          className="skills-content-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 className="section-title">My Tech Stack</h2>
        </motion.div>
        <motion.div
          className="skills-content-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="section-desc">
            I'm proficient in a comprehensive range of cutting-edge technologies that empower me to
            architect scalable, high-performance solutions across the full development spectrum.
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div
          className="skills-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="skills-content-items"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {displayedSkills.map((item) => {
            return <SkillCard item={item} key={item.id} />;
          })}
        </motion.div>
        
        {/* Show More Button */}
        {filteredSkills.length > 12 && (
          <motion.div
            className="skills-show-more"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Show Less' : `Show All ${filteredSkills.length} Skills`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Skills;