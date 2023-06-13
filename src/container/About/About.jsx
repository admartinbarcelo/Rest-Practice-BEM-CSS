import "./About.css";

import { images } from "../../constants"

const About = () => {
  return (
    <div className='app__about app__bg flex__center section__padding' id="about">
      <div className="app__about-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>
      <div className="app__about-content flex__center">
        <div className="app__about-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod, nisl eget fermentum ultricies, ipsum tortor maximus mauris,
            sit amet rhoncus nisl odio eget nunc.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod, nisl eget fermentum ultricies, ipsum tortor maximus mauris,
            sit amet rhoncus nisl odio eget nunc.
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
