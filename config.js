// ============================================
// PORTFOLIO CONFIGURATION FILE
// ============================================
// This file contains ALL the content you'll want to edit.
// Edit this file to update your portfolio content!

const PortfolioConfig = {
  
  // ==========================================
  // PERSONAL INFORMATION
  // ==========================================
  
  personalInfo: {
    name: "Your Name",
    initials: "YN",
    title: "Engineer · Creator · Innovator",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Atlanta, Georgia, USA",
    
    socialMedia: {
      linkedin: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/yourprofile",
      twitter: "https://twitter.com/yourprofile"
    },
    
    bio: {
      paragraph1: "I'm a passionate engineer dedicated to building innovative solutions that bridge the gap between cutting-edge technology and real-world applications. With expertise spanning machine learning, robotics, and distributed systems, I thrive on tackling complex challenges that push the boundaries of what's possible.",
      paragraph2: "Beyond engineering, I explore the world through my camera lens and pen, capturing moments and ideas that inspire my work. Each project is an opportunity to learn, create, and make a meaningful impact."
    },
    
    portfolioPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
  },

  // ==========================================
  // PROJECTS
  // ==========================================
  
  projects: [
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
  ],

  // ==========================================
  // PHOTOGRAPHY
  // ==========================================
  
  photos: [
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
  ],

  // ==========================================
  // RESUME - ENGLISH
  // ==========================================
  
  resumeEnglish: {
    contactLine: "your.email@example.com • +1 (555) 123-4567 • Atlanta, GA",
    links: "linkedin.com/in/yourprofile • github.com/yourprofile",
    
    summary: "Innovative engineer with expertise in machine learning, robotics, and distributed systems. Passionate about developing cutting-edge solutions that bridge technology and real-world applications. Proven track record of delivering high-impact projects that optimize performance and drive results.",
    
    experience: [
      {
        title: "Senior Engineer",
        company: "Tech Company Inc. • Atlanta, GA",
        dates: "2022 - Present",
        responsibilities: [
          "Led development of ML-powered energy optimization system, reducing consumption by 30%",
          "Architected distributed systems handling 1M+ daily transactions",
          "Mentored team of 5 junior engineers in best practices and code review"
        ]
      },
      {
        title: "Engineering Specialist",
        company: "Innovation Labs • Remote",
        dates: "2019 - 2022",
        responsibilities: [
          "Developed autonomous navigation system achieving 99.5% accuracy",
          "Implemented computer vision algorithms for real-time object detection",
          "Collaborated with cross-functional teams to deliver projects on time"
        ]
      }
    ],
    
    education: [
      {
        degree: "Master of Science in Engineering",
        school: "University Name • Atlanta, GA",
        dates: "2017 - 2019",
        details: "Specialization in Machine Learning and Robotics • GPA: 3.9/4.0"
      },
      {
        degree: "Bachelor of Science in Engineering",
        school: "University Name • Atlanta, GA",
        dates: "2013 - 2017",
        details: "Magna Cum Laude • Dean's List all semesters"
      }
    ],
    
    skills: {
      languages: "Python, C++, JavaScript, Java, SQL",
      frameworks: "TensorFlow, PyTorch, React, ROS, Node.js",
      tools: "AWS, Docker, Git, Kubernetes, Jenkins",
      specializations: "Machine Learning, Computer Vision, IoT, Distributed Systems"
    }
  },

  // ==========================================
  // RESUME - GERMAN
  // ==========================================
  
  resumeGerman: {
    contactLine: "ihre.email@beispiel.de • +49 (0) 123 456789 • Berlin, Deutschland",
    links: "linkedin.com/in/ihrprofil • github.com/ihrprofil",
    
    summary: "Innovativer Ingenieur mit Expertise in maschinellem Lernen, Robotik und verteilten Systemen. Leidenschaft für die Entwicklung modernster Lösungen, die Technologie und reale Anwendungen verbinden. Nachgewiesene Erfolgsbilanz bei der Durchführung wirkungsvoller Projekte.",
    
    experience: [
      {
        title: "Senior Ingenieur",
        company: "Tech Company GmbH • Berlin, Deutschland",
        dates: "2022 - Heute",
        responsibilities: [
          "Leitung der Entwicklung eines ML-basierten Energieoptimierungssystems, Reduzierung des Verbrauchs um 30%",
          "Architektur verteilter Systeme mit über 1 Million täglichen Transaktionen",
          "Mentoring eines Teams von 5 Junior-Ingenieuren in Best Practices und Code-Review"
        ]
      },
      {
        title: "Ingenieur Spezialist",
        company: "Innovation Labs • Remote",
        dates: "2019 - 2022",
        responsibilities: [
          "Entwicklung eines autonomen Navigationssystems mit 99,5% Genauigkeit",
          "Implementierung von Computer-Vision-Algorithmen für Echtzeit-Objekterkennung",
          "Zusammenarbeit mit funktionsübergreifenden Teams zur termingerechten Projektabwicklung"
        ]
      }
    ],
    
    education: [
      {
        degree: "Master of Science in Ingenieurwissenschaften",
        school: "Universität Name • Berlin, Deutschland",
        dates: "2017 - 2019",
        details: "Spezialisierung in maschinellem Lernen und Robotik • Note: 1,2"
      },
      {
        degree: "Bachelor of Science in Ingenieurwissenschaften",
        school: "Universität Name • Berlin, Deutschland",
        dates: "2013 - 2017",
        details: "Mit Auszeichnung • Alle Semester auf der Dean's List"
      }
    ],
    
    skills: {
      languages: "Python, C++, JavaScript, Java, SQL",
      frameworks: "TensorFlow, PyTorch, React, ROS, Node.js",
      tools: "AWS, Docker, Git, Kubernetes, Jenkins",
      specializations: "Maschinelles Lernen, Computer Vision, IoT, Verteilte Systeme"
    }
  },

  // ==========================================
  // THEME COLORS
  // ==========================================
  
  colors: {
    background: "#ffffff",
    text: "#000000",
    accent: "#9BCBEB",
    accentDark: "#6BA3C3",
    accentDarker: "#4A8BAA"
  }
  
};
