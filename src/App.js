import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ServiceScreen from "./pages/ServiceScreen";
import NewsScreen from "./pages/NewsScreen";
import CompanyScreen from "./pages/CompanyScreen";
import ProductScreen from "./pages/ProductScreen";
import RecruitScreen from "./pages/RecruitScreen";
import ContactScreen from "./pages/ContactScreen";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div id={theme}>
                <HomeScreen
                  theme={theme}
                  handleChangeTheme={handleChangeTheme}
                />
              </div>
            }
          />
          <Route path="/service" element={<ServiceScreen />} />
          <Route path="/news" element={<NewsScreen />} />
          <Route path="/company" element={<CompanyScreen />} />
          <Route path="/product" element={<ProductScreen />} />
          <Route path="/recruit" element={<RecruitScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
