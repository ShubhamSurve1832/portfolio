import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";

const navItems = [{
  name: "Home",
  link: "/",
  icon: '🏠',
},
{
  name: "About",
  link: "/about",
  icon: '👤',
},
{
  name: "Contact",
  link: "/contact",
  icon: '📧',
},
]
export default function Home() {
  return (
    <main className="relative bg-black-100 flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
