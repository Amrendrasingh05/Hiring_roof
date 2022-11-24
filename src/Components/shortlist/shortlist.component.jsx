import style from '../shortlist.module.css'


import React from 'react'


const user = [
  {
    id: 1,
    name: "Amarendra",
    skills: "Reactjs, Nodejs, Express, MongoDB",
    experience: "5 Years",
    bid: "(21 LPA)",
  },

  {
    id: 2,
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
    id: 2,
    name: "Amar",
    skills: "Reactjs, Nodejs, Express, MongoDB",
    experience: "2 Years",
    bid: "(37 LPA)",
  },

  {
    id: 2,
    name: "Amar",
    skills: "Reactjs, Nodejs, Express, MongoDB",
    experience: "2 Years",
    bid: "(32 LPA)",
  },

  {
    id: 2,
    name: "Amar",
    skills: "Reactjs, Nodejs, Express, MongoDB",
    experience: "2 Years",
    bid: "(20 LPA)",
  },
  {
    id: 2,
    name: "Amar",
    skills: "Reactjs, Nodejs, Express, MongoDB",
    experience: "2 Years",
    bid: "(25 LPA)",
  },
  {
    id: 2,
    name: "Amar",
    skills: "Reactjs, Nodejs, Express, MongoDB",
    experience: "2 Years",
    bid: "(22 LPA)",
  },
];

export default function Shortlist(props) {
  return props.trigger ? (
    <div className={style.shortlist}>
    <div className={style.delete}>{props.children}</div>
    <div className={style.container}>
      {user &&
        user.map((item) => (
          <div className={style.user} key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.skills}</p>
            <span>{item.experience}</span>
            <p className='text-info'>{item.bid}</p>
            <button>Bid</button>
            <button>Interview</button>
          </div>
        ))}
    </div>
  </div>
  ) : "";
}