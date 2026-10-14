import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Definitely a Normal Link",
  description: "A very normal link.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
