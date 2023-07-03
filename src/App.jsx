import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./assets/pages/Homepage/Homepage";
import SearchBus from "./assets/pages/SearchBus/SearchBus";
import About from "./assets/pages/About/About";
import Offers from "./assets/pages/Offers/Offers";
import Support from "./assets/pages/Support/Support";
import Login from "./assets/pages/Login/Login";
import Signup from "./assets/pages/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/searchbus" element={<SearchBus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
