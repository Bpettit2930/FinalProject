import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lounge from "./pages/Lounge";
import Beverages from "./pages/Beverages";
import Directions from "./pages/Directions";
import Stocks from "./pages/Stocks";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Lounge />} />
        <Route exact path="/beverages/elixir" element={<Beverages />} />
        <Route exact path="/about/directions" element={<Directions />} />
        <Route exact path="/stocks" element={<Stocks />} />
      </Routes>
    </BrowserRouter>
  );
}
