import "./topbar.scss";
import "../../mixins.scss";
const Topbar = () => {
  interface Person {
    name: String;
    employee: Boolean;
    }

    

  return (
    <div className="topbar-wrapper">
      <div className="logo-wrapper">
        <div className="codifii-text">Codifii</div>
        <i className="fa-solid fa-laptop-code icon-size"></i>
      </div>
      <div className="signin-text">Sign-in</div>
    </div>
  );
};

export { Topbar };
