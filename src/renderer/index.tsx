import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"


ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
).render(
  <React.StrictMode>
    <React.Suspense fallback={<div></div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
);
