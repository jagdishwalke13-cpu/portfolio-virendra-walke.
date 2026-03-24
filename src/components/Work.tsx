import "./styles/Work.css";

const projects = [
  {
    num: "01",
    name: "Know Your Talent — Full Website",
    category: "WEB DEVELOPMENT",
    tools: "WordPress, Custom CSS, UI/UX Design",
    result: "Complete brand website built from scratch with pages, layout & functionality",
  },
  {
    num: "02",
    name: "NK Decor — Home Decor Website",
    category: "WEB DEVELOPMENT",
    tools: "WordPress, CSS, Navigation & Menu Design",
    result: "Fully developed home decor site with custom menu and product showcase",
  },
  {
    num: "03",
    name: "Luxury Drop — Checkout Revamp",
    category: "WEBSITE EDITING",
    tools: "Payment Gateway Integration, UX Optimization",
    result: "Seamless multi-option payment flow for luxury e-commerce conversions",
  },
  {
    num: "04",
    name: "4-Account Instagram Growth",
    category: "SOCIAL MEDIA MANAGEMENT",
    tools: "Canva, Content Strategy, Scheduling, Analytics",
    result: "Managed KYT, HomeoEd, Healers Clinic & KYT Franchise — grew reach & engagement",
  },
  {
    num: "05",
    name: "Viral Reels + Content Writing",
    category: "VIDEO EDITING & COPYWRITING",
    tools: "CapCut, Hooks, Captions, Transitions, Scriptwriting",
    result: "Top-tier reels crafted for KYT with scroll-stopping content and copywriting",
  },
  {
    num: "06",
    name: "YouTube Long-Form Editing",
    category: "VIDEO PRODUCTION",
    tools: "CapCut, Chapters, Pacing, Thumbnails",
    result: "Professional long-form videos edited for retention, clarity & channel growth",
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
