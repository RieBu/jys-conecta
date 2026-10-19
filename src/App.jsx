import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ComoFunciona from "./pages/ComoFunciona";
import Nosotros from "./pages/Nosotros";
import Catalogo from "./pages/Catalogo";
import AfiliateContacto from "./pages/AfiliateContacto";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<ComoFunciona />} />
          <Route path="/como-funciona" element={<Navigate to="/" replace />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/afiliate" element={<AfiliateContacto />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
