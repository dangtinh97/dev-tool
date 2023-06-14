"use client";
import React from "react";
import styled from "styled-components";
import { Avatar, Card, Col, Row } from "antd";
import _ from "lodash";
import {
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  FundViewOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { useRouter } from "next/navigation";

const tools = [
  {
    title: "MD5",
    description: "MD5 Hash Generator",
    path: "/md5online",
  },
];

const HomePage = () => {
  const route = useRouter();
  return (
    <HomePageWrapper>
      <Row gutter={[16, 16]}>
        {tools.map((item: any, index: number) => {
          return (
            <Col span={8} xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable={true}
                key={index}
                className="rounded-lg shadow-md"
                style={{ width: "100%" }}
                onClick={() => {
                  route.push(item.path);
                }}
                actions={[<EyeOutlined key={`edit${index}`} />]}
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  padding: 24px 12px;
`;
export default HomePage;
