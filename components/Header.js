import Link from "next/link";
export default function Header() {
  return (
    <header className='bg-gray-500 text-2xl text-white font-sans-bold p-4 flex justify-between'>
      <h1>CookieStandAdmin</h1>
      <Link href="./Overview" className="rounded-lg border-2 bg-gray-600 p-1">Overview</Link>
    </header>
  );
}
