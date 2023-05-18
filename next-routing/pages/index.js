import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Clicked the button');
    router.push('/product'); // router.replace('/product')
  }

  return (
  <>
    <h2>Home page</h2>
    <ul>
      <li><Link href="/product">Product</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/profile">Profile</Link></li>
    </ul>
    <button onClick={handleClick}>Order now</button>
  </>
  );
}