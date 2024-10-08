import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import UserContext from "../utils/UserContext.js";
import WaveBye from "../assets/Wave-Bye-Sticker.gif";
import Footer from "./Footer.js";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return (
      <div className="about-container" data-testid="about">
        <UserContext.Consumer>
          {(userInfo) => (
            <h2 className="about-heading"> Hello {userInfo.userName} ! 👋</h2>
          )}
        </UserContext.Consumer>
        <p className="about-text">
          This is Food Villa, a food ordering platform designed by Khushi Arora
        </p>
        <p className="about-linkedin">
          Feel free to connect with me on{" "}
          <a href="https://www.linkedin.com/in/khushi-arora-a31b32244/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              data-testid="linkedin-icon"
              className="about-linkedin-icon"
            />
          </a>
        </p>
        <div className="about-wave-bye-container">
          <img src={WaveBye} className="about-wave-bye" alt="wave-bye" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
