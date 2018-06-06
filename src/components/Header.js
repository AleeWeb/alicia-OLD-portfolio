import React from "react";
import { Container, Row, Col } from "reactstrap";
import laptop from '../img/laptop_triangle.svg';

export class Header extends React.Component {
  render() {
    return (

      <Container className="container-fluid" id="header">

        <Row>

          <Col sm="6" xl="6" className="header-txt">

            <h3>
              Software Developer &amp; UI/UX Designer
            </h3>

            <p className="header-subtxt">Hello, my name is Alicia Alexander.</p>

            <p className="header-subtxt">
              I provide you with clean <span className="ui">UI design</span>, creative user experiences
               and development for your applications.
            </p>
          </Col>

          <Col sm="6" xl="6">

            <img src={laptop} id="laptop-img" alt="logo" />

          </Col>
        </Row>
      </Container>
    );
  }
}