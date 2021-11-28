import { Form, Typography } from "antd";
import classNames from "classnames";
import React from "react";
import style from "./index.module.scss";
const { Title, Paragraph, Link } = Typography;
interface Props {
  down: () => void;
  up: () => void;
}

export default function SecondSection(props: Props) {
  return (
    <div className={style.secondSectionContainer}>
      <Form layout="vertical">
        <Form.Item>
          <Title>亲爱的亲朋好友们:</Title>
        </Form.Item>
        <Form.Item>
          <Paragraph>
            我们诚邀请你来参加我们的婚礼，你可以带上你的亲属一起来见证我们幸福时刻
          </Paragraph>
        </Form.Item>
        <Form.Item>
          <Title level={3}>谢黎源 & 廖红</Title>
        </Form.Item>
        <Form.Item label="时间：" required>
          正月初四（2 月 4号）
        </Form.Item>
        <Form.Item label="宴席：" required>
          楼下坝坝宴 （😎）
        </Form.Item>
        <Form.Item label="地址：" required>
          <Link
            className={classNames(style.link)}
            href="https://m.amap.com/share/index/__q=31.29500626592044,107.11171165108681,%E5%9B%9B%E5%B7%9D%E7%9C%81%E8%BE%BE%E5%B7%9E%E5%B8%82%E8%BE%BE%E5%B7%9D%E5%8C%BA%E7%BA%A2%E5%8D%AB%E8%B7%AF98%E5%8F%B7&src=app_share&callapp=0&userRelationToken=9604739d4aba11ec8aba00163e0a7d7a1&lnglat=107.11171165108681,31.29500626592044&name=%E5%9B%9B%E5%B7%9D%E7%9C%81%E8%BE%BE%E5%B7%9E%E5%B8%82%E8%BE%BE%E5%B7%9D%E5%8C%BA%E7%BA%A2%E5%8D%AB%E8%B7%AF98%E5%8F%B7"
          >
            四川省达州市达川区红卫路98号
          </Link>
        </Form.Item>
        {/* 
        <Form.Item>
          <div className={style.btnBox}>
            <Button style={{ backgroundColor: "#e2e2b6ce" }}>
              <LinkOfRoute to="/story">我们的故事</LinkOfRoute>
            </Button>
          </div>
        </Form.Item> */}
      </Form>
    </div>
  );
}
