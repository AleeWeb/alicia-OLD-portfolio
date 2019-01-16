import React from "react";
import { Row, Col } from "reactstrap";
import laptop from '../img/laptop_triangle.svg';


export class Header extends React.Component {
  render() {
    return (
        <div id="header">
            <Row>

                <Col xs="6" md="6" className="header-txt">
                  <h3>
                    Software Developer &amp; UI/UX Designer
                  </h3>

                  <p className="header-subtxt">Hello, my name is Alicia Alexander.</p>

                  <p className="header-subtxt">
                    I provide you with clean <span className="ui">UI design</span>, creative user experiences (UX)
                    and development for your applications.
                  </p>
                </Col>

        
                <Col xs="6" md="6">
                
                  <img src={laptop} id="laptopImg" alt="logo" />

                </Col>
            </Row>
        </div>
    );
  }
}