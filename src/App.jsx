import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPages from "./pages/ProductsPages";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to={"/products"} />} />
      <Route path="/products" element={<ProductsPages />} />
      <Route path="/products/:id" element={<DetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;