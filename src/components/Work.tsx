import { useState, useRef, useEffect } from "react";
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

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef(0);
  const startTranslate = useRef(0);

  const updateCarousel = (index: number) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.children;
    if (cards.length === 0) return;
    
    const card = cards[0] as HTMLElement;
    const cardWidth = card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight);
    setTranslateX(index * -cardWidth);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    updateCarousel(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateCarousel(prevIndex);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragStartPos.current = clientX;
    startTranslate.current = translateX;
    
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'none';
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - dragStartPos.current;
    setTranslateX(startTranslate.current + diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    }

    const movedBy = translateX - startTranslate.current;
    
    if (movedBy < -100 && currentIndex < projects.length - 1) {
      updateCarousel(currentIndex + 1);
    } else if (movedBy > 100 && currentIndex > 0) {
      updateCarousel(currentIndex - 1);
    } else {
      updateCarousel(currentIndex);
    }
  };

  useEffect(() => {
    const handleResize = () => updateCarousel(currentIndex);
    window.addEventListener('resize', handleResize);
    updateCarousel(0); // Initial pos
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <div className="work-section" id="work">
      <div className="glow-bg-work"></div>
      <div className="work-header section-container">
        <h2>
          My <span>Work</span>
        </h2>
      </div>

      <div className="carousel-container-work">
        <div 
          className="carousel-wrapper-work" 
          ref={carouselRef}
          style={{ transform: `translateX(${translateX}px)` }}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onMouseMove={handleDragMove}
          onTouchMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchEnd={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          {projects.map((project, index) => (
            <div 
              className={`carousel-card-work ${index === currentIndex ? 'active' : ''}`} 
              key={index}
            >
              <div className="card-inner-work">
                <div className="card-glow-border-work"></div>
                <div className="card-number-work">{project.num}</div>
                <div className="card-content-work">
                  <div className="category-tag-work">{project.category}</div>
                  <h3 className="card-title-work">{project.name}</h3>
                  <div className="section-work">
                    <h4 className="section-label-work">Tools & Tech</h4>
                    <p className="section-text-work">{project.tools}</p>
                  </div>
                  <div className="section-work">
                    <h4 className="section-label-work">Result</h4>
                    <p className="section-text-work">{project.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="nav-controls-work">
          <button className="nav-btn-work prev" onClick={prevSlide}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="nav-btn-work next" onClick={nextSlide}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <div className="dots-container-work">
          {projects.map((_, index) => (
            <div 
              key={index} 
              className={`dot-work ${index === currentIndex ? 'active' : ''}`}
              onClick={() => updateCarousel(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
