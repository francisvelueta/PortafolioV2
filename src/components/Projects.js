import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
const Projects = props => {
  return (
    <div id='projects' className='aboutme-content'>
      <Fade left>
        <h1 className='display-3'>Proyectos</h1>
      </Fade>
      <Row className='font-nice mr-0 ml-1'>
        <Col
          sm='12'
          md='6'
          xl={{ size: 3, offset: 3 }}
          className='align-self-center mt-5 mb-2'>
          <div className='thecard'>
            <Card
              className='thecard__side thecard__side--front shadow '
              style={{ Height: '820px' }}>
              <CardImg
                top
                width='100%'
                height='60%'
                src='https://github.com/francisvelueta/starwars-api/blob/master/client/src/assets/swapipng.png?raw=true'
                alt='The Force App'
              />
              <CardBody>
                <CardTitle className='font-weight-bold' tag='h4'>
                  The Force App
                </CardTitle>
                <CardText>
                  Si eres fan de Star wars esta web te va a gustar, The force
                  app es un catálogo donde encontrarás información importante
                  sobre las principales naves, puedes agregar a favoritas y
                  editar.
                </CardText>
              </CardBody>
            </Card>
            <div className=' thecard__side thecard__side--back'>
              <Card className='shadow height-card'>
                <CardBody>
                  <CardTitle className='mb-5 font-weight-bold' tag='h2'>
                    Herramientas
                  </CardTitle>
                  <CardText tag='h3' className='mt-4'>
                    <i className='fas fa-check'></i> React
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> Redux
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> Node
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> MongoDB
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> Swapi
                  </CardText>
                  <CardText className='mb-5' tag='h3'>
                    <i className='fas fa-check'></i> Reactstrap
                  </CardText>
                  <Button
                    href='https://theforceapp.herokuapp.com/'
                    className='mt-5 float-left'
                    color='danger'
                    size='lg'>
                    Demo
                  </Button>{' '}
                  <Button
                    href='https://github.com/francisvelueta/starwars-api'
                    className='mt-5 float-right'
                    size='lg'>
                    Código
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </Col>
        <Col sm='12' md='6' lg='6' xl='3' className='mt-5 mb-2'>
          <div className='thecard'>
            <div className='thecard__side thecard__side--front'>
              <Card className='thecard__side thecard__side--front shadow'>
                <CardImg
                  top
                  width='100%'
                  height='60%'
                  src='https://user-images.githubusercontent.com/2570297/68066870-90a5eb00-fd04-11e9-905c-49032ee81c0a.png'
                  alt='shoping list'
                />
                <CardBody>
                  <CardTitle className='font-weight-bold' tag='h4'>
                    Shopping List
                  </CardTitle>
                  <CardText>
                    Es una pequeña web donde puedes realizar tus listas del
                    mandado, Shopping List se encarga de recordarte de comprar
                    esa despensa y vivéres que necesitas del día a día.
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div className='thecard__side thecard__side--back'>
              <Card className='shadow height-card'>
                <CardBody>
                  <CardTitle className='mb-4 font-weight-bold' tag='h2'>
                    Herramientas
                  </CardTitle>
                  <CardText tag='h3' className='mt-2'>
                    <i className='fas fa-check'></i> Node
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> React
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> Redux
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> Axios
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> MongoDB
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> Express
                  </CardText>
                  <CardText className='mb-3' tag='h3'>
                    <i className='fas fa-check'></i> Bootstrap
                  </CardText>
                  <Button
                    href='https://blooming-castle-41260.herokuapp.com/'
                    className='mt-5 float-left'
                    color='danger'
                    size='lg'>
                    Demo
                  </Button>{' '}
                  <Button
                    href='https://github.com/francisvelueta/ShoppingList'
                    className='mt-5 float-right'
                    size='lg'>
                    Código
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='font-nice mr-0 ml-1'>
        <Col sm='12' md='6' xl={{ size: 3, offset: 3 }} className='mt-5 mb-2'>
          <div className='thecard'>
            <div className='thecard__side thecard__side--front'>
              <Card className='thecard__side thecard__side--front shadow'>
                <CardImg
                  top
                  width='100%'
                  height='60%'
                  src='https://github.com/francisvelueta/node-openpay/blob/master/src/assets/prototype.png?raw=true'
                  alt='openpay'
                />
                <CardBody>
                  <CardTitle className='font-weight-bold' tag='h4'>
                    Openpay Clients
                  </CardTitle>
                  <CardText>
                    Comenzó como un reto técnico, esta web ocupa un servicio de
                    Openpay, un administrador puede ver la lista completa de los
                    usuarios que se registran a tu cuenta Openpay.
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div className='thecard__side thecard__side--back'>
              <Card className='shadow height-card'>
                <CardBody>
                  <CardTitle className='mb-5 font-weight-bold' tag='h2'>
                    Herramientas
                  </CardTitle>
                  <CardText tag='h3' className='mt-4'>
                    <i className='fas fa-check'></i> Node
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> Openpay Api
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> MongoDB
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> Express
                  </CardText>
                  <CardText className='mb-5' tag='h3'>
                    <i className='fas fa-check'></i> Bootstrap
                  </CardText>
                  <Button
                    href='https://node-openpay.herokuapp.com/'
                    className='mt-5 float-left'
                    color='danger'
                    size='lg'>
                    Demo
                  </Button>{' '}
                  <Button
                    href='https://github.com/francisvelueta/node-openpay'
                    className='mt-5 float-right'
                    size='lg'>
                    Código
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </Col>
        <Col sm='12' md='6' xl='3' className='mt-5 mb-2'>
          <div className='thecard'>
            <div className='thecard__side thecard__side--front'>
              <Card className='thecard__side thecard__side--front shadow'>
                <CardImg
                  top
                  width='100%'
                  height='60%'
                  src='https://github.com/francisvelueta/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/ux/readme-images/demo-final.jpg?raw=true'
                  alt='Card image cap'
                />
                <CardBody>
                  <CardTitle className='font-weight-bold' tag='h4'>
                    Data Dashboard
                  </CardTitle>
                  <CardText>
                    Es una página donde se lleva el monitoreo de avances de las
                    alumnas de Laboratoria de todas las sedes, incluye gráficas
                    de su desempeño, esta información es tomada desde un archivo
                    JSON.
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div className='thecard__side thecard__side--back'>
              <Card className='shadow height-card'>
                <CardBody>
                  <CardTitle className='mb-5 font-weight-bold' tag='h2'>
                    Herramientas
                  </CardTitle>
                  <CardText tag='h3' className='mt-4'>
                    <i className='fas fa-check'></i> Javascript
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> JSON
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> Bootstrap
                  </CardText>
                  <CardText tag='h3'>
                    <i className='fas fa-check'></i> Google Charts
                  </CardText>
                  <CardText className='mb-5' tag='h3'>
                    <i className='fas fa-check'></i> Trabajo en equipo
                  </CardText>
                  <Button
                    href='https://francisvelueta.github.io/cdmx-2018-06-bc-core-am-data-dashboard/src/'
                    className='mt-5 float-left'
                    color='danger'
                    size='lg'>
                    Demo
                  </Button>{' '}
                  <Button
                    href='https://github.com/francisvelueta/cdmx-2018-06-bc-core-am-data-dashboard'
                    className='mt-5 float-right'
                    size='lg'>
                    Código
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
