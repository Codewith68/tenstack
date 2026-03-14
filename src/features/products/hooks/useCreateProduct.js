import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../../../services/productService";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newProduct) => createProduct(newProduct),
    onMutate: async (newProduct) => {
      console.log("Creating product:", newProduct);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      console.log(`Product "${data.title}" created successfully`);
    },
    onError: (error) => {
      console.error("Mutation Error:", error.message);
    },
  });
};
