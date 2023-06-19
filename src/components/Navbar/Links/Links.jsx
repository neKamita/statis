import React from "react";
import h from "./Links.module.css";
import { NavLink } from "react-router-dom";
function Links(props) {
  return (
    <div className={h.link}>
      <NavLink to={`/${props.slug}`}>
        <h1 className={h.title}>{props.title}</h1>
      </NavLink>
    </div>
  );
}

export default Links;
