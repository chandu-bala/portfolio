import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Experience from "./Experience";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Experience</strong> i Gained
        </h1>
        <br/>
        <Experience />
        {/* <Github /> */}
        <br/>
      </Container>
    </Container>
  );
}

export default About;



// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import Particle from "../Particle";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";
// import Experience from "./Experience";

// // // Character Images
// // import ErenImg from "../../Assets/characters/eren.jpg";
// // import IvarImg from "../../Assets/characters/ivar.jpg";
// // import OptimusImg from "../../Assets/characters/optimus.jpg";

// // Story Images
// // import AOTImg from "../../Assets/stories/aot.jpg";
// // import DeathNoteImg from "../../Assets/stories/deathnote.jpg";
// // import OdysseyImg from "../../Assets/stories/odyssey.jpg";
// // import VikingsImg from "../../Assets/stories/vikings.jpg";

// function About() {
//   const characters = [
//     {
//       name: "Eren Yeager",
//       // img: ErenImg,
//       desc: "A complex anti-hero driven by freedom and sacrifice, symbolizing the depth of human will and moral ambiguity."
//     },
//     {
//       name: "Ivar The Boneless",
//       // img: IvarImg,
//       desc: "A fearless Viking strategist known for intelligence, brutality, and unmatched battlefield dominance."
//     },
//     {
//       name: "Optimus Prime",
//       // img: OptimusImg,
//       desc: "A symbol of leadership, courage, and selfless protection of humanity and justice."
//     }
//   ];

//   // const stories = [
//   //   { title: "Attack on Titan", img: AOTImg },
//   //   { title: "Death Note", img: DeathNoteImg },
//   //   { title: "The Odyssey", img: OdysseyImg },
//   //   { title: "Vikings", img: VikingsImg }
//   // ];

//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>

//         {/* ABOUT INTRO */}
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col md={7} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               Know Who <strong className="purple">I'M</strong>
//             </h1>
//             <Aboutcard />
//           </Col>

//           <Col md={5} style={{ paddingTop: "120px" }} className="about-img">
//             <img src={laptopImg} alt="about" className="img-fluid" />
//           </Col>
//         </Row>

//         {/* SKILLS */}
//         <h1 className="project-heading">
//           Professional <strong className="purple">Skillset</strong>
//         </h1>
//         <Techstack />

//         {/* TOOLS */}
//         <h1 className="project-heading">
//           <strong className="purple">Tools</strong> I use
//         </h1>
//         <Toolstack />

//         {/* EXPERIENCE */}
//         <h1 className="project-heading">
//           <strong className="purple">Experience</strong> I Gained
//         </h1>
//         <Experience />

//         {/* FAVOURITE CHARACTERS */}
//         <h1 className="project-heading">
//           My Favourite <strong className="purple">Characters</strong>
//         </h1>

//         <Row>
//           {characters.map((char, index) => (
//             <Col md={4} key={index} className="mb-4">
//               <Card className="character-card">
//                 <Card.Img variant="top" src={char.img} />
//                 <Card.Body>
//                   <Card.Title>{char.name}</Card.Title>
//                   <Card.Text>{char.desc}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* TOP STORIES */}
//         <h1 className="project-heading">
//           My Top <strong className="purple">Stories</strong>
//         </h1>

//         <Row>
//           {stories.map((story, index) => (
//             <Col md={3} key={index} className="mb-4">
//               <Card className="story-card">
//                 <Card.Img variant="top" src={story.img} />
//                 <Card.Body>
//                   <Card.Title className="text-center">{story.title}</Card.Title>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//       </Container>
//     </Container>
//   );
// }

// export default About;
