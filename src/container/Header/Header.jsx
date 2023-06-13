import "./Header.css";

import { images } from "../../constants"
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavor" />
        <h1 className="app__header-h1">Brekkie O'clock</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>Immerse yourself in an exceptional culinary adventure, delight your palate with the world's most exquisite breakfasts, and let yourself be amazed by unrivaled service in the domain of gourmet breakfast dining.</p>
        <button className="custom__button"> Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
