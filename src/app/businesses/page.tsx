import type { Metadata } from "next";
import BusinessesPage from "./BusinessesPage";

export const metadata: Metadata = {
  title: "Our Businesses",
  description:
    "Explore the six diverse businesses managed by Best Connect Business Group — spanning retail, hospitality, healthcare, luxury retail, water production, and cross-border trading.",
};

export default function Page() {
  return <BusinessesPage />;
}
