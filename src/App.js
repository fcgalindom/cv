import "./App.css";
import React, { useState, useEffect } from "react";
import Menu from "./components/menu/Menu";
import About from "./components/index/About";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

function App() {
  const [menuDado, setMenuDado] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Objeto de mapeo para componentes
  const components = {
    "#about": About,
    "#resume": Resume,
    "#contact": Contact,
  };

  // Selecciona el componente basado en menuDado
  const ComponenteSeleccionado = components[menuDado] || null;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: isMobile && " rgba(0, 0, 0, 0.8)",
          zIndex: isMobile && 2,
        }}
      >
        <Menu updateMenu={setMenuDado} />
        {ComponenteSeleccionado && <ComponenteSeleccionado />}
      </div>
    </div>
  );
}

export default App;
