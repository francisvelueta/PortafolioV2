import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import perfil from "./../assets/perfil.jpeg";
import Fade from "react-reveal/Fade";

const Aboutme = props => {
  return (
    <div id="aboutme">
      <Jumbotron className="aboutme-content">
        <Fade left>
          <h1 className="display-3 mb-5">¡Hola soy Francis!</h1>
        </Fade>
        <Row className="align-items-center justify-items-center">
          <Col
            xs="12"
            md="12"
            lg={{ size: "10", offset: "2" }}
            xl={{ size: "4", offset: "1" }}
          >
            <img
              className="img-fluid mt-5 img-avatar"
              src={perfil}
              alt="foto perfil"
            />
          </Col>
          <Col xs="12" xl="6">
            <p className="h3">
              Soy Fullstack Developer, Freelance, Geek, apasionada por la
              tecnología, videojuegos, series de anime y películas. Cada día me
              gusta aprender algo nuevo, soy curiosa y aspiro ser una Full Stack
              en su totalidad.
            </p>
            <hr className="my-3" />
            <p className="lead h4">
              Tengo amplios conocimientos técnicos en Javascript utilizando
              React, Next, Vue, Nuxt, Node, MongoDB, Firebase, GraphQL APIs y en
              apps móviles Swift, mis habilidades suaves son metodologías
              ágiles, trabajo en equipo, empatía y ser autodidacta. También
              utilizo herramientas como Git, Jira, Material Design y por
              supuesto Linux. Si te gustaría realizar una página web me puedes
              enviar un correo y con mucho gusto te contactaré.
            </p>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Aboutme;
