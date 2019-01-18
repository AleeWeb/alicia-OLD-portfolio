import React from "react";
import { Container } from "reactstrap";
import blobRight from '../img/blob2_right.svg';


export class Tools extends React.Component {
  render() {
    return (
  

      <Container id="skills" 
      style = {{ backgroundImage: 'url(' + blobRight + ')', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center center',
      backgroundPositionX: '340px',
      backgroundRepeat: 'no-repeat',
      height: '950px'
    }}>

        <h3>My Toolkit</h3>
        
      <h3>What do I usually use?</h3>

			<p><strong>Front-end/Client-side:</strong> <img src={require('../img/front-end-icons1.png')} alt ="Front End Icons" /></p>

			<p><strong>Web Application Libraries/Frameworks:</strong> <img src={require('../img/app-framework-icons2v2.png')} alt ="Web App Stack icons" /></p>

      <small>Note: Django is a full stack Python framework.</small>

			<p><strong>Server-side:</strong> Node.Js, Python, API, RESTful services</p>

			<p><strong>Deployment/Server experience:</strong> AWS, Heroku and MAMP</p>

			<p><strong>Database:</strong> MySQL, SQLite and MongoDB</p>

			<p><strong>Tools:</strong> MacBook Pro, Terminal, Git, Github, NPM, Visual Studio Code Editor</p>

      <p><strong>UI and UX Tools:</strong> <img src={require('../img/ui-ux-tools1.png')} alt ="UI/UX Tools" /></p>
      

            <em>I'm also familiar with InVision and Framer X.</em>
            
   
      </Container>
    );
  }
}
