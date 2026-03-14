import { useState } from "react";
import { useCreateProduct } from "../hooks/useCreateProduct";

function CreateProductMutation() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const {
    mutate,
    isPending,
    isError,
    error,
    isSuccess,
    data: createdProduct,
    reset,
  } = useCreateProduct();

  const handleSubmit = (e) => {
    e.preventDefault();
    reset();
    mutate({
      title: title.trim(),
      price: Number(price),
    });
  };

  return (
    <section className="fetchrq-section">
      <h3 className="fetchrq-subheading">Create Product (Mutation)</h3>

      <form className="mutation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          min="1"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create Product"}
        </button>
      </form>

      {isError && (
        <p className="mutation-status error">
          Error: {error.message || "Failed to create product"}
        </p>
      )}

      {isSuccess && (
        <p className="mutation-status success">
          Created: {createdProduct?.title}
        </p>
      )}
    </section>
  );
}

export default CreateProductMutation;
