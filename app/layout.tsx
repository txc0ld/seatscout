import type { Metadata, Viewport } from "next";
import "../src/styles.css";

export const metadata: Metadata = {
  title: "SeatScout",
  description: "SeatScout maps sections, sightlines, and seat quality across major stadiums and arenas worldwide.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07070c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
