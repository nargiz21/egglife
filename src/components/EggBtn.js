import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
const EggBtn = () => {
  return (
    <div>
      <button className="btn-wrapper">
        Find where to buy <div className="egg egg-btn"><FontAwesomeIcon icon={faArrowRightLong} /></div>
      </button>
    </div>
  );
};

export default EggBtn;
