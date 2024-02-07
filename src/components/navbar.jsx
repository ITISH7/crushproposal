import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/navbar.module.css";
import goalPost from "../resources/goalpost.png";
import footballer from "../resources/FOOTBOLLER.png";
import football from "../resources/BOLL.png";

 
function NavBar() {
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);
  const [animation, setAnimateClass] = useState("");

  function goalClicked(position) {
    if (position === "left") {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
        window.open("https://www.youtube.com/watch?v=dgPIqqUloCg&pp=ygUZZmFsbCBpbnRvIG1lIGZvcmVzdCBibGFraw%3D%3D");
      }, 1000);
      setAnimateClass(`${styles.leftgoal}`);
    } else if (position === "right") {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
        navigate("/rightgoal");
      }, 1000);
      setAnimateClass(`${styles.rightgoal}`);
    } else {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
        navigate('/confession')
      }, 1000);
      setAnimateClass(`${styles.centergoal}`);
    }
  }

  return (
    <div className={styles.navbar}>
        {/* <p className={styles.despirate}>"hey this side my love , i am very despirate for you please accept my proposal "</p> */}
      <img
        src={goalPost}
        className={styles.goalpost}
        onClick={() => goalClicked("centre")}
      ></img>
      <div className={styles.lowernav}>
        <div>
        <img
          src={goalPost}
          className={`${styles.goalpost} ${styles.leftgoalkeeper}`}
          onClick={() => goalClicked("left")}
        ></img>
        </div>
        <div>
        <img
          src={goalPost}
          className={`${styles.goalpost} ${styles.rightgoalkeeper}`}
          onClick={() => goalClicked("right")}
        ></img></div>
      </div>
      <div className={styles.footernav}>
        <img
          src={football}
          className={isClicked ? `${animation}` : ""}
          height={100}
          width={100}
        ></img>
        <img src={footballer} height={200} className={styles.footboller}></img>
      </div>
    </div>
  );
}
export default NavBar;
