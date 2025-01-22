// "use client";
// import {useState} from "react";

// function ContactForm({ onSubmit, loading, error, isDarkMode = false }:any) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e:any) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e:any) => {
//     e.preventDefault();
//     onSubmit?.(formData);
//   };

//   return (
//     <div className="w-full max-w-lg mx-auto">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {error && (
//           <div
//             className={`p-4 rounded-lg ${
//               isDarkMode ? "bg-red-900/50" : "bg-red-100"
//             } text-red-500`}
//           >
//             {error}
//           </div>
//         )}
//         <div>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             className={`w-full p-3 rounded-lg border ${
//               isDarkMode
//                 ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
//                 : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
//             } shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow`}
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             className={`w-full p-3 rounded-lg border ${
//               isDarkMode
//                 ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
//                 : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
//             } shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow`}
//             required
//           />
//         </div>
//         <div>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             rows={5}
//             className={`w-full p-3 rounded-lg border ${
//               isDarkMode
//                 ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
//                 : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
//             } shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow resize-none`}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-full
//             ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}
//             transition-all shadow-xl hover:shadow-2xl hover:shadow-blue-500/80 active:shadow-blue-500/90`}
//         >
//           {loading ? (
//             <span className="flex items-center justify-center">
//               <i className="far fa-spinner-third fa-spin mr-2"></i>
//               Sending...
//             </span>
//           ) : (
//             "Send Message"
//           )}
//         </button>
//       </form>
//     </div>
//   );
// }

// // function StoryComponent() {
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const handleSubmit = async (data) => {
// //     setLoading(true);
// //     setError(null);

// //     await new Promise((resolve) => setTimeout(resolve, 2000));

// //     if (Math.random() > 0.5) {
// //       setError("Failed to send message. Please try again.");
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <div className="p-8 space-y-8">
// //       <div>
// //         <h3 className="font-montserrat text-xl mb-4">Light Mode</h3>
// //         <MainComponent
// //           onSubmit={handleSubmit}
// //           loading={loading}
// //           error={error}
// //           isDarkMode={false}
// //         />
// //       </div>

// //       <div className="bg-gray-900 p-8 rounded-xl">
// //         <h3 className="font-montserrat text-xl mb-4 text-white">Dark Mode</h3>
// //         <MainComponent
// //           onSubmit={handleSubmit}
// //           loading={loading}
// //           error={error}
// //           isDarkMode={true}
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// export default ContactForm;



// import { useState } from "react";

// import emailjs from "emailjs-com"; // Import the EmailJS SDK


// function ContactForm({ loading, error, isDarkMode = false }: any) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false); // State to track if the form is successfully submitted

//   const handleChange = (e: any) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     // Send form data to EmailJS
//     emailjs
//       .sendForm(
//         "service_t9i23bg", // Your EmailJS service ID
//         "template_i9jlt8p", // Your EmailJS template ID
//         e.target, // The form element
//         "Ee88arHw4Y36QF4bG" // Your EmailJS user ID
//       )
//       .then(
//         (result:any) => {
//           console.log(result.text);
//           setIsSubmitted(true); // Mark the form as successfully submitted
//         },
//         (error:any) => {
//           console.error("Error sending message:", error);
//           setIsSubmitted(false); // In case of error, reset submission state
//         }
//       );
//   };

//   return (
//     <div className="w-full max-w-lg mx-auto">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {error && (
//           <div
//             className={`p-4 rounded-lg ${
//               isDarkMode ? "bg-red-900/50" : "bg-red-100"
//             } text-red-500`}
//           >
//             {error}
//           </div>
//         )}
        
//         {isSubmitted && !error && ( // Show success message after successful submission
//           <div
//             className={`p-4 rounded-lg ${
//               isDarkMode ? "bg-green-900/50" : "bg-green-100"
//             } text-green-500`}
//           >
//             Your message has been sent via email!
//           </div>
//         )}

//         <div>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             className={`w-full p-3 rounded-lg border ${
//               isDarkMode
//                 ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
//                 : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
//             } shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow`}
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             className={`w-full p-3 rounded-lg border ${
//               isDarkMode
//                 ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
//                 : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
//             } shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow`}
//             required
//           />
//         </div>
//         <div>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             rows={5}
//             className={`w-full p-3 rounded-lg border ${
//               isDarkMode
//                 ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
//                 : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
//             } shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow resize-none`}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-full
//             ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}
//             transition-all shadow-xl hover:shadow-2xl hover:shadow-blue-500/80 active:shadow-blue-500/90`}
//         >
//           {loading ? (
//             <span className="flex items-center justify-center">
//               <i className="far fa-spinner-third fa-spin mr-2"></i>
//               Sending...
//             </span>
//           ) : (
//             "Send Message"
//           )}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;


import { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm({ error, isDarkMode = false }: any) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_2e1k60l",
        "template_i9jlt8p",
        e.target,
        "Ee88arHw4Y36QF4bG"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          setIsSubmitted(true);
          setLoading(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error: any) => {
          console.error("Error sending message:", error);
          setIsSubmitted(false);
          setLoading(false);
        }
      );
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div
            className={`p-4 rounded-lg ${
              isDarkMode ? "bg-red-900/50" : "bg-red-100"
            } text-red-500`}
          >
            {error}
          </div>
        )}

        {isSubmitted && !error && (
          <div
            className={`p-4 rounded-lg ${
              isDarkMode ? "bg-green-900/50" : "bg-green-100"
            } text-green-500`}
            style={{ display: isSubmitted && !error ? 'block' : 'none', animation: 'hideMessage 5s forwards' }}
          >
            Your message has been sent
          </div>
        )}

        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`w-full p-3 rounded-lg border ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
            } shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow`}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`w-full p-3 rounded-lg border ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
            } shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow`}
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className={`w-full p-3 rounded-lg border ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
            } shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow resize-none`}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center
            ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}
            transition-all shadow-xl hover:shadow-2xl hover:shadow-blue-500/80 active:shadow-blue-500/90`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
