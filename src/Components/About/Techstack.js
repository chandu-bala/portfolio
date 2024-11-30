import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJsBadge,
    DiReact,
    DiNodejs,
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiMongodb,
    DiRedis,
    DiMysql,
    DiJava,
    DiPython
} from "react-icons/di";
import { FaLinux, FaCode } from "react-icons/fa"; // Importing C++ logo from FontAwesome
import { SiUbuntu } from "react-icons/si"; // Importing Ubuntu logo

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {
                [
                    <DiJava />,
                    <DiPython />,
                    <FaCode />, 
                    <DiHtml5 />,
                    <DiCss3 />,
                    <DiJsBadge />,
                    <DiNodejs />,
                    <DiReact />,
                    <DiMongodb />,
                    <DiMysql />,
                    // <DiRedis />,
                    // <FaLinux />, 
                    // <SiUbuntu /> 
                ].map((tool, index) => 
                    <Col key={index} xs={4} md={2} className="tech-icons">
                        {tool}
                    </Col>
                )
            }
        </Row>
    );
}

export default Techstack;
