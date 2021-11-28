import { Button, Typography } from "antd";
import classNames from "classnames";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link as LinkOfRoute } from "react-router-dom";
import { useSearchParam } from "react-use";
import { tw } from "twind";
import style from "./index.module.scss";

const { Title, Paragraph, Link } = Typography;

export default function Index() {
  const name = useSearchParam("name") ?? "陌生人";
  const timerRef: React.MutableRefObject<any> = useRef();

  const strs = useMemo(() => ["欢", "迎", "你", ...name], [name]);

  const [str, setStr] = useState("");
  const [index, setIndex] = useState(0);

  const doTime = useCallback(() => {
    timerRef.current = setInterval(() => {
      setStr(strs[index]);
      setIndex(index + 1);
      if (index > 10) {
        clearInterval(timerRef.current);
      }
    }, 1000);
  }, [index, strs]);

  useEffect(() => {
    doTime();
    return () => {
      clearInterval(timerRef.current);
    };
  }, [doTime]);

  return (
    <div className={style.body}>
      {index < strs.length + 1 && (
        <div
          className={classNames(
            style.content,
            {
              [style.slideInEllipticTopFwd]: true,
              [style.slideOutBckCenter]: index > strs.length,
            },
            tw`text-9xl`
          )}
        >
          <div
            className={classNames(style.str)}
            style={{ animationDelay: `${index}s` }}
          >
            {str}
          </div>
        </div>
      )}
      {index <= 9 && index > 7 && (
        <div
          className={classNames(style.content, {
            [style.slideInEllipticTopFwd]: index > strs.length,
          })}
        >
          <div className={classNames(style.str, tw`text-4xl`)}>
            <Title>婚礼邀请函</Title>
            我们结婚了
          </div>
        </div>
      )}
      {index > 9 && (
        <div
          className={classNames(style.content, {
            [style.slideInEllipticTopFwd]: true,
          })}
        >
          <Typography>
            <Title>亲爱的{name}:</Title>
            <div style={{ paddingLeft: 20 }}>
              <Paragraph>
                我们诚邀请你来参加我们的婚礼，你可以带上你的亲属一起来见证我们幸福时刻
              </Paragraph>
              <Title level={3}>谢黎源 & 廖红</Title>
              <Paragraph>
                <Title level={4}>时间：</Title>
                正月初四（2 月 4号）
              </Paragraph>
              <Paragraph>
                <Title level={4}>宴席：</Title>
                楼下坝坝宴 （😎）
              </Paragraph>
              <Paragraph>
                <Title level={4}>地址：</Title>
                <Link
                  className={classNames(style.link)}
                  href="https://m.amap.com/share/index/__q=31.29500626592044,107.11171165108681,%E5%9B%9B%E5%B7%9D%E7%9C%81%E8%BE%BE%E5%B7%9E%E5%B8%82%E8%BE%BE%E5%B7%9D%E5%8C%BA%E7%BA%A2%E5%8D%AB%E8%B7%AF98%E5%8F%B7&src=app_share&callapp=0&userRelationToken=9604739d4aba11ec8aba00163e0a7d7a1&lnglat=107.11171165108681,31.29500626592044&name=%E5%9B%9B%E5%B7%9D%E7%9C%81%E8%BE%BE%E5%B7%9E%E5%B8%82%E8%BE%BE%E5%B7%9D%E5%8C%BA%E7%BA%A2%E5%8D%AB%E8%B7%AF98%E5%8F%B7"
                >
                  四川省达州市达川区红卫路98号
                </Link>
              </Paragraph>
            </div>
            <div className={style.btnBox}>
              <Button style={{ backgroundColor: "#e2e2b6ce" }}>
                <LinkOfRoute to="/story">我们的故事</LinkOfRoute>
              </Button>
            </div>
          </Typography>
        </div>
      )}
    </div>
  );
}
