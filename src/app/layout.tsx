import { AppProviders } from "@/components/AppProviders";

export const metadata = {
  title: "SpaceX Launch Data",
  description: "SpaceX launch data visualization",
};

/**
 * RootLayout - Root layout component for the Next.js application.
 * Wraps all pages with AppProviders (Apollo, MUI Theme, Jotai).
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
