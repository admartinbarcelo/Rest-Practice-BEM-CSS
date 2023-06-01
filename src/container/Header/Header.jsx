/* eslint-disable no-unused-vars */
import "./Header.css";

// import { images } from "../../constants";
import images from "../../constants/images";
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__heading" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavor"/>
        <h1 className="app__header-h1">The Key to fine Dining</h1>
      </div>
        <div className="app__wrapper_img">

        </div>
    </div>
  );
};

export default Header;
