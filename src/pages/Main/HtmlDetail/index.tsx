// @ts-ignore
import Loading from "components/Loading";
import htmlDetailData from "constants/knowledge/html/htmlDetailData";
import React, { Suspense, useMemo } from "react";
import { useRouteMatch } from "react-router";
import style from "./markdown.module.scss";

export default function HtmlDetail() {
  const { params = { name: "" } }: any = useRouteMatch();

  const Detail = useMemo(
    () => htmlDetailData.find((item) => item.value === params?.name)?.detail,
    [params?.name]
  );

  return (
    <Suspense fallback={<Loading />}>
      <div
        className={style.markdown}
        dangerouslySetInnerHTML={{ __html: Detail }}
      ></div>
    </Suspense>
  );
}
