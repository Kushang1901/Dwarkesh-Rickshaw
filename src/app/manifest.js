export default function manifest() {
  return {
    name: "Dwarkesh Riksha | Dwarka & Somnath Darshan Service",
    short_name: "Dwarkesh Riksha",
    description:
      "Official website of Dwarkesh Riksha Service (Teen Batti Chowk, Dwarka). Dwarka Darshan (8 sacred places) and Somnath coastal tour.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#d97706",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
