import { Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home";
import TrackShipment from "./pages/public/TrackShipment";
import Services from "./pages/public/Services";
import Industries from "./pages/public/Industries";
import FAQ from "./pages/public/FAQs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/track-shipment" element={<TrackShipment />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}
   

     
    
  
