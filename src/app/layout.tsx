import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Layout from "@/components/site-layout";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SnapQuest – Hack Your Brain. Level Up Your Life.",
  description:
    "SnapQuest turns your daily habits into real-life quests with smart contract-secured stakes, AI-powered nudges, and AR check-ins. Built for ambitious people who want to make lasting change.",
  openGraph: {
    title: "SnapQuest – Hack Your Brain. Level Up Your Life.",
    description:
      "SnapQuest turns your daily habits into real-life quests with smart contract-secured stakes, AI-powered nudges, and AR check-ins. Built for ambitious people who want to make lasting change.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapQuest – Hack Your Brain. Level Up Your Life.",
    description:
      "SnapQuest turns your daily habits into real-life quests with smart contract-secured stakes, AI-powered nudges, and AR check-ins. Built for ambitious people who want to make lasting change.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
