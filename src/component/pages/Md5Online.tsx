"use client";
import React, { useState } from "react";
var crypto = require("crypto");
import { Button, Input, List, Space, Switch } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import styled from "styled-components";
import _ from "lodash";
const { TextArea } = Input;
const Md5OnlinePage = () => {
  const [value, setValue] = useState("");
  const [auto, setAuto] = useState(true);
  return (
    <Md5OnlineWrapper className="p-4">
      <div>
        <h1>MD5 Hash Generator</h1>
        <strong>Use this generator to create an MD5 hash of a string:</strong>
      </div>
      <div>
        <TextArea
          className="mb-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter text..."
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
        <Space>
          <Switch
            className="bg-black"
            checked={auto}
            checkedChildren="Auto"
            unCheckedChildren="Auto"
            onChange={() => {
              setAuto(!auto);
            }}
          />
          <Button type="primary"> Generate →</Button>
        </Space>
      </div>
      <div className="mt-10 md:w-fit md:max-w-full">
        <div className="flex bg-white border h-[40px] items-center">
          <div className="px-[12px] font-bold label bg-[darkcyan] text-bold text-white h-full flex items-center">
            Value:
          </div>
          <div className="value mx-4 h-full flex items-center md:flex-1">
            {value}
          </div>
          <Button type="default" className="flex items-end h-full">
            <CopyOutlined
              className="flex items-center h-full justify-center content-center"
              key="copy"
            />
          </Button>
        </div>
        <div className="flex bg-white border h-[40px] items-center">
          <div className="px-[12px] font-bold label bg-[darkcyan] text-bold text-white h-full flex items-center">
            MD5 Hash
          </div>
          <div className="value mx-4 h-full flex items-center md:flex-1">
            {crypto.createHash("md5").update(value).digest("hex")}
          </div>
          <Button type="default" className="flex items-end h-full">
            <CopyOutlined
              className="flex items-center h-full justify-center content-center"
              key="copy"
            />
          </Button>
        </div>
        <div className="flex bg-white border h-[40px] items-center">
          <div className="px-[12px] font-bold label bg-[darkcyan] text-bold text-white h-full flex items-center">
            SHA1
          </div>
          <div className="value mx-4 h-full flex items-center md:flex-1">
            670da91be64127c92faac35c8300e814
          </div>
          <Button type="default" className="flex items-end h-full">
            <CopyOutlined
              className="flex items-center h-full justify-center content-center"
              key="copy"
            />
          </Button>
        </div>
      </div>
    </Md5OnlineWrapper>
  );
};

const Md5OnlineWrapper = styled.div`
  .anticon-copy {
    height: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
  }
`;

export default Md5OnlinePage;
