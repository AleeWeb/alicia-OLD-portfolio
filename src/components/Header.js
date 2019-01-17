import React from "react";
import { Row, Col } from "reactstrap";
import laptop from '../img/laptop_triangle.svg';
import iSquare from '../img/indigo_square.png';
import aTriangle from '../img/aqua_triangle.png';
import pSquare from '../img/pink_square.png';
import yCircle from '../img/yellow_circle.png';



export class Header extends React.Component {
  render() {
    return (
        <div id="header">
            <Row>

                <Col xs="6" md="6" className="header-txt">

                <img src={iSquare} id="iSquare-img" className="floating" alt="Purple Indigo Square" />

                <img src={aTriangle} id="aTriangle" className="rotating" alt="Aqua Triangle" />

                  <h3>
                    Software Developer &amp; UI/UX Designer
                  </h3>

                  <p className="header-subtxt">Hello, my name is Alicia Alexander.</p>

                  <p className="header-subtxt">
                    I provide you with clean <span className="ui">UI design</span>, creative user experiences (UX)
                    and development for your applications.
                  </p>

                  <img src={pSquare} id="pSquare-img" className="rotating" alt="Pink Square" />

                  <img src={yCircle} id="ycircle-img" className="floating" alt="Yellow Circle" />
                </Col>

        
                <Col xs="6" md="6">
                
                  <img src={laptop} id="laptopImg" alt="Laptop SVG" />

                </Col>
            </Row>
        </div>
    );
  }
}