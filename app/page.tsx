import Lander from "@/components/Lander";
import Section from "@/components/section";
import Image from "next/image";

export default function Home() {
  return (
      <>
        <Lander />
        <Section />
        <Lander />
        <Section />
      </>
  );
}
