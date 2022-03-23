import React from "react";
import Card from "./Card";
import Profile from "./Profile";
import UserInput from "./UserInput";

let timeSpentData = {
  daily: [
    {
      activityType: "work",
      currentHours: 5,
      previousHours: 7,
    },
    {
      activityType: "play",
      currentHours: 1,
      previousHours: 2,
    },
    {
      activityType: "study",
      currentHours: 0,
      previousHours: 1,
    },
    {
      activityType: "exercise",
      currentHours: 1,
      previousHours: 1,
    },
    {
      activityType: "social",
      currentHours: 1,
      previousHours: 3,
    },
    {
      activityType: "selfcare",
      currentHours: 0,
      previousHours: 1,
    },
  ],
  weekly: [
    {
      activityType: "work",
      currentHours: 32,
      previousHours: 36,
    },
    {
      activityType: "play",
      currentHours: 10,
      previousHours: 8,
    },
    {
      activityType: "study",
      currentHours: 4,
      previousHours: 7,
    },
    {
      activityType: "exercise",
      currentHours: 4,
      previousHours: 5,
    },
    {
      activityType: "social",
      currentHours: 5,
      previousHours: 10,
    },
    {
      activityType: "selfcare",
      currentHours: 2,
      previousHours: 2,
    },
  ],
  monthly: [
    {
      activityType: "work",
      currentHours: 103,
      previousHours: 128,
    },
    {
      activityType: "play",
      currentHours: 23,
      previousHours: 29,
    },
    {
      activityType: "study",
      currentHours: 13,
      previousHours: 19,
    },
    {
      activityType: "exercise",
      currentHours: 11,
      previousHours: 18,
    },
    {
      activityType: "social",
      currentHours: 21,
      previousHours: 23,
    },
    {
      activityType: "selfcare",
      currentHours: 7,
      previousHours: 11,
    },
  ],
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "daily",
      showModal: false,
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({
      currentView: view,
    });
  }

  showModal = (e) => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    let previousLabel;
    switch (this.state.currentView) {
      case "daily":
        previousLabel = "Previous Hours - ";
        break;
      case "weekly":
        previousLabel = "Last Week - ";
        break;
      case "monthly":
        previousLabel = "Last Month - ";
        break;
      default:
        previousLabel = "Previous Hours - ";
    }

    return (
      <div>
        {/*<UserInput show={this.state.showModal} onClose={this.state.onClose} />*/}
        <UserInput
          show={this.state.showModal}
          onClose={() => this.setState({ showModal: false })}
        />

        <div class="grid-container">
          <div class="grid-item" id="profile-item">
            <Profile
              changeViewHandler={this.changeView}
              currentView={this.state.currentView}
            />
          </div>

          {timeSpentData[this.state.currentView].map((item) => {
            return (
              <div class="grid-item">
                <Card
                  activityTitle={item.activityType}
                  time={item.currentHours}
                  previousTime={item.previousHours}
                  previousTimeLabel={previousLabel}
                  onClick={(e) => {
                    this.showModal();
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
