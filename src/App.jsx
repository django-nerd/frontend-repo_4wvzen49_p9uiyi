import { useRef, useState } from "react";
import HeaderNav from "./components/HeaderNav";
import HeroSearch from "./components/HeroSearch";
import MapAndList from "./components/MapAndList";
import BookingCalculator from "./components/BookingCalculator";

function App() {
  const [section, setSection] = useState("dashboard");
  const mapRef = useRef(null);

  const handleNavigate = (key) => {
    setSection(key);
    if (key === "map" && mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 text-slate-900">
      <HeaderNav onNavigate={handleNavigate} />
      <main>
        <HeroSearch onExplore={() => handleNavigate("map")} />
        <div ref={mapRef}>
          <MapAndList />
        </div>
        <BookingCalculator />
      </main>
    </div>
  );
}

export default App;
