import type { Metadata } from "next";
import SharedServicesPage from "./SharedServicesPage";

export const metadata: Metadata = {
  title: "Shared Services",
  description:
    "Discover how Best Connect Business Group operates — centralized management, digital workflows, and technology infrastructure powering six diverse businesses.",
};

export default function Page() {
  return <SharedServicesPage />;
}
