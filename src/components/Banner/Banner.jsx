import "./Banner.css";
import reactLogo from "../../img/react.svg";
const Banner = () => {
  return (
    <>
      <div aria-label="Website banner" className="main">
        {/* <img className="banner-img" src={myGif} alt="" /> */}
        <img
          src={reactLogo}
          className="banner--logo-icon"
          alt="React logo"
          width="24px"
          height="24px"
        />
        <h3 className="sect1">Sign up to Reactors Newsletters</h3>

        <p className="sect2">
          Get a comprehensive summary of the most important news, in the world of
          React - Delivered to your inbox.
        </p>
        <button aria-label="Sign up button" className="signUp">
          Sign Up Now!
        </button>
      </div>
    </>
  );
};

export default Banner;
