import "./Banner.css";
import myGif from "./ReactJS.gif";
const Banner = () => {
  return (
    <>


     


      <div aria-label="Website banner" className="main">
        <img className="banner-img" src={myGif} alt="" />
        <h3 className="sect1">Sign up free to start creating</h3>

        <p className="sect2">No credit card required</p>
        <button aria-label="Sign up button" className="signUp">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Banner;
