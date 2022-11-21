import style from "./apply.module.css";
import { useState } from "react";

export default function Apply(props) {
  
  const [skill, setSkill] = useState({
    isAgree: "true",
    experience: "",
  });

  const skills = [
    {
      id: 1,
      name: "MangoDB",
    },
    {
      id: 2,
      name: "Expressjs",
    },
    {
      id: 3,
      name: "Reactjs",
    },
    {
      id: 4,
      name: "Nodejs",
    },
    {
      id: 5,
      name: "Angular",
    },
    {
      id: 6,
      name: "Vuejs",
    },
  ];

  const handleSkill = (e) => {
    const name = e.target;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setSkill({ ...skill, [name]: value });
    console.log(skill);
  };

  const [input, setInput] = useState({
    bid: "",
    experience: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const handleBid = (e) => {
    e.preventDefault();
    console.log(input);
    console.log(skill);
  };

  return props.trigger ? (

    <div className={style.maincon}>
          <div className={style.apply}>
      <div className={style.delete}>
      {props.children}
      </div>
      <div className={style.upper}>
        <h1 className={style.company}>HiringRoof.com</h1>
        <p>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..." "There is no one who loves pain
          itself, who seeks after it and wants to have it, simply because it is
          pain..."
        </p>
        <h3 className={style.budget}>(Project Budget)</h3>
      </div>
      <hr />

      <div className={style.below}>
        <div className="container">
          {skills.map((item) => (
            <div className={style.inputcon} key={item.id}>
              <div className={style.inputfield}>
                <input
                  type="checkbox"
                  className={style.input}
                  name={skill.isAgree}
                  onChange={setSkill}
                />
                <label htmlFor="number"> {item.name}</label>
              </div>

              <div className={style.inputfield2}>
                <label htmlFor="number">Experience</label>
                <input
                  type="number"
                  className={style.text}
                  id={item.id}
                  name="experience"
                  value={item.experience}
                  onChange={handleSkill}
                />
                <span>Years</span>
              </div>
            </div>
          ))}
        </div>

        <hr />

        <div className={style.bidcontainer}>
          <div className={style.inputcontainer}>
            <div>
              <label htmlFor="number">Total Experience</label>
              <input
                type="number"
                className={style.text}
                id="Experience"
                name="experience"
                value={input.experince}
                onChange={handleInput}
              />
              <span>Years</span>
            </div>

            <div>
              <label htmlFor="number">Bid</label>
              <input
                type="number"
                className={style.text}
                id="bid"
                name="bid"
                value={input.bid}
                onChange={handleInput}
              />
              <span>LPA</span>
            </div>
          </div>
        </div>
      </div>

      <div className={style.bidbtn}>
        <button onClick={handleBid}>Bid</button>
      </div>
    </div>

    </div>

  ) : (
    ""
  );
}
