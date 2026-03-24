import "./styles/WhatIDo.css";

const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "I build clean, fast, and responsive websites and landing pages that convert visitors into customers. From design to deployment, I handle it all.",
    skills: ["HTML", "CSS", "JavaScript", "Landing Pages"],
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description:
      "I help brands grow online through smart content strategies, social media management, lead generation, and targeted campaigns that deliver real results.",
    skills: ["Social Media", "Content Strategy", "Lead Generation", "Campaigns"],
  },
  {
    icon: "🎨",
    title: "Design & Editing",
    description:
      "I create scroll-stopping visuals, reels, and brand creatives using Canva and Photoshop. From branding to video editing — I make brands look amazing.",
    skills: ["Canva", "Photoshop", "Reels Editing", "Branding"],
  },
];

const WhatIDo = () => {
  return (
    <div className="whatIDO section-container">
      <h2 className="whatido-heading">
        What I <span>Do</span>
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-skills">
              {service.skills.map((skill, i) => (
                <span className="skill-pill" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
