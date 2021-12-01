import { UnorderedListOutlined } from "@ant-design/icons";
import { Button, Calendar, Divider, Drawer, Layout, Tree } from "antd";
import classNames from "classnames";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useHistory } from "react-router";
import { RouteConfigComponentProps } from "react-router-config";
import styled from "styled-components";
import { tw } from "twind";
import { menuData } from "./constants";
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

  // 随机生成圆形
  const createBubble = useCallback(() => {
    const bubble = document.createElement("div");

    bubble.style.background = `#${Math.random().toString(16).substr(-6)}`;

    const size = `${Math.random() * 100}px`;
    bubble.style.width = size;
    bubble.style.height = size;

    const pos = `${Math.random() * 100}%`;
    bubble.style.left = pos;

    const duration = `${Math.random() * 10 + 10}s`;
    bubble.style.animationDuration = duration;

    const opacity = Math.random();
    bubble.style.opacity = String(opacity);

    bubble.classList.add("bubble");

    document.querySelector("#scene")?.appendChild(bubble);
  }, []);

  useEffect(() => {
    setInterval(createBubble, 500);
  }, [createBubble]);
  return (
    <Layout>
      <Header className={tw`relative z-10`}>
        <Logo>xly study web</Logo>
      </Header>
      <Button
        type="primary"
        className={tw`absolute top-20 lg:visible invisible w-20 text-left`}
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
            treeData={menuData}
          />
        </Drawer>
        <Suspense fallback="loading">
          <div
            id="scene"
            className="w-full lg:visible invisible"
            ref={sceneRef as any}
          ></div>
          {Component && <Component {...props} />}
        </Suspense>
      </Content>
    </Layout>
  );
};

const OfficialLayoutCoppy = (props: RouteConfigComponentProps) => (
  <OfficialLayout {...props} />
);

export default OfficialLayoutCoppy;
