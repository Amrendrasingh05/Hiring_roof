import React, { Component } from "react";
import ReactDOM from "react-dom";
import Topheader from "./Topheader.component";
import Bg from "../Images/Bg.png";
import r1 from "../Images/WhatsApp Image 2022-09-27 at 2.16.10 PM.jpeg";

import swal from "sweetalert";

import SignIn from "./SignIn.component";

import Applicant from "./applicant/applicant.component";
import Shortlist from "./shortlist/shortlist.component";
import { useState } from "react";
import style from "./home.module.css";

function LandingPage() {
  const [applicant, setApplicant] = useState(false);
  const [shortlist, setShortlist] = useState(false);

  function ApplyBtn() {
    window.open("/Apply", "_self");
  }

  return (
    <div>
      <Topheader />

      <div className="JobPostingCard">
        <img
          src="https://lh3.googleusercontent.com/a-/ACNPEu-FtHh_sRN35Hm1Jo5K5A8EOlTbRtecZfMG2zV9Lw=s96-c"
          alt=""
          style={{ height: "70px", width: "70px", borderRadius: "50%" }}
        />
        <input type="text" placeholder="Skills" />
        <input type="text" placeholder="Experience" />
        <select name="" id="">
          <option value="">Work Type</option>
          <option value="">Full time</option>
          <option value="">Part time</option>
        </select>
        <select name="" id="">
          <option value="">Job Type</option>
          <option value="">Remote</option>
          <option value="">In office</option>
        </select>
        <button className="btn btn-outline-primary">Post</button>
      </div>

      <div className="BgThemeHome">
        <div className={style.blur}>
          <Applicant trigger={applicant}>
            <i class="fa-solid fa-x" onClick={() => setApplicant(false)}></i>
          </Applicant>
        </div>

        <div className={style.blur}>
          <Shortlist trigger={shortlist}>
            <i class="fa-solid fa-x" onClick={() => setShortlist(false)}></i>
          </Shortlist>
        </div>
        <div className="card mb-3 RestaurantCard">
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">
                  <h3 className="ColorWhite">Amazon </h3>{" "}
                  <p className="text-info">(40 LPA )</p> &nbsp;{" "}
                  <p>Negotiable</p>{" "}
                </div>
                <p className="card-text">
                  <p className="ColorWhite">
                    Skills
                    <p className="ColorGray">
                      Reactjs, Nodejs, Express, MongoDB
                    </p>
                  </p>
                  <p className="ColorWhite">
                    Experience<p className="ColorGray">2 years</p>
                  </p>
                  <p className="ColorWhite">
                    Work Type<p className="ColorGray">Fulltime</p>
                  </p>
                  <p className="ColorWhite">
                    Job Type<p className="ColorGray">Remote</p>
                  </p>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <div>
                  <div>
                    <button
                      className="btn btn-outline-info border border-info  ms-0"
                      onClick={() => setApplicant(true)}
                    >
                      {" "}
                      Applicatns
                    </button>
                    <button className="btn btn-outline-info border border-info ms-5" onClick={() => setShortlist(true)}>
                      {" "}
                      Shortlisted{" "}
                    </button>
                    <button className="btn btn-outline-info">✎ Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 RestaurantCard">
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">
                  <h3 className="ColorWhite">Amazon </h3>{" "}
                  <p className="text-info">(40 LPA )</p> &nbsp;{" "}
                  <p>Negotiable</p>{" "}
                </div>
                <p className="card-text">
                  <p className="ColorWhite">
                    Skills
                    <p className="ColorGray">
                      Reactjs, Nodejs, Express, MongoDB
                    </p>
                  </p>
                  <p className="ColorWhite">
                    Experience<p className="ColorGray">2 years</p>
                  </p>
                  <p className="ColorWhite">
                    Work Type<p className="ColorGray">Fulltime</p>
                  </p>
                  <p className="ColorWhite">
                    Job Type<p className="ColorGray">Remote</p>
                  </p>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <div>
                  <div>
                    <button
                      className="btn btn-outline-info border border-info  ms-0"
                      onClick={() => setApplicant(true)}
                    >
                      {" "}
                      Applicatns
                    </button>
                    <button className="btn btn-outline-info border border-info ms-5" onClick={() => setShortlist(true)}>
                      {" "}
                      Shortlisted{" "}
                    </button>
                    <button className="btn btn-outline-info">✎ Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 RestaurantCard">
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">
                  <h3 className="ColorWhite">Amazon </h3>{" "}
                  <p className="text-info">(40 LPA )</p> &nbsp;{" "}
                  <p>Negotiable</p>{" "}
                </div>
                <p className="card-text">
                  <p className="ColorWhite">
                    Skills
                    <p className="ColorGray">
                      Reactjs, Nodejs, Express, MongoDB
                    </p>
                  </p>
                  <p className="ColorWhite">
                    Experience<p className="ColorGray">2 years</p>
                  </p>
                  <p className="ColorWhite">
                    Work Type<p className="ColorGray">Fulltime</p>
                  </p>
                  <p className="ColorWhite">
                    Job Type<p className="ColorGray">Remote</p>
                  </p>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <div>
                  <div>
                    <button
                      className="btn btn-outline-info border border-info  ms-0"
                      onClick={() => setApplicant(true)}
                    >
                      {" "}
                      Applicatns
                    </button>
                    <button className="btn btn-outline-info border border-info ms-5" onClick={() => setShortlist(true)}>
                      {" "}
                      Shortlisted{" "}
                    </button>
                    <button className="btn btn-outline-info">✎ Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3 RestaurantCard">
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">
                  <h3 className="ColorWhite">Amazon </h3>{" "}
                  <p className="text-info">(40 LPA )</p> &nbsp;{" "}
                  <p>Negotiable</p>{" "}
                </div>
                <p className="card-text">
                  <p className="ColorWhite">
                    Skills
                    <p className="ColorGray">
                      Reactjs, Nodejs, Express, MongoDB
                    </p>
                  </p>
                  <p className="ColorWhite">
                    Experience<p className="ColorGray">2 years</p>
                  </p>
                  <p className="ColorWhite">
                    Work Type<p className="ColorGray">Fulltime</p>
                  </p>
                  <p className="ColorWhite">
                    Job Type<p className="ColorGray">Remote</p>
                  </p>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <div>
                  <div>
                    <button
                      className="btn btn-outline-info border border-info  ms-0"
                      onClick={() => setApplicant(true)}
                    >
                      {" "}
                      Applicatns
                    </button>
                    <button className="btn btn-outline-info border border-info ms-5" onClick={() => setShortlist(true)}>
                      {" "}
                      Shortlisted{" "}
                    </button>
                    <button className="btn btn-outline-info">✎ Edit</button>
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
export default LandingPage;
