require("dotenv").config();
const mongoose = require("mongoose");

const Product = require("./models/Product");

const products = [
  { name: "Hydraulic Pump", price: 5000, stock: 10 },
  { name: "Industrial Valve", price: 1200, stock: 25 },
  { name: "Gear Assembly", price: 3000, stock: 5 },
  { name: "Ball Bearing", price: 400, stock: 50 },
  { name: "Oil Seal Kit", price: 800, stock: 30 },
  { name: "Pressure Gauge", price: 1500, stock: 12 },
  { name: "Air Filter", price: 600, stock: 40 },
  { name: "Hydraulic Hose", price: 900, stock: 20 },

  { name: "Coupling Joint", price: 700, stock: 18 },
  { name: "Control Panel", price: 8500, stock: 7 },
  { name: "Thermal Sensor", price: 2200, stock: 14 },
  { name: "Bearing Housing", price: 1100, stock: 16 },
  { name: "Industrial Chain", price: 2500, stock: 11 },
  { name: "Lubrication Pump", price: 4200, stock: 6 },
  { name: "Steel Flange", price: 650, stock: 35 },
  { name: "Rubber Gasket", price: 150, stock: 80 },
  { name: "Metal Clamp", price: 300, stock: 55 },
  { name: "Drive Shaft", price: 5200, stock: 9 },
  { name: "Cooling Fan Motor", price: 2700, stock: 13 },
  { name: "Industrial Switch", price: 950, stock: 28 },
  { name: "Hydraulic Cylinder", price: 7800, stock: 4 },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("21 Products Inserted Successfully");
    process.exit();
  })
  .catch((err) => console.log(err));
