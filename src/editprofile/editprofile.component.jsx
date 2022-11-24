import React, { useState } from "react";
import style from "../editprofile/editprofile.module.css";

export default function EditProfile(props) {
  const inputDetails = {
    GitHub: "",
    LinkedIn: "",
    Email: "",
    Twitter: "",
    summary: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    Name : "",
    Age : "",
    Address : "",
    Experience : "",
    Degree : "",
    Career : "",
    Mobile : "",
    
  }
  const [input, setInput] = useState(inputDetails);



  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var obj = input
    console.log(obj)
  
    

    
  };

  return props.trigger ? (
    <div className={style.editprofile}>
      <div className={style.delete}>{props.children}</div>

      <form onSubmit={handleSubmit}>
        <div className={style.container}>
          <pre> {JSON.stringify(input, undefined, 2)}</pre>

          <input type="file" />

          <div className={style.left}>
            <div className={style.icon}>
              <label htmlFor="text">
                <input
                  type="text"
                  placeholder="GitHub"
                  name="GitHub"
                  value={input.GitHub}
                  onChange={handleInput}
                />
              </label>

              <label htmlFor="text">
                <input
                  type="text"
                  placeholder="LinkedIn"
                  name="LinkedIn"
                  value={input.LinkedIn}
                  onChange={handleInput}
                />
              </label>

              <label htmlFor="text">
                <input
                  type="text"
                  placeholder="Email"
                  name="Email"
                  value={input.Email}
                  onChange={handleInput}
                />
              </label>

              <label htmlFor="text">
                <input
                  type="text"
                  placeholder="Twitter"
                  name="Twitter"
                  value={input.Twitter}
                  onChange={handleInput}
                />
              </label>
            </div>

            <hr />

            <div className={style.summary}>
              <label htmlFor="text">
                <textarea
                  type="text"
                  placeholder="Summary"
                  name="summary"
                  value={input.summary}
                  onChange={handleInput}
                ></textarea>
              </label>
            </div>
            <hr />

            <div className={style.skills}>
              <label htmlFor="text">
                <input
                  type="text"
                  placeholder="Skill"
                  name="skill1"
                  value={input.skill1}
                  onChange={handleInput}
                />
              </label>

              <label htmlFor="text">
                <input
                  type="text"
                  placeholder="Skill"
                  name="skill2"
                  value={input.skill2}
                  onChange={handleInput}
                />
              </label>

              <label htmlFor="text">
                <input
                  type="text"
                  placeholder="Skill"
                  name="skill3"
                  value={input.skill3}
                  onChange={handleInput}
                />
              </label>

              <label htmlFor="text">
                <input
                  type="text"
                  placeholder="Skill"
                  name="skill4"
                  value={input.skill4}
                  onChange={handleInput}
                />
              </label>
            </div>
            <hr />
          </div>

          <div className={style.right}>
            <label htmlFor="text">
              <input
                type="text"
                name="Name"
                value={input.Name}
                placeholder="Name"
                onChange={handleInput}
              />
            </label>



            <label htmlFor="number">
              <input
                type="number"
                name="Age"
                value={input.Age}
                placeholder="Age"
                onChange={handleInput}
              />
            </label>

            <label htmlFor="text">
              <input
                type="text"
                name="Address"
                value={input.Address}
                placeholder="Address"
                onChange={handleInput}
              />
            </label>
            <label htmlFor="number">
              <input
                type="number"
                name="Experience"
                value={input.Experience}
                placeholder="Experience"
                onChange={handleInput}
              />
            </label>
            <label htmlFor="text">
              <input
                type="text"
                name="Degree"
                value={input.Degree}
                placeholder="Degree"
                onChange={handleInput}
              />
            </label>
            <label htmlFor="text">
              <input
                type="text"
                name="Career"
                value={input.Career}
                placeholder="Career"
                onChange={handleInput}
              />
            </label>
            <label htmlFor="number">
              <input
                type="number"
                name="Mobile"
                value={input.Mobile}
                placeholder="Mobile"
                onChange={handleInput}
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                name="Email"
                value={input.Email}
                placeholder="Email"
                onChange={handleInput}
              />
            </label>
          </div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  ) : (
    ""
  );
}

const detail = [
  {
    id: 0,
    name: "Name",
    value: "Full Name",
    for: "text",
  },

  {
    id: 1,
    name: "Age",
    value: "00 Years",
    for: "number",
  },

  {
    id: 2,
    name: "Address",
    value: "City, State",
    for: "text",
  },

  {
    id: 3,
    name: "Experience",
    value: "0 Years",
    for: "number",
  },

  {
    id: 4,
    name: "Degree",
    value: "Graduation",
    for: "text",
  },

  {
    id: 5,
    name: "Career Level",
    value: "Fresher",
    for: "text",
  },

  {
    id: 6,
    name: "Mobile No.",
    value: "+91 1234567890",
    for: "number",
  },

  {
    id: 7,
    name: "Email Id",
    value: "example@gmail.com",
    for: "email",
  },

  {
    id: 8,
    name: "Social Media",
    value: "LinkedIn",
    for: "text",
  },

  {
    id: 9,
    name: "Web Site",
    value: "www.example.com",
    for: "text",
  },
];
