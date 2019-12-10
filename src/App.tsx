import React from "react";

import AppHeader from "./Layouts/Header/AppHeader";
import AppSideBar from "./Layouts/SideBar/AppSideBar";
import AppFooter from "./Layouts/Footer/AppFooter";
import AppBody from "./Layouts/Body/AppBody";
import "./App.css";
import data from "./ressources/articles.json";

const blogData = data;

const imageTest = require("./assets/logo.png");

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader imageSrc={imageTest} />
      <div className="body-side-bar">
        <div>
          <AppBody blogData={blogData}></AppBody>
        </div>
        <AppSideBar></AppSideBar>
      </div>
      <AppFooter></AppFooter>
    </div>
  );
};

export default App;
