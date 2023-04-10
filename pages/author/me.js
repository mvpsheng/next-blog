import Link from 'next/link';
import Layout from '../../components/layout';

export default function Me() {
  return (
    <Layout>
      <h1>About me</h1>
      <h2>What i like to do</h2>
      <ul>
        <li>Basketball</li>
        <li>Video Games</li>
        <li>Movies</li>
      </ul>
    </Layout>
  );
}