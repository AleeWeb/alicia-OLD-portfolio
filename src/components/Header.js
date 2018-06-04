import React from "react";
import laptop from '../img/laptop_triangle.svg';
import '../App.css';

export class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="header">
        <div className="row">
          <div className="col-sm-6 col-xl-6 header-txt">

            <h3>
              Software Developer &amp; UI/UX Designer
            </h3>

            <p className="header-subtxt">Hello, my name is Alicia Alexander.</p>

            <p className="header-subtxt">
              I provide you with clean <span className="ui">UI design</span>, creative user experiences
               and development for your applications.
            </p>
          </div>

          <div className="col-sm-6 col-xl-6">
          
          <img src={laptop} id="laptop-img"  alt="logo" />

          </div>
        </div>
      </div>
    );
  }
}
