import { PropsWithChildren, useState, useEffect } from "react";
import "./styles/Landing.css";

const titles = [
  "AI/ML ENGINEER",
  "AGENT ARCHITECT",
  "MULTI-AGENT SPECIALIST"
];

const Landing = ({ children }: PropsWithChildren) => {
  const [index, setIndex] = useState(0);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setFadeState("in");
      }, 400); // 400ms transition
    }, 3000); // 3 seconds per title

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              TAHA
              <br />
              <span>HUSSAIN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>MrJupyter • Portfolio</h3>
            <div className="landing-rotator-wrapper">
              <h2 className={`landing-rotating-title ${fadeState}`}>
                {titles[index]}
              </h2>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
