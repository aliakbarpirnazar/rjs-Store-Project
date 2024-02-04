import Card from "../components/Card";
import { useProducts } from "../context/ProductProvider";

import styles from "./ProductsPage.module.css";
import Loader from "../components/Loader";

function ProductsPages() {
  const products = useProducts();
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPages;
