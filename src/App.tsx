import { useState, useRef } from "react";
import "./App.css";
import TopNavigation from "./components/TopNavigation";
import HeroSection from "./components/HeroSection";
import BottomNavigation from "./components/BottomNavigation";
import AboutSection from "./components/AboutSection";
import SkillsCard from "./components/SkillsCard";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useTheme } from "./components/ThemeContext";

function App() {
  const { isDarkMode } = useTheme();
  const info = {
    name: "Prince Dhiman",
    role: "MERN Stack Developer",
    description:
      "I am a passionate MERN stack developer with a focus on backend web development using Node.js. With 3 months of internship experience, I have honed my skills in building efficient and scalable web applications. I am eager to continue growing and contributing to dynamic projects.",
    imageUrl: "/images/pic.jpeg",
    imageAlt: "Prince Dhiman profile photo",
    ctaPrimary: "Download CV",
    ctaSecondary: "Contact Me",
  };

  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "skills", "projects", "contact"];

  // Create refs for each section
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the specific section
  const scrollToSection = (section: string) => {
    switch (section) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "footer":
        footerRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const aboutMe = {
    name: "Prince Dhiman",
    title: "Full Stack Developer & AI Enthusiast",
    description:
      "As a dedicated MERN stack developer, I specialize in building web applications with a strong focus on backend development using Node.js. Over the past 3 months, I have gained hands-on experience through an internship, where I worked on developing and optimizing backend systems. I am passionate about solving complex problems, learning new technologies, and collaborating with teams to create impactful digital solutions. I am excited to continue advancing my skills and contributing to meaningful projects.",
    image: "/images/pic.jpeg",
  };

  const frontendData = {
    title: "Frontend",
    icons: [
      { class: "fab fa-react", color: "text-blue-500" },
      { class: "fab fa-js", color: "text-yellow-500" },
      { class: "fab fa-html5", color: "text-orange-500" },
    ],
    skills: [
      { icon: "fab fa-react", color: "text-blue-500", name: "React" },
      { icon: "fab fa-js", color: "text-yellow-500", name: "JavaScript" },
      { icon: "fab fa-html5", color: "text-orange-500", name: "HTML5" },
      { icon: "fab fa-css3-alt", color: "text-blue-400", name: "CSS3" },
      { icon: "fab fa-sass", color: "text-pink-500", name: "Tailwind" },
    ],
    gradientFrom: "blue-400",
    gradientTo: "purple-400",
  };

  const backendData = {
    title: "Backend",
    icons: [
      { class: "fab fa-node-js", color: "text-green-600" },
      // { class: "fab fa-docker", color: "text-blue-600" },
      { class: "fab fa-aws", color: "text-orange-400" },
    ],
    skills: [
      { icon: "fab fa-node-js", color: "text-green-600", name: "Node.js" },
      { icon: "fab fa-node-js", color: "text-green-600", name: "Express" },
      { icon: "fas fa-database", color: "text-green-500", name: "MongoDB" },
      { icon: "fas fa-database", color: "text-green-500", name: "MySql" },
      { icon: "fas fa-server", color: "text-purple-500", name: "REST APIs" },
    ],
    gradientFrom: "green-400",
    gradientTo: "blue-400",
  };

  const toolsData = {
    title: "Tools",
    icons: [
      { class: "fab fa-git-alt", color: "text-orange-600" },
      { class: "fa-brands fa-github" },
      // { class: "fab fa-docker", color: "text-blue-600" },
    ],
    skills: [
      { icon: "fab fa-git-alt", color: "text-orange-600", name: "Git" },
      { icon: "fas fa-code", color: "text-blue-500", name: "VS Code" },
      { icon: "fab fa-figma", color: "text-purple-500", name: "Figma" },
      { icon: "fas fa-paper-plane", color: "text-orange-500", name: "Postman" },
    ],
    gradientFrom: "orange-400",
    gradientTo: "red-400",
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(String);

  const handleSubmit = async (data: any) => {
    setLoading(true);
    setError("null");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (Math.random() > 0.5) {
      setError("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  const socialLinks = [
    { platform: "GitHub", icon: "github", url: "https://github.com/pdhiman90" },
    { platform: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/prince-dhiman-358890194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { platform: "Twitter", icon: "twitter", url: "https://x.com/princed57572214?s=21" },
    { platform: "Instagram", icon: "instagram", url: "https://www.instagram.com/dhimanprince09/profilecard/?igsh=MTM5bHVtZ3F3cHZpYg==" },
  ];

  return (
    <>
      {/* Fixed background layer */}
      <div
        className={`fixed inset-0 overflow-auto ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      >

      {/* Main content wrapper */}
      <div
        className={`relative w-full ${
          isDarkMode ? "text-white" : "text-black"
        } mx-auto`}
      >
        <div className="w-full mx-auto">
          {/* Content container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TopNavigation name="Prince Dhiman" />

            {/* Hero Section */}
            <div
              ref={homeRef}
              className=" flex items-center justify-center mt-16 md:mt-0"
            >
              <HeroSection info={info} scrollToContact={scrollToContact} />
            </div>

            {/* Bottom Navigation */}
            <BottomNavigation
              activeSection={activeSection}
              onSectionClick={(section: string) => {
                setActiveSection(section);
                scrollToSection(section);
              }}
              isDarkMode={isDarkMode}
              sections={sections}
              scrollToSection={scrollToSection}
            />

            {/* About Section */}
            <div ref={aboutRef} className=" py-16">
              <AboutSection myinfo={aboutMe} scrollToContact={scrollToContact}  />
            </div>

            {/* Skills Section */}
            <div ref={skillsRef} className="py-16 ">
              <h1 className="text-4xl md:text-5xl font-montserrat mb-8 ">
                Skills
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <SkillsCard {...frontendData} isDarkMode={isDarkMode} />
                <SkillsCard {...backendData} isDarkMode={isDarkMode} />
                <SkillsCard {...toolsData} isDarkMode={isDarkMode} />
              </div>
            </div>

            {/* Projects Section */}
            <div ref={projectsRef} className=" py-16">
              <h1 className="text-4xl md:text-5xl font-montserrat mb-8">
                Projects
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                  image="/images/MytodoApp.png"
                  title="Dynamic Todo App"
                  description="A dynamic todo app built using React and Bootstrap, allowing users to manage their tasks efficiently with features like real-time updates and team collaboration."
                  tags={["React", "Bootstrap"]}
                  codeLink="https://github.com/pdhiman90/Todo-App"
                  demoLink="https://todo-app-ten-lime-34.vercel.app/"
                  isDarkMode={isDarkMode}
                />
                   <ProjectCard
                  image="/images/signup.jpg"
                  title="User Login and Logout Interface"
                  description="A user login and Signup interface using MongoDB, MySQL, Node.js, Express.js, and React with Tailwind CSS."
                  tags={["React", "MongoDB", "MySQL", "Node.js", "Express.js", "Tailwind CSS"]}
                  codeLink="https://github.com/example/userlogin"
                  demoLink="https://demo.example.com/userlogin"
                  isDarkMode={isDarkMode}
                />
                   <ProjectCard
                  image="/images/Task Manager.png"
                  title="Personal Task Manager"
                  description="The Personal Task Manager is a web application built with the **MERN stack** (MongoDB, Express.js, React, and Node.js) designed to help users manage their daily tasks efficiently. Users can create, update, delete, and categorize tasks, set priorities, and track due dates. The app allows users to authenticate and store tasks. With a responsive and user-friendly interface powered by React and a backend API powered by Node.js and MongoDB, the app provides a seamless experience for task management."
                  tags={["React", "Nodejs","Typescript","express","MongoDB","Responsive", "Tailwind CSS"]}
                  codeLink="https://github.com/pdhiman90/personal-task-manager-front"
                  demoLink="https://personal-task-manager-front-w2f2.vercel.app"
                  isDarkMode={isDarkMode}
                />
                  <ProjectCard
                  image="/images/cloneApp.png"
                  title="WhatsApp Clone App"
                  description="A WhatsApp clone app built using React, Material UI, and Tailwind CSS for styling, with Node.js, MongoDB, Express.js for backend, and Socket.IO for real-time communication between server and client."
                  tags={["React", "Material UI", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "Socket.IO"]}
                  codeLink="https://github.com/example/whatsappclone"
                  demoLink="https://demo.example.com/whatsappclone"
                  isDarkMode={isDarkMode}
                />
                 <ProjectCard
                  image="/images/E-Academia.png"
                  title="E-Academia"
                  description="Developed E-Academia, a responsive e-learning platform, as a college project to apply and explore React features and modern design principles. The project showcases my ability to create dynamic, user-friendly interfaces optimized for seamless learning experiences."
                  tags={["React", "React-dom", "Tailwind CSS", "react-icons", "Context API"]}
                  codeLink="https://github.com/pdhiman90/E_Learning"
                  demoLink="https://e-learning-app-gules.vercel.app/"
                  isDarkMode={isDarkMode}
                />
              </div>
              
            </div>

            {/* Contact Section */}
            <div ref={contactRef} className=" py-16">
              <h1 className="text-4xl md:text-5xl font-montserrat mb-8">
                Contact Me
              </h1>
              <ContactForm
                onSubmit={handleSubmit}
                loading={loading}
                error={error}
                isDarkMode={isDarkMode}
              />
            </div>

            {/* Footer */}
            <div ref={footerRef}>
              <Footer
                socialLinks={socialLinks}
                isDarkMode={isDarkMode}
                copyrightText="© 2024 Prince Dhiman. All rights reserved."
                scrollToSection={scrollToSection}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
