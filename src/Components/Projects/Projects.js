import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../styles.css";

import OpenStack from "../../Assets/Projects/Openstack.png";
import AirQualitySys from "../../Assets/Projects/Air-Quality-Monitoring_system.jpg";
import Radar from "../../Assets/Projects/Ultrasonic-radar.jpg";
import Internship from "../../Assets/Projects/Enviromonitor.png";
import OnWheels from "../../Assets/Projects/Onwheels.png";
import MQTTGPT from "../../Assets/Projects/MQTT-GPT.png";
import CreditRisk from "../../Assets/Projects/credit_risk_analysis.jpg";

// NEW PROJECT IMAGES (use placeholders or add your images)
import TrelloImg from "../../Assets/Projects/Trello.jpg";
import FileSureImg from "../../Assets/Projects/filesure.png";
import Tech4SholaImg from "../../Assets/Projects/tech4shola.png";
import JavaImg from "../../Assets/Projects/java-project.png";
import NovaMindImg from "../../Assets/Projects/Novamind-project.jpg";


//Icons
import { FiFolder, FiAward, FiTool } from "react-icons/fi";
//Certifications 
import CertificationCard from "./CertificationCard";

//Certification Images
import PWC from "../../Assets/Certifications/Bala Chandu-PWC-Cert_page-0001.jpg";
import CDAC from "../../Assets/Certifications/CDAC-Certificate_Bala Chandu_page-0001.jpg";
import nptel from "../../Assets/Certifications/Chandu  nptel_page-0001.jpg";
import IDT from "../../Assets/Certifications/Courseera-IDT.jpg";
import PWCIP from "../../Assets/Certifications/Courseera-PWCIP.jpg";
import udemy from "../../Assets/Certifications/udemycert_page-0001.jpg";


// Skills Icons
// Category Icons
import {FaCode,FaLaptopCode,FaCloud,FaMicrochip,FaBrain,FaTools} from "react-icons/fa";

// Skill Icons
import {SiJava,SiPython,SiCplusplus,SiMysql,SiHtml5,SiCss3,SiJavascript,SiReact,SiNodedotjs,SiAmazonaws,SiGooglecloud,SiLinux,SiArduino,SiEclipsemosquitto ,SiGit,SiGithub,SiVisualstudiocode,SiPostman,SiPandas,SiNumpy,SiScikitlearn,SiXgboost} from "react-icons/si";


function Projects() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="Project-heading projects-title-animate" style={{
     color: "white"}}>
  My Recent <strong className="purple">Works </strong>
</h1>

<p className="projects-desc-animate"
   style={{
     color: "#cfcfcf",
     maxWidth: "700px",
     margin: "0 auto",
     textAlign: "center"
   }}>
  Explore my journey through projects, certifications, and hackathons.
  Each section highlights my skills and dedication to continuous learning.
</p>
       <div className="project-tabs-bar projects-tabs-animate">
  <div
  className={`tab-item ${activeTab === "projects" ? "active" : ""}`}
  onClick={() => setActiveTab("projects")}
>
  <FiFolder className="tab-icon" />
  Projects
</div>


  <div
    className={`tab-item ${activeTab === "certifications" ? "active" : ""}`}
    onClick={() => setActiveTab("certifications")}
  >
    <FiAward className="tab-icon" />
    Certifications
  </div>

  <div
    className={`tab-item ${activeTab === "skills" ? "active" : ""}`}
    onClick={() => setActiveTab("skills")}
  >
    <FiTool className="tab-icon" />
    Skills
  </div>
