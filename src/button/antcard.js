import imgBurger from "../../../assets/burger.png"
import React from "react";
import { Card , Anchor, Col, Row, DownOutlined, SettingOutlined,Checkbox} from "antd";
const { Meta } = Card;
// Card

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


      // Anchor
      <div>
const App = () => (
  <Row>
    <Col span={16}>
      <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
      <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
      <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} />
    </Col>
    <Col span={8}>
      <Anchor
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
          );
              );
                  };
    </Col>
          
  </Row>

</div>
</div>
      
// DropDown
      
<div>
const items = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
];
const App = () => (
  <Dropdown menu={{ items }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
</div>

// CheckBox
 
<div>
const onChange = e => {
  console.log(`checked = ${e.target.checked}`);
};
const App = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;
export default App;
</div>
 

