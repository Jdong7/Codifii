import { Topbar } from "../Topbar/topbar";
import "./landing.scss";
const Landing = () => {
  return (
    <div className="landing-wrapper">
      <Topbar />
      <div className="content-wrapper">
        <div className="content-line">
          <div>Practice makes perfect</div>
        </div>
        <div className="content-line">
          <div>Keep track of your skills and land a job</div>
        </div>
        <div className="content-cards">
          <div className="card">
            <i className="fa-solid fa-hand icon"></i>
            <div className="icon-description">
              Blind75 Solutions that provide indepth answers
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-calendar-check icon"></i>
            <div className="icon-description">
              Tracking your progress efficiently for review
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-file-code icon"></i>
            <div className="icon-description">
              Links and resources to better your skills
            </div>
          </div>
        </div>
        <div className="content-started">
          <button className="started-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export { Landing };
