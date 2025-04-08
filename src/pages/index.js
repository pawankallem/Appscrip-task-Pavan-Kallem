import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lorem Ipsum Dolor – Sample Project for SEO</title>
        <meta
          name="description"
          content="Explore the SEO-ready Lorem Ipsum Dolor project with semantic headings, schema markup, and image optimization."
        />
        
        {/* <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Lorem Ipsum Dolor",
              "description": "Explore the SEO-ready Lorem Ipsum Dolor project with semantic headings, schema markup, and image optimization.",
              "url": "https://yourdomain.com/"
            }
          `}
        </script> */}
      </Head>

      <main className="p-8 max-w-3xl mx-auto">
        <h1>Lorem Ipsum Dolor</h1>
        <h2>Why SEO Matters in Modern Web Development</h2>
        <p>
          This is a sample project to demonstrate how SEO can be implemented in a Next.js application using basic techniques like meta tags, heading tags, and structured data.
        </p>

        {/* <section className="mt-6">
          <h2>Example: Image Optimization</h2>
          <img
            src="/images/seo-best-practices.png"
            alt="Diagram showing best SEO practices like title, description, and headings"
            width={600}
            height={400}
          />
        </section> */}
      </main>
    </>
  );
}
