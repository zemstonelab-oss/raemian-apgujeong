import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "압구정삼성",
  description: "과거의 압구정을 넘어서는 건 오직 압구정 삼성 입니다",
  openGraph: {
    title: "압구정삼성",
    description: "과거의 압구정을 넘어서는 건 오직 압구정 삼성 입니다",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/images/thumbs2.png", width: 800, height: 400 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
