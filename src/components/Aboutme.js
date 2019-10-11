import React from 'react';
import { Jumbotron, Row, Col} from 'reactstrap';
import perfil from "./../assets/perfil.jpeg";
import Fade from 'react-reveal/Fade';

const Aboutme = (props) => {
  return (
    <div id="aboutme">
      <Jumbotron className="aboutme-content">
        <Fade left>
        <h1 className="display-3 mb-5">¡Hola soy Francis!</h1>
        </Fade>
        <Row>
        <Col xs={{ size: '8', offset: '2'}} md ={{ size: '9', offset: '3'}} xl={{ size: '4', offset: '1'}}><img className="img-fluid mt-5 img-avatar" src= {perfil} alt="foto perfil" /></Col>
        <Col xs ="12" xl={{ size: '6', }}><p className="mt-5 lead display-5">Soy Fulllstack Developer, Geek, apasionada por la tecnología, videojuegos, series y películas. Cada día me gusta aprender algo nuevo, soy curiosa y aspiro ser una Full Stack en su totalidad.</p>
        <hr className="my-2" />
        <p className="display-5">Tengo conocimientos técnicos en React JS, Next, Vue, Nuxt, NodeJS,, MongoDB, Firebase, GraphQL y Swift 4, mis habilidades suaves son Metodología agíl, trabajo en equipo y empatía. Tambíen ocupo herramientas como Git, Jira, Material Design y por supuesto Linux.</p>
      </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Aboutme;
