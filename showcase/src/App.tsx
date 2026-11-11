import { BrowserRouter, Route, Routes } from "react-router-dom";
import Library from "./pages/Library";
import DesignDetail from "./pages/DesignDetail";
import Raw from "./pages/Raw";
import Shortlist from "./pages/Shortlist";
import ShortlistIndex from "./pages/ShortlistIndex";
import NotFound from "./pages/NotFound";
import AdminLibrary from "./admin/AdminLibrary";
import AdminDesign from "./admin/AdminDesign";
import AdminMemory from "./admin/AdminMemory";
import AdminSettings from "./admin/AdminSettings";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Library />} />
      <Route path="/d/:id" element={<DesignDetail />} />
      <Route path="/raw/:id" element={<Raw />} />
      <Route path="/s" element={<ShortlistIndex />} />
      <Route path="/s/:slug" element={<Shortlist />} />
      <Route path="/admin" element={<AdminLibrary />} />
      <Route path="/admin/d/:id" element={<AdminDesign />} />
      <Route path="/admin/memory" element={<AdminMemory />} />
      <Route path="/admin/settings" element={<AdminSettings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
