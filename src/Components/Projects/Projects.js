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
import BloggingSite from "../../Assets/Projects/Onwheels.png";




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
							title="Secure Webserver Deploymnt and access control in Openstack"
							description="The project deploys a secure web server in OpenStack, leveraging its security features. It blocks ICMP (ping) requests, allows HTTP traffic, enables remote control via SSH, and secures web traffic with SSL/TLS."
							techstack="Openstack | Apache Http Server | SSH | Cloud init Scripts | SELinux"
							link="https://ecommerce-and-cart-management-iahwubta1-raj3028.vercel.app/"
							git="https://github.com/Raj3028/Project-05.git"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={URLShortener}
							isBlog={false}
							title="Air Quality monitoring Sytsem"
							description="An IoT-based air quality monitoring system uses interconnected sensors to measure pollutants like particulate matter and gases in real time, enabling proactive environmental management.."
							techstack="Arduino | DHT11 Sensor | Blynk"
							link="https://url-shortener-project-04-reapm8btu-raj3028.vercel.app/"
							git="https://github.com/Raj3028/Project-04.git"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={BookManagement}
							isBlog={false}
							title="E-Book Management"
							description="Developed an affordable ultrasonic radar system for obstacle detection and navigation applications. The ultrasonic radar project detects objects with ultrasonic waves, calculates distances, and provides graphical representation."
							techstack="Arduino IDE | Processing Software."
							link="https://books-management-aws-project-03-9cpcwyxmm-raj3028.vercel.app/"
							git="https://github.com/Raj3028/Project-03-AWS-Books-Management.git"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Internship}
							isBlog={false}
							title="Enviro Monitor"
							description="Developed an application for monitoring AQI and WQI in various locations in INDIA. Geospatial Monitoring system for air and water quality index."
							techstack="Colab | WebScrapping | "
							link="https://open-to-intern-website-project-02-owxh7733e-raj3028.vercel.app/"
							git="https://github.com/Raj3028/Project-02.git"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={BloggingSite}
							isBlog={false}
							title="OnWheels Centralised Management system"
							description="This Project revolutionizes
 vehicle maintenance, live GPS
 tracking, enhancing customer satisfaction and operational
 efficiency."
							techstack="PHP | MySQL | JavaScript | Bootstrap | XAMPP"
							link="https://blogging-site-mini-website-project-01.vercel.app/"
							git="https://github.com/Raj3028/Project-01.git"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
