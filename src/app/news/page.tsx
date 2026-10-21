import type { Metadata } from "next";
import NewsPage from "./NewsPage";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news, announcements, and updates from Best Connect Business Group and its portfolio of businesses.",
};

export default function Page() {
  return <NewsPage />;
}
