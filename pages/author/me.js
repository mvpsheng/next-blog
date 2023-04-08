import Link from 'next/link';

export default function Me() {
  return (
    <>
      <h1>About me</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h2>What i like to do</h2>
      <ul>
        <li>Basketball</li>
        <li>Video Games</li>
        <li>Movies</li>
      </ul>
    </>
  );
}