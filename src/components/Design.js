import React from "react";
import { Row, Col, Media } from "reactstrap";
import github from "../img/github-icon.svg";
import browser from "../img/browser-icon.svg";


export class Design extends React.Component {
  render() {
    return (
      <div id="design">

        <h3 className="main-headline">Design samples</h3>
        <h5 id="proj-subtitle">Mockups, interactive prototypes and MORE Coming Soon! <strong>Click on the thumbnails below.</strong></h5>


        <Row className="featured-row designrw">

          <Media>

            <Col xl="3" >

              <img id="mprototype" src={require('../img/mobile_prototype1.gif')} alt="mobile_prototype_gif" width="94%" />

            </Col>


            <Col xl="9" className="right-featured">
              <Media body>

                {/* Start of Row 1 */}

                <Row id="design-right-side">


                  {/* Start of Modal   */}

                  <Col xl="6">

                    <img
                      src={require('../img/thumb_avesis_home.jpg')}
                      className="hvr-grow-shadow designpic"
                      data-toggle="modal"
                      data-target="#avesis1"
                      alt="pic"
                    />

                    <div
                      className="modal fade"
                      id="avesis1"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">

                            <h5 className="modal-title" id="exampleModalLabel">

                              Avēsis Homepage Redesign Proposal
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

                            <img src={require('../img/design_avesis_home.jpg')} alt="Avesis Home Redesign Mockup Proposal" width="100%" />

                            <p className="modal-txt">
                              This project was a design <strong>and</strong> code presentation for a possible homepage redesign. The top navigation
                              icons animated on mouse hover and were anchor links that had a smooth scroll to the lower sections for easy
                              user experience.
                                  </p>

                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  {/* End of Modal   */}



                  {/* Start of Modal   */}


                  <Col xl="6">

                    <img
                      src={require('../img/thumb_waha1.jpg')}
                      className="hvr-grow-shadow designpic"
                      data-toggle="modal"
                      data-target="#waha"
                      alt="pic"
                    />

                    <div
                      className="modal fade"
                      id="waha"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">

                            <h5 className="modal-title" id="exampleModalLabel">
                              Wisconsin Amateur Hockey Association <br />Design Mock-up
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

                            <img src={require('../img/design_waha.jpg')} alt="Wisconsin Amateur Hockey Association Redesign Mockup" width="100%" />

                          </div>


                        </div>
                      </div>
                    </div>
                  </Col>
                  {/* End of Modal   */}

                </Row>

                {/* End of first row of 2 images   */}




                {/* Start of Row 2 */}


                <Row id="row2-design">


                  {/* Start of Modal   */}


                  <Col xl="6">

                    <img
                      src={require('../img/thumb_brokers1.jpg')}
                      className="hvr-grow-shadow designpic"
                      data-toggle="modal"
                      data-target="#broker"
                      alt="pic"
                    />

                    <div
                      className="modal fade"
                      id="broker"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">

                            <h5 className="modal-title" id="exampleModalLabel">

                              Avēsis Broker Web Portal Pre-login Design
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

                            <img src={require('../img/design_brokers.jpg')} alt="Avesis Brokers Pre-login Design" width="100%" />

                          </div>


                        </div>
                      </div>
                    </div>
                  </Col>
                  {/* End of Modal   */}



                  {/* Start of Modal   */}

                  <Col xl="6">

                    <img
                      src={require('../img/thumb_members1.jpg')}
                      className="hvr-grow-shadow designpic"
                      data-toggle="modal"
                      data-target="#members"
                      alt="pic"
                    />

                    <div
                      className="modal fade"
                      id="members"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">

                            <h5 className="modal-title" id="exampleModalLabel">

                              Avēsis Members Web Portal Pre-Login <br /> Page Design
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

                            <img src={require('../img/design_members.jpg')} alt="Avesis Members Portal Login Design" width="100%" />

                            <p className="text-center modal-txt">
                              <a href="https://www.avesis.com/commercial3/members/index.aspx" target="_blank" rel="noopener noreferrer">View the Members Portal Login Page in the Browser</a>
                            </p>


                          </div>


                        </div>
                      </div>
                    </div>
                  </Col>
                  {/* End of Modal   */}

                </Row>

                {/* End of 2nd row of 2 images   */}

              </Media>

            </Col>

          </Media>

        </Row>




        <Row id="design-process">


          <Col xl="4">

            <h3 className="process-head">From Wireframe...</h3>
            <h6 className="process-head">Using <a href="https://moqups.com/" rel="noopener noreferrer">moqups</a></h6>

            <img src={require('../img/wireframe.png')} alt="Wireframe example" width="100%" />


          </Col>


          <Col xl="4">

            <h3 className="process-head">To Mockup</h3>
            <h6 className="process-head">Using <a href="https://moqups.com/" target="_blank" rel="noopener noreferrer">moqups</a></h6>

            <img src={require('../img/mockup.jpg')} alt="Mockup" width="100%" />


          </Col>



          <Col xl="4">


            <h3 className="process-head">To Code!</h3>
            <h6 className="process-head"><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a> and <a href="https://materializecss.com/" target="_blank" rel="noopener noreferrer">Materialize CSS</a></h6>


            <img src={require('../img/jewelry_react.gif')} alt="Mockup" width="100%" />

            <Row id="process-icon-row">

              <Col xl="4">

                <a
                  href="https://react-jewelry-cart.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={browser}
                    className="process-icons"
                    alt="View Online"
                  />{" "}
                  View Online
                                    </a>

              </Col>

              <Col xl="6">
                <a
                  href="https://github.com/AleeWeb/jewelry-react-shoppingcart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={github}
                    className="process-icons"
                    alt="View GitHub Code"
                  />{" "}
                  View Code
                                    </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>


    )
  }
}