const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Reddy's Kitchen API is running!");
});

// Serve restaurants from JSON file
app.get("/api/restaurants", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "restaurants.json");
    const data = await fs.readFile(filePath, "utf8");
    const restaurants = JSON.parse(data);
    res.json(restaurants);
  } catch (err) {
    console.error("Error reading restaurants.json:", err);
    res.status(500).json({ message: "Server error - check restaurants.json" });
  }
});

app.get("/api/restaurants/:id", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "restaurants.json");
    const data = await fs.readFile(filePath, "utf8");
    const restaurants = JSON.parse(data);
    const restaurant = restaurants.find(r => r._id === req.params.id);
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
