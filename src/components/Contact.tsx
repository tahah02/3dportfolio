import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:muhammadtahahussain020@gmail.com" data-cursor="disable">
                muhammadtahahussain020@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>Karachi, Pakistan</p>
          </div>
          <div className="contact-box">
            <h4>Social Channels</h4>
            <a
              href="https://github.com/tahah02"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-taha-hussain-6b354a27a"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Engineered by <br /> <span>Muhammad Taha Hussain</span>
              <br />
              <small style={{ fontSize: "14px", color: "#38bdf8" }}>[ MrJupyter ]</small>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
