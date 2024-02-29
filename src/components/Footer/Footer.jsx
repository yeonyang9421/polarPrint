import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <section className="footerSubscription">
        <p className="footerSubscriptionHeading">바닥부분에 넣고 싶은 내용</p>
      </section>
      <section class="socialMedia">
        <div class="socialMediaWrap">
          <div class="footerLogo">
            <Link to="/" className="socialLogo">
              HYERIM'S Portfolio
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="websiteRights">HYERIM © 2023</small>
          <div class="socialIcons">
            <Link
              class="socialIconLink facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="socialIconLink instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="socialIconLink youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="socialIconLink twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="socialIconLink twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
