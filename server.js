const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;

require("dotenv").config();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://mern-bookstore-khaki.vercel.app",
    ],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get("/", (req, res) => {
    res.send("Server is ready");
  });
}

main()
  .then(() => console.log("MongoDb connected successfully"))
  .catch((err) => console.log(err));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
