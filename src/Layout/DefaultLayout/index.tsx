import { Layout } from "antd";
import React, { Suspense } from "react";
import { RouteConfigComponentProps } from "react-router-config";
import styled from "styled-components";
import style from "./index.module.scss";

const { Header, Content } = Layout;

const Logo = styled.div`
  margin-right: 50px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffcc;
`;

export default function DefaultLayout(props: RouteConfigComponentProps) {
  const Component = props.route?.component;
  console.log("asdasasdzzd");
  return (
    <Layout className="layout">
      <Header style={{ backgroundColor: "#FFCC99" }}>
        <Logo>Here is an altogether different world.</Logo>
      </Header>
      <Content className={style.content}>
        <Suspense fallback="loading">
          {Component && <Component {...props} />}
        </Suspense>
      </Content>
    </Layout>
  );
}
