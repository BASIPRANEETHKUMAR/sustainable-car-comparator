// Car data 2022–2025
const carData = {
  Hyundai: [
    { name: "i20 2023", efficiency: 18, fuelType: "Petrol", emission: 0.192, cost: 105, img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/149335/i20-n-line-exterior-right-front-three-quarter-2.jpeg" },
    { name: "Creta 2024", efficiency: 20, fuelType: "Diesel", emission: 0.171, cost: 95, img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/10909/1733821336827/front-left-side-47.jpg" },
    { name: "Alcazar 2022", efficiency: 17, fuelType: "Diesel", emission: 0.171, cost: 95, img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/151378/alcazar-exterior-right-front-three-quarter-2.jpeg" },
    { name: "Venue 2022", efficiency: 19, fuelType: "Petrol", emission: 0.192, cost: 105, img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/137528/venue-exterior-right-front-three-quarter-2.jpeg" }
  ],
  Tata: [
    { name: "Nexon EV 2024", efficiency: 28, fuelType: "Electric", emission: 0.05, cost: 7, img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon-EV/9932/1709203922777/front-left-side-47.jpg" },
    { name: "Altroz 2023", efficiency: 22, fuelType: "Petrol", emission: 0.192, cost: 105, img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/130955/altroz-exterior-right-front-three-quarter-2.jpeg" },
    { name: "Punch 2022", efficiency: 20, fuelType: "Petrol", emission: 0.192, cost: 105, img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/136268/punch-exterior-right-front-three-quarter-2.jpeg" },
    { name: "Harrier 2023", efficiency: 16, fuelType: "Diesel", emission: 0.171, cost: 95, img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/127898/harrier-exterior-right-front-three-quarter-2.jpeg" }
  ],
  Toyota: [
    { name: "Hyryder 2023", efficiency: 27, fuelType: "Hybrid", emission: 0.09, cost: 85, img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/126939/urban-cruiser-hyryder-exterior-right-front-three-quarter-6.jpeg" },
    { name: "Innova Hycross 2024", efficiency: 23, fuelType: "Hybrid", emission: 0.09, cost: 85, img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/145751/innova-hycross-exterior-right-front-three-quarter-2.jpeg" },
    { name: "Urban Cruiser 2022", efficiency: 22, fuelType: "Petrol", emission: 0.192, cost: 105, img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/126940/urban-cruiser-exterior-right-front-three-quarter-2.jpeg" },
    { name: "Fortuner 2023", efficiency: 12, fuelType: "Diesel", emission: 0.171, cost: 95, img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/137258/fortuner-exterior-right-front-three-quarter-2.jpeg" }
  ],
  Kia: [
    { name: "Seltos 2024", efficiency: 19, fuelType: "Diesel", emission: 0.171, cost: 95, img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos/11245/1732609065270/front-left-side-47.jpg" },
    { name: "EV6 2023", efficiency: 30, fuelType: "Electric", emission: 0.05, cost: 7, img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/EV6/10618/1699503215266/front-left-side-47.jpg" },
    { name: "Carens 2022", efficiency: 18, fuelType: "Petrol", emission: 0.192, cost: 105, img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/139288/carens-exterior-right-front-three-quarter-2.jpeg" },
    { name: "Sonet 2023", efficiency: 17, fuelType: "Petrol", emission: 0.192, cost: 105, img: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/133922/sonet-exterior-right-front-three-quarter-2.jpeg" }
  ]
};

// Load models
function loadModels() {
  const brand = document.getElementById("brand").value;
  const modelSelect = document.getElementById("model");
  modelSelect.innerHTML = '<option value="">-- Choose Model --</option>';
  if (brand && carData[brand]) {
    carData[brand].forEach(car => {
      const option = document.createElement("option");
      option.value = car.name;
      option.textContent = car.name;
      modelSelect.appendChild(option);
    });
  }
}

// Compare car
function compareCar() {
  const brand = document.getElementById("brand").value;
  const modelName = document.getElementById("model").value;
  const distance = parseFloat(document.getElementById("distance").value);

  if (!brand || !modelName || !distance) {
    alert("Please select brand, model, and enter distance.");
    return;
  }

  const car = carData[brand].find(c => c.name === modelName);
  const fuelUsed = (distance / car.efficiency).toFixed(2);
  const emission = (car.emission * distance).toFixed(2);
  const tripCost = (fuelUsed * car.cost).toFixed(2);

  const resultData = { brand, modelName, distance, fuelUsed, emission, tripCost, car };
  localStorage.setItem("result", JSON.stringify(resultData));

  const container = document.getElementById("container");
  container.style.transition = "opacity 0.5s, transform 0.5s";
  container.style.opacity = 0;
  container.style.transform = "translateY(-20px)";
  setTimeout(() => { window.location.href = "result.html"; }, 500);
}