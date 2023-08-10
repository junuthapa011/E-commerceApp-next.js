import "./globals.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title className="text-color">Dream Labs - Shopping Made Fun</title>
      <body>{children}</body>
    </html>
  );
}
