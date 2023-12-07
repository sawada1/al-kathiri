// import axios from 'axios';

// export default async ({ app }) => {

//     if (process.client) {
//         try {
//           const response = await axios.get(
//             "https://test-slider.webstdy.net/RevSliderEmbedderheadIncludes.php"
//           );
//           const htmlContent = response.data;
      
//           const doc = new DOMParser().parseFromString(htmlContent, "text/html");
//           const jsFiles = Array.from(
//             doc.querySelectorAll("script[src]"),
//             (script) => script.src
//             );
//               const cssFiles = Array.from(
//                 doc.querySelectorAll('link[rel="stylesheet"][href]'),
//                 (link) => link.href
//               );
           
//           console.log(jsFiles);
//           // jsFiles.forEach((src) => {
//           //   const script = document.createElement("script");
//           //   script.src = src;
//           //   script.type = "text/javascript";
//           //   document.head.appendChild(script);
//             // });
//               useHead({
//                 script: jsFiles.map((src) => ({ src, body: true })),
//                 // link: cssFiles.map((href) => ({ rel: "stylesheet", href })),
//               });
            
            
//         } catch (error) {
//           console.error("Error fetching HTML content:", error);
//         }
        
//     }
// };
