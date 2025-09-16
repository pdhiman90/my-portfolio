

import { useTheme } from './ThemeContext'; // Import the useTheme hook

function AboutSection({ myinfo ,scrollToContact }: any) {
  const { name, title, description, image } = myinfo;
  const { isDarkMode } = useTheme(); // Access the dark mode state from the context



  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } relative`}
    ><div>
        <h1 className="text-4xl md:text-5xl font-montserrat mb-4">About Me</h1>
    </div>
      <section className="flex items-center justify-center min-h-screen py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={image}
                  alt={`${name} profile photo`}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 ${
                    isDarkMode
                      ? "bg-gradient-to-t from-gray-900"
                      : "bg-gradient-to-t from-white"
                  } opacity-20`}
                ></div>
              </div>
            </div>

            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-montserrat mb-4">
                {name}
              </h1>
              <h2 className="text-xl md:text-2xl font-montserrat mb-6 text-blue-500">
                {title}
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                {description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href='/asset/Resume_updated6.pdf' download>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl">
                <i className="fa-solid fa-download"></i>
                  Download CV
                </button>
                </a>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5e6d3] text-gray-800 rounded-lg hover:bg-[#e6d7c4] transition-all shadow-lg hover:shadow-xl" onClick={scrollToContact}>
                  <i className="far fa-envelope"></i>
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;

