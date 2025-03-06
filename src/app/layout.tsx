import Toolbar from "@/shared/components/Toolbar";
import { Container } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная страница",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>
          <main>{children}</main>
        </Container>
        <Toolbar/>
        <footer></footer>
      </body>
    </html>
  );
}