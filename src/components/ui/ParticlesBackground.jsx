// import React, { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import { useTheme } from "../../context/ThemeContext";

// export function ParticlesBackground() {
//   const [init, setInit] = useState(false);
//   const { theme } = useTheme();

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const options = useMemo(
//     () => ({
//       fullScreen: { enable: false },
//       background: {
//         color: { value: "transparent" },
//       },
//       fpsLimit: 120,

//       interactivity: {
//         events: {
//           onClick: { enable: false },
//           onHover: {
//             enable: true,
//             mode: "grab",
//           },
//         },
//         modes: {
//           grab: {
//             distance: 180,
//             links: {
//               opacity: 0.8, // 🔥 stronger interaction visibility
//             },
//           },
//         },
//       },

//       particles: {
//         color: {
//           value: "#818cf8", // 🔥 brighter indigo (better visibility)
//         },

//         links: {
//           color: "#818cf8",
//           distance: 140,
//           enable: true,
//           opacity: theme === "dark" ? 0.35 : 0.18, // 🔥 INCREASED VISIBILITY
//           width: 1.2, // slightly thicker lines
//         },

//         move: {
//           direction: "none",
//           enable: true,
//           outModes: { default: "bounce" },
//           speed: 1.2, // smoother (less chaotic)
//         },

//         number: {
//           density: {
//             enable: true,
//             area: 900,
//           },
//           value: 80, // 🔥 reduced → cleaner connections
//         },

//         opacity: {
//           value:
//             theme === "dark"
//               ? { min: 0.4, max: 0.8 } // 🔥 MUCH more visible nodes
//               : { min: 0.2, max: 0.5 },
//         },

//         shape: {
//           type: "circle",
//         },

//         size: {
//           value: { min: 1.5, max: 3 }, // slightly tighter range
//         },
//       },

//       detectRetina: true,
//     }),
//     [theme]
//   );

//   if (!init) return null;

//   return (
//     <div className="absolute inset-0 -z-10 pointer-events-none">
//       <Particles
//         id="tsparticles"
//         options={options}
//         className="w-full h-full"
//       />
//     </div>
//   );
// }
