import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import { SiRedux } from "react-icons/si";

import ECommerce from "../../Assets/Projects/Openstack.png";
import URLShortener from "../../Assets/Projects/Air-Quality-Monitoring_system.jpg";
import BookManagement from "../../Assets/Projects/Ultrasonic-radar.jpg";
import Internship from "../../Assets/Projects/Enviromonitor.png";
import OnWheels from "../../Assets/Projects/Onwheels.png";
import MQTTGPT from "../../Assets/Projects/MQTT-GPT.png";
import CreditRisk from "../../Assets/Projects/credit_risk_analysis.jpg"; 

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={ECommerce}
							isBlog={false}
							title="Secure Webserver Deployment and Access Control in OpenStack"
							description="The project deploys a secure web server in OpenStack, leveraging its security features. It blocks ICMP (ping) requests, allows HTTP traffic, enables remote control via SSH, and secures web traffic with SSL/TLS."
							techstack="OpenStack | Apache HTTP Server | SSH | Cloud Init Scripts | SELinux"
							link="https://ecommerce-and-cart-management-iahwubta1-raj3028.vercel.app/"
							git="https://github.com/chandu-bala"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={URLShortener}
							isBlog={false}
							title="Air Quality Monitoring System"
							description="An IoT-based air quality monitoring system that measures pollutants like particulate matter and gases in real-time using interconnected sensors, enabling proactive environmental management."
							techstack="Arduino | DHT11 Sensor | Blynk"
							link="https://url-shortener-project-04-reapm8btu-raj3028.vercel.app/"
							git="https://github.com/chandu-bala"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={BookManagement}
							isBlog={false}
							title="Ultrasonic Radar"
							description="Developed an affordable ultrasonic radar system for obstacle detection and navigation. The system detects objects using ultrasonic waves, calculates distances, and provides a graphical representation."
							techstack="Arduino IDE | Processing Software"
							link="https://books-management-aws-project-03-9cpcwyxmm-raj3028.vercel.app/"
							git="https://github.com/chandu-bala"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Internship}
							isBlog={false}
							title="Enviro Monitor"
							description="Developed an application for monitoring AQI and WQI across various Indian locations. A geospatial monitoring system integrating real-time air and water quality data visualization."
							techstack="Colab | Web Scraping | Data Visualization"
							link="https://open-to-intern-website-project-02-owxh7733e-raj3028.vercel.app/"
							git="https://github.com/chandu-bala/EnviroMonitor"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={OnWheels}
							isBlog={false}
							title="OnWheels Centralised Management System"
							description="A centralized fleet management solution offering vehicle maintenance tracking, live GPS monitoring, and analytics to enhance operational efficiency and customer satisfaction."
							techstack="PHP | MySQL | JavaScript | Bootstrap | XAMPP"
							link="https://blogging-site-mini-website-project-01.vercel.app/"
							git="https://github.com/chandu-bala/VEHICLE_MNGT"
						/>
					</Col>

					
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={CreditRisk}
							isBlog={false}
							title="Credit Risk Analysis"
							description="A machine learning project that classifies customer credit risk using German Credit Data. Includes preprocessing, clustering, and model training with Random Forest, SVM, and XGBoost. Built with Streamlit for an interactive UI."
							techstack="Python | Scikit-Learn | XGBoost | Streamlit | Pandas | Matplotlib"
							link="https://github.com/chandu-bala/credit_risk_analysis"
							git="https://github.com/chandu-bala/credit_risk_analysis"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={MQTTGPT}
							isBlog={false}
							title="MQTT-GPT Integration"
							description="An advanced IoT system integrating ChatGPT with the ESP32 microcontroller using MQTT protocol. Enables real-time conversational control of IoT devices through the EMQX broker and LCD interface."
							techstack="ESP32 | MQTT | EMQX Broker | ChatGPT API | LCD Display | Python"
							link="https://github.com/chandu-bala/MQTT-GPT"
							git="https://github.com/chandu-bala/MQTT-GPT"
						/>
					</Col>

					

				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
