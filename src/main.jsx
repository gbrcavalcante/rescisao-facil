import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.jsx";

import { ThemeProvider } from "./components/ThemeProvider.jsx";

import HomePage from "./pages/HomePage.jsx";
import TerminationReasonPage from "./pages/TerminationReasonPage.jsx";
import FormPage from "./pages/FormPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<HomePage />} />
            <Route
              path="/termination-reason"
              element={<TerminationReasonPage />}
            />
            <Route path="/form" element={<FormPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
