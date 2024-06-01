import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InventoryDetailPage from "./pages/InventoryDetailPage";
import MildItemsPage from "./pages/MildItemsPage";
import Shop from "./pages/Shop";
import MediumItemsPage from "./pages/MediumItemsPage";
import HotItemsPage from "./pages/HotItemsPage";
// import { Container } from "reactstrap";
// import Navigation from "./components/navbar/Navigation";
// import AddInventory from "./components/Inventory/AddInventory";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mild" element={<MildItemsPage />} />
        <Route path="/medium" element={<MediumItemsPage />} />
        <Route path="/hot" element={<HotItemsPage />} />

        {/* <Route path="/inventoryDetail" element={<InventoryDetailPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
