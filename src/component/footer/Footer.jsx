import React from "react";
import {Button} from "../button/Button";
import "../footer/Footer.css";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the adventure and to receive our best vacation
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe nay time
        </p>
        <div className="input-area">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2> About us</h2>
            <Link to='/sign-up'> How it Works</Link>
            <Link to='/'> Testimonials</Link>
            <Link to='/'> Careers</Link>
            <Link to='/'> Investors</Link>
            <Link to='/'> Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact us</h2>
            <Link to='/sign-up'> How it Works</Link>
            <Link to='/'> Testimonials</Link>
            <Link to='/'> Careers</Link>
            <Link to='/'> Investors</Link>
            <Link to='/'> Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              DPK<i className="fab fa-typo3"/>
            </Link>
          </div>
          <small className="website-rights"> DPK @ 2020</small>
          <div className="social-icons">
            <Link to="/" className="social-icon-link facebook"
                  target="_blank"
                  aria-label="Facebook">
              <i className="fab fa-facebook"/>
            </Link>
            <Link to="/" className="social-icon-link instagram"
                  target="_blank"
                  aria-label="instagram">
              <i className="fab fa-instagram"/>
            </Link>
            <Link to="/" className="social-icon-link google"
                  target="_blank"
                  aria-label="Google">
              <i className="fab fa-google"/>
            </Link>
            <Link to="/" className="social-icon-link Youtube"
                  target="_blank"
                  aria-label="Youtube">
              <i className="fab fa-youtube"/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
