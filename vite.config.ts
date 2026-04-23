import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const base = "/Vegetables_Fruits_Season_Checker/";

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // service worker auto update
      includeAssets: ["favicon.ico"], // ton icône ou autres assets
      manifest: {
        name: "Fruits et Légumes de Saison",
        short_name: "FruitsSaison",
        description:
          "Consulte les fruits et légumes de saison, même hors ligne",
        start_url: "/Vegetables_Fruits_Season_Checker/",
        scope: "/Vegetables_Fruits_Season_Checker/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#4caf50",
        icons: [
          {
            src: "favicon.ico",
            sizes: "64x64",
            type: "image/x-icon",
          },
          {
            src: "favicon.ico",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "favicon.ico",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
