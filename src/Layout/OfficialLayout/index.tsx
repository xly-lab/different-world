import { Layout } from "antd";
import classNames from "classnames";
import React, { Suspense } from "react";
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

const OfficialLayout = (props: RouteConfigComponentProps) => {
  const Component = props.route?.component;
  return (
    <Layout>
      <Header>
        <Logo>xly study web</Logo>
      </Header>
      <Content
        className={classNames(style.content, tw`lg:w-4/5 w-full m-auto`)}
      >
        <Suspense fallback="loading">
          {Component && <Component {...props} />}
        </Suspense>
      </Content>
    </Layout>
  );
};

export default OfficialLayout;
