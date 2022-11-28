import React from "react";
import style from "../edit/edit.module.css";

export default function Edit(props) {
  return props.trigger ? (
    <div className={style.edit}>
      <div className={style.delete}>{props.children}</div>
      <div className={style.container}>
        <div className="card mb-3 RestaurantCard">
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">
                  <h3 className="ColorWhite">
                    <input type="text" placeholder="Company Name" />
                  </h3>{" "}
                  <p className="text-info">
                    <item classNameName="ctc"><input type="text" placeholder="Bid" /></item>
                  </p>{" "}
                  &nbsp; <p><input type="text" placeholder="nego" /></p>{" "}
                </div>
                <p className="card-text" placeholder="">
                  <p className="ColorWhite">
                    Skills
                    <p className="ColorGray">
                      <input
                        type="text"
                        placeholder="Skills sparated by comma"
                      />
                    </p>
                  </p>
                  <p className="ColorWhite">
                    Experience
                    <p className="ColorGray">
                      <input type="text" placeholder="Experience" />
                    </p>
                  </p>
                  <p className="ColorWhite">
                    Work Type
                    <p className="ColorGray">
                      <input type="text" placeholder=" Work Type" />
                    </p>
                  </p>
                  <p className="ColorWhite">
                    Job Type
                    <p className="ColorGray">
                      <input type="text" placeholder="Job Type" />
                    </p>
                  </p>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
