import React, { useEffect, useState } from "react";
import h from "./Navbar.module.css";
import Off from "./Off/Off";
import axios from "axios";
import Links from "./Links/Links";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [nav, usenav] = useState([]);
  useEffect(() => {
    axios.get("https://admin.satis-fit.uz/api/menu").then((resp) => {
      let allNav = resp.data.data;
      usenav(allNav);
    });
  });
  return (
    <div className="container">
      <div className={h.navbar}>
        <div className={h.offburger}>
          <Off />
          <img
            src="https://satis-fit.uz/_nuxt/img/logo2.e160e60.svg"
            className={h.logo}
          ></img>
        </div>
        <div className={h.lists}>
          <ul className={h.ul}>
            {nav.map((item, index) => {
              return (
                <Links slug={item.slug} key={index} title={item.title}></Links>
              );
            })}
          </ul>
        </div>
        <NavLink to="https://uzum.uz/ru/product/Satis-295582">
          <button type="button" className={h.btn}>
            Купить Онлайн
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
