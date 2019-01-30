import React from "react";
import { Row, Col, Media } from "reactstrap";
import github from "../img/github-icon.svg";
import browser from "../img/browser-icon.svg";
import blobTopLeft from '../img/blob1_topleft.svg';


export class Code extends React.Component {
  render() {
    return (

      <div id="code"
        style={{
          backgroundImage: 'url(' + blobTopLeft + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          height: 'auto'
        }}>

        <h3 className="main-headline">Code Projects</h3>

        <h5 id="proj-subtitle">Below are projects and demos that are code samples.</h5>


        <Row className="featured-row">

          <Media>

            <Col md="4" className="gif-left-area">

              <Media left href="https://product-tech-reviews.herokuapp.com/" target="_blank">
                <img
                  className="img-left"
                  src={require('../img/techprodapp_screenshare.gif')}
                  alt="React and Django App Animated Gif Screenshare"
                />

              </Media>

            </Col>


            <Col xs="7" md={{ size: 7, offset: 1 }} className="right-featured">
              <Media body>
                <Media heading>
                  <span className="rd-title">React Fetch API &amp; Django REST API</span> Tech Product Review Web App
        </Media>

                <p><strong>A combination of two powerful technologies — React and Django REST API Framework!</strong>  <span className="rd-title">This is both a UI Design and Code sample.</span></p>



                <p>The React front-end uses the Fetch API to retrieve the data from the Django REST API Endpoint that I created. To be more <strong>server-friendly</strong>,
          the React front-end and Django back-end are deployed as <strong>separate</strong> apps on Heroku. The React app points to the
          Django REST API Endpoint app.</p>

                <Row className="text-center">
                  <Col md="4">
                    <a
                      href="https://product-tech-reviews.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={browser}
                        className="browser-icon icom-sm"
                        alt="View Tech Product App Online"
                      />{" "}
                      View Online
                      </a>

                  </Col>


                  <Col md="4">
                    <a
                      href="https://github.com/AleeWeb/review_react_frontend_ui"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={github}
                        className="github-icon icom-sm"
                        alt="View React Front-End GitHub Code"
                      />{" "}
                      React Code
                      </a>

                  </Col>


                  <Col md="4">

                    <a
                      href="https://github.com/AleeWeb/review_django_api_backend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={github}
                        className="github-icon icom-sm"
                        alt="View Django Back-End GitHub Code"
                      />{" "}
                      Django Code
                      </a>

                  </Col>


                </Row>

                <span className="left-icon">

                </span>


              </Media>

            </Col>

          </Media>


        </Row>


        {/* Start of Row 1 */}
        <Row>

          <Col xs="6" sm="3">
            <img
              src={require('../img/thumb-django-jobapp.jpg')}
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
                      This is a human resources job post management app tool. The basic CRUD
                      (create, read, update and delete). Modify job titles and descriptions.</p>
                  </div>

                  <div className="modal-footer">
                    <span className="left-icon">
                      <a
                        href="https://django-hr-crudapp.herokuapp.com/"
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
          {/* End of Modal 1  */}



          {/* Modal 2  */}
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
                       open repositories like GitHub based on the <a href="https://mdbootstrap.com/license/" target="_blank" rel="noopener noreferrer">license</a> restrictions.</small>

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
                        href="https://www.dropbox.com/s/mb2kzjj89u09do3/travel_buddy_nov12_2018.zip?dl=0"
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
          {/* End of Modal 2  */}


          {/* Modal 3  */}

          <Col xs="6" sm="3">
            <img
              src={require('../img/thumb-weather-api.jpg')}
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
                      Open Weather Map API
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

                    <img src={require('../img/modal_weather_api.jpg')} alt="Weather API screenshot" width="100%" />


                    <p>Open Weather Map API web app used to convert temperature from Celsius to Fahrenheit. getJSON used to retrieve data.
                      Toggle back and forth using Bootstrap and jQuery. The API includes a weather icon that dynamically changes depending on the weather.</p>
                  </div>
                  <div className="modal-footer">

                    <span className="left-icon">
                      <a
                        href="https://codepen.io/Aleeweb/full/qjYRBN/"
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
                        href="https://codepen.io/Aleeweb/pen/qjYRBN"
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
              src={require('../img/thumb-mdtoolbox.jpg')}
              className="hvr-grow-shadow"
              data-toggle="modal"
              data-target="#modal4"
              alt="MDP ToolBox"
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
                    <h5 className="modal-title" id="modal4">
                      Maryland Dept. of Planning ToolBox
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

                    <img src={require('../img/modal_reinvestmd.jpg')} alt="Reinvest MD screenshot" width="100%" />

                    <p><strong>Click on the "Toolbox" tab at this link.</strong></p>

                    <p>In 2014-2015, I worked on a couple of apps using JSON and jQuery to pull and display RESTFUL API data for the Maryland Department of Planning. Here is one.</p>



                  </div>
                  <div className="modal-footer">
                    <span className="left-icon">
                      <a href="https://apps.planning.maryland.gov/reinvestmd/" target="_blank" rel="noopener noreferrer">
                        <img
                          src={browser}
                          className="browser-icon"
                          alt="View Online"
                        />{" "}
                        View Online
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
          {/* End of Modal 4  */}
        </Row>
        {/* End of Row 1 */}

        <br />

        {/* Row 2 */}

        <Row>



          {/* Modal 5 */}
          <Col xs="6" sm="3">
            <img
              src={require('../img/thumb-comingsoon.jpg')}
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
                      GSAP and Vivus.JS Animated Coming Soon Page
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

                    <img src={require('../img/modal_coming_soon.jpg')} alt="Animated" width="100%" />

                    <p>This is an animated 'Coming Soon' page. I used the GreenSock Animation Platform (GSAP) library and Vivus.js. </p>
                  </div>
                  <div className="modal-footer">

                    <span className="left-icon">
                      <a
                        href="https://codepen.io/Aleeweb/full/PNaXgj/"
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
                        href="https://codepen.io/Aleeweb/pen/PNaXgj"
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

          <Col xs="6" sm="3">
            <img
              src={require('../img/thumbs_django_customerlog.jpg')}
              className="hvr-grow-shadow"
              data-toggle="modal"
              data-target="#modal3"
              alt="MDP ToolBox"
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
                    <h5 className="modal-title" id="modal3">
                      Django REST API Customer Log Data
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
                    <p>This is <strong>custom API creation</strong> using <strong>Django 2.1 REST Framework</strong>. The link is a demo for Store customer log data to keep a record of customer purchase information.</p>

                  </div>
                  <div className="modal-footer">
                    <span className="left-icon">
                      <a
                        href="https://restapi-customer-log.herokuapp.com/customers/"
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
                        href="https://github.com/AleeWeb/restapi_customer_log"
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

        </Row>
        {/* End of Row 2 */}
      </div>
    );
  }
}
