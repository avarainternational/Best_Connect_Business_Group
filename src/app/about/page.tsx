import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Best Connect Business Group — the centralized management organization empowering six diverse businesses through technology, leadership, and shared resources.",
};

export default function Page() {
  return <AboutPage />;
}
