export const metadata = {
  title: "Dev Site",
  description: "Minimal dev site that consumes @noahwright/design-system",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/theme.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
