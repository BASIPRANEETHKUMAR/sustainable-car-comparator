🌱 Sustainable Car Comparator

A modern, interactive web app that compares the fuel efficiency, emissions, fuel cost, and sustainability of car models (2022–2025).

It helps users make smarter transport choices by comparing different brands, models, and fuel types — with live calculations and car images.


---

🚗 Features

✅ Brand & Model Selection – Choose cars from major brands like Hyundai, Tata, Toyota, and Kia (2022–2025).
✅ Distance-Based Calculation – Input your travel distance to get accurate results.
✅ Detailed Comparison Results – Shows:

Fuel type

Fuel efficiency (km/l or km/kWh)

Fuel used (liters or kWh)

CO₂ emission (kg)

Trip cost (₹)
✅ Dynamic Car Images – Automatically shows car images fetched from verified sources.
✅ Smooth Animations – Fade and slide transitions for a professional app-like experience.
✅ Clean UI/UX – Designed with simplicity and clarity using modern CSS.



---

🧱 Tech Stack

HTML5 – Page structure

CSS3 – Styling and animations

JavaScript (ES6) – Dynamic interactivity and calculations

LocalStorage – Data transfer between pages



---

📁 Project Structure

Sustainable-Car-Comparator/
│
├── index.html        # Main selection page
├── result.html       # Result display page
├── style.css         # Styling and animations
├── script.js         # Logic, data, and interactivity
└── README.md         # Project description (this file)


---
USE CASE DIAGRAM
+-------------------+
          |       User        |
          +-------------------+
             /     |     \
            /      |      \
           v       v       v
+-----------------+   +------------------+
| Select Brand    |   | Enter Distance   |
+-----------------+   +------------------+
           \             /
            v           v
          +--------------------+
          |  Compare Vehicle   |
          +--------------------+
                    |
                    v
          +--------------------+
          |  Display Result    |
          +--------------------+
                    ^
                    |
          +--------------------+
          | View Another Car   |
          +--------------------+
 ---
⚙ How to Run

1. Clone this repository

git clone https://github.com/<your-username>/Sustainable-Car-Comparator.git


2. Open the project folder

cd Sustainable-Car-Comparator


3. Run locally
Just open index.html in your browser — no server needed!




---

💡 Example Usage

1️⃣ Select a car brand (e.g., Toyota)
2️⃣ Choose a model (e.g., Hyryder 2023)
3️⃣ Enter a distance (e.g., 250 km)
4️⃣ Click Compare
→ The app shows fuel used, CO₂ emission, trip cost, and a beautiful image of the car.


---

📸 Screenshots

Home Page	  
<img width="1896" height="980" alt="Screenshot 2025-10-18 213741" src="https://github.com/user-attachments/assets/7823ad7d-e8bd-4370-9069-69ec2be2e016" />

Result Page
<img width="1841" height="930" alt="Screenshot 2025-10-18 213800" src="https://github.com/user-attachments/assets/df07002a-ad6f-4f33-b7f6-0336503d05fd" />
---

🧠 Future Enhancements

Add more brands/models dynamically via JSON or API

Include electricity consumption cost for EVs

Add comparison mode for two cars side-by-side

Support live fuel price updates



---
