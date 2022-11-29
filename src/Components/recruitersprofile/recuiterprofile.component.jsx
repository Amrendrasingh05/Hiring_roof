import React, { useState } from "react";
import Topheader from "../Topheader.component";
import style from "../profile.module.css";
import { Link } from "react-router-dom";

export default function Profile() {
  const inputDetails = {
    GitHub: "",
    LinkedIn: "",
    Email: "",
    summary: "",
    Name: "",
    username: "",
    Age: "",
    Address: "",
    Experience: "",
    Degree: "",
    career: "",
    mobile: "",
    skill: "",
  };

  const [input, setInput] = useState(inputDetails);
  const [view, setView] = useState(false);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const validate = (values) => {
    const errors = {};
    // const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!values.Name) {
      errors.Name = "Name is required";
    }

    if (!values.username) {
      errors.username = "username is required";
    }

    if (!values.Email) {
      errors.Email = "Email is required";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile No. is required";
    } else if (values.mobile.length !== 10) {
      errors.mobile = "enter valid Mobile No.";
    }

    if (!values.summary) {
      errors.summary = "summary is required";
    }

    if (!values.skill) {
      errors.skill = "skill is required";
    }

    if (!values.career) {
      errors.career = "career Level is required";
    }
    if (!values.Age) {
      errors.Age = "Age is required";
    }
    if (!values.Experience) {
      errors.Experience = "Experience is required";
    }

    if (!values.Address) {
      errors.Address = "Address is required";
    }

    return errors;
  };


  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(input));
    setIsSubmit(true);

    var obj = input;
    console.log(obj);
  };

  const handleView = () => {
    setView(false);
  };

  return (
    <div className={style.profile}>
      <Topheader />
      <div className={style.heading}>
        <h1>RECRUITERS PROFILE</h1>
      </div>

      <div className={style.forbtn}>
        <form onSubmit={handleSubmit}>
          <>
            <button onClick={() => setView(true)}>Edit Profile</button>
          </>

          <div className={style.container}>
            <div className={style.left}>
              <div className={style.imgcon}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                  alt="img"
                />
                
              </div>

              <div className={style.details}>
                <h3 className="colorWhite">{input.Name}</h3>

                {!view ? (
                  <h6>{input.username}</h6>
                ) : (
                  <label htmlFor="text">
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      value={input.username}
                      onChange={handleInput}
                    />
                  </label>
                )}
                <span>{error.username}</span>

                {!view ? (
                  <div className={style.icon}>
                    <Link to={input.GitHub}>
                      <i class="fa-brands fa-github"></i>
                    </Link>
                    <Link to={input.LinkedIn}>
                      <i class="fa-brands fa-linkedin" to={input.LinkedIn}></i>
                    </Link>
                    <Link to={input.Email}>
                      <i class="fa-solid fa-envelope" to={input.Email}></i>
                    </Link>
                    <i class="fa-solid fa-phone"></i>
                  </div>
                ) : (
                  <div className={style.link}>
                    <label htmlFor="text">
                      <input
                        type="text"
                        name="GitHub"
                        placeholder="GitHub"
                        value={input.GitHub}
                        onChange={handleInput}
                      />
                    </label>

                    <label htmlFor="text">
                      <input
                        type="text"
                        name="LinkedIn"
                        placeholder="LinkedIn"
                        value={input.LinkedIn}
                        onChange={handleInput}
                      />
                    </label>

                    <label htmlFor="email">
                      <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        value={input.Email}
                        onChange={handleInput}
                      />
                    </label>

                    <label htmlFor="number">
                      <input
                        type="number"
                        name="mobile"
                        placeholder="Mobile No."
                        value={input.mobile}
                        onChange={handleInput}
                      />
                    </label>
                  </div>
                )}

                <div className="detail">
                  <div className="summery">
                    <h1>Summery</h1>
                    {!view ? (
                      <p>{input.summary} </p>
                    ) : (
                      <textarea
                        name="summary"
                        id="summary"
                        cols="120"
                        rows="8"
                        placeholder="Summary"
                        value={input.summary}
                        onChange={handleInput}
                      ></textarea>
                    )}
                    <span>{error.summary}</span>
                  </div>

                  <div className="skills">
                    <h1>Skills</h1>

                    {!view ? (
                      <p>{input.skill}</p>
                    ) : (
                      <label htmlFor="text">
                        <textarea
                          type="text"
                          name="skill"
                          placeholder="Skills should separated by '   ,   '  "
                          value={input.skill}
                          cols="120"
                          row="2"
                          onChange={handleInput}
                        ></textarea>
                      </label>
                    )}
                    <span>{error.skill}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.right}>
              <div>
                <h6>Name :</h6>

                {!view ? (
                  <h3 className="colorWhite">{input.Name}</h3>
                ) : (
                  <label htmlFor="text">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Name"
                      value={input.Name}
                      onChange={handleInput}
                    />
                  </label>
                )}
                <span>{error.Name}</span>
              </div>

              <div>
                <h6>Age :</h6>

                {!view ? (
                  <h3 className="colorWhite">{input.Age} Years</h3>
                ) : (
                  <label htmlFor="number">
                    <input
                      type="number"
                      name="Age"
                      placeholder="Age"
                      value={input.Age}
                      onChange={handleInput}
                    />
                  </label>
                )}
                <span>{error.Age}</span>
              </div>

              <div>
                <h6>Address :</h6>

                {!view ? (
                  <h3 className="colorWhite">{input.Address}</h3>
                ) : (
                  <label htmlFor="text">
                    <textarea
                      type="text"
                      name="Address"
                      row="8"
                      col="150"
                      placeholder="Address"
                      value={input.Address}
                      onChange={handleInput}
                    ></textarea>
                  </label>
                )}
                <span>{error.Address}</span>
              </div>

              <div>
                <h6>Experience :</h6>

                {!view ? (
                  <h3 className="colorWhite">{input.Experience} Years</h3>
                ) : (
                  <label htmlFor="number">
                    <input
                      type="number"
                      name="Experience"
                      placeholder="Experience"
                      value={input.Experience}
                      onChange={handleInput}
                    />
                  </label>
                )}
                <span>{error.Experience}</span>
              </div>

              <div>
                <h6>Degree :</h6>
                {!view ? (
                  <h3 className="colorWhite">{input.Degree}</h3>
                ) : (
                  <label htmlFor="text">
                    <input
                      type="text"
                      name="Degree"
                      placeholder="Degree"
                      value={input.Degree}
                      onChange={handleInput}
                    />
                  </label>
                )}
              </div>

              <div>
                <h6>Career Level :</h6>
                {!view ? (
                  <h3 className="colorWhite">{input.career}</h3>
                ) : (
                  <label htmlFor="text">
                    <input
                      type="text"
                      name="career"
                      placeholder="Career Level"
                      value={input.career}
                      onChange={handleInput}
                    />
                  </label>
                )}
                <span>{error.career}</span>
              </div>

              <div>
                <h6>Mobile No. :</h6>

                {!view ? (
                  <h3 className="colorWhite">{input.mobile}</h3>
                ) : (
                  <label htmlFor="number">
                    <input
                      type="number"
                      name="mobile"
                      placeholder="Mobile No."
                      value={input.mobile}
                      onChange={handleInput}
                    />
                  </label>
                )}
                <span>{error.mobile}</span>
              </div>

              <div>
                <h6>Email :</h6>
                {!view ? (
                  <h3 className="colorWhite">{input.Email}</h3>
                ) : (
                  <label htmlFor="email">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email"
                      value={input.Email}
                      onChange={handleInput}
                    />
                  </label>
                )}
                <span>{error.Email}</span>
              </div>
            </div>
          </div>
          <button
            onClick={Object.keys(error).length === 0 && isSubmit && handleView}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
