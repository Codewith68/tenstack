import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=20");
  return response?.data?.products
};

export const createProduct = async (productData) => {
  const response = await axios.post(
    "https://dummyjson.com/products/add",
    productData,
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return response.data;
};
