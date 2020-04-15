import React from "react";

const DataManager = () => {
  const date = new Date().toString();
  const month = date.slice(4, 7);
  let monthNum = "";
  switch (month) {
    case "Jen":
      monthNum = "сiчень";
      break;
    case "Feb":
      monthNum = "лютий";
      break;
    case "Mar":
      monthNum = "березень";
      break;
    case "Apr":
      monthNum = "квiтень";
      break;
    case "May":
      monthNum = "травень";
      break;
    case "Jun":
      monthNum = "червень";
      break;
    case "Jul":
      monthNum = "липень";
      break;
    case "Aug":
      monthNum = "серпень";
      break;
    case "Sep":
      monthNum = "вересень";
      break;
    case "Oct":
      monthNum = "жовтень";
      break;
    case "Nov":
      monthNum = "листопад";
      break;
    case "Dec":
      monthNum = "грудень";
      break;
    default:
      break;
  }

  const weekDay = date.slice(0, 3);
  let day = "";
  switch (weekDay) {
    case "Tue":
      day = "вiвторок";
      break;
    case "Mon":
      day = "понедiлок";
      break;
    case "Wen":
      day = "середа";
      break;
    case "Thr":
      day = "квiтень";
      break;
    case "Fri":
      day = "травень";
      break;
    case "Sat":
      day = "субота";
      break;
    case "Sun":
      day = "недiля";
      break;

    default:
      break;
  }

  return (
    <div>
      <div className="date-format-1">
        {monthNum.toUpperCase()}
        {" - "}
        {date.slice(8, 10)}
        {" - "}
        {date.slice(11, 16).toUpperCase()}
      </div>
      <div>----------</div>
      <div>{date.slice(0, 3)}</div>
    </div>
  );
};

export default DataManager;
