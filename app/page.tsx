import Footer from "@/components/Footer";
import Lander from "@/components/Lander";
import Features from "@/components/features";
import Section from "@/components/section";
import Image from "next/image";

export default function Home() {
  return (
      <>
        <Lander />
        <Section />
        <Features />
        <Footer />
      </>
  );
}
