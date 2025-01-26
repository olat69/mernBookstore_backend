const express = require("express");
const {
  createBook,
  getAllBooks,
  getSingleBook,
  UpdateBook,
  deleteBook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

router.post("/create-book", verifyAdminToken, createBook);

router.get("/", getAllBooks);

router.get("/:id", getSingleBook);

router.put("/edit/:id", verifyAdminToken, UpdateBook);

router.delete("/:id", verifyAdminToken, deleteBook);

module.exports = router;
