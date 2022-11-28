import style from "../shortlist.module.css";

import React from "react";
import { useState } from "react";

export default function Shortlist(props) {
  const user = [
    {
      id: 0,
      name: "Amarendra",
      skills: "Reactjs, Nodejs, Express, MongoDB",
      experience: "5 Years",
      bid: "(21 LPA)",
    },

    {
      id: 1,
      name: "Amar",
      skills: "Reactjs, Nodejs, Express, MongoDB",
      experience: "2 Years",
      bid: "(30 LPA)",
    },

    {
      id: 2,
      name: "Amar",
      skills: "Reactjs, Nodejs, Express, MongoDB",
      experience: "2 Years",
      bid: "(28 LPA)",
    },

    {
      id: 3,
      name: "Amar",
      skills: "Reactjs, Nodejs, Express, MongoDB",
      experience: "2 Years",
      bid: "(37 LPA)",
    },

    {
      id: 4,
      name: "Amar",
      skills: "Reactjs, Nodejs, Express, MongoDB",
      experience: "2 Years",
      bid: "(32 LPA)",
    },

    {
      id: 5,
      name: "Amar",
      skills: "Reactjs, Nodejs, Express, MongoDB",
      experience: "2 Years",
      bid: "(20 LPA)",
    },
    {
      id: 6,
      name: "Amar",
      skills: "Reactjs, Nodejs, Express, MongoDB",
      experience: "2 Years",
      bid: "(25 LPA)",
    },
    {
      id: 7,
      name: "Amar",
      skills: "Reactjs, Nodejs, Express, MongoDB",
      experience: "2 Years",
      bid: "(22 LPA)",
    },
  ];

  const [view, setView] = useState(user);

  const removeElement = (id) => {
    const updatedUser = view.filter((item) => item.id !== id);
    setView(updatedUser);
  };

  return props.trigger ? (
    <div className={style.shortlist}>
      <div className={style.delete}>{props.children}</div>
      <div className={style.container}>
        {view.map((item) => (
          <div className={style.user} key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.skills}</p>
            <span>{item.experience}</span>
            <p className="text-info">{item.bid}</p>
            <button>Interview</button>
            <button id={item.id} onClick={() => removeElement(item.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}
