import "./About.css";

import { images } from "../../constants"

const About = () => {
  return (
    <div className='app__about app__bg flex__center section__padding' id="about">
      <div className="app__about-overlay flex__center">
        <img src={images.B} alt="g letter" />
      </div>
      <div className="app__about-content flex__center">
        <div className="app__about-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
          Brekkie's O'Clock is more than a breakfast restaurant; it is a global culinary experience, designed to delight your palate with the world's most exquisite breakfasts. We are passionate about providing unique dishes and unrivaled service, creating an unforgettable morning adventure.
          </p>
          <button type="button" className="custom__button">
            Read More
          </button>
        </div>
        <div className="app__about-content_batidor flex__center">
          <img src={images.batidor} alt="about_batidor" />
        </div>
        <div className="app__about-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
          Brekkie's O'Clock was born out of a shared passion for creating unforgettable culinary experiences and a belief that breakfast should be much more than just a meal. inspired founders envisioned a place where the first meal of the day was celebrated. A concept where breakfasts from different corners of the world could be savored under one roof.
          </p>
          <button type="button" className="custom__button">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
