import React from "react";
import { useLocation } from "react-router-dom";
import "./articlepage.css";
import data from "./data.json";
import MoreArticles from "./MoreArticles";
import YouTube from "react-youtube-embed";
import Table from "./Table";
import Twitter2 from "./Twitter2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import "./newArticlePage.css"

function NewArticlePage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const currentCard =
    data.articles.filter((card) => card.id === params.get("id"))[0] || {};

  return (
    <Container className = "newArticlePage">
      <Row>
        {currentCard.image === "" ? (
          <div></div>
        ) : (
          <Image src={currentCard.image} alt={currentCard.title} fluid />
        )}
      </Row>
      <Row>
        <h1>{currentCard.title}</h1>
      </Row>
      <Row>
        <h4>
          Publicado em {currentCard.date} por {currentCard.author}
        </h4>
      </Row>
      <Row>
        <h3>{currentCard.headline}</h3>
      </Row>
      <Row>
        <Col xs={12} sm={8} md={8} lg={8} xl={8}>
          <p>{currentCard.paragraph1}</p>
          <p>{currentCard.paragraph2}</p>
          <p>{currentCard.paragraph3}</p>
          <p>{currentCard.paragraph4}</p>
          <p>{currentCard.paragraph5}</p>
          <p>{currentCard.paragraph6}</p>
          <p>{currentCard.paragraph7}</p>
          <p>{currentCard.paragraph8}</p>
          <p>{currentCard.paragraph9}</p>
          <p>{currentCard.paragraph10}</p>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <Twitter2 />
        </Col>
      </Row>

      <Row>
        {currentCard.tablemiddle === "true" ? <Table /> : <div></div>}

        {currentCard.secondImage === "" ? (
          <div></div>
        ) : (
          <Image alt={currentCard.title} src={currentCard.secondImage} fluid />
        )}
        {currentCard.iframe === "" ? (
          <div></div>
        ) : (
          <YouTube className="ariclePage__video" id={currentCard.iframe} />
        )}
      </Row>
      <Row>
      <p>{currentCard.paragraph11}</p>
        <p>{currentCard.paragraph12}</p>
        <p>{currentCard.paragraph13}</p>
        <p>{currentCard.paragraph14}</p>
        <p>{currentCard.paragraph15}</p>
        <p>{currentCard.paragraph16}</p>
        <p>{currentCard.paragraph17}</p>
        <p>{currentCard.paragraph18}</p>
        <p>{currentCard.paragraph19}</p>
        <p>{currentCard.paragraph20}</p>
      </Row>
      <Row>
      {currentCard.tablemiddle !== "true" ? <Table /> : <div></div>}

      </Row>
      <Row>
      <MoreArticles className="articlePage__more" />

      </Row>
    </Container>
  );
}

export default NewArticlePage;
