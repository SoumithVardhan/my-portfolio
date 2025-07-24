import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const titleText = "Full-Stack Developer";
  const letters = titleText.split("");
  const roles = ["Developer", "Creator", "Problem Solver", "Innovator"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="home" id="home" ref={containerRef}>
      <div className="grid-mask"></div>
      
      {/* Floating Elements */}
      <motion.div 
        className="floating-element floating-code"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 50 },
          y: { type: "spring", stiffness: 50 }
        }}
      >
        <CodeIcon className="floating-icon" />
      </motion.div>
      
      <motion.div 
        className="floating-element floating-brackets"
        animate={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * 0.01,
          rotate: [0, -10, 10, 0]
        }}
        transition={{ 
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 30 },
          y: { type: "spring", stiffness: 30 }
        }}
      >
        <span className="floating-text">{"{ }"}</span>
      </motion.div>

      <motion.div 
        className="home-content"
        style={{ y, opacity }}
      >
        <div className="home-content-text">
          <div className="location">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              Based in Hyderabad, India
            </motion.p>
          </div>
          <div className="title">
            {letters.map((letter, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.05,
                  ease: "backOut"
                }}
                className="title-letter"
                whileHover={{ 
                  scale: 1.1, 
                  color: "var(--primary-color)",
                  transition: { duration: 0.2 } 
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.h1>
            ))}
          </div>
          
          <motion.div 
            className="dynamic-role"
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="role-prefix">I'm a </span>
            <span className="role-text">{roles[currentRole]}</span>
          </motion.div>
          
          <motion.div 
            className="sub-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <p>
              Hi, I'm Soumith Vardhan. A full-stack developer who transforms complex problems into elegant digital solutions. Specializing in React ecosystems and scalable backend architectures, I build applications that don't just work—they inspire.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="home-content-buttons"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.a 
            href="#projects" 
            className="primary-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(51, 153, 255, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            See My Projects <ChevronRightIcon className="btn-icon" />
          </motion.a>
          <motion.a
            className="secondary-button"
            href="/Resume_Portfolio.pdf"
            target="_blank"
            aria-label="Download Resume"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              borderColor: "var(--primary-color)",
              boxShadow: "0 5px 20px rgba(51, 153, 255, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume <FileDownloadIcon className="btn-icon" />
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="home-content-links"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          {[
            { 
              href: "mailto:soumithvardhan06@gmail.com", 
              Icon: EmailIcon, 
              label: "Email",
              className: "gmail"
            },
            { 
              href: "https://github.com/SoumithVardhan", 
              Icon: GitHubIcon, 
              label: "GitHub",
              className: "github"
            },
            { 
              href: "https://www.linkedin.com/in/soumith-vardhan-b19998258/", 
              Icon: LinkedInIcon, 
              label: "LinkedIn",
              className: "linkedin"
            }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              className={social.className}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 0.6, 
                delay: 2.7 + index * 0.1,
                rotate: { 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.5
                }
              }}
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: "0 5px 15px rgba(51, 153, 255, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <social.Icon className={`${social.className}-icon social-icon`} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;