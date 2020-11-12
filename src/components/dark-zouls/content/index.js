// AntD
import { Layout } from "antd";
// Components
import DarkZoulsFooter from "./footer";
import DarkZoulsForm from "../form";
import DarkZoulsChamp from "../champ";
// Styles
import "./styles.less";

const { Header, Content } = Layout;

const DarkZoulsContent = () => {
  return (
    <Layout className="content">
      <Header className="content__header" style={{ padding: 0 }} />
      <Content className="content__body">
        <div className="content__form">
          <DarkZoulsForm />
        </div>
        <div>
          <DarkZoulsChamp className="content__champ" />
        </div>
      </Content>
      <DarkZoulsFooter />
    </Layout>
  );
};

export default DarkZoulsContent;
