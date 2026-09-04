import "./BaseLayout.css";

const BaseLayout = ({ children, className = "" }) => {
  return (
    <div className={`base-layout ${className}`}>
      <div className="base-layout__container">{children}</div>
    </div>
  );
};

export default BaseLayout;
