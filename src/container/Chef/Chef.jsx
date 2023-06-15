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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor Sit.
            </p>
          </div>
          <p className="p__opensans">
          auctor elit. Aenean eu tincidunt lorem. Vivamus lobortis enim a feugiat convallis. Suspendisse dignissim massa leo, nec tempus tortor scelerisque in. Mauris pulvinar suscipit porta.
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
