import React from "react";
import Card from "../Card";
import "../../assets/styles/components/App.scss";

const App = () => {
  return (
    <div className="container">
      <Card keyx="1"></Card>
      <Card keyx="2"></Card>
      <Card keyx="3"></Card>
      <Card keyx="4"></Card>
    </div>
  );
};

export default App;
