/**
 * 列表项
 */
import { Typography } from "antd";
import { HtmlForMenu } from "interface/html";
import React, { useCallback } from "react";
import { useHistory } from "react-router";
import style from "./index.module.scss";

const { Title, Paragraph, Text } = Typography;

interface Props {
  detail: HtmlForMenu;
}

export default function Sketch(props: Props) {
  const [ellipsis] = React.useState(true);
  const history = useHistory();
  const gotoDetail = useCallback(() => {
    history.push(`${history.location.pathname}/detail/${props.detail.value}`);
  }, [history, props.detail.value]);
  return (
    <div className={style.sketchContainer}>
      <Title level={3}>{props.detail.title}</Title>
      <Paragraph
        ellipsis={
          ellipsis ? { rows: 2, expandable: true, symbol: "more" } : false
        }
      >
        {props.detail.description}
      </Paragraph>
      <Text className={style.btn} underline onClick={gotoDetail}>
        查看更多
      </Text>
    </div>
  );
}
