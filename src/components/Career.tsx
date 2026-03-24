import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Intern</h4>
                <h5>Growth Acid</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Learned content creation, campaign basics, and audience engagement
              strategies during an intensive internship program.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Communication Trainee</h4>
                <h5>CPBFI</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed communication, presentation, and client interaction
              skills through structured professional training.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Manager</h4>
                <h5>Know Your Talent | HomeoEd | Healers Homeopathy</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Managed brand accounts, created reels, and improved visibility
              through strategic content planning and audience growth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>GrowthGrid Digital</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading a digital agency specializing in website development,
              branding, and social media marketing for growing businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
