import React from "react";
import h from "./Dop.module.css";
import { NavLink } from "react-router-dom";
function Dop(props) {
  return (
    <div className={h.dop}>
      <NavLink to="/">
        <div className={h.imgbox}>
          <img src={props.img} className={h.img}></img>
        </div>
        <h1 className={h.title}>{props.title}</h1>
        <p className={h.text}>{props.text}</p>
        <h1 className={h.d}>Узнать больше</h1>
      </NavLink>
    </div>
  );
}

export default Dop;
