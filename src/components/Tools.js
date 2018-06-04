import React from "react";

export class Tools extends React.Component {
  render() {
    return (
      <div id="skills">
        <h1>My Toolkit</h1>
        
      <h3>What do I usually use?</h3>

			<p><strong>Front-end/Client-side:</strong> <img src={require('../img/front-end-icons.png')} alt ="Front End Icons" /></p>

			<p><strong>Web Application Libraries/Frameworks:</strong> <img src={require('../img/appstack-icons.png')} alt ="Web App Stack icons" /></p>

      <small>Note: Django is a full stack Python framework.</small>

			<p><strong>Server-side:</strong> Node.Js, Python, API, RESTful services</p>

			<p><strong>Deployment/Server experience:</strong> AWS, Heroku and MAMP</p>

			<p><strong>Database:</strong> MySQL, SQLite and MongoDB</p>

			<p><strong>Tools:</strong> MacBook Pro, Terminal, Git, Github, NPM, Visual Studio Code Editor</p>

      <p><strong>UI and UX Tools:</strong> <img src={require('../img/ui-ux-tools.png')} alt ="UI/UX Tools" /></p>
      

            <em>Training in Sketch, Adobe After Effects for animated gifs and more in the tools above.</em>

      </div>
    );
  }
}
