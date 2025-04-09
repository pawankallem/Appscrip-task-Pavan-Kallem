import Layout from "@/components/Layout";
import styles from "@/styles/Shop.module.css";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default function Shop({ products }) {
  return (
    <Layout
      title="Shop – Lorem Ipsum Dolor"
      description="Shop at Lorem Ipsum Dolor"
    >
      <div className={styles.mainContainer}>
        <div className={styles.filtersContainer}></div>
        <div className={styles.shopingItemsContainer}>
        <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.price}>${product.price}</p>
          </div>
        ))}
      </div>
        </div>
      </div>
    </Layout>
  );
}
