import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="about-quote">
          "Build it smart, but build it unbreakable." That’s the mindset I bring to my work.
        </p>
        <p className="about-para">
          Hey there! I’m Muhammad Taha Hussain, an AI/ML Engineer based in Karachi, known in the dev community as MrJupyter. My engineering journey took a solid shape and today, I focus on architecting the future of automation.
        </p>
        <p className="about-para">
          I specialize in enterprise generative AI and autonomous multi-agent systems. But what makes my approach different is my obsession with stability. I build resilient backend systems that can survive network failures, maintain state across complex workflows, and sync seamlessly with heavy enterprise tech without losing critical data.
        </p>
        <p className="about-para about-highlight">
          I’m always open to discussing multi-agent workflows, backend scaling, or how AI can automate your most complex enterprise bottlenecks.
        </p>
      </div>
    </div>
  );
};

export default About;
