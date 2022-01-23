import React from "react";

function BtnComponent(props) {
  return (
    <div>
      <button onClick={props.start} className="stopwatch-btn stopwatch-btn-gre">
        Start
      </button>
      <div>
        <button onClick={props.stop} className="stopwatch-btn stopwatch-btn-red">
          Stop
        </button>
        <button onClick={props.reset} className="stopwatch-btn stopwatch-btn-yel">
          Reset
        </button>
      </div>
      <div>
        <button onDoubleClick={props.wait} className="stopwatch-btn stopwatch-btn-yel">
          Wait
        </button>
      </div>
    </div>
  );
}

export default BtnComponent;
