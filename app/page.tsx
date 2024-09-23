import Image from "next/image";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <h1 className="text-9xl">Hello World</h1>
        <Hero />
      </div>
    </main>
  );
}
