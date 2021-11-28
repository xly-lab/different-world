import React from "react";
import style from "./index.module.scss";
import Mer from "./imgs/mer.png";
import We from "./imgs/we.jpg";
import { Space } from "antd";

interface Props {
  down: () => void;
  up: () => void;
}

export default function FirstSection(porps: Props) {
  return (
    <div className={style.firstSectionContainer}>
      <div className={style.imgOutOne}>
        <img src={Mer} alt="mer" />
      </div>
      <div className={style.imgOutTwo}>
        <img src={We} alt="mer" />
      </div>
      <div className={style.names}>
        <Space size={10}>
          <div className={style.nameXly}>谢黎源</div>
          <div>&</div>
          <div className={style.nameLh}>廖红</div>
        </Space>
      </div>
    </div>
  );
}
