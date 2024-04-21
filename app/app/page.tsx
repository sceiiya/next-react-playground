import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Konnichiwa Sekai ie</h1>
        <a href="/users">Boom boom USerSz@!</a>
        <Link href="/users" className="bold text-lg"> Ded Backudan Users </Link>
        <ProductCard />
      <h2>Konbanha</h2>
    </main>
  )
}
