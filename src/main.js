import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { registerSW } from "virtual:pwa-register";
registerSW({ immediate: true });
// const updateSW = registerSW({
//   onNeedRefresh() {
//     if (confirm("Nouvelle version disponible. Recharger ?")) {
//       updateSW?.();
//     }
//   },
//   onOfflineReady() {
//     console.log("App prête à fonctionner offline !");
//   },
// });
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(App, {}) }));
