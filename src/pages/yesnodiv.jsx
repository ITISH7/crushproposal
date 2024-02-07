import React, { useState } from "react";
import styles from "../css/homepage.module.css";
function YesNoDiv() {
  const [prop, setProp] = useState({
    position: "absolute",
    left: `55%`,
    textAlign: "center",
    transition: "1s ease",
  });

  function cant() {
    var minHeight = Math.ceil(0);
    var maxHeight = Math.floor(700);
    var min = Math.ceil(0);
    var max = Math.ceil(1200);
    var x = Math.random() * (maxHeight - minHeight) + minHeight;
    var y = Math.random() * (max - min) + min;
    setProp({
      position: "absolute",
      top: `${x}px`,
      left: `${y}px`,
      textAlign: "center",
      transition: "1s ease",
    });
    console.log("hello");
  }
  const finalyes = () => {};
  return (
    <div className={styles.right}>
      <p>
        I have been thinking about this for a long time, would you like to spend
        rest of aga ka kudh soch le yrr
      </p>
      <div className="gif_container">
        <img
          src="https://i.postimg.cc/pdNqPxx1/milk-and-mocha-cute.gif"
          alt="Cute animated illustration"
        />
      </div>
      <div className="buttons">
        <button className="btn" id="yesButton" >
          Yes
        </button>
        <button
          className="btn"
          id="noButton"
          // onmouseover="moveButton()"
          onClick={cant}
          style={prop}
        >
          No
        </button>
      </div>

      {/* <div className={styles.yesno} onClick={finalyes}>
        <h1 className={styles.hover}>Yes</h1>
        <div onClick={cant} style={prop}>
          <h1 className={styles.hover}>No</h1>
        </div>
      </div> */}
    </div>
  );
}
export default YesNoDiv;
