import BaseLayout from "./BaseLayout";
import "./SecondaryLayout.css";

export const SecondaryLayout = ({ children }) => {
  return (
    <BaseLayout className="secondary-layout">
      {/* children = Header + Content + Footer */}
      {children}
    </BaseLayout>
  );
};

export default SecondaryLayout;
