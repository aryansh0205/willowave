import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Willow Wave",
  description:
    "Willow Wave Agency empowers businesses with branding, web design, social media, and graphic design, creating standout identities and impactful marketing.",
  // Correct the path to the image
  icons: {
    icon: "/favicon.svg", // Refer to it from the root of the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          {/* Manrope font */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&display=swap"
          />
          {/* Calistoga font */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Calistoga&display=swap"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
