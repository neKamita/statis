import React from "react";
import h from "./Card.module.css";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "../../../../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";
function Card(props) {
  return (
    <div className={h.card}>
      <div className={h.imgbox}>
        <img src={props.url}></img>
      </div>
      <h1 className={h.title}>{props.title}</h1>
      <NavLink to={`/${props.link}`}>
        <h1 className={h.pod}>Подробнее </h1>
      </NavLink>
    </div>
  );
}

export default Card;
