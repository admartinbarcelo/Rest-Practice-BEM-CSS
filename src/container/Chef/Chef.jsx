import './Chef.css'

import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="chef">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Pastry Chef" />
        <h1 className="headtext__cormorant">What We Believe In</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
            We believe in the joy and inspiration that can be found in food, especially in the first meal of the day.
            </p>
          </div>
          <p className="p__opensans">
          We are passionate about combining traditional pastry techniques with innovative flavors and methods. We strive to create dishes that delight the palate and nourish the soul, that are a celebration of the flavors and textures of global gastronomy.
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
