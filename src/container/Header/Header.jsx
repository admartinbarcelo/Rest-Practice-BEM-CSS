import "./Header.css";

import images from "../../constants/images";
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavor" />
        <h1 className="app__header-h1">The Key to fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>Embrace extraordinary culinary journeys, savour world-class gastronomy, and experience unparalleled service in the realm of fine dining.</p>
        <button className="custom__button">Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
