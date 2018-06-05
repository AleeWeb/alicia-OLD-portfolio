import React from "react";
import { Container, Row, Col } from "reactstrap";
import github from "../img/github-icon.svg";
import browser from "../img/browser-icon.svg";

export class Projects extends React.Component {
  render() {
    return (
      <Container id="projects">
        <h1>Code Projects</h1>
        <h3 id="proj-subtitle">Below are projects and demos that are code samples for you.</h3>

        <Row>
          {/* Modal 1  */}
          <Col xs="6" sm="3">
            {" "}
            <img
              src={require('../img/thumb-travbuddy.jpg')}
              data-toggle="modal"
              data-target="#modal1"
              className="hvr-grow-shadow"
              alt="Django TravelBuddy Screenshot"
            />
            <div
              className="modal fade"
              id="modal1"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Django All-Auth Travel Networking App
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">

                    <img src={require('../img/modal-img-travbuddy.jpg')} alt="Travel Buddy Add Plan Screenshot" width="100%" />

                    <p className="modal-txt">Thanks to Django All-Auth, users can easily login using their Google or GitHub accounts. Add your own travel plans or join the trips of other users.

                  If you plan to download the code, you will need to obtain your own <a href="https://django-allauth.readthedocs.io/en/latest/providers.html#google" target="_blank" rel="noopener noreferrer">Google</a> and <a href="https://django-allauth.readthedocs.io/en/latest/providers.html#github" target="_blank" rel="noopener noreferrer">GitHub</a> keys to enter into the
                   app Django admin dashboard.</p>

                    <small><strong>Note:</strong> The code is uploaded and shared to DropBox because I <strong>cannot</strong> redistribute MDB Pro to
                       open repositories like GitHub based on the <a href="https://mdbootstrap.com/license/" target="_blank" rel="noopener noreferrer">license</a> restrictions
                       explained to me by staff.</small>

                  </div>
                  <div className="modal-footer">
                    <span className="left-icon">
                      <a href="https://a-travel-buddy.herokuapp.com/accounts/login/?next=/travelhome" target="_blank" rel="noopener noreferrer">
                        <img
                          src={browser}
                          className="browser-icon"
                          alt="View Online"
                        />{" "}
                        View Online
                      </a>
                    </span>

                    <span className="right-icon">
                      <a
                        href="https://www.dropbox.com/s/rulbfcbppdd34d0/travel_buddy.zip?dl=0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={require('../img/dropbox.png')}
                          alt="DropBox Icon"
                        />{" "}
                        View Code
                      </a>
                    </span>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* End of Modal 1  */}

          {/* Modal 2 */}
          <Col xs="6" sm="3">
            <img
              src={require('../img/thumb-react-jewelrycart.jpg')}
              className="hvr-grow-shadow"
              data-toggle="modal"
              data-target="#modal2"
              alt="Django TravelBuddy Screenshot"
            />

            <div
              className="modal fade"
              id="modal2"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      React Jewelry Store and Shopping Cart Demo
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">

                    <img src={require('../img/modal-img-cartpg.jpg')} alt="React Shopping Cart Screenshot" width="100%" />

                    <p className="modal-txt">This is a React shopping cart app and landing page demo for the small jewelry business, "Inspired Adornment." See GitHub for more information.</p>

                  </div>
                  <div className="modal-footer">
                    <span className="left-icon">
                      <a
                        href="http://young-spire-27336.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={browser}
                          className="browser-icon"
                          alt="View Online"
                        />{" "}
                        View Online
                      </a>
                    </span>

                    <span className="right-icon">
                      <a
                        href="https://github.com/AleeWeb/jewelry-react-shoppingcart"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={github}
                          className="github-icon"
                          alt="View GitHub Code"
                        />{" "}
                        View Code
                      </a>
                    </span>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* End of Modal 2  */}

          {/* Modal 3 */}
          <Col xs="6" sm="3">
            <img
              src={require('../img/thumb-react-portfolio.jpg')}
              className="hvr-grow-shadow"
              data-toggle="modal"
              data-target="#modal3"
              alt="Django TravelBuddy Screenshot"
            />

            <div
              className="modal fade"
              id="modal3"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      React Portfolio
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>I built my portfolio website with React 16, Bootstrap 4, SASS, yarn, SVG animation and so much more! <strong>More updates coming soon!</strong></p>
                  </div>
                  <div className="modal-footer">
                    <span className="left-icon">
                      <h6>You are looking at it right now!</h6>
                    </span>

