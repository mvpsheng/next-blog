import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ul>
        <li><Link href="/posts/first-post">blogs</Link></li>
        <li><Link href="/author/me">about me</Link></li>
        <li><Link href="/author/contact">contact me</Link></li>
      </ul>
      <section className={utilStyles.headingMd}>
        <p>Hello, i am guo xusheng. i am a software developer.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}