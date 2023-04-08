import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <h1>Contact me</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h2>Ways to contact</h2>
      <ul>
        <li>Github: mvpsheng</li>
        <li>Email: 2711136701@qq.com</li>
        <li>Mobile: 180-8227-1617</li>
      </ul>
    </>
  );
}