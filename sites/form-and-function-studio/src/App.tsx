import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import P1 from "@/sections/01-page";
import P2 from "@/sections/02-page";
import P3 from "@/sections/03-page";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<P1 />} />
      <Route path="/option-2" element={<P2 />} />
      <Route path="/option-3" element={<P3 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
