const mongoose = require("mongoose");

const bookschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    trending: {
      type: Boolean,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    Author: {
      type: String,
      required: true,
    },
    Price: Number,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookschema);

module.exports = Book;
