import React, { Component } from 'react'
import {UncontrolledCarousel,Container, Row,Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Card,Button} from 'reactstrap';


import airways from './assets/airways.jpg';
import car_brands from './assets/car_brands.png';
import porsche from './assets/porsche.jpg';
import engine from './assets/engine.jpg';
import front_pg from './assets/front_pg.jpg';
import warehouse from './assets/warehouse.jpg';
import fb_forde from './assets/fb_forde.jpg'
export default class Home extends Component {
 
  render() {
    const items = [
      {
        src: airways,
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      },
      {
        src: porsche,
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      },
      {
        src: engine,
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      },
      {
        src: front_pg,
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      }, 
      {
        src: warehouse,
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      },
      {
        src: car_brands,
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      },
      {
        src: fb_forde,
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      },
    ]
    const email = <a href='mailto:rechard_forde@outlook.com'>rechard_forde@outlook.com</a>
    const steps = [
      
      {
        header:'Step 2',
        icon:'',
        subtitle:'Give it some time',
        descriptive_text: "Quotes will be provided  within 24 hours.",
        key: "step_2"
      }, 
      {
        header:'Step 3',
        icon:'',
        subtitle:'Make a payment',
        descriptive_text: "We accept paypal or direct trasnfers",
        button: 'Pay here',
        key: "step_3"
      }, {
        header:'Step 4',
        icon:'',
        subtitle:'Some information',
        key: "step_4"
      }
  ]
    const carousel = <UncontrolledCarousel style = {{maxHeight:'500px'}} items= {items}/>
 
  

    const cards = steps.map((obj) => 
    <Col md = '4' lg = '3' style = {{padding:2, marginTop:10, marginBottom:20}}>
    <Card style={{minHeight:335}}>
      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{obj.header}</CardTitle>
          <CardSubtitle>{obj.subtitle}</CardSubtitle>
          <CardText> {obj.descriptive_text}</CardText>
          <CardText><a href= "/payment">{obj.button}</a></CardText>
    </CardBody>
  </Card>
</Col>
    )
    return (
      <div>
        <Container>
          <br/>
          {carousel}
          
          <Container>
            <Row className = 'home-content'>
          
              <Col>
                <h1 className = "mx-auto">
                  We are proud to present the launch of our website! 
                </h1>
                <hr/>
                <p className = "landing-site"> 
                  Here at Forde Logistics & Consulting we take the time and effort needed to supply quality OEM MANUFACTURES products in vehicular applicationsto our clients. It's easy as:
                </p>
              </Col>
              </Row>
              <Row className = 'home-content'>
              <Col md = '4' lg = '3' style = {{padding:2, marginTop:10}}>
                <Card style={{minHeight:335}} >
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle> Step 1</CardTitle>
                      <CardSubtitle>Email us</CardSubtitle>
                      <CardText> You can contact us via email: <a href='mailto:rechard_forde@outlook.com'>rechard_forde@outlook.com</a>  or through our <a href = '/contact'>contact</a> page.</CardText>
                    </CardBody>
                   </Card>
                  </Col>
                {cards}
              </Row>
              
            </Container>
          </Container>
      </div>
    )
  }
}
