import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Landing/Navbar";
import { AppContext } from "./context/AppContext";
import Login from "./components/Authentication/Login";
import ImageGenerationPage from "./pages/Imagegenerationpage";
import Gallery from "./pages/GalleryPage";
function App() {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/BuyCredit" element={<BuyCredit />} />
        <Route path="/generation" element={<ImageGenerationPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      {showLogin && <Login />}
    </div>
  );
}

export default App;
