// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// ✅ use Render's PORT if it exists, otherwise 5000 for local
const PORT = process.env.PORT || 5000;

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/foodapp";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
    seedRestaurants();
  })
  .catch((err) => console.error("MongoDB Error:", err));



// ---------- SCHEMAS & MODELS ----------

// Simple menu item subdocument
const menuItemSchema = new mongoose.Schema({
  name: String,
  desc: String,
  price: Number,
  veg: Boolean,
  rating: Number,
  category: String,
  image: String,
});

// Restaurant
const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  rating: Number,
  time: String,
  image: String,
  menu: [menuItemSchema],
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

// Order
const orderItemSchema = new mongoose.Schema({
  restaurantName: String,
  name: String,
  qty: Number,
  price: Number,
});

const orderSchema = new mongoose.Schema(
  {
    customerName: String,
    phone: String,
    address: String,
    payment: String,
    total: Number,
    items: [orderItemSchema],
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

// ---------- SEED SAMPLE RESTAURANTS ----------

async function seedRestaurants() {
  const count = await Restaurant.countDocuments();
  if (count > 0) {
    console.log("ℹ️ Restaurants already exist, skipping seed.");
    return;
  }

  const sample = [
    {
      name: "NLR Specials",
      cuisine: "Andhra",
      rating: 4.6,
      time: "30 mins",
      image:
        "https://images.pexels.com/photos/11170284/pexels-photo-11170284.jpeg?auto=compress&cs=tinysrgb&w=800",
      menu: [
        {
          name: "Nellore Chicken Dum Biryani",
          desc: "Slow-cooked spicy dum biryani with raita & salan.",
          price: 240,
          veg: false,
          rating: 4.7,
          category: "Biryani",
          image:
            "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
          name: "Paneer Dum Biryani",
          desc: "Fragrant basmati with marinated paneer cubes.",
          price: 220,
          veg: true,
          rating: 4.4,
          category: "Biryani",
          image:
            "https://images.pexels.com/photos/10670776/pexels-photo-10670776.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
    },
    {
      name: "Shoel Biriyani",
      cuisine: "Arabian",
      rating: 4.5,
      time: "32 mins",
      image:
        "https://images.pexels.com/photos/11232406/pexels-photo-11232406.jpeg?auto=compress&cs=tinysrgb&w=800",
      menu: [
        {
          name: "Shoel Special Mandi (Half)",
          desc: "Half mandi platter with juicy chicken.",
          price: 420,
          veg: false,
          rating: 4.7,
          category: "Mandi",
          image:
            "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
      ],
    },
  ];

  await Restaurant.insertMany(sample);
  console.log("🌱 Seeded sample restaurants");
}

// ---------- ROUTES ----------

// health check
app.get("/", (req, res) => {
  res.send("Reddy's Kitchen API is running.");
});

// Get all restaurants
app.get("/api/restaurants", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    console.error("Error fetching restaurants:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get one restaurant by id
app.get("/api/restaurants/:id", async (req, res) => {
  try {
    const rest = await Restaurant.findById(req.params.id);
    if (!rest) return res.status(404).json({ message: "Restaurant not found" });
    res.json(rest);
  } catch (err) {
    console.error("Error fetching restaurant:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Create an order
app.post("/api/orders", async (req, res) => {
  try {
    const data = req.body;

    const order = await Order.create({
      customerName: data.customerName,
      phone: data.phone,
      address: data.address,
      payment: data.payment,
      total: data.total,
      items: data.items || [],
    });

    res.status(201).json(order);
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all orders (latest first)
app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------- START SERVER ----------
app.listen(PORT, () => {
  console.log(`🚀 Reddy's Kitchen API running on http://localhost:${PORT}`);
});
