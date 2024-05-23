import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* <Route path="/shop/:id" element={<ProductDetailPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
