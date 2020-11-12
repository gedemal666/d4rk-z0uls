// React
import { useState } from "react";
// AntD
import { Menu, Layout } from "antd";
// Icons
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
// Styles
import "./styles.less";

const { SubMenu } = Menu;
const { Sider } = Layout;

const DarkZoulsMenu = () => {
  // Estado para gestionar la aparicion del Slider
  const [state, setState] = useState({ collapsed: false });
  // Funcion para manipular el estado
  const handleCollapse = () => {
    setState((prev) => ({ collapsed: !prev.collapsed }));
    console.log("este es el estado del sider", state);
  };

  return (
    <Sider
      collapsible
      collapsed={state.collapsed}
      onCollapse={handleCollapse}
      className="sider"
    >
      <div className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        className="menu"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Champ principal
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Champ secundario
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Items">
          <Menu.Item key="3">Ballestas</Menu.Item>
          <Menu.Item key="4">Chungo</Menu.Item>
          <Menu.Item key="5">Cuchi</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Pilcha">
          <Menu.Item key="6">Cazaca de bokita (+100k de power)</Menu.Item>
          <Menu.Item key="8">Chaleco</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default DarkZoulsMenu;
