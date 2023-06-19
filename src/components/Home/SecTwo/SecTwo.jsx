import React, { useEffect, useState } from "react";
import h from "./SecTwo.module.css";
import axios from "axios";
import Dop from "./Dop/Dop";
function SecTwo() {
  const [dop, useDop] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.satis-fit.uz/api/home/menu_category")
      .then((resp) => {
        let allDop = resp.data.data;
        useDop(allDop);
      });
  });
  return (
    <div className={h.sectwo}>
      <div className="container">
        {dop.map((item, index) => {
          return (
            <Dop
              slug={item.slug}
              img={item.url}
              key={index}
              text={item.short_content}
              title={item.title}
            ></Dop>
          );
        })}
      </div>
    </div>
  );
}

export default SecTwo;
