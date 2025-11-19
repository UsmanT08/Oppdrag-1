import { useState } from "react";
import { carData } from "./data/carData";
import CarCard from "./components/CarCard";
import CategoryFilter from "./components/CategoryFilter";
import "./index.css";

export default function App() {
  const categories = ["Alle", ...new Set(carData.map(c => c.category))];
  const [selected, setSelected] = useState("Alle");

  const filteredCars =
    selected === "Alle"
      ? carData
      : carData.filter(car => car.category === selected);

  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo"></div>
          <div>
            <h1>Talib Dealer</h1>
            <p>Utforsk vårt utvalg av biler i ulike kategorier</p>
          </div>
        </div>
      </header>

      <main>
        <section className="filter-section">
          <h2>Filtrer etter kategori</h2>
          <CategoryFilter
            categories={categories}
            selected={selected}
            onSelect={setSelected}
          />
        </section>

        <section className="cars-grid">
          {filteredCars.length > 0 ? (
            filteredCars.map(car => <CarCard key={car.id} car={car} />)
          ) : (
            <div className="no-results">
              Ingen biler funnet i denne kategorien.
            </div>
          )}
        </section>
      </main>

      <footer>
        © 2024 Talib Cars. Prisene er veiledende og kan variere.
      </footer>
    </>
  );
}
