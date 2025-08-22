import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductsPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage"

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productpage" element={<ProductsPage/>} />
         <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
