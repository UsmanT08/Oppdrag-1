const carData = [
  {
    id: 1,
    make: "Porsche",
    model: "911 Turbo S",
    year: 2024,
    price: "2 450 000 kr",
    image: "",
    category: "Sportsbil",
    specs: {
      engine: "3.8L Twin-Turbo",
      power: "650 hk",
      seats: 4,
      fuelType: "Bensin",
    },
    description: "En ikonisk sportsbil med ekstraordinær ytelse og luksus.",
  },
  {
    id: 2,
    make: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    price: "1 350 000 kr",
    image: "",
    category: "Elektrisk",
    specs: {
      engine: "Tri-Motor",
      power: "1020 hk",
      seats: 5,
      fuelType: "Elektrisk",
    },
    description: "Den raskeste produksjonsbilen i verden med banebrytende teknologi.",
  },
  {
    id: 3,
    make: "BMW",
    model: "X5 M Competition",
    year: 2024,
    price: "1 850 000 kr",
    image: "",
    category: "SUV",
    specs: {
      engine: "4.4L V8 Twin-Turbo",
      power: "625 hk",
      seats: 5,
      fuelType: "Bensin",
    },
    description: "En kraftfull og luksuriøs SUV som kombinerer sportslighet med allsidighet.",
  },
  {
    id: 4,
    make: "Mercedes-Benz",
    model: "E-Klasse",
    year: 2024,
    price: "850 000 kr",
    image: "",
    category: "Sedan",
    specs: {
      engine: "2.0L Turbo",
      power: "299 hk",
      seats: 5,
      fuelType: "Hybrid",
    },
    description: "Elegant sedan med førsteklasses komfort og teknologi.",
  },
  {
    id: 5,
    make: "Volkswagen",
    model: "ID.3",
    year: 2024,
    price: "420 000 kr",
    image: "",
    category: "Kompakt",
    specs: {
      engine: "Elektrisk motor",
      power: "204 hk",
      seats: 5,
      fuelType: "Elektrisk",
    },
    description: "En praktisk og miljøvennlig elbil for byen.",
  },
  {
    id: 6,
    make: "Ford",
    model: "F-150 Lightning",
    year: 2024,
    price: "950 000 kr",
    image: "",
    category: "Pickup",
    specs: {
      engine: "Dual Motor",
      power: "563 hk",
      seats: 5,
      fuelType: "Elektrisk",
    },
    description: "Kraftig elektrisk pickup med null utslipp.",
  },
];

const categories = ["Alle", "Sportsbil", "Elektrisk", "SUV", "Sedan", "Kompakt", "Pickup"];

const categoryButtonsContainer = document.getElementById("categoryButtons");
const carsGrid = document.getElementById("carsGrid");
const noResults = document.getElementById("noResults");

let selectedCategory = "Alle";

function renderCategories() {
  categoryButtonsContainer.innerHTML = "";
  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.classList.toggle("active", category === selectedCategory);
    btn.addEventListener("click", () => {
      selectedCategory = category;
      renderCategories();
      renderCars();
    });
    categoryButtonsContainer.appendChild(btn);
  });
}

function renderCars() {
  const filtered =
    selectedCategory === "Alle"
      ? carData
      : carData.filter((car) => car.category === selectedCategory);

  carsGrid.innerHTML = "";

  if (filtered.length === 0) {
    noResults.style.display = "block";
    return;
  } else {
    noResults.style.display = "none";
  }
  

  filtered.forEach((car) => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `
      <img src="${car.image}" alt="${car.make} ${car.model}">
      <div class="car-card-content">
        <h3>${car.make} ${car.model} (${car.year})</h3>
        <p><strong>Pris:</strong> ${car.price}</p>
        <p>${car.description}</p>
        <div class="specs">
          <p><strong>Motor:</strong> ${car.specs.engine}</p>
          <p><strong>Kraft:</strong> ${car.specs.power}</p>
          <p><strong>Seter:</strong> ${car.specs.seats}</p>
          <p><strong>Drivstoff:</strong> ${car.specs.fuelType}</p>
        </div>
      </div>
    `;
    carsGrid.appendChild(card);
  });
}

// Initial render
renderCategories();
renderCars();
