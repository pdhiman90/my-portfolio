
// import  { useRef,useState } from 'react'
// function HeroSection({ info
// }:any) {
//   const { name, role, description, imageUrl, imageAlt, ctaPrimary, ctaSecondary } = info;
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const skillsRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);
//   const setupRef = useRef(null);

//   const scrollToSection = (ref:any) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div
//       className={`min-h-screen ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//       } relative flex flex-col items-center`}
//     >
//       <head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       {/* <nav
//         className={`fixed top-0 left-0 right-0 ${
//           isDarkMode ? "bg-gray-900/60" : "bg-white/60"
//         } backdrop-blur-md px-4 py-3 z-50 border-b ${
//           isDarkMode ? "border-gray-700/30" : "border-gray-200/30"
//         } shadow-xl`}
//       >
//         <div className="container mx-auto flex justify-between items-center max-w-7xl">
//           <h1 className="text-xl font-montserrat">{name}</h1>
//         </div>
//       </nav> */}

//       <main
//         className={`container mx-auto px-4 pt-12 ${
//           isDarkMode ? "bg-gray-900/80" : "bg-white/80"
//         } backdrop-blur-lg max-w-5xl w-full`}
//       >
//         <section ref={homeRef} className="min-h-screen flex items-center">
//           <div className="flex flex-col-reverse md:flex-row w-full items-center justify-between gap-6">
//             <div className="text-center md:text-left">
//               <h1 className="text-4xl md:text-5xl font-montserrat mb-3">
//                 Hi, I'm {name.split(" ")[0]}
//               </h1>
//               <p className="text-base md:text-lg mb-3">{role}</p>
//               <p className="text-base md:text-lg mb-6">{description}</p>
//               <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
//                 <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/80 active:shadow-blue-500/90 w-[200px] sm:w-[160px] mx-auto sm:mx-0">
//                   {ctaPrimary}
//                 </button>
//                 <button className="bg-[#f5e6d3] text-gray-800 px-5 py-2 rounded-md hover:bg-[#e6d7c4] transition-all shadow-lg hover:shadow-xl hover:shadow-[#f5e6d3]/80 active:shadow-[#f5e6d3]/90 w-[200px] sm:w-[160px] mx-auto sm:mx-0">
//                   {ctaSecondary}
//                 </button>
//               </div>
//             </div>
//             <div className="md:hidden w-[200px] h-[200px] rounded-full overflow-hidden shadow-xl mb-6">
//               <img
//                 src={imageUrl}
//                 alt={imageAlt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="hidden md:block">
//               <div className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-xl">
//                 <img
//                   src={imageUrl}
//                   alt={imageAlt}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// // function StoryComponent() {
// //   return (
// //     <div className="space-y-8">
// //       <div>
// //         <h2 className="text-xl mb-4">Default</h2>
// //         <MainComponent />
// //       </div>

// //       <div>
// //         <h2 className="text-xl mb-4">Custom Content</h2>
// //         <MainComponent
// //           name="Alex Rivera"
// //           role="UI/UX Designer & Developer"
// //           description="Creating beautiful and intuitive user experiences through thoughtful design and seamless interactions."
// //           imageUrl="/alex-profile.jpg"
// //           imageAlt="Alex Rivera profile photo"
// //           ctaPrimary="View Portfolio"
// //           ctaSecondary="Contact Me"
// //         />
// //       </div>

// //       <div>
// //         <h2 className="text-xl mb-4">Minimal</h2>
// //         <MainComponent
// //           name="Emma Watson"
// //           role="Software Engineer"
// //           description="Building the future of web applications."
// //           imageUrl="/emma-profile.jpg"
// //           imageAlt="Emma Watson profile photo"
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// export default HeroSection;



import { useTheme } from './ThemeContext'; // Import your useTheme hook

function HeroSection({ info,scrollToContact }: any) {
  const { name, role, description, imageUrl, imageAlt, ctaPrimary, ctaSecondary } = info;
  const { isDarkMode } = useTheme(); // Get isDarkMode and toggleTheme from context
  


return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } flex items-center justify-center w-full`}
    >
      <main
        className={`container mx-auto px-4 ${
          isDarkMode ? "bg-gray-900/80" : "bg-white/80"
        } backdrop-blur-lg max-w-5xl w-full`}
      >
        <section className="min-h-[80vh] flex items-center justify-center">
          <div className="flex flex-col-reverse md:flex-row w-full items-center justify-between gap-6 text-center md:text-left">
            {/* Left Section */}
            <div>
              <h1 className="text-4xl md:text-5xl font-montserrat mb-3">
                Hi, I'm {name.split(" ")[0]}
              </h1>
              <p className="text-base md:text-lg mb-3">{role}</p>
              <p className="text-base md:text-lg mb-6">{description}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
             <a href='../public/ResumeATS12.pdf' download>
                <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/80 active:shadow-blue-500/90 w-[220px] sm:w-[180px] mx-auto sm:mx-0 flex items-center justify-center space-x-2" >
                  <i className="fa-solid fa-download"></i>
                  <span>{ctaPrimary}</span>
                </button>
              </a>
              
               
                <button className="bg-[#f5e6d3] text-gray-800 px-5 py-2 rounded-md hover:bg-[#e6d7c4] transition-all shadow-lg hover:shadow-xl hover:shadow-[#f5e6d3]/80 active:shadow-[#f5e6d3]/90 w-[200px] sm:w-[160px] mx-auto sm:mx-0 flex items-center justify-center space-x-2" onClick={scrollToContact}>
                <i className="far fa-envelope"></i>
                <span>{ctaSecondary}</span>
                </button>
              </div>
            </div>
  
            {/* Profile Image */}
            <div className="md:hidden w-[200px] h-[200px] rounded-full overflow-hidden shadow-xl mb-6">
                
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block">
              <div className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-xl">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
  

}

export default HeroSection;
