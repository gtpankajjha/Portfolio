import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./component/routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
  </ThemeProvider>
);