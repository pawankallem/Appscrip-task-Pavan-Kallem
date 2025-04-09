import Layout from '@/components/Layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/shop');
  }, [router]);
  return (
    <Layout
      title="Home – Lorem Ipsum Dolor"
      description="Welcome to the Lorem Ipsum Dolor homepage!"
      schema={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Home",
        "url": "https://your-deployed-url/",
      }}
    >
      {/* <h1>Lorem Ipsum Dolor</h1>
      <h2>Welcome Home!</h2>
      <p>This is the homepage content.</p> */}
    </Layout>
  );
}
