import React from "react";

function DisplayComponent({ time: { h, m, s } }) {
  return (
    <div>
      <span>{h >= 10 ? h : "0" + h}</span>
      <span>{m >= 10 ? m : "0" + m}</span>
      <span>{s >= 10 ? s : "0" + s}</span>
    </div>
  );
}

export default DisplayComponent;
