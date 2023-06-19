import React, { useEffect, useState } from "react";
import h from "./SecOne.module.css";
import { NavLink } from "react-router-dom";
import Card from "./Card/Card";
import OwlCarousel from "react-owl-carousel";
import "../../../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css";

import axios from "axios";
function SecOne() {
  const [slide, useSlide] = useState([]);
  useEffect(() => {
    axios.get("https://admin.satis-fit.uz/api/home/banner").then((resp) => {
      let allSlide = resp.data.data;
      useSlide(allSlide);
    });
  });
  return (
    <div className={h.secone}>
      <div className="container">
        <div className={h.df}>
          <div className={h.info}>
            <h1 className={h.title}>
              Быть стройной и здоровой не модно, это – необходимость
            </h1>
            <h3 className={h.text}>
              SATIS - первый корректор пищевого поведения
            </h3>
            <NavLink to="/">
              <button className={h.btn} type="button">
                Подробнее
              </button>
            </NavLink>
          </div>
          <div className={h.cards}>
            <OwlCarousel className="owl-theme" loop items={1}>
              {slide.map((item, index) => {
                return (
                  <Card
                    slug={item.slug}
                    url={item.url}
                    key={index}
                    title={item.title}
                  ></Card>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecOne;
