

// function BottomNavigation({
//   activeSection,
//   onSectionClick,
//   isDarkMode,
//   sections,
// }:any) {
//   const getIcon = (section:any) => {
//     const icons = {
//       home: "fa-solid fa-house",
//       about: "fa-user",
//       skills: "fa-solid fa-terminal",
//       projects: "fa-folder-open",
//       contact: "fa-envelope",
    
//     };
//     return icons[section as keyof typeof icons] || "fa-circle";
//   };

//   return (
//     <nav
//       className={`fixed bottom-4 left-1/2 -translate-x-1/2 ${
//         isDarkMode ? "bg-gray-800/60" : "bg-white/60"
//       } backdrop-blur-md px-2 sm:px-4 py-2 rounded-full z-50 shadow-lg border ${
//         isDarkMode ? "border-gray-700/30" : "border-gray-200/30"
//       }`}
//     >
//       <div className="flex items-center space-x-2 sm:space-x-4">
//         {sections.map((section:any) => (
//           <button
//             key={section}
//             onClick={() => onSectionClick(section)}
//             className={`${
//               isDarkMode
//                 ? "text-white/80 hover:text-white"
//                 : "text-black/80 hover:text-black"
//             } ${
//               activeSection === section
//                 ? isDarkMode
//                   ? "text-white"
//                   : "text-black"
//                 : ""
//             } transition-colors p-2`}
//           >
//             <i className={`far ${getIcon(section)} text-sm sm:text-base`}></i>
//           </button>
//         ))}
//       </div>
//     </nav>
//   );
// }

// // function StoryComponent() {
// //   const [activeSection, setActiveSection] = useState("home");
// //   const sections = ["home", "about", "skills", "projects", "contact", "setup"];

// //   return (
// //     <div className="p-4 space-y-4">
// //       <div className="mb-8">
// //         <h2 className="text-xl mb-4">Light Mode</h2>
// //         <MainComponent
// //           activeSection={activeSection}
// //           onSectionClick={setActiveSection}
// //           isDarkMode={false}
// //           sections={sections}
// //         />
// //       </div>

// //       <div className="bg-gray-900 p-4">
// //         <h2 className="text-xl text-white mb-4">Dark Mode</h2>
// //         <MainComponent
// //           activeSection={activeSection}
// //           onSectionClick={setActiveSection}
// //           isDarkMode={true}
// //           sections={sections}
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// export default BottomNavigation;


function BottomNavigation({
    activeSection,
    onSectionClick,
    isDarkMode,
    sections,
  }: any) {
    const getIcon = (section: any) => {
      const icons = {
        home: "fa-solid fa-house",
        about: "fa-user",
        skills: "fa-solid fa-terminal",
        projects: "fa-folder-open",
        contact: "fa-envelope",
      };
      return icons[section as keyof typeof icons] || "fa-circle";
    };
  
    return (
      <nav
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 ${isDarkMode ? "bg-gray-800/60" : "bg-white/60"} backdrop-blur-md px-2 sm:px-4 py-2 rounded-full z-50 shadow-lg border ${isDarkMode ? "border-gray-700/30" : "border-gray-200/30"}`}
      >
        <div className="flex items-center space-x-2 sm:space-x-4">
          {sections.map((section: any) => (
            <button
              key={section}
              onClick={() => onSectionClick(section)} // This triggers scrollToSection
              className={`${isDarkMode ? "text-white/80 hover:text-white" : "text-black/80 hover:text-black"} ${activeSection === section ? (isDarkMode ? "text-white" : "text-black") : ""} transition-colors p-2`}
            >
              <i className={`far ${getIcon(section)} text-sm sm:text-base`}></i>
            </button>
          ))}
        </div>
      </nav>
    );
  }
  
  export default BottomNavigation;
  