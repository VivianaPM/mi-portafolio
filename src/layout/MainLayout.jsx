import BaseLayout from "./BaseLayout";
import "./MainLayout.css";
import Header from "../components/organisms/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <BaseLayout className="main-layout">
      {/* children = Header + Content + Footer */}
      <Header />
    </BaseLayout>
  );
};

export default MainLayout;
