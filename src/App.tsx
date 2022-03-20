import React from "react";
import { ProjectListScreen } from "./screens/project-list";
import "./App.css";
import { LoginScreen } from "./screens/login";

function App() {
  return (
    <div className="App">
      <LoginScreen></LoginScreen>
      {/*<ProjectListScreen></ProjectListScreen>*/}
    </div>
  );
}

export default App;
