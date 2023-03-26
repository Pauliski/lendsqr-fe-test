import { useNavigate } from "react-router-dom";
import "./detailsTop.scss";

const DetailsTop = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/users");
  };
  return (
    <div className="detailtop-wrapper">
      <button onClick={handleBack}>
        <img src="/images/pointBack.svg" alt="point" />
        <span className="back-text">Back to Users</span>
      </button>
      <div className="details-button-wrapper">
        <p>User Details</p>
        <div>
          <button className="status-button blacklist-button">
            Blacklist User
          </button>
          <button className="status-button active-button ">
            Activate User
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default DetailsTop;
