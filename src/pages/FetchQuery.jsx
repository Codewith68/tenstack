import CreateProductMutation from "../features/products/components/CreateProductMutation";
import GetProductsQuery from "../features/products/components/GetProductsQuery";

function FetchRQ() {
  return (
    <section className="fetchrq-page">
      <h2 className="fetchrq-heading">Products With Mutation</h2>
      <CreateProductMutation />
      <GetProductsQuery />
    </section>
  );
}

export default FetchRQ;
