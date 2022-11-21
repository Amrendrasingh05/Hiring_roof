import React from 'react'
import style from './shortlist.module.css'



const user = [
  {
    id: 1,
    name: "Amarendra",
    skills: "Reactjs, Nodejs, Express, MongoDB",
    experience: "5 Years",
  },

  {

    id: 2,
    name: "Amar",
    skills: "Reactjs, Nodejs, Express, MongoDB",
    experience: "2 Years",
  },
]





export default function Shortlist(props){
  return props.trigger? (
    <div className={style.shortlist}>
        <div className={style.delete}>
       
        {props.children}
        </div>
        <div className={style.container}>
           
           {user && user.map((item)=>(
            <div className={style.user} key ={item.id}>
              <h1>{item.name}</h1>
              <p>{item.skills}</p>
              <span>{item.experience}</span>
            </div>
           ))}
          

        </div>
    </div>
  ) :"";
}