</div>

        
        {activeTab === "projects" && (
  <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Existing Projects */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OpenStack}
              isBlog={false}
              title="Secure Webserver Deployment and Access Control in OpenStack"
              description="The project deploys a secure web server in OpenStack, leveraging its security features. It blocks ICMP, allows HTTP traffic, enables remote control via SSH, and secures web traffic with SSL/TLS."
              techstack="OpenStack | Apache | SSH | Cloud Init | SELinux"
              link="https://github.com/chandu-bala"
              git="https://github.com/chandu-bala"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AirQualitySys}
              isBlog={false}
              title="Air Quality Monitoring System"
              description="IoT-based system measuring pollutants in real-time using interconnected sensors for proactive environmental management."
              techstack="Arduino | DHT11 | Blynk"
              link="https://github.com/chandu-bala"
              git="https://github.com/chandu-bala"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Radar}
              isBlog={false}
              title="Ultrasonic Radar"
              description="Affordable radar system for obstacle detection and navigation using ultrasonic waves and graphical distance visualization."
              techstack="Arduino IDE | Processing"
              link="https://github.com/chandu-bala"
              git="https://github.com/chandu-bala"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Internship}
              isBlog={false}
              title="Enviro Monitor"
              description="Geospatial AQI & WQI monitoring platform with real-time data visualization for Indian locations."
              techstack="Colab | Web Scraping | Data Visualization"
              link="https://enviromonitor-myzmn5ndiofc2pbhzvcxbb.streamlit.app/"
              git="https://github.com/chandu-bala/EnviroMonitor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OnWheels}
              isBlog={false}
              title="OnWheels Centralised Fleet Management System"
              description="Fleet tracking solution with live GPS monitoring, vehicle maintenance tracking, and analytics."
              techstack="PHP | MySQL | Bootstrap | JavaScript"
              link="https://github.com/chandu-bala/VEHICLE_MNGT"
              git="https://github.com/chandu-bala/VEHICLE_MNGT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CreditRisk}
              isBlog={false}
              title="Credit Risk Analysis"
              description="ML system to classify customer credit risk using Random Forest, SVM, and XGBoost with Streamlit UI."
              techstack="Python | Scikit-Learn | XGBoost | Streamlit"
              link="https://github.com/chandu-bala/credit_risk_analysis"
              git="https://github.com/chandu-bala/credit_risk_analysis"
            />
          </Col>
			<Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tech4SholaImg}
              isBlog={false}
              title="Tech4Shola - Code For Good Hackathon Project"
              description="Circular green economy solution to eradicate Lantana Camara and convert it into sustainable products while supporting tribal communities."
              techstack="React Native | MongoDB | PyTorch | Flask | Firebase | HuggingFace"
              link="https://github.com/cfgbengaluru24/Team-27"
              git="https://github.com/cfgbengaluru24/Team-27"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MQTTGPT}
              isBlog={false}
              title="MQTT-GPT Integration"
              description="IoT system integrating ChatGPT with ESP32 using MQTT and EMQX broker for real-time control."
              techstack="ESP32 | MQTT | EMQX | ChatGPT | Python"
              link="https://github.com/chandu-bala/MQTT-GPT"
              git="https://github.com/chandu-bala/MQTT-GPT"
            />
          </Col>

          {/* ✅ NEW PROJECT - TRELLO */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TrelloImg}
              isBlog={false}
              title="Trello Task Management System"
              description="Full-stack Trello-like task management platform with real-time synchronization using WebSockets and deep integration with Trello REST APIs & Webhooks."
              techstack="React | Node.js | Express | WebSockets | Trello API"
              link="https://github.com/chandu-bala/Trello_Project"
              git="https://github.com/chandu-bala/Trello_Project"
            />
          </Col>

          {/* ✅ NEW PROJECT - FILESURE */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FileSureImg}
              isBlog={false}
              title="FileSure – Referral & Credit System"
              description="Full-stack referral system allowing users to earn credits via referral links and track activity through a dashboard."
              techstack="Next.js | TypeScript | Tailwind | Node.js | MongoDB"
              link="https://github.com/chandu-bala/Filesure-referral-system"
              git="https://github.com/chandu-bala/Filesure-referral-system"
            />
          </Col>
          {/* ✅ NEW PROJECT - NOVAMIND AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NovaMindImg}
              isBlog={false}
              title="NovaMind-AI – AI-Powered Project & Career Mentorship Platform"
              description="Cloud-native AI mentorship platform that transforms raw ideas into structured project plans, personalized learning roadmaps, and actionable career guidance using Google Vertex AI (Gemini). Built for the Code Vipassana & Project Sadhana Marathon."
              techstack="Node.js | Express | Google Vertex AI (Gemini) | Firestore | Docker | Cloud Run | HTML | Bootstrap"
              link="https://github.com/chandu-bala/NovaMind-AI"
              git="https://github.com/chandu-bala/NovaMind-AI"
            />
          </Col>


          <Col md={4} className="project-card">
			<ProjectCard
				imgPath={JavaImg}
				isBlog={false}
				title="Java Utility Algorithms Collection"
				description="A Java-based solution demonstrating practical problem-solving using core OOP concepts, data structures, and efficient algorithms like duplicate removal, word frequency analysis."
				techstack="Java | OOP | Data Structures | Collections Framework"
				link="https://github.com/chandu-bala/JAVA_Codes"
				git="https://github.com/chandu-bala/JAVA_Codes"
			/>
		</Col>

          

          </Row>
)}


{activeTab === "certifications" && (
  <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

    <Col md={4} className="project-card">
      <CertificationCard
        title="Salesforce Launchpad Program"
        issuer="PwC "
        image={PWC}
        description="Successfully completed the Salesforce Launchpad Program conducted by PwC ACs in India, focusing on enterprise Salesforce fundamentals and industry-aligned training."
      />
    </Col>

    <Col md={4} className="project-card">
      <CertificationCard
        title="Cloud Computing Technology (Bridge Course)"
        issuer="C-DAC | MeitY | NIELIT"
        image={CDAC}
        description="Completed a government-certified bridge course in Cloud Computing Technology under the Futureskills PRIME program, organized by C-DAC Chennai and the Ministry of Electronics & IT."
      />
    </Col>

    <Col md={4} className="project-card">
      <CertificationCard
        title="Cloud Computing"
        issuer="NPTEL | IIT Kharagpur"
        image={nptel}
        description="Achieved Elite certification in Cloud Computing through NPTEL, funded by the Ministry of Education, with a consolidated score of 75%."
      />
    </Col>

    <Col md={4} className="project-card">
      <CertificationCard
        title="Introduction to Digital Transformation"
        issuer="Siemens | Coursera"
        image={IDT}
        description="Completed an online non-credit course authorized by Siemens, covering core concepts of digital transformation and modern industrial technologies."
      />
    </Col>

    <Col md={4} className="project-card">
      <CertificationCard
        title="Programming with Cloud IoT Platforms"
        issuer="POSTECH | Coursera"
        image={PWCIP}
        description="Completed a specialized course authorized by POSTECH, focusing on programming and application development using cloud-based IoT platforms."
      />
    </Col>

    <Col md={4} className="project-card">
      <CertificationCard
        title="C++ Complete Training for Beginners"
        issuer="Udemy"
        image={udemy}
        description="Completed hands-on C++ training covering core programming concepts, syntax, and beginner-level problem solving."
      />
    </Col>

  </Row>
)}


{activeTab === "skills" && (
  <Row className="skill-row" style={{ justifyContent: "center" }}>

    {/* Programming */}
    <Col md={6} sm={12} className="skill-card-col">
      <div className="skill-card">
        <h5><FaCode className="skill-icon" /> Programming & Core CS</h5>
        <div className="skill-tags">
          <span><SiJava /> Java</span>
          <span><SiPython /> Python</span>
          <span><SiCplusplus /> C / C++</span>
          <span><SiMysql /> SQL</span>
          <span><FaBrain /> DSA</span>
          <span><FaCode /> OOP</span>
        </div>
      </div>
    </Col>

    {/* Web */}
    <Col md={6} sm={12} className="skill-card-col">
      <div className="skill-card">
        <h5><FaLaptopCode className="skill-icon" /> Web & Full Stack</h5>
        <div className="skill-tags">
          <span><SiHtml5 /> HTML</span>
          <span><SiCss3 /> CSS</span>
          <span><SiJavascript /> JavaScript</span>
          <span><SiReact /> React</span>
          <span><SiNodedotjs /> Node.js</span>
          <span><FaCode /> REST APIs</span>
        </div>
      </div>
    </Col>

    {/* Cloud */}
    <Col md={6} sm={12} className="skill-card-col">
      <div className="skill-card">
        <h5><FaCloud className="skill-icon" /> Cloud & Platforms</h5>
        <div className="skill-tags">
          <span><SiAmazonaws /> AWS</span>
          <span><FaCloud /> OpenStack</span>
          <span><SiGooglecloud /> Google Cloud</span>
          <span><SiLinux /> Linux</span>
          <span><FaCloud /> Virtualization</span>
        </div>
      </div>
    </Col>

    {/* IoT */}
    <Col md={6} sm={12} className="skill-card-col">
      <div className="skill-card">
        <h5><FaMicrochip className="skill-icon" /> IoT & Embedded</h5>
        <div className="skill-tags">
          <span><FaMicrochip /> ESP32</span>
          <span><SiArduino /> Arduino</span>
          <span><SiEclipsemosquitto /> MQTT</span>
          <span><FaMicrochip /> EMQX</span>
          <span><FaMicrochip /> Sensors</span>
        </div>
      </div>
    </Col>

    {/* AI / ML */}
    <Col md={6} sm={12} className="skill-card-col">
      <div className="skill-card">
        <h5><FaBrain className="skill-icon" /> Data, ML & AI</h5>
        <div className="skill-tags">
          <span><SiPandas /> Pandas</span>
          <span><SiNumpy /> NumPy</span>
          <span><SiScikitlearn /> Scikit-learn</span>
          <span><FaBrain /> XGBoost</span>
          <span><FaBrain /> Data Viz</span>
          <span><FaBrain /> LLMs</span>
        </div>
      </div>
    </Col>

    {/* Tools */}
    <Col md={6} sm={12} className="skill-card-col">
      <div className="skill-card">
        <h5><FaTools className="skill-icon" /> Tools & Practices</h5>
        <div className="skill-tags">
          <span><SiGit /> Git</span>
          <span><SiGithub /> GitHub</span>
          <span><SiVisualstudiocode /> VS Code</span>
          <span><SiPostman /> Postman</span>
          <span><FaTools /> Agile</span>
          <span><FaTools /> Debugging</span>
        </div>
      </div>
    </Col>

  </Row>
)}




      </Container>
    </Container>
  );
}

export default Projects;
