

// function SkillsCard({

//   title,
//   icons = [],
//   skills = [],
//   gradientFrom = "blue-500",
//   gradientTo = "purple-500",
//   isDarkMode = false,
// }:any) {
//   return (
//     <div
//       className={`p-8 rounded-xl backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.57)] transition-all duration-500 group relative overflow-hidden`}
//     >
//       <div
//         className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom}/20 to-${gradientTo}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//       ></div>
//       <div className="relative z-10">
//         <div className="text-center mb-6">
//           <div className="flex justify-center space-x-4 mb-4">
//             {icons.map((icon:any, index:any) => (
//               <i
//                 key={index}
//                 className={`${icon.class} text-5xl ${icon.color}`}
//               ></i>
//             ))}
//           </div>
//           <h3
//             className={`font-montserrat text-2xl font-bold bg-gradient-to-r from-${gradientFrom} to-${gradientTo} bg-clip-text text-transparent`}
//           >
//             {title}
//           </h3>
//         </div>
//         <ul className="space-y-4">
//           {skills.map((skill:any, index:any) => (
//             <li key={index} className="flex items-center space-x-3 group/item">
//               <i className={`${skill.icon} text-xl ${skill.color}`}></i>
//               <span className="group-hover/item:translate-x-1 transition-transform">
//                 {skill.name}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



// export default SkillsCard;


import { useTheme } from './ThemeContext'; // Import the useTheme hook



function SkillsCard({
  title,
  icons = [],
  skills = [],
  gradientFrom = "blue-500",
  gradientTo = "purple-500",
}: any) {
  const { isDarkMode } = useTheme(); // Get the dark mode state from the context

  return (
    <div
    className={`p-8 rounded-xl transition-all duration-500 group relative overflow-hidden ${
        isDarkMode
        ? "bg-gray-800 border border-gray-700 shadow-xl hover:shadow-2xl"
        : `bg-gradient-to-br from-${gradientFrom}/20 to-${gradientTo}/20 text-black border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.57)]`
        }`}
        >
        
      {/* Background gradient on hover */}
      <div
        className={`absolute inset-0 ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-800 to-gray-900 opacity-50"
            : `bg-gradient-to-br from-${gradientFrom}/20 to-${gradientTo}/20 opacity-30`
        } group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
      <div className="relative z-10">
        <div className="text-center mb-6">
          <div className="flex justify-center space-x-4 mb-4">
            {icons.map((icon: any, index: any) => (
              <i
                key={index}
                className={`${icon.class} ${icon.color} text-5xl`} // Keep the original color for each icon
              ></i>
            ))}
          </div>
          <h3
            className={`font-montserrat text-2xl font-bold bg-gradient-to-r from-${gradientFrom} to-${gradientTo} bg-clip-text ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h3>
        </div>
        <ul className="space-y-4">
          {skills.map((skill: any, index: any) => (
            <li key={index} className="flex items-center space-x-3 group/item">
              <i
                className={`${skill.icon} ${skill.color} text-xl`} // Keep the original color for each skill icon
              ></i>
              <span
                className={`group-hover/item:translate-x-1 transition-transform ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  
  
  
  
  
  



}

export default SkillsCard;


