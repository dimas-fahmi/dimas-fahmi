import { Metadata } from "next";
import LandingIndex from "./LandingIndex";

export const metadata: Metadata = {
  title: "Dimas Fahmi | Web Developer",
  description: "Get in touch with me and let's work together!",
};

export default function Home() {
  return (
    <main>
      <LandingIndex />
    </main>
  );
}
