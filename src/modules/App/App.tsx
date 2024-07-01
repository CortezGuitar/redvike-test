import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import "primereact/resources/themes/rhea/theme.css";
import "primereact/resources/primereact.min.css";
import "../../index.css";
import { SinglePokemon } from "./SinglePokemon";

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<SinglePokemon />} />
      </Routes>
    </div>
  );
};
