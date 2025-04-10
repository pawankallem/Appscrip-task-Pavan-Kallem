import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import styles from "@/styles/Layout.module.css"

export default function Layout({ children, title, description, schema }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </Head>
      <Header />
      <hr />

      <main style={{ padding: "2% 5%", margin: "0 auto" }}>
        <div className={styles.subHeading}>
          <h2>DISCOVER OUR PRODUCTS</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus{" "}
          </p>
          <p>
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        {children}
      </main>

      <Footer />
    </>
  );
}
