import { Container } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Главная страница2",
};

export default function TaskLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Container>
            {children}
        </Container>
    );
}