import { Divider } from "antd";
import Sketch from "components/Sketch";
import html from "constants/knowledge/html";
import { HtmlForMenu } from "interface/html";
import React from "react";
import style from "./index.module.scss";

export default function Main() {
  return (
    <div className={style.main}>
      <Divider orientation="left" dashed>
        Html 学习记录
      </Divider>
      <Divider orientation="right">Html</Divider>
      {html.map((item: HtmlForMenu) => (
        <Sketch detail={item} key={item.value} />
      ))}
    </div>
  );
}
