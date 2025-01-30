const getFromCart = async (req, res) => {
  const { userId } = req.query;
  try {
    const cart = await CartModel.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Ensure cartItems is always an array
    res.status(200).json(cart.cartItems || []); // Fallback to empty array if cartItems is undefined
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving cart" });
  }
};
