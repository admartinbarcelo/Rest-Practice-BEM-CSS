import "./Menu.css";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../contants";

const Menu = () => {
  return (
    <div className='app__menu flex__center section__padding id="menu"'>
      <div className="app__menu-title">
        <SubHeading title="Menu That Fits Your Palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__menu-menu">
        <div className="app__menu-menu_wine flex__center">
          <p className="app__menu_heading">Wine & Beer</p>
          <div className="app__menu_items">
            {data.wines.map((wine, index) => (
              <p>{wine.title}</p>
            ))}
          </div>
        </div>

        <div className="app__menu-menu_img">
            <img src={images.menu} alt="menu img" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
