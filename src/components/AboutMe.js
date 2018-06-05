import React from 'react';
import { Container, Row } from "reactstrap";

export class AboutMe extends React.Component {
    render() {
        return (

            <Container id="me">

                <h1>About Me</h1> <br />

                <img id="about-intro-img" src={require('../img/aboutme-intro.gif')} alt="animated gif intro" width="60%" />

                <div className="row">
                    <p>Hello, my name is Alicia Alexander. I enjoy the creative process of bringing concepts to life
                —— from wireframes and mock-ups to code in production! As you can see above, <strong>I LOVE to travel and experience new things!</strong> Work-life balance is important to me. I desire remote work and flexibility. </p>



                    <Row id="socialrow">

                        <p>Contact me:
         
                <a href="https://github.com/AleeWeb" target="_blank" rel="noopener noreferrer"><img className="social-links" src={require('../img/github.png')} alt="GitHub" /></a>



                            <a href="https://www.linkedin.com/in/aalexanderdmv" target="_blank" rel="noopener noreferrer"><img className="social-links" src={require('../img/linkedin.png')} alt="LinkedIn" /></a>


                            <a href="https://codepen.io/Aleeweb" target="_blank" rel="noopener noreferrer"><img className="social-links" src={require('../img/codepen.png')} alt="Codepen" /></a>
                        </p>

                    </Row>


                </div>

                <p>I've had the opportunity to work for
            both the Maryland Department of Planning and the Mayor's Office of Employment Development. For the past year, I've updated my programming language arsenal for web application development. I am always striving to grow as a professional.</p>


            </Container>
        );
    }
}