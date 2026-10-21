import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Best Connect Business Group and our subsidiary businesses. Centralized inquiry routing for corporate, B2B, investment, healthcare, and career inquiries.",
};

export default function Page() {
  return <ContactPage />;
}
