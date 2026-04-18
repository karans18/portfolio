import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I build scalable, high-performance web applications using the
                MERN stack with 2+ years of hands-on experience. Focused on
                creating responsive, optimized, and user-centric frontend
                interfaces using React.js.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I develop secure and efficient backend systems using Node.js,
                Express, and MongoDB, with expertise in REST APIs, real-time
                systems (Socket.IO), and scalable architecture design.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI & System Design</h3>
              <p>
                Experienced in integrating AI-powered features using APIs like
                Gemini, building real-time applications, and designing secure
                systems with JWT authentication, RBAC, and cloud tools like
                Docker and Azure.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
