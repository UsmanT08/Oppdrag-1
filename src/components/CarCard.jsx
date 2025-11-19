export default function CarCard({ car }) {
  return (
    <div className="car-card">
      <img
        src={car.image || "https://via.placeholder.com/400x200?text=Ingen+bilde"}
        alt={`${car.make} ${car.model}`}
      />
      <div className="car-card-content">
        <h3>{car.make} {car.model} ({car.year})</h3>
        <p><strong>Pris:</strong> {car.price}</p>
        <p>{car.description}</p>
        <div className="specs">
          <p><strong>Motor:</strong> {car.specs.engine}</p>
          <p><strong>Effekt:</strong> {car.specs.power}</p>
          <p><strong>Seter:</strong> {car.specs.seats}</p>
          <p><strong>Drivstoff:</strong> {car.specs.fuelType}</p>
        </div>
      </div>
    </div>
  );
}
