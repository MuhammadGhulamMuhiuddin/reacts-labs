import imgBurger from "../../../assets/burger.png"
import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const AntdCard = () => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 250 }}
        cover={
          <img
            alt="example"
            src={pizza}
          />
        }
      >
        <Meta title="Beats into the different Beats" description="www.FB.com" />
      </Card>
    </div>
  );
};

export default AntdCard;
