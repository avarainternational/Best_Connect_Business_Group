import type { Metadata } from "next";
import CareersPage from "./CareersPage";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities across Best Connect Business Group and its six managed businesses. Join our growing team in Myanmar and Thailand.",
};

export default function Page() {
  return <CareersPage />;
}
