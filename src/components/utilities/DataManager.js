import React from "react";

const DataManager = () => {
  return (
    <div>
      <div className="date-format-1">
        {new Date().toString().slice(4, 16).toUpperCase()}
      </div>
      <div>----------</div>
      <div>{new Date().toString().slice(0, 3).toUpperCase()}</div>
    </div>
  );
};

export default DataManager;
