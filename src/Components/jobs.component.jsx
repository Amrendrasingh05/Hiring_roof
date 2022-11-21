import style from "./jobs.module.css";

import React, { useState, useEffect } from "react";
import Topheader from "./Topheader.component";

const job = [
  {
    id: 1,
    name: "Google",
    ctc: "(40LPA)",
    type: "Negotiable",
    skills: "Reactjs, Nodejs, Express, MongoDB",
    experience: "2 Years",
    worktype: "Fulltime",
    jobtype: "Remote",
    state: "interviewed",
  },

  {
    id: 2,
    name: "Apple",
    ctc: "(60LPA)",
    type: "Negotiable",
    skills: "Reactjs, Nodejs, Express, MongoDB",
    experience: "5 Years",
    worktype: "Fulltime",
    jobtype: "Remote",
    state: "shortlisted",
  },

  {
    id: 3,
    name: "Amazon",
    ctc: "(50LPA)",
    type: "Negotiable",
    skills: "Reactjs, Nodejs, Express, MongoDB",
    experience: "3 Years",
    worktype: "Fulltime",
    jobtype: "Hybrid",
    state: "applied",
  },

  {
    id: 4,
    name: "Airbnb",
    ctc: "(30LPA)",
    type: "Negotiable",
    skills: "Reactjs, Nodejs, Express, MongoDB",
    experience: "0-2 Years",
    worktype: "Fulltime",
    jobtype: "Remote",
    state: "shortlisted",
  },
];

export default function Jobs() {
  const [state, setState] = useState(null);

  function getJob() {
    const joblist = job;
    return joblist;
  }

  function filterJob(stateJob) {
    let filteredJob = getJob().filter((type) => type.state === stateJob);
    return filteredJob;
  }

  useEffect(() => {
    setState(getJob());
  }, []);

  function handleBtns(e) {
    let jobState = e.target.value;
    jobState !== "applied" ? setState(filterJob(jobState)) : setState(getJob());
  }

  return (
    <div className={style.jobs}>
      <Topheader />
      <div className={style.container}>
        <div className={style.btns}>
          <button value="applied" onClick={handleBtns}>
            Applied
          </button>
          <button value="shortlisted" onClick={handleBtns}>
            Short Listed
          </button>
          <button value="interviewed" onClick={handleBtns}>
            Interviewed
          </button>
        </div>

        {state &&
          state.map((item) => (
            <div className="card mb-3 RestaurantCard">
              <div className="row no-gutters">
                <div className="col-md-8" key={item.id}>
                  <div className="card-body">
                    <div className="card-title">
                      <h3 className="ColorWhite">{item.name} </h3>{" "}
                      <p className="text-info">
                        <item classNameName="ctc">{item.ctc}</item>
                      </p>{" "}
                      &nbsp; <p>{item.type}</p>{" "}
                    </div>
                    <p className="card-text">
                      <p className="ColorWhite">
                        Skills
                        <p className="ColorGray">{item.skills}</p>
                      </p>
                      <p className="ColorWhite">
                        Experience<p className="ColorGray">{item.experience}</p>
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
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
