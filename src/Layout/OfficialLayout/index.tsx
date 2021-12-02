import { UnorderedListOutlined } from "@ant-design/icons";
import { Button, Calendar, Divider, Drawer, Layout, Tree } from "antd";
import classNames from "classnames";
import Loading from "components/Loading";
import React, { Suspense, useRef, useState } from "react";
import { useHistory } from "react-router";
import { RouteConfigComponentProps } from "react-router-config";
import styled from "styled-components";
import { tw } from "twind";
import constants from "../../constants";
import style from "./index.module.scss";
const { Header, Content } = Layout;
const { DirectoryTree } = Tree;

const Logo = styled.div`
  margin-right: 50px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffcc;
`;

const OfficialLayout = (props: RouteConfigComponentProps) => {
  const history = useHistory();
  const sceneRef = useRef<any>();
  const Component = props.route?.component;
  const [visible, setVisible] = useState(false);
  const onSelect = (keys: React.Key[], info: any) => {
    history.push(keys.toString());
  };

  return (
    <Suspense fallback={<Loading />}>
      <Layout className={style.layout}>
        <Header className={tw`relative z-10`}>
          <Logo>xly study web</Logo>
        </Header>
        <Button
          type="primary"
          className={tw`fixed top-20 lg:visible invisible w-20 text-left`}
          onClick={() => setVisible(true)}
        >
          <UnorderedListOutlined />
        </Button>
        <Content
          className={classNames(style.content, tw`lg:w-1/2 w-full m-auto`)}
        >
          <Drawer
            placement="left"
            closable={false}
            onClose={() => setVisible(false)}
            visible={visible}
            getContainer={false}
          >
            <Calendar fullscreen={false} />
            <Divider>目录</Divider>
            <DirectoryTree
              multiple
              defaultExpandAll
              onSelect={onSelect}
              treeData={constants.layoutData.menuData}
            />
          </Drawer>
          <div
            id="scene"
            className="w-full lg:visible invisible"
            ref={sceneRef as any}
          ></div>
          {Component && <Component {...props} />}
        </Content>
      </Layout>
    </Suspense>
  );
};

const OfficialLayoutCoppy = (props: RouteConfigComponentProps) => (
  <OfficialLayout {...props} />
);

export default OfficialLayoutCoppy;
