import { useState } from "react";
import "./App.css";

const cv = {
  name: "Luther Dean",
  title: "Full Stack Developer",
  email: "lutherdeanph@gmail.com",
  college: "FEU Insitute of Technology",
  location: "Metro Manila, Philippinnes",
  linkedin: "https://www.linkedin.com/in/luther-dean/",
  github: "https://github.com/lutherdev",
  website: "lutherdean.com",
  summary: [
    "IT student specializing in web and mobile application with strong problem-solving skills and a quick learner who builds innovative solutions and continuously expanding technical knowledge. ",
    "\n Currently diving deeper into the world of artificial intelligence, focusing on integrating AI into web and mobile applications. "],
  experience: [
    {
      role: "Backend",
      company: "Codesigners",
      period: "2025 — Present",
      description:
        "Developed the backend for the website dashboard of SAFEZONE APP for government admin management use",
    },
    {
      role: "QA | UI/UX Designer | Backend",
      company: "Addictech",
      period: "2026 — 2026",
      description:
        "Checked the contributions of each member carefully using github pull requests and Designed an e-commerce website for computer peripherals using PHP Codeigniter, and developed the logic of the whole system",
    },
  ],
  education: [
    {
      degree: "BSIT - Web and Mobile Application",
      school: "FEU Insitute of Technology",
      year: "2023 - Present",
    },
  ],
  skills: ["Web Development", "DevOps", "UI/UX Designer", "Digital Arts"],
  techStack: [
    {
      frontend: ["Javascript", "React", "Tailwind CSS", "Bootstrap"],
      backend: ["Node.js", "PHP", "Python", "PostgreSQL", "Codeigniter"],
      devops: ["Docker"],
    }
  ],
};

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="page">
      <div className="card">

        {/* Top: Name & Title */}
        <div className="card-header">
          <div className="card-img">
            <img src='/SAMBILE.png' className="cv-img"></img>
          </div>
          <div>
            <h1 className="cv-name">{cv.name}</h1>
            <p className="cv-title">{cv.title}</p>
            <p><a href={cv.linkedin}>linkedin</a></p>
            <p><a href={cv.github}>github</a></p>
          </div>
          <div className="cv-contact">
            <span>{cv.email}</span>
            <span>{cv.college}</span>
            <span>{cv.location}</span>
            <span>{cv.website}</span>
          </div>
        </div>

        <div className="divider" />

        {/* Summary */}
        <div className="section">
          <span className="section-label">About</span>

          <div className="summary">
            {cv.summary.map((sum, index) => (
              <p key={index}>{sum}</p>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* Experience */}
        <div className="section">
          <span className="section-label">Experience</span>
          <div className="entries">
            {cv.experience.map((exp, i) => (
              <div
                key={i}
                className={`entry ${activeSection === `exp-${i}` ? "active" : ""}`}
                onMouseEnter={() => setActiveSection(`exp-${i}`)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div className="entry-top">
                  <div>
                    <span className="entry-role">{exp.role}</span>
                    <span className="entry-company">{exp.company}</span>
                  </div>
                  <span className="entry-period">{exp.period}</span>
                </div>
                <p className="entry-desc">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        <div className="section">
          <span className="section-label">Education</span>
          <div className="entries">
            {cv.education.map((edu, i) => (
              <div key={i} className="entry-top">
                <div>
                  <span className="entry-role">{edu.degree}</span>
                  <span className="entry-company">{edu.school}</span>
                </div>
                <span className="entry-period">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        <div className="section section-row">
          <span className="section-label">Skills</span>
          <div className="skills">
            {cv.skills.map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="section">
          <span className="section-label">Tech Stack</span>
          <div className="entries">
            {cv.techStack.map((tech, i) => (
              <div key={i} className="entry-top">
                <div>
                  <span className="entry-role">FRONTEND</span>
                    <div className="skills">
                      {tech.frontend.map((stack) => (
                        <span key={stack} className="skill-tag">{stack}</span>
                      ))}
                    </div>
                </div>
                <div>
                  <span className="entry-role">BACKEND</span>
                    <div className="skills">
                      {tech.backend.map((stack) => (
                        <span key={stack} className="skill-tag">{stack}</span>
                      ))}
                    </div>
                </div>
                <div>
                  <span className="entry-role">DEVOPS</span>
                    <div className="skills">
                      {tech.devops.map((stack) => (
                        <span key={stack} className="skill-tag">{stack}</span>
                      ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}