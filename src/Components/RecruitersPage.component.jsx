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
import Edit from "./edit/edit.component";

function LandingPage() {
  const inputDetail = {
    company: "",
    type: "",
    ctc: "",
    skills: "",
    experience: "",
    worktype: "",
    jobtype: "",
  };
  const [applicant, setApplicant] = useState(false);
  const [shortlist, setShortlist] = useState(false);
  const [listData, setListData] = useState([]);
  const [activity, setActivity] = useState("");
  const [edit, setEdit] = useState(false);

  const removeElement = (id) => {
    const updateData = listData.filter((item, ind) => ind !== id);
    setListData(updateData);
    console.log(updateData);
  };

  function ApplyBtn() {
    window.open("/Apply", "_self");
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  const add = () => {
    setListData([...listData, activity]);
  };

  return (
    <div>
      <Topheader />

      <div className="JobPostingCard">
        <img
          src="https://lh3.googleusercontent.com/a-/ACNPEu-FtHh_sRN35Hm1Jo5K5A8EOlTbRtecZfMG2zV9Lw=s96-c"
          alt=""
          style={{ height: "70px", width: "70px", borderRadius: "50%" }}
        />

        <input
          type="text"
          placeholder="Company name"
          name="company"
          value={activity.company}
          onChange={handleInput}
        />
        <input
          type="number"
          placeholder="Bid"
          name="ctc"
          value={activity.ctc}
          onChange={handleInput}
        />

        <select
          type="text"
          placeholder="type"
          name="type"
          value={activity.type}
          onChange={handleInput}
        >Job
          <option value="Type">Type</option>
          <option value="Negotiable">Negotiable</option>
          <option value="Non-Negotiable">Non-Negotiable</option>

        </select>

        <input
          type="text"
          placeholder="Skills"
          name="skills"
          value={activity.skills}
          onChange={handleInput}
        />
        <input
          type="number"
          placeholder="Experience"
          name="experience"
          value={activity.experience}
          onChange={handleInput}
        />

        <select
          name="worktype"
          id=""
          value={activity.worktype}
          onChange={handleInput}
        >
          <option value="Work Type">Work Type</option>
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
        </select>
        <select
          name="jobtype"
          id=""
          value={activity.jobtype}
          onChange={handleInput}
        >
          <option value="Job Type">Job Type</option>
          <option value="Remote">Remote</option>
          <option value="In office">In office</option>
        </select>

        <button className="btn btn-outline-primary" onClick={add}>
          Post
        </button>
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

        <div className={style.blur}>
          <Edit trigger={edit}>
            <i class="fa-solid fa-x" onClick={() => setEdit(false)}></i>
          </Edit>
        </div>

        {listData &&
          listData.map((item, ind) => (
            <div className="card mb-3 RestaurantCard">
              <div className="row no-gutters">
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="card-title">
                      <h3 className="ColorWhite">Amazon </h3>{" "}
                      <p className="text-info">({item.ctc}LPA)</p> &nbsp;{" "}
                      <p>{item.type}</p>{" "}
                    </div>
                    <p className="card-text">
                      <p className="ColorWhite">
                        Skills
                        <p className="ColorGray">{item.skills}</p>
                      </p>
                      <p className="ColorWhite">
                        Experience<p className="ColorGray">{item.experience}Years</p>
                      </p>
                      <p className="ColorWhite">
                        Work Type<p className="ColorGray">{item.worktype}</p>
                      </p>
                      <p className="ColorWhite">
                        Job Type<p className="ColorGray">{item.jobtype}</p>
                      </p>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <div>
                      <div>
                        <button
                          className="btn btn-outline-info border border-info  ms-0"
                          onClick={() => setApplicant(true)}
                        >
                          {" "}
                          Applicants
                        </button>
                        <button
                          className="btn btn-outline-info border border-info ms-5"
                          onClick={() => setShortlist(true)}
                        >
                          {" "}
                          Shortlisted{" "}
                        </button>
                        <button
                          className="btn btn-outline-info"
                          onClick={() => setEdit(true)}
                        >
                          ✎ Edit
                        </button>
                        <button
                          className="btn btn-outline-info border border-info ms-5"
                          onClick={() => removeElement(ind)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default LandingPage;
