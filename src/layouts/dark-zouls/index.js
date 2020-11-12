// Components
import DarkZoulsMenu from "../../components/dark-zouls/menu";
import DarkZoulsContent from "../../components/dark-zouls/content";
// AntD
import { Layout } from "antd";
// Styles
import "./styles.less";

const DarkZoulsLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <DarkZoulsMenu />
      <DarkZoulsContent />
    </Layout>
  );
};

export default DarkZoulsLayout;
