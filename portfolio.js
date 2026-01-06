// Browser-ready Portfolio Component
// No imports/exports - designed for direct browser use

const Portfolio = () => {
  // Get icons from lucide-react global
  const { ChevronDown, X, ArrowRight } = window.lucide || {};
  
  const [currentPage, setCurrentPage] = React.useState('home');
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Project data structure (you'll customize this)
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      shortDescription: "An innovative solution combining machine learning and IoT sensors to optimize energy consumption in smart buildings.",
      fullDescription: "This project implements a comprehensive energy management system using real-time data analysis and predictive algorithms. The system reduced energy consumption by 30% across multiple test sites.",
      technologies: ["Python", "TensorFlow", "IoT", "AWS"],
      outcomes: ["30% energy reduction", "Real-time monitoring", "Predictive maintenance"]
    },
    {
      id: 2,
      title: "Project Beta",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      shortDescription: "Autonomous navigation system for warehouse robots using computer vision and path planning algorithms.",
      fullDescription: "Developed an advanced navigation system that enables robots to autonomously navigate complex warehouse environments. The system uses SLAM algorithms and real-time obstacle detection.",
      technologies: ["ROS", "C++", "Computer Vision", "LiDAR"],
      outcomes: ["99.5% navigation accuracy", "40% faster operations", "Zero collision incidents"]
    },
    {
      id: 3,
      title: "Project Gamma",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      shortDescription: "Blockchain-based supply chain tracking system ensuring transparency and authenticity in pharmaceutical distribution.",
      fullDescription: "Created a decentralized tracking system that provides end-to-end visibility in pharmaceutical supply chains. The platform uses smart contracts to verify authenticity and prevent counterfeiting.",
      technologies: ["Ethereum", "Solidity", "Node.js", "React"],
      outcomes: ["100% traceability", "Counterfeit prevention", "20+ partners onboarded"]
    }
  ];

  // Photography data (placeholder images)
  const photos = [
    { id: 1, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop", description: "Mountain landscape at golden hour" },
    { id: 2, url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=800&fit=crop", description: "Forest pathway in morning mist" },
    { id: 3, url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop", description: "Wildflower meadow in spring" },
    { id: 4, url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop", description: "Autumn colors reflected in lake" },
    { id: 5, url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop", description: "Sunset over the ocean" },
    { id: 6, url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=800&fit=crop", description: "Dense forest canopy" },
    { id: 7, url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop", description: "Coastal cliffs at dusk" },
    { id: 8, url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop", description: "Desert landscape under stars" },
    { id: 9, url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=600&fit=crop", description: "Misty mountains at dawn" },
    { id: 10, url: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=500&fit=crop", description: "Rolling hills in summer" }
  ];

  // HomePage Component
  const HomePage = () => {
    const bioRef = React.useRef(null);
    const [resumeLanguage, setResumeLanguage] = React.useState('english');

    const scrollToBio = () => {
      bioRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-name">Your Name</h1>
            <p className="hero-subtitle">Engineer · Creator · Innovator</p>
          </div>
          <button className="scroll-indicator" onClick={scrollToBio}>
            <ChevronDown size={32} />
          </button>
        </section>

        {/* Bio Section */}
        <section className="bio-section" ref={bioRef}>
          <div className="bio-container">
            <div className="bio-content-wrapper">
              <div className="bio-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" 
                  alt="Your Name - Portfolio Photo" 
                  className="bio-photo"
                />
              </div>
              <div className="bio-content">
                <h2 className="section-title">About Me</h2>
                <p className="bio-text">
                  I'm a passionate engineer dedicated to building innovative solutions that bridge the gap between 
                  cutting-edge technology and real-world applications. With expertise spanning machine learning, 
                  robotics, and distributed systems, I thrive on tackling complex challenges that push the boundaries 
                  of what's possible.
                </p>
                <p className="bio-text">
                  Beyond engineering, I explore the world through my camera lens and pen, capturing moments and ideas 
                  that inspire my work. Each project is an opportunity to learn, create, and make a meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="featured-projects-section">
          <div className="featured-container">
            <h2 className="section-title-center">Featured Projects</h2>
            <div className="featured-grid">
              {projects.slice(0, 3).map((project, index) => (
                <div key={project.id} className="featured-card">
                  <div className="featured-image-wrapper">
                    <img src={project.thumbnail} alt={project.title} className="featured-image" />
                  </div>
                  <div className="featured-content">
                    <h3 className="featured-title">{project.title}</h3>
                    <p className="featured-description">{project.shortDescription}</p>
                    <button 
                      className="featured-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Project <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="view-all-btn" onClick={() => setCurrentPage('engineering')}>
              View All Projects <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* Resume Section */}
        <section className="resume-section">
          <div className="resume-container">
            <div className="resume-header">
              <h2 className="section-title-center">Resume</h2>
              <div className="language-toggle">
                <button 
                  className={`toggle-btn ${resumeLanguage === 'english' ? 'active' : ''}`}
                  onClick={() => setResumeLanguage('english')}
                >
                  English
                </button>
                <button 
                  className={`toggle-btn ${resumeLanguage === 'german' ? 'active' : ''}`}
                  onClick={() => setResumeLanguage('german')}
                >
                  Deutsch
                </button>
              </div>
            </div>
            
            <div className="resume-content">
              {resumeLanguage === 'english' ? (
                <div className="resume-display">
                  {/* Header */}
                  <div className="resume-header-section">
                    <h1 className="resume-name">Your Name</h1>
                    <p className="resume-contact-line">
                      your.email@example.com • +1 (555) 123-4567 • Atlanta, GA
                    </p>
                    <p className="resume-links">
                      linkedin.com/in/yourprofile • github.com/yourprofile
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="resume-section-block">
                    <h2 className="resume-section-title">Professional Summary</h2>
                    <p className="resume-text">
                      Innovative engineer with expertise in machine learning, robotics, and distributed systems. 
                      Passionate about developing cutting-edge solutions that bridge technology and real-world applications. 
                      Proven track record of delivering high-impact projects that optimize performance and drive results.
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="resume-section-block">
                    <h2 className="resume-section-title">Experience</h2>
                    
                    <div className="resume-item">
                      <div className="resume-item-header">
                        <h3 className="resume-item-title">Senior Engineer</h3>
                        <span className="resume-date">2022 - Present</span>
                      </div>
                      <p className="resume-company">Tech Company Inc. • Atlanta, GA</p>
                      <ul className="resume-list">
                        <li>Led development of ML-powered energy optimization system, reducing consumption by 30%</li>
                        <li>Architected distributed systems handling 1M+ daily transactions</li>
                        <li>Mentored team of 5 junior engineers in best practices and code review</li>
                      </ul>
                    </div>

                    <div className="resume-item">
                      <div className="resume-item-header">
                        <h3 className="resume-item-title">Engineering Specialist</h3>
                        <span className="resume-date">2019 - 2022</span>
                      </div>
                      <p className="resume-company">Innovation Labs • Remote</p>
                      <ul className="resume-list">
                        <li>Developed autonomous navigation system achieving 99.5% accuracy</li>
                        <li>Implemented computer vision algorithms for real-time object detection</li>
                        <li>Collaborated with cross-functional teams to deliver projects on time</li>
                      </ul>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="resume-section-block">
                    <h2 className="resume-section-title">Education</h2>
                    
                    <div className="resume-item">
                      <div className="resume-item-header">
                        <h3 className="resume-item-title">Master of Science in Engineering</h3>
                        <span className="resume-date">2017 - 2019</span>
                      </div>
                      <p className="resume-company">University Name • Atlanta, GA</p>
                      <p className="resume-text">Specialization in Machine Learning and Robotics • GPA: 3.9/4.0</p>
                    </div>

                    <div className="resume-item">
                      <div className="resume-item-header">
                        <h3 className="resume-item-title">Bachelor of Science in Engineering</h3>
                        <span className="resume-date">2013 - 2017</span>
                      </div>
                      <p className="resume-company">University Name • Atlanta, GA</p>
                      <p className="resume-text">Magna Cum Laude • Dean's List all semesters</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="resume-section-block">
                    <h2 className="resume-section-title">Technical Skills</h2>
                    <div className="skills-grid">
                      <div className="skill-category">
                        <h4 className="skill-category-title">Languages</h4>
                        <p className="resume-text">Python, C++, JavaScript, Java, SQL</p>
                      </div>
                      <div className="skill-category">
                        <h4 className="skill-category-title">Frameworks</h4>
                        <p className="resume-text">TensorFlow, PyTorch, React, ROS, Node.js</p>
                      </div>
                      <div className="skill-category">
                        <h4 className="skill-category-title">Tools</h4>
                        <p className="resume-text">AWS, Docker, Git, Kubernetes, Jenkins</p>
                      </div>
                      <div className="skill-category">
                        <h4 className="skill-category-title">Specializations</h4>
                        <p className="resume-text">Machine Learning, Computer Vision, IoT, Distributed Systems</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="resume-display">
                  {/* German Resume - Header */}
                  <div className="resume-header-section">
                    <h1 className="resume-name">Ihr Name</h1>
                    <p className="resume-contact-line">
                      ihre.email@beispiel.de • +49 (0) 123 456789 • Berlin, Deutschland
                    </p>
                    <p className="resume-links">
                      linkedin.com/in/ihrprofil • github.com/ihrprofil
                    </p>
                  </div>

                  {/* Zusammenfassung */}
                  <div className="resume-section-block">
                    <h2 className="resume-section-title">Berufliche Zusammenfassung</h2>
                    <p className="resume-text">
                      Innovativer Ingenieur mit Expertise in maschinellem Lernen, Robotik und verteilten Systemen. 
                      Leidenschaft für die Entwicklung modernster Lösungen, die Technologie und reale Anwendungen verbinden. 
                      Nachgewiesene Erfolgsbilanz bei der Durchführung wirkungsvoller Projekte.
                    </p>
                  </div>

                  {/* Berufserfahrung */}
                  <div className="resume-section-block">
                    <h2 className="resume-section-title">Berufserfahrung</h2>
                    
                    <div className="resume-item">
                      <div className="resume-item-header">
                        <h3 className="resume-item-title">Senior Ingenieur</h3>
                        <span className="resume-date">2022 - Heute</span>
                      </div>
                      <p className="resume-company">Tech Company GmbH • Berlin, Deutschland</p>
                      <ul className="resume-list">
                        <li>Leitung der Entwicklung eines ML-basierten Energieoptimierungssystems, Reduzierung des Verbrauchs um 30%</li>
                        <li>Architektur verteilter Systeme mit über 1 Million täglichen Transaktionen</li>
                        <li>Mentoring eines Teams von 5 Junior-Ingenieuren in Best Practices und Code-Review</li>
                      </ul>
                    </div>

                    <div className="resume-item">
                      <div className="resume-item-header">
                        <h3 className="resume-item-title">Ingenieur Spezialist</h3>
                        <span className="resume-date">2019 - 2022</span>
                      </div>
                      <p className="resume-company">Innovation Labs • Remote</p>
                      <ul className="resume-list">
                        <li>Entwicklung eines autonomen Navigationssystems mit 99,5% Genauigkeit</li>
                        <li>Implementierung von Computer-Vision-Algorithmen für Echtzeit-Objekterkennung</li>
                        <li>Zusammenarbeit mit funktionsübergreifenden Teams zur termingerechten Projektabwicklung</li>
                      </ul>
                    </div>
                  </div>

                  {/* Ausbildung */}
                  <div className="resume-section-block">
                    <h2 className="resume-section-title">Ausbildung</h2>
                    
                    <div className="resume-item">
                      <div className="resume-item-header">
                        <h3 className="resume-item-title">Master of Science in Ingenieurwissenschaften</h3>
                        <span className="resume-date">2017 - 2019</span>
                      </div>
                      <p className="resume-company">Universität Name • Berlin, Deutschland</p>
                      <p className="resume-text">Spezialisierung in maschinellem Lernen und Robotik • Note: 1,2</p>
                    </div>

                    <div className="resume-item">
                      <div className="resume-item-header">
                        <h3 className="resume-item-title">Bachelor of Science in Ingenieurwissenschaften</h3>
                        <span className="resume-date">2013 - 2017</span>
                      </div>
                      <p className="resume-company">Universität Name • Berlin, Deutschland</p>
                      <p className="resume-text">Mit Auszeichnung • Alle Semester auf der Dean's List</p>
                    </div>
                  </div>

                  {/* Fähigkeiten */}
                  <div className="resume-section-block">
                    <h2 className="resume-section-title">Technische Fähigkeiten</h2>
                    <div className="skills-grid">
                      <div className="skill-category">
                        <h4 className="skill-category-title">Programmiersprachen</h4>
                        <p className="resume-text">Python, C++, JavaScript, Java, SQL</p>
                      </div>
                      <div className="skill-category">
                        <h4 className="skill-category-title">Frameworks</h4>
                        <p className="resume-text">TensorFlow, PyTorch, React, ROS, Node.js</p>
                      </div>
                      <div className="skill-category">
                        <h4 className="skill-category-title">Tools</h4>
                        <p className="resume-text">AWS, Docker, Git, Kubernetes, Jenkins</p>
                      </div>
                      <div className="skill-category">
                        <h4 className="skill-category-title">Spezialisierungen</h4>
                        <p className="resume-text">Maschinelles Lernen, Computer Vision, IoT, Verteilte Systeme</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Portfolio Navigation */}
        <section className="portfolio-nav-section">
          <div className="portfolio-nav-container">
            <h2 className="section-title-center">Explore My Work</h2>
            <div className="portfolio-nav-grid">
              <button className="nav-card engineering" onClick={() => setCurrentPage('engineering')}>
                <div className="nav-card-content">
                  <h3>Engineering</h3>
                  <p>Innovative projects in ML, robotics, and software development</p>
                  <ArrowRight className="nav-arrow" size={24} />
                </div>
              </button>
              <button className="nav-card photography" onClick={() => setCurrentPage('photography')}>
                <div className="nav-card-content">
                  <h3>Photography</h3>
                  <p>Visual stories capturing the beauty of our world</p>
                  <ArrowRight className="nav-arrow" size={24} />
                </div>
              </button>
              <button className="nav-card writing" onClick={() => setCurrentPage('writing')}>
                <div className="nav-card-content">
                  <h3>Writing</h3>
                  <p>Thoughts, essays, and technical documentation</p>
                  <ArrowRight className="nav-arrow" size={24} />
                </div>
              </button>
              <button className="nav-card reading" onClick={() => setCurrentPage('reading')}>
                <div className="nav-card-content">
                  <h3>Reading</h3>
                  <p>Books and articles that shape my perspective</p>
                  <ArrowRight className="nav-arrow" size={24} />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-container">
            <h2 className="section-title-center">Get In Touch</h2>
            <p className="contact-subtitle">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-info-grid">
              <div className="contact-item">
                <h3 className="contact-item-title">Email</h3>
                <a href="mailto:your.email@example.com" className="contact-link">
                  your.email@example.com
                </a>
              </div>

              <div className="contact-item">
                <h3 className="contact-item-title">Phone</h3>
                <a href="tel:+15551234567" className="contact-link">
                  +1 (555) 123-4567
                </a>
              </div>

              <div className="contact-item">
                <h3 className="contact-item-title">Location</h3>
                <p className="contact-text">Atlanta, Georgia, USA</p>
              </div>

              <div className="contact-item">
                <h3 className="contact-item-title">Connect</h3>
                <div className="social-links">
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                    LinkedIn
                  </a>
                  <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                    GitHub
                  </a>
                  <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  // Engineering Page Component
  const EngineeringPage = () => {
    return (
      <div className="engineering-page">
        <div className="page-header">
          <h1 className="page-title">Engineering Projects</h1>
          <p className="page-subtitle">Building solutions that matter</p>
        </div>
        
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={project.id} className="project-section" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="project-content">
                <div className="project-image-wrapper">
                  <img src={project.thumbnail} alt={project.title} className="project-image" />
                </div>
                <div className="project-info">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.shortDescription}</p>
                  <button 
                    className="learn-more-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    Learn More <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Project Detail Modal
  const ProjectDetail = ({ project, onClose }) => {
    React.useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, []);

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
          <div className="modal-body">
            <img src={project.thumbnail} alt={project.title} className="modal-image" />
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-description">{project.fullDescription}</p>
            
            <div className="modal-section">
              <h3 className="modal-section-title">Technologies</h3>
              <div className="tech-tags">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <h3 className="modal-section-title">Key Outcomes</h3>
              <ul className="outcomes-list">
                {project.outcomes.map((outcome, i) => (
                  <li key={i}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Photography Page Component
  const PhotographyPage = () => {
    return (
      <div className="photography-page">
        <div className="page-header">
          <h1 className="page-title">Photography</h1>
          <p className="page-subtitle">Moments captured, stories told</p>
        </div>
        
        <div className="photo-grid">
          {photos.map(photo => (
            <div 
              key={photo.id} 
              className="photo-item"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.url} alt={photo.description} />
              <div className="photo-overlay">
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Photo Detail Modal
  const PhotoDetail = ({ photo, onClose }) => {
    React.useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, []);

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content photo-modal" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
          <img src={photo.url} alt={photo.description} className="photo-modal-image" />
          <p className="photo-modal-description">{photo.description}</p>
        </div>
      </div>
    );
  };

  // Writing Page (Placeholder)
  const WritingPage = () => {
    return (
      <div className="placeholder-page">
        <div className="page-header">
          <h1 className="page-title">Writing</h1>
          <p className="page-subtitle">Coming soon</p>
        </div>
        <div className="placeholder-content">
          <p>This section is under construction. Check back soon for essays, articles, and technical writing.</p>
        </div>
      </div>
    );
  };

  // Reading Page (Placeholder)
  const ReadingPage = () => {
    return (
      <div className="placeholder-page">
        <div className="page-header">
          <h1 className="page-title">Reading</h1>
          <p className="page-subtitle">Coming soon</p>
        </div>
        <div className="placeholder-content">
          <p>This section is under construction. Check back soon for book recommendations and reading lists.</p>
        </div>
      </div>
    );
  };

  // Navigation Bar
  const NavigationBar = () => {
    const scrollToContact = () => {
      setCurrentPage('home');
      setTimeout(() => {
        const contactSection = document.querySelector('.contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };

    return (
      <nav className="navbar">
        <button className="nav-logo" onClick={() => setCurrentPage('home')}>
          YN
        </button>
        <div className="nav-links">
          <button onClick={() => setCurrentPage('home')}>Home</button>
          <button onClick={() => {
            setCurrentPage('home');
            setTimeout(() => {
              const resumeSection = document.querySelector('.resume-section');
              if (resumeSection) {
                resumeSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}>Resume</button>
          <button onClick={() => setCurrentPage('engineering')}>Engineering</button>
          <button onClick={() => setCurrentPage('photography')}>Photography</button>
          <button onClick={() => setCurrentPage('writing')}>Writing</button>
          <button onClick={() => setCurrentPage('reading')}>Reading</button>
          <button className="contact-nav-btn" onClick={scrollToContact}>Contact</button>
        </div>
      </nav>
    );
  };

  // Footer Component
  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <p className="footer-legal">
              All content on this website, including but not limited to text, graphics, logos, images, 
              and software, is the property of Your Name or its content suppliers and is protected by 
              international copyright laws. Unauthorized reproduction or distribution of any content 
              from this site is strictly prohibited and may result in civil and criminal penalties.
            </p>
            <div className="footer-links">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-link">
                LinkedIn
              </a>
              <span className="footer-separator">•</span>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-link">
                GitHub
              </a>
              <span className="footer-separator">•</span>
              <a href="mailto:your.email@example.com" className="footer-link">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div className="portfolio-app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          background: #ffffff;
          color: #000000;
          overflow-x: hidden;
        }

        .portfolio-app {
          min-height: 100vh;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 3rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #000000;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.3s;
        }

        .nav-logo:hover {
          color: #9BCBEB;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links button {
          background: none;
          border: none;
          color: rgba(0, 0, 0, 0.6);
          font-size: 0.95rem;
          cursor: pointer;
          transition: color 0.3s;
          padding: 0.5rem 0;
          position: relative;
        }

        .nav-links button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #9BCBEB;
          transition: width 0.3s;
        }

        .nav-links button:hover {
          color: #000000;
        }

        .nav-links button:hover::after {
          width: 100%;
        }

        /* Home Page */
        .home-page {
          padding-top: 0;
        }

        .hero {
          height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #9BCBEB 100%);
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.3) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          animation: fadeInUp 1.2s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-name {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #000000, #2c2c2c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.5rem);
          color: rgba(0, 0, 0, 0.6);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          background: none;
          border: 2px solid rgba(0, 0, 0, 0.3);
          color: #000000;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          animation: bounce 2s infinite;
          z-index: 2;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }

        .scroll-indicator:hover {
          background: rgba(155, 203, 235, 0.2);
          border-color: #9BCBEB;
        }

        /* Bio Section */
        .bio-section {
          padding: 8rem 2rem;
          background: #ffffff;
        }

        .bio-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .bio-content-wrapper {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 4rem;
          align-items: center;
        }

        .bio-image-container {
          position: relative;
        }

        .bio-photo {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 12px;
          border: 3px solid #9BCBEB;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }

        .bio-photo:hover {
          transform: scale(1.02);
        }

        .bio-content {
          flex: 1;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 2rem;
          color: #000000;
        }

        .bio-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.7);
          margin-bottom: 1.5rem;
        }

        /* Portfolio Navigation Section */
        .portfolio-nav-section {
          padding: 6rem 2rem;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
        }

        .portfolio-nav-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title-center {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 4rem;
          color: #000000;
        }

        .portfolio-nav-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .nav-card {
          position: relative;
          padding: 3rem 2rem;
          background: #ffffff;
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .nav-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(155, 203, 235, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .nav-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 0, 0, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .nav-card:hover::before {
          opacity: 1;
        }

        .nav-card.engineering:hover {
          border-color: #9BCBEB;
        }

        .nav-card.photography:hover {
          border-color: #6BA3C3;
        }

        .nav-card.writing:hover {
          border-color: #4A8BAA;
        }

        .nav-card.reading:hover {
          border-color: #9BCBEB;
        }

        .nav-card-content {
          position: relative;
          z-index: 1;
        }

        .nav-card h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #000000;
        }

        .nav-card p {
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .nav-arrow {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s;
          color: #9BCBEB;
        }

        .nav-card:hover .nav-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Engineering Page */
        .engineering-page {
          padding-top: 100px;
          padding-bottom: 4rem;
          min-height: 100vh;
          background: #ffffff;
        }

        .page-header {
          text-align: center;
          padding: 4rem 2rem;
          background: linear-gradient(180deg, rgba(155, 203, 235, 0.15) 0%, transparent 100%);
        }

        .page-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #000000, #2c2c2c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: rgba(0, 0, 0, 0.6);
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .project-section {
          margin-bottom: 8rem;
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(30px);
          }
        }

        .project-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .project-section:nth-child(even) .project-content {
          direction: rtl;
        }

        .project-section:nth-child(even) .project-info {
          direction: ltr;
        }

        .project-image-wrapper {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 4/3;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s;
        }

        .project-image-wrapper:hover .project-image {
          transform: scale(1.05);
        }

        .project-info {
          padding: 2rem 0;
        }

        .project-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #000000;
        }

        .project-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(0, 0, 0, 0.7);
          margin-bottom: 2rem;
        }

        .learn-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 1.8rem;
          background: #000000;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .learn-more-btn:hover {
          transform: translateX(5px);
          background: #2c2c2c;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 2rem;
          animation: fadeIn 0.3s;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: #ffffff;
          border-radius: 16px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.3s;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(0, 0, 0, 0.1);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000000;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 10;
        }

        .modal-close:hover {
          background: rgba(0, 0, 0, 0.2);
          transform: rotate(90deg);
        }

        .modal-body {
          padding: 2rem;
        }

        .modal-image {
          width: 100%;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .modal-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #000000;
        }

        .modal-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.7);
          margin-bottom: 2rem;
        }

        .modal-section {
          margin-bottom: 2rem;
        }

        .modal-section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #000000;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .tech-tag {
          padding: 0.5rem 1rem;
          background: rgba(155, 203, 235, 0.2);
          border: 1px solid rgba(155, 203, 235, 0.5);
          border-radius: 20px;
          color: #2c2c2c;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .outcomes-list {
          list-style: none;
          padding: 0;
        }

        .outcomes-list li {
          padding: 0.8rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: rgba(0, 0, 0, 0.7);
          line-height: 1.6;
        }

        .outcomes-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #9BCBEB;
          font-weight: bold;
        }

        /* Photography Page */
        .photography-page {
          padding-top: 100px;
          min-height: 100vh;
          background: #ffffff;
        }

        .photo-grid {
          padding: 2rem;
          columns: 4;
          column-gap: 1rem;
          max-width: 1600px;
          margin: 0 auto;
        }

        .photo-item {
          break-inside: avoid;
          margin-bottom: 1rem;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .photo-item img {
          width: 100%;
          display: block;
          transition: transform 0.5s;
        }

        .photo-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          padding: 2rem 1rem 1rem;
          transform: translateY(100%);
          transition: transform 0.3s;
        }

        .photo-overlay p {
          color: white;
          font-size: 0.9rem;
          margin: 0;
        }

        .photo-item:hover img {
          transform: scale(1.05);
        }

        .photo-item:hover .photo-overlay {
          transform: translateY(0);
        }

        .photo-modal {
          max-width: 1000px;
          background: #ffffff;
        }

        .photo-modal-image {
          width: 100%;
          display: block;
        }

        .photo-modal-description {
          padding: 2rem;
          font-size: 1.1rem;
          color: rgba(0, 0, 0, 0.7);
          text-align: center;
        }

        /* Placeholder Pages */
        .placeholder-page {
          padding-top: 100px;
          min-height: 100vh;
          background: #ffffff;
        }

        .placeholder-content {
          max-width: 800px;
          margin: 4rem auto;
          padding: 0 2rem;
          text-align: center;
        }

        .placeholder-content p {
          font-size: 1.2rem;
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.8;
        }

        /* Featured Projects Section */
        .featured-projects-section {
          padding: 6rem 2rem;
          background: #f8f9fa;
        }

        .featured-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        .featured-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.4s;
        }

        .featured-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          border-color: #9BCBEB;
        }

        .featured-image-wrapper {
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .featured-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .featured-card:hover .featured-image {
          transform: scale(1.08);
        }

        .featured-content {
          padding: 1.8rem;
        }

        .featured-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          color: #000000;
        }

        .featured-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(0, 0, 0, 0.65);
          margin-bottom: 1.5rem;
        }

        .featured-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.3rem;
          background: transparent;
          border: 2px solid #000000;
          border-radius: 6px;
          color: #000000;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .featured-btn:hover {
          background: #000000;
          color: #ffffff;
          transform: translateX(3px);
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 1rem 2.2rem;
          background: #000000;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          max-width: fit-content;
        }

        .view-all-btn:hover {
          background: #2c2c2c;
          transform: translateX(5px);
        }

        /* Resume Section */
        .resume-section {
          padding: 6rem 2rem;
          background: #ffffff;
        }

        .resume-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .resume-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .language-toggle {
          display: flex;
          gap: 0;
          background: #f8f9fa;
          border-radius: 8px;
          padding: 0.3rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .toggle-btn {
          padding: 0.7rem 1.8rem;
          background: transparent;
          border: none;
          color: rgba(0, 0, 0, 0.6);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          border-radius: 6px;
        }

        .toggle-btn.active {
          background: #000000;
          color: #ffffff;
        }

        .toggle-btn:not(.active):hover {
          color: #000000;
        }

        .resume-content {
          background: #ffffff;
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          padding: 3rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .resume-display {
          color: #000000;
        }

        .resume-header-section {
          text-align: center;
          padding-bottom: 2rem;
          border-bottom: 2px solid #9BCBEB;
          margin-bottom: 2rem;
        }

        .resume-name {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.8rem;
          color: #000000;
        }

        .resume-contact-line {
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.7);
          margin-bottom: 0.5rem;
        }

        .resume-links {
          font-size: 0.95rem;
          color: #9BCBEB;
        }

        .resume-section-block {
          margin-bottom: 2.5rem;
        }

        .resume-section-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          color: #000000;
          border-bottom: 2px solid #9BCBEB;
          padding-bottom: 0.5rem;
        }

        .resume-text {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(0, 0, 0, 0.75);
          margin-bottom: 0.8rem;
        }

        .resume-item {
          margin-bottom: 2rem;
        }

        .resume-item-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.4rem;
          flex-wrap: wrap;
        }

        .resume-item-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #000000;
        }

        .resume-date {
          font-size: 0.95rem;
          color: rgba(0, 0, 0, 0.6);
          font-weight: 500;
        }

        .resume-company {
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.7);
          margin-bottom: 0.8rem;
          font-style: italic;
        }

        .resume-list {
          list-style: none;
          padding-left: 0;
        }

        .resume-list li {
          padding: 0.4rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: rgba(0, 0, 0, 0.75);
          line-height: 1.6;
        }

        .resume-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #9BCBEB;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .skill-category {
          background: #f8f9fa;
          padding: 1.2rem;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .skill-category-title {
          font-size: 1rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 0.6rem;
        }

        /* Contact Section */
        .contact-section {
          padding: 6rem 2rem;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
        }

        .contact-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-subtitle {
          text-align: center;
          font-size: 1.15rem;
          color: rgba(0, 0, 0, 0.6);
          margin-bottom: 4rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .contact-item {
          text-align: center;
          padding: 2rem 1.5rem;
          background: #ffffff;
          border-radius: 12px;
          border: 2px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .contact-item:hover {
          border-color: #9BCBEB;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .contact-item-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 1rem;
        }

        .contact-link {
          color: #9BCBEB;
          text-decoration: none;
          font-size: 1.05rem;
          transition: color 0.3s;
          display: block;
        }

        .contact-link:hover {
          color: #6BA3C3;
          text-decoration: underline;
        }

        .contact-text {
          color: rgba(0, 0, 0, 0.7);
          font-size: 1.05rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .social-link {
          color: #000000;
          text-decoration: none;
          font-size: 0.95rem;
          padding: 0.6rem 1.2rem;
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-radius: 6px;
          transition: all 0.3s;
          font-weight: 500;
        }

        .social-link:hover {
          background: #000000;
          color: #ffffff;
          border-color: #000000;
        }

        /* Contact Button in Navigation */
        .contact-nav-btn {
          background: #000000 !important;
          color: #ffffff !important;
          padding: 0.6rem 1.5rem !important;
          border-radius: 6px !important;
          margin-left: 1rem;
          transition: all 0.3s !important;
        }

        .contact-nav-btn::after {
          display: none !important;
        }

        .contact-nav-btn:hover {
          background: #9BCBEB !important;
          color: #000000 !important;
          transform: translateY(-2px);
        }

        /* Footer */
        .footer {
          background: #000000;
          color: #ffffff;
          padding: 3rem 2rem 2rem;
          border-top: 3px solid #9BCBEB;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-content {
          text-align: center;
        }

        .footer-copyright {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
          color: #ffffff;
        }

        .footer-legal {
          font-size: 0.85rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-link {
          color: #9BCBEB;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-separator {
          color: rgba(255, 255, 255, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .navbar {
            padding: 1rem 1.5rem;
          }

          .nav-links {
            gap: 1rem;
          }

          .nav-links button {
            font-size: 0.85rem;
          }

          .contact-nav-btn {
            margin-left: 0.5rem !important;
            padding: 0.5rem 1rem !important;
          }

          .project-content {
            grid-template-columns: 1fr;
          }

          .project-section:nth-child(even) .project-content {
            direction: ltr;
          }

          .photo-grid {
            columns: 2;
          }

          .bio-section {
            padding: 4rem 2rem;
          }

          .bio-content-wrapper {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }

          .bio-image-container {
            max-width: 300px;
            margin: 0 auto;
          }

          .portfolio-nav-section {
            padding: 4rem 2rem;
          }

          .featured-grid {
            grid-template-columns: 1fr;
          }

          .resume-content {
            padding: 2rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .contact-info-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-legal {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 640px) {
          .nav-links {
            display: none;
          }

          .hero-name {
            font-size: 2.5rem;
          }

          .photo-grid {
            columns: 1;
          }

          .modal-body {
            padding: 1.5rem;
          }

          .resume-header {
            flex-direction: column;
            text-align: center;
          }

          .resume-content {
            padding: 1.5rem;
          }

          .resume-name {
            font-size: 2rem;
          }

          .resume-item-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 1.5rem;
          }

          .contact-info-grid {
            grid-template-columns: 1fr;
          }

          .social-links {
            flex-direction: column;
          }

          .social-link {
            width: 100%;
            text-align: center;
          }

          .footer {
            padding: 2rem 1.5rem 1.5rem;
          }

          .footer-links {
            flex-direction: column;
            gap: 0.8rem;
          }

          .footer-separator {
            display: none;
          }
        }
      `}</style>

      <NavigationBar />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'engineering' && <EngineeringPage />}
      {currentPage === 'photography' && <PhotographyPage />}
      {currentPage === 'writing' && <WritingPage />}
      {currentPage === 'reading' && <ReadingPage />}

      <Footer />

      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {selectedPhoto && (
        <PhotoDetail 
          photo={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)} 
        />
      )}
    </div>
  );
};

// No export - this is for direct browser use
