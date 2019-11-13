import React from "react";
import { Row, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import CurriculumV from "./../assets/curriculum-francisvelueta.pdf";

const Curriculum = props => {
  return (
    <div id="curriculum" className="aboutme-content">
      <Fade left appear>
        <h1 className="ml-4 display-3">Curriculum</h1>
      </Fade>
      <Row className="mr-0">
        <Col
          xs={{ size: 6, offset: 3 }}
          md={{ size: 6, offset: 3 }}
          xl={{ size: 3, offset: 4 }}
          className="font-nice margin-lef"
        >
          <Button
            download="CVFrancis2019.pdf"
            href={CurriculumV}
            color="danger"
            size="lg"
            block
          >
            {" "}
            Descargar PDF
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Curriculum;
