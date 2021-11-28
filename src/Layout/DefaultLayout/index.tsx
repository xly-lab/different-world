import { CustomerServiceTwoTone } from "@ant-design/icons";
import { Layout } from "antd";
import classNames from "classnames";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { RouteConfigComponentProps } from "react-router-config";
import styled from "styled-components";
import { tw } from "twind";
import style from "./index.module.scss";
const { Header, Content } = Layout;

const Logo = styled.div`
  margin-right: 50px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffcc;
`;

const DefaultLayout = (props: RouteConfigComponentProps) => {
  const Component = props.route?.component;
  return (
    <Layout className={classNames(style.layout)}>
      <MusicIcon />
      <Header className={style.header}>
        <Logo>We got married</Logo>
      </Header>
      <Content className={classNames(style.content, tw`lg:w-4/5 w-full`)}>
        <Suspense fallback="loading">
          {Component && <Component {...props} />}
        </Suspense>
      </Content>
    </Layout>
  );
};

export default DefaultLayout;

const MusicIcon = () => {
  const audioRef = useRef();
  const [rotator, setRotator] = useState("paused");

  const changeMusicState = useCallback(async () => {
    await setRotator((rotator) =>
      rotator === "paused" ? "running" : "paused"
    );
    console.log(audioRef);
    if ((audioRef.current as any).paused === true) {
      (audioRef.current as any)?.play?.();
    } else {
      (audioRef.current as any)?.pause?.();
    }
  }, []);
  useEffect(() => {
    if ((audioRef.current as any).paused === true) {
      (audioRef.current as any)?.pause?.();
    }
  }, []);
  return (
    <div
      className={classNames(style.musicIcon, style.rotateCenter)}
      style={{ animationPlayState: rotator }}
      onClick={changeMusicState}
    >
      <CustomerServiceTwoTone
        style={{ color: "#cc0033" }}
        twoToneColor="aliceblue"
      />
      <audio
        ref={audioRef as any}
        src={require("../music/3135957395.mp3").default}
        id="music"
        loop
        autoPlay
      ></audio>
    </div>
  );
};
