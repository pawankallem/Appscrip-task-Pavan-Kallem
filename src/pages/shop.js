import Layout from "@/components/Layout";
import styles from "@/styles/Shop.module.css";
import { useEffect, useState } from "react";

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
  const [filtered, setFiltered] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 1, max: 200 });

  const categories = [...new Set(products.map((p) => p.category))];

  useEffect(() => {
    let productsCopy = [...products];

    if (selectedCategory) {
      productsCopy = productsCopy.filter(
        (p) => p.category === selectedCategory
      );
    }

    if (selectedRating) {
      productsCopy = productsCopy.filter(
        (p) => Math.round(p.rating.rate) === parseInt(selectedRating)
      );
    }

    productsCopy = productsCopy.filter(
      (p) => p.price >= priceRange.min && p.price <= priceRange.max
    );

    setFiltered(productsCopy);
  }, [selectedCategory, selectedRating, priceRange, products]);
  return (
    <Layout
      title="Shop – Lorem Ipsum Dolor"
      description="Shop at Lorem Ipsum Dolor"
    >
      <div className={styles.mainContainer}>
        <div className={styles.filtersContainer}>
          <div className={styles.filters}>
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              <option value="">All Categories</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => setSelectedRating(e.target.value)}
              value={selectedRating}
            >
              <option value="">All Ratings</option>
              {[1, 2, 3, 4, 5].map((rate) => (
                <option key={rate} value={rate}>
                  {rate} Stars
                </option>
              ))}
            </select>

            <div className={styles.priceInputs}>
              <label>
                Min Price:
                <input
                  type="number"
                  min="1"
                  max="200"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange({
                      ...priceRange,
                      min: Number(e.target.value),
                    })
                  }
                />
              </label>
              <label>
                Max Price:
                <input
                  type="number"
                  min="1"
                  max="200"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange({
                      ...priceRange,
                      max: Number(e.target.value),
                    })
                  }
                />
              </label>
            </div>
          </div>
        </div>
        <div className={styles.shopingItemsContainer}>
          <div className={styles.grid}>
            {filtered.length === 0 ? (
              <p>No products found</p>
            ) : (
              filtered.map((product) => (
                <div key={product.id} className={styles.card}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.image}
                  />
                  <h3 className={styles.title}>{product.title}</h3>
                  <p className={styles.price}>${product.price}</p>
                  <p className={styles.rating}>⭐ {product.rating.rate}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
