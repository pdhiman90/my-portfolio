
function Footer({ socialLinks, isDarkMode, copyrightText }:any) {
  return (
    <footer
    className={`${isDarkMode ? "bg-gray-900" : "bg-white"} py-8 w-full mt-auto`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="font-montserrat text-xl mb-4">Prince Dhiman</h3>
            <p>
              Full Stack Developer from Sadhaura(YNR), Haryana(INDIA)
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-montserrat text-xl mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="/"
              >
                Home
              </a>
              <a
                href="/about"
              >
                About
              </a>
              <a
                href="/skills"
              >
                Projects
              </a>
              <a
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h3 className="font-montserrat text-xl mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-6">
              {socialLinks.map((link:any, index:any) => (
                <a
                  key={index}
                  href={link.url}
                  aria-label={link.platform}
                >
                  <i className={`fab fa-${link.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="font-montserrat">{copyrightText}</p>
          <div className="h-4"></div>
          <div className="h-4"></div>
          <div className="h-8"></div>
        </div>
      </div>
    </footer>
  );
}

// function StoryComponent() {
//   const socialLinks = [
//     { platform: "GitHub", icon: "github", url: "#" },
//     { platform: "LinkedIn", icon: "linkedin", url: "#" },
//     { platform: "Twitter", icon: "twitter", url: "#" },
//     { platform: "Instagram", icon: "instagram", url: "#" },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col">
//       <MainComponent
//         socialLinks={socialLinks}
//         isDarkMode={false}
//         copyrightText="© 2024 Sarah Chen. All rights reserved."
//       />
//       <div className="h-4"></div>
//       <MainComponent
//         socialLinks={socialLinks}
//         isDarkMode={true}
//         copyrightText="© 2024 Sarah Chen. All rights reserved."
//       />
//     </div>
//   );
// }

export default Footer;