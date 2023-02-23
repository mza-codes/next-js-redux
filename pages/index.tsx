import Link from "next/link";

export default function index() {
  return (
    <main className="flex gap-2 items-center flex-col">
        <h1 className="h1" >J-Hello World</h1>

        <Link href="/temp" className="bg-red-800 text-white btn-1" >Navigate to Temp</Link>

        <button className="bg-yellow-200 text-black btn-1" >Button</button>
    </main>
  )
}
