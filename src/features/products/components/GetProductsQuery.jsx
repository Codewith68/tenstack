import { useProductsQuery } from "../hooks/useProductsQuery";

function GetProductsQuery() {
  const { data, isLoading, isError, error } = useProductsQuery();

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error: {error.message || "Unknown error"}</div>;
  }

  return (
    <section className="fetchrq-section">

      <div className="fetchrq-grid">
        {data?.map((product) => (
          <article className="post-card" key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GetProductsQuery;
