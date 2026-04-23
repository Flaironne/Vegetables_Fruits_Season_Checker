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
      includeAssets: ["icon.svg", "pwa-64x64.png", "pwa-192x192.png", "pwa-512x512.png"],
      manifest: {
        name: "Fruits & Légumes de Saison",
        short_name: "Saison",
        description: "Consulte les fruits et légumes de saison en France, même hors ligne",
        start_url: "/Vegetables_Fruits_Season_Checker/",
        scope: "/Vegetables_Fruits_Season_Checker/",
        display: "standalone",
        background_color: "#f0faf4",
        theme_color: "#2d6a4f",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
