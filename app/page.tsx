import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Innovation } from "@/components/innovation";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Innovation />
    </main>
  );
}
