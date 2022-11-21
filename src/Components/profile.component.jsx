import React from "react";
import Topheader from "./Topheader.component";
import style from "./profile.module.css";

export default function Profile() {
  return (
    <div className={style.profile}>
      <Topheader />
      <div className={style.heading}>
        <h1>PROFILE</h1>
      </div>

      <div className={style.container}>
        <div className={style.left}>
          <div className={style.imgcon}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              alt="img"
            />
          </div>
          <div className={style.details}>
            <h3 className="colorWhite">FIRST NAME</h3>
            <h6>first123@</h6>

            <div className={style.icon}>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-solid fa-envelope"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>

            <div className="datail">
              <div className="summery">
                <h1>Summery</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <div className="skills">
                <h1>Skills</h1>
                <span>HTML</span>
                <span>CSS</span>
                <span>Cass</span>
                <span>Bootstrap</span>
                <span>JavaScript</span>
                <span>jQuery</span>
                <span>Reactjs</span>
                <span>Nodejs</span>
                <span>Expressjs</span>
                <span>MongoDB</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.right}>
          {detail.map((item) => (
            <div>
              <h6>{item.name} :</h6>
              <h3 className="colorWhite">{item.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const detail = [
  {
    id: 0,
    name: "Name",
    value: "Full Name",
  },

  {
    id: 1,
    name: "Age",
    value: "00 Years",
  },

  {
    id: 2,
    name: "Address",
    value: "City, State",
  },

  {
    id: 3,
    name: "Experience",
    value: "0 Years",
  },

  {
    id: 4,
    name: "Degree",
    value: "Graduation",
  },

  {
    id: 5,
    name: "Career Level",
    value: "Fresher",
  },

  {
    id: 6,
    name: "Mobile No.",
    value: "+91 1234567890",
  },

  {
    id: 7,
    name: "Email Id",
    value: "example@gmail.com",
  },

  {
    id: 8,
    name: "Social Media",
    value: "LinkedIn",
  },

  {
    id: 9,
    name: "Web Site",
    value: "www.example.com",
  },
];
