import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiCodesandbox,
	SiVisualstudiocode,
	SiCodepen,
	SiPostman,
	SiHeroku,
	SiGithub,
	SiVercel,
	SiLinux,
	SiVim,
	SiUbuntu,
	SiDocker,
	SiGit,
	SiPycharm,
} from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

			{
				[
					<SiGithub />,
					<SiVisualstudiocode />,
					// <SiVercel />,
					// <SiCodesandbox />,
					<SiPostman />,
					<SiDocker />,
					<SiLinux />,
					<SiUbuntu />,
					<SiPycharm />
				].map(tool =>

					<Col xs={4} md={2} className="tech-icons">
						{tool}
					</Col>)
			}




		</Row>
	);
}

export default Toolstack;
