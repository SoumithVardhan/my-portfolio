import { useState } from "react";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_APP_EMAILJS_USER_ID;

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          if (response.status === 200) {
            setEmailSent(true);
            setTimeout(() => {
              setEmailSent(false);
            }, 10000);
          } else {
            alert("Failed to send Email!");
          }
          setName("");
          setEmail("");
          setMessage("");
          console.log("response", response);
        })
        .then((error) => console.log(error));
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="contact" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.1, ease: "easeOut" }}
      >
        <div className="grid-mask"></div>
        <motion.div
          className="contact-content-left"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        >
          <div className="left-details">
            <h2>
              <WavingHandIcon className="hello-icon" /> Hi There,
            </h2>
            <h2>Lets Code Your Vision Together</h2>
          </div>
          <div className="left-email">
            <EmailIcon sx={{ fontSize: "2.5em" }} className="email-icon" />
            <div className="email-text">
              <p>Mail me at</p>
              <a href="mailto:soumithvardhan06@gmail.com">
                soumithvardhan06@gmail.com
              </a>
            </div>
          </div>
          <div className="left-socials">
            <p>Socials : </p>
            <a
              href="https://www.linkedin.com/in/soumith-vardhan-b19998258/"
              aria-label="github profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/SoumithVardhan"
              aria-label="github profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </motion.div>
        <motion.div
          className="contact-content-right"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        >
          <div className="title">
            <h2>Send me a message</h2>
            <RocketLaunchIcon className="rocket-icon" />
          </div>
          <form onSubmit={submitForm}>
            <div className="name-group input-group">
              <label name="name" id="name">
                Full Name
              </label>
              <br />
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="email-group input-group">
              <label name="email" id="email">
                Email Address
              </label>
              <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                required
              />
            </div>
            <div className="message-group input-group">
              <label name="message" id="message">
                Message
              </label>
              <br />
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={emailSent}
              className="primary-button send-btn"
            >
              {emailSent ? "Sent!" : "Send"}{" "}
              {emailSent ? "" : <SendIcon className="send-icon" />}
            </button>
          </form>
        </motion.div>
      </motion.div>
      {emailSent && (
        <motion.div
          className="notification"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          Email sent successfully!
        </motion.div>
      )}
    </div>
  );
};

export default Contact;