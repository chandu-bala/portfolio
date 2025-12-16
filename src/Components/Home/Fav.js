import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


function Fav() {
  const characters = [
    {
      name: "EREN YEAGER",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZVGwWaaLzyqx34gIQWkP9rgsmbNY1IDqBg&s",
      desc: "A deeply complex character driven by freedom, sacrifice, and moral ambiguity."
    },
    {
      name: "IVAR - The Boneless",
      img: "https://images8.alphacoders.com/891/thumb-1920-891850.jpg",
      desc: "A ruthless Viking strategist known for intelligence, ambition, and fearlessness."
    },
    {
      name: "OPTIMUS PRIME",
      img: "https://preview.redd.it/optimus-prime-transformers-one-v0-3ma39kadzdbe1.jpg?width=640&crop=smart&auto=webp&s=96d57699fe1eda7f38eee0ea6ded6e1c9e63aa75",
      desc: "A true symbol of leadership, courage, and selfless protection of humanity."
    }
  ];

  const stories = [
  {
    title: "Attack on Titan",
    img: "https://preview.redd.it/was-the-truth-of-paradis-history-ever-confirmed-v0-jnymjuuyaipb1.jpg?width=602&format=pjpg&auto=webp&s=0d6fa2ee1972c378e869ac8c9af9585131ed68b6",
    desc: "A dark, philosophical anime exploring freedom, war, and human nature.",
    link: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin"
  },
  {
    title: "Death Note",
    img: "https://i.pinimg.com/736x/e3/01/ff/e301ff0bade3b37aae18c6f45297b41f.jpg",
    desc: "A psychological battle between justice and morality.",
    link: "https://myanimelist.net/anime/1535/Death_Note"
  },
  {
    title: "Vikings",
    img: "https://i.pinimg.com/736x/6f/1b/3b/6f1b3bb24d3b9e3e3d17e07fe25bf3e3.jpg",
    desc: "A legendary saga of Norse warriors and conquest.",
    link: "https://www.imdb.com/title/tt2306299/"
  },
  {
    title: "The Odyssey",
    img: "https://pixelz.cc/wp-content/uploads/2018/08/assassins-creed-odyssey-kassandra-uhd-4k-wallpaper.jpg",
    desc: "An epic journey of courage, fate, and perseverance.",
    link: "https://www.gutenberg.org/ebooks/1727"
  },
  {
    title: "Berserk",
    img: "https://wallpapers.com/images/featured/berserk-pictures-uhvqeutwahosu8bz.jpg",
    desc: "A brutal dark fantasy about destiny, pain, and resilience.",
    link: "https://myanimelist.net/manga/2/Berserk"
  }
];


  return (
    <Container fluid className="fav-section" id="favourites">
      <Container>
        <h1 className="project-heading" style={{fontSize: "2.6em"}}>
          THINGS I <strong className="purple">LOVE</strong>
        </h1>
        <br/>
        <h2 className="project-subheading" style={{ color: "#fff" }}>
            Favourite   <span className="purple">Characters</span>
        </h2>
        <br/>

        <Row>
          {characters.map((char, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="fav-card h-100">
                <Card.Img
                  variant="top"
                  src={char.img}
                  alt={char.name}
                  style={{ height: "280px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="purple">{char.name}</Card.Title>
                  <Card.Text>{char.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* FAVOURITE STORIES */}
        <h2 className="project-subheading" style={{ marginTop: "40px" }}>
          Favourite <span className="purple">Stories</span>
        </h2>

        <Row className="justify-content-center">
  {stories.map((story, index) => (
    <Col md={4} sm={6} key={index} className="mb-4 d-flex">
      <Card className="fav-card story-card h-100 w-100">

        {/* IMAGE */}
        <div className="story-img-wrapper">
          <Card.Img
            src={story.img}
            alt={story.title}
            className="story-img"
          />

          {/* OVERLAY (hidden by default) */}
          <div className="story-overlay">
            <p className="story-desc">{story.desc}</p>
            <a
              href={story.link}
              target="_blank"
              rel="noreferrer"
              className="story-link"
            >
              Read / Watch →
            </a>
          </div>
        </div>

        {/* TITLE (always visible) */}
        <Card.Body className="text-center">
          <Card.Title>{story.title}</Card.Title>
        </Card.Body>

      </Card>
    </Col>
  ))}
</Row>


      </Container>
    </Container>
  );
}

export default Fav;