                    <span className="right-icon">
                      <a
                        href="https://github.com/AleeWeb/alicia-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={github}
                          className="github-icon"
                          alt="View GitHub Code"
                        />{" "}
                        View Code
                      </a>
                    </span>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* End of Modal 3  */}

          {/* Modal 4 */}
          <Col xs="6" sm="3">
            <img
              src={require('../img/thumb-django-jobapp.jpg')}
              className="hvr-grow-shadow"
              data-toggle="modal"
              data-target="#modal4"
              alt="Django TravelBuddy Screenshot"
            />

            <div
              className="modal fade"
              id="modal4"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Django C.R.U.D App Demo
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">

                    <img src={require('../img/modal-img-jobapp.jpg')} alt="Django HR Job app" width="100%" />

                    <p className="modal-txt">
                      This is a Python DJANGO human resources job post management app tool. The basic CRUD
                      (create, read, update and delete). Post, edit and delete job titles and descriptions.</p>
                  </div>
                  <div className="modal-footer">

                    <span className="right-icon">
                      <a
                        href="https://github.com/AleeWeb/django_hrjobapp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={github}
                          className="github-icon"
                          alt="View GitHub Code"
                        />{" "}
                        View Code
                      </a>
                    </span>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* End of Modal 2  */}
        </Row>
        {/* End of Row 1 */}

        <br />

        {/* Row 2 */}

        <Row>
          {/* Modal 5  */}
          <Col xs="6" sm="3">
            {" "}
            <img
              src={require('../img/thumb-angular.jpg')}
              className="hvr-grow-shadow"
              data-toggle="modal"
              data-target="#modal5"
              alt="Django TravelBuddy Screenshot"
            />
            <div
              className="modal fade"
              id="modal5"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Angular To Do App
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>We all start with To Do apps don't we? This was my first Angular app built last year. It has drag-and-drop user experience.</p>
                  </div>
                  <div className="modal-footer">


                    <span className="right-icon">
                      <a
                        href="https://github.com/AleeWeb/angular4-todoapp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={github}
                          className="github-icon"
                          alt="View GitHub Code"
                        />{" "}
                        View Code
                      </a>
                    </span>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* End of Modal 5  */}


          {/* Start of Modal #6 */}
          <Col xs="6" sm="3">
            <img
              src={require('../img/thumb-py3.jpg')}
              className="hvr-grow-shadow"
              data-toggle="modal"
              data-target="#modal6"
              alt="Django TravelBuddy Screenshot"
            />

            <div
              className="modal fade"
              id="modal6"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Python 3
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>This is some <strong>Python 3</strong> API training last Fall. I will be posting updated code samples using the <strong>latest Python 3.6.5 and Django 2.0.6.</strong></p>
                  </div>
                  <div className="modal-footer">


                    <span className="right-icon">
                      <a
                        href="https://github.com/AleeWeb/python3-training"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={github}
                          className="github-icon"
                          alt="View GitHub Code"
                        />{" "}
                        View Code
                      </a>
                    </span>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>


          {/* Modal 7 */}
          <Col xs="6" sm="3">
            <img
              src={require('../img/thumb-randomgen.jpg')}
              className="hvr-grow-shadow"
              data-toggle="modal"
              data-target="#modal7"
              alt="Django TravelBuddy Screenshot"
            />

            <div
              className="modal fade"
              id="modal7"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Python Random word generator
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>A simple Django random character generator using Python 2.7.x version.</p>
                  </div>
                  <div className="modal-footer">

                    <span className="right-icon">
                      <a
                        href="https://github.com/AleeWeb/randomgen"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={github}
                          className="github-icon"
                          alt="View GitHub Code"
                        />{" "}
                        View Code
                      </a>
                    </span>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* End of Modal 7  */}




          {/* Hide for now. More Coming Soon!
           <Col xs="6" sm="3">
            <img
              src="http://via.placeholder.com/215x215"
              className = "hvr-grow-shadow"
              data-toggle="modal"
              data-target="#modal8"
              alt="Django TravelBuddy Screenshot"
            />

            <div
              className="modal fade"
              id="modal8"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Modal 8</p>
                  </div>
                  <div className="modal-footer">
                    <span className="left-icon">
                      <a
                        href="http://young-spire-27336.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={browser}
                          className="browser-icon"
                          alt="View Online"
                        />{" "}
                        View Online
                      </a>
                    </span>

                    <span className="right-icon">
                      <a
                        href="https://github.com/AleeWeb/jewelry-react-shoppingcart"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={github}
                          className="github-icon"
                          alt="View GitHub Code"
                        />{" "}
                        View Code
                      </a>
                    </span>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          */}

          <h1 id="coming-soon-text">More Code Samples Coming Soon !</h1>
        </Row>
        {/* End of Row 2 */}
      </Container>
    );
  }
}
