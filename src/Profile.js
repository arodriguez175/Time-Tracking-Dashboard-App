import React from "react";
import { formatToCapitalCase } from "./utils.js";
import profileImage from "./images/image-jeremy.png";
import "./Profile.css";

class Profile extends React.Component {
  render() {
    let changeView = this.props.changeViewHandler;
    let views = ["daily", "weekly", "monthly"];
    return (
      <article className="profile-card">
        <div class="top">
          <div className="image-container">
            <img src={profileImage} alt="Selfie" />
          </div>
          <p class="report-for">Report for</p>

          <p class="name">
            Jeremy <br />
            Robson
          </p>
        </div>

        <div>
          <div class="profile-card-options">
            {views.map((view) => (
              <button
                className={view === this.props.currentView ? "current" : ""}
                onClick={() => {
                  changeView(view);
                }}
              >
                {formatToCapitalCase(view)}
              </button>
            ))}
          </div>
        </div>
      </article>
    );
  }
}

export default Profile;
