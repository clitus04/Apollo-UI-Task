import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.png"],
  manifest: {
    name: "Apollo Sample UI",
    short_name: "Apollo UI",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    description: "A Sample Apollo UI app.",
    icons: [
      {
        src: "vite_logo_48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "vite_logo_72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "vite_logo_96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "vite_logo_144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "vite_logo_168.png",
        sizes: "168x168",
        type: "image/png",
      },
      {
        src: "vite_logo_192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
