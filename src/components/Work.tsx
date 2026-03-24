import "./styles/Work.css";

const projects = [
  {
    num: "01",
    name: "Healers Homeopathy Clinic",
    category: "Landing Page Design",
    tools: "HTML, CSS, Conversion Optimization",
    result: "Increased patient inquiries",
  },
  {
    num: "02",
    name: "HomeoEd Instagram Growth",
    category: "Social Media Marketing",
    tools: "Content Strategy, Reels, Instagram",
    result: "Higher audience growth and engagement",
  },
  {
    num: "03",
    name: "Know Your Talent Social Media",
    category: "Social Media Management",
    tools: "Canva, Content Creation, Strategy",
    result: "Better audience connection and visibility",
  },
  {
    num: "04",
    name: "Client Portfolio Website",
    category: "Web Development",
    tools: "HTML, CSS, JavaScript, UI/UX",
    result: "Professional online presence for client",
  },
  {
    num: "05",
    name: "Viral Reels Editing",
    category: "Video Editing",
    tools: "CapCut, Hooks, Captions, Transitions",
    result: "Increased reach and watch time",
  },
  {
    num: "06",
    name: "4-Hour Landing Page Sprint",
    category: "Rapid Development",
    tools: "HTML, CSS, Fast Delivery",
    result: "Fast business launch, satisfied client",
  },
];

// Duplicate for infinite loop
const allProjects = [...projects, ...projects];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-header section-container">
        <h2>
          My <span>Work</span>
        </h2>
      </div>
      <div className="projects-wrapper">
        <div className="projects-track">
          {allProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-num">{project.num}</div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-category">{project.category}</p>
              <div className="project-divider"></div>
              <div className="project-detail">
                <h4>Tools & Tech</h4>
                <p>{project.tools}</p>
              </div>
              <div className="project-detail">
                <h4>Result</h4>
                <p>{project.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
