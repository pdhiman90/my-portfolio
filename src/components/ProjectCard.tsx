
function ProjectCard({
  image,
  title,
  description,
  tags = [],
  codeLink,
  demoLink,
  isDarkMode = false,
}:any) {
  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800/50" : "bg-white/50"
      } rounded-lg shadow-lg overflow-hidden backdrop-blur-sm border ${
        isDarkMode ? "border-gray-700/30" : "border-gray-200/30"
      } hover:transform hover:scale-105 transition-all duration-300`}
    >
      <img
        src={image}
        alt={`${title} project screenshot`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-montserrat text-xl mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag:any, index:any) => (
            <span
              key={index}
              className={`px-2 py-1 ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              } rounded text-sm`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {codeLink && (
            <a
              href={codeLink}
              className="text-blue-500 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-code"></i>&nbsp;Code
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              className="text-blue-500 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>&nbsp;Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// function StoryComponent() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
//       <MainComponent
//         image="/project1.jpg"
//         title="E-commerce Website"
//         description="A full-stack e-commerce platform with user authentication and payment integration."
//         tags={["React", "Node.js", "MongoDB"]}
//         codeLink="https://github.com/example/ecommerce"
//         demoLink="https://demo.example.com/ecommerce"
//         isDarkMode={false}
//       />
//       <MainComponent
//         image="/project2.jpg"
//         title="Task Manager"
//         description="A collaborative task management tool with real-time updates and team features."
//         tags={["React", "Firebase", "Tailwind"]}
//         codeLink="https://github.com/example/taskmanager"
//         demoLink="https://demo.example.com/taskmanager"
//         isDarkMode={true}
//       />
//     </div>
//   );
// }

export default ProjectCard;