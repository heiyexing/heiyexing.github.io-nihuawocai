import React, { useMemo } from "react";
import "./App.css";
import { WingBlank, Carousel } from "antd-mobile";
import configList from "./config.json";

function QuestionItem({ data }: any) {
  return (
    <div className="item">
      <div className="top">
        <span>类型：{data.type}</span>
        <span>长度：{data.length ?? data.text.length}</span>
        <span>分值：{data.score}分</span>
      </div>
      <div className="center">{data.text}</div>
    </div>
  );
}

function App() {
  const data = useMemo(
    () =>
      configList
        .map((item) => {
          return {
            ...item,
            order: Math.random(),
          };
        })
        .sort((a, b) => a.order - b.order),
    []
  );

  return (
    <div className="App">
      <WingBlank>
        <Carousel autoplay={false} infinite>
          {data.map((item) => (
            <QuestionItem key={item.text} data={item}></QuestionItem>
          ))}
        </Carousel>
      </WingBlank>
    </div>
  );
}

export default App;
