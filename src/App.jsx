import React from "react";
import HierarchicalTree from "./components/HierarchicalTree.jsx";
import data from "./data/products.js";
import "./styles.css";

const App = () => {
  return (
    <div className="app-container">
      <HierarchicalTree data={data} />
    </div>
  );
};

export default App;
