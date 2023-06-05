import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: "#DCCA86" }}>
            {title}
          </p> 
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
