import "./Menu.css";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";

const Menu = () => {
  return (
    <div className='app__menu flex__center section__padding' id="menu">
      <div className="app__menu-title">
        <SubHeading title="Menu That Fits Your Palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__menu-menu">
      <div className="app__menu-menu_wine flex__center">
          <p className="app__menu-menu_heading">Coffee's</p>
          <div className="app__menu_menu_items">
            {/* export data from constants and map title price and tags for cocktails */}
            {data.coffes.map((coffes, index) => ( 
              <MenuItem
                key={coffes.title + index}
                title={coffes.title}
                price={coffes.price}
                tags={coffes.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__menu-menu_img">
          <img src={images.coffe} alt="coffe img" />
        </div>

        <div className="app__menu-menu_cocktails flex__center">
          <p className="app__menu-menu_heading">Smoothie's</p>
          <div className="app__menu_menu_items">
            {/* export data from constants and map title price and tags for cocktails */}
            {data.smoothies.map((smoothie, index) => (
              <MenuItem
                key={smoothie.title + index}
                title={smoothie.title}
                price={smoothie.price}
                tags={smoothie.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default Menu;
