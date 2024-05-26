import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};
export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}
