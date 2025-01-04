// "use client";

// function TopNavigation({
//   name = "Sarah Chen",
//   isDarkMode,
//   onDarkModeToggle,
//   className = "",
// }:any) {
//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 ${
//         isDarkMode ? "bg-gray-900" : "bg-white"
//       } backdrop-blur-md px-4 py-3 z-50 border-b ${
//         isDarkMode ? "text-white":"text-black"
//       } shadow-xl ${className}`}
//     >
//       <div className="container mx-auto flex justify-between items-center max-w-7xl">
//         <h1 className="text-xl font-montserrat">{name}</h1>
//         <button
//           onClick={onDarkModeToggle}
//           className={`${
//             isDarkMode
//               ? "text-white/80 hover:text-white"
//               : "text-black/80 hover:text-black"
//           } transition-colors p-2`}
//           aria-label="Toggle dark mode"
//         >
//           <i
//             className={`far fa-${
//               isDarkMode ? "sun" : "moon"
//             } text-sm sm:text-base`}
//           ></i>
//         </button>
//       </div>
//     </nav>
//   );
// }

// // function StoryComponent() {
// //   const [isDarkMode, setIsDarkMode] = useState(false);

// //   return (
// //     <div className="space-y-8">
// //       <div>
// //         <h2 className="text-xl mb-4">Default Navigation</h2>
// //         <div
// //           className={`p-8 ${
// //             isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// //           }`}
// //         >
// //           <MainComponent
// //             name="Sarah Chen"
// //             isDarkMode={isDarkMode}
// //             onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
// //           />
// //         </div>
// //       </div>

// //       <div>
// //         <h2 className="text-xl mb-4">Custom Name Navigation</h2>
// //         <div
// //           className={`p-8 ${
// //             isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// //           }`}
// //         >
// //           <MainComponent
// //             name="John Doe"
// //             isDarkMode={isDarkMode}
// //             onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// export default TopNavigation;


import { useTheme } from "./ThemeContext"; // Adjust the path based on your folder structure

function TopNavigation({
  name = "Prince Dhiman",
  className = "",
}) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } backdrop-blur-md px-4 py-3 z-50 shadow-xl ${className}`}
    >
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <h1 className="text-xl font-montserrat font-bold">{name}</h1>
        <button
          onClick={toggleTheme}
          className={`p-2 transition-colors ${
            isDarkMode
              ? "text-white/80 hover:text-white"
              : "text-black/80 hover:text-black"
          }`}
          aria-label="Toggle dark mode"
        >
          <i
            className={`far fa-${isDarkMode ? "sun" : "moon"} text-sm sm:text-base`}
          ></i>
        </button>
      </div>
    </nav>
  );
}

// Prop validation (Optional but recommended for production environments)
// TopNavigation.propTypes = {
//   name: PropTypes.string,
//   className: PropTypes.string,
// };

export default TopNavigation;

