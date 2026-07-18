import { Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home";
import TrackShipment from "./pages/public/TrackShipment";
import Services from "./pages/public/Services";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/track-shipment" element={<TrackShipment />} />
    </Routes>
  );
}
     
    
  
