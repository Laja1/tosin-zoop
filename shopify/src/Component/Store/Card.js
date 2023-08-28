import React from "react";

import BB from "./BB.jpeg";
import BBB from "./BBB.jpeg";
import west from "./west.jpeg";
import psd from "./psd.jpeg";
import doll from "./doll.jpeg";
import peop from "./peop.jpeg";
import No from "./9/No";
import girl from "./girl.jpeg";
import ang from "./ang.jpeg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div class="card-container2">
      <div class="card2">
        <div className="container">
          {" "}
          <h1
            style={{
              justify: "flex",
              fontSize: "30px",
              marginBottom: "-40px",
              textAlign: "center",
              color: "black",
            }}
          >
            Clothes
          </h1>{" "}
          <div class="container d-flex justify-content-center mt-50 mb-10">
            <div class="row">
              <div class="col-md-3 mt-2">
                <div class="card">
                  <div class="card-body">
                    <div class="card-img-actions">
                      <img src={west} class="card-img img-fluid" alt="" />
                    </div>
                  </div>

                  <div class="card-body bg-light text-center">
                    <div class="mb-2">
                      <h6 class="font-weight-semibold mb-2"></h6>
                    </div>

                    <h3 class="mb-0 font-weight-semibold">westNorth.</h3>

                    <div>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mt-2">
                <div class="card">
                  <div class="card-body">
                    <div class="card-img-actions">
                      <img
                        src={psd}
                        class="card-img img-fluid"
                        width="96"
                        height="350"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="card-body bg-light text-center">
                    <div class="mb-2">
                      <h6 class="font-weight-semibold mb-2"></h6>
                    </div>

                    <h3 class="mb-0 font-weight-semibold">bolaPsd</h3>

                    <div>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mt-2">
                {" "}
                <Link to="/No">
                  <div class="card">
                    <div class="card-body">
                      <div class="card-img-actions">
                        <img
                          src={BB}
                          class="card-img img-fluid"
                          width="96"
                          height="350"
                          alt=""
                        />
                      </div>
                    </div>

                    <div class="card-body bg-light text-center">
                      <div class="mb-2">
                        <h6 class="font-weight-semibold mb-2"></h6>
                      </div>

                      <h3 class="mb-0 font-weight-semibold">nine.</h3>

                      <div>
                        <i class="fa fa-star star"></i>
                        <i class="fa fa-star star"></i>
                        <i class="fa fa-star star"></i>
                        <i class="fa fa-star star"></i>
                      </div>
                    </div>
                  </div>{" "}
                </Link>
              </div>

              <div class="col-md-3 mt-2">
                <div class="card">
                  <div class="card-body">
                    <div class="card-img-actions">
                      <img
                        src={BBB}
                        class="card-img img-fluid"
                        width="96"
                        height="350"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="card-body bg-light text-center">
                    <div class="mb-2">
                      <h6 class="font-weight-semibold mb-2"></h6>
                    </div>

                    <h3 class="mb-0 font-weight-semibold">Blood Brothers</h3>

                    <div>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <h1
            style={{
              justify: "flex",
              fontSize: "30px",
              marginBottom: "-40px",
              textAlign: "center",
              color: "black",
            }}
          >
            Art
          </h1>{" "}
          <div class="container d-flex justify-content-center mt-50 mb-10">
            <div class="row">
              <div class="col-md-3 mt-2">
                <div class="card">
                  <div class="card-body">
                    <div class="card-img-actions">
                      <img src={ang} class="card-img img-fluid" alt="" />
                    </div>
                  </div>

                  <div class="card-body bg-light text-center">
                    <div class="mb-2">
                      <h6 class="font-weight-semibold mb-2"></h6>
                    </div>

                    <h3 class="mb-0 font-weight-semibold">angels.</h3>

                    <div>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mt-2">
                <div class="card">
                  <div class="card-body">
                    <div class="card-img-actions">
                      <img
                        src={girl}
                        class="card-img img-fluid"
                        width="96"
                        height="350"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="card-body bg-light text-center">
                    <div class="mb-2">
                      <h6 class="font-weight-semibold mb-2"></h6>
                    </div>

                    <h3 class="mb-0 font-weight-semibold">Lonely</h3>

                    <div>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mt-2">
                <div class="card">
                  <div class="card-body">
                    <div class="card-img-actions">
                      <img
                        src={peop}
                        class="card-img img-fluid"
                        width="96"
                        height="350"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="card-body bg-light text-center">
                    <div class="mb-2">
                      <h6 class="font-weight-semibold mb-2"></h6>
                    </div>

                    <h3 class="mb-0 font-weight-semibold">People</h3>

                    <div>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mt-2">
                <div class="card">
                  <div class="card-body">
                    <div class="card-img-actions">
                      <img
                        src={doll}
                        class="card-img img-fluid"
                        width="96"
                        height="350"
                        alt=""
                      />
                    </div>
                  </div>

                  <div class="card-body bg-light text-center">
                    <div class="mb-2">
                      <h6 class="font-weight-semibold mb-2"></h6>
                    </div>

                    <h3 class="mb-0 font-weight-semibold">doll.</h3>

                    <div>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                      <i class="fa fa-star star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
