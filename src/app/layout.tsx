import { DM_Sans } from "@next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const font = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`bg-white ${font.className}`}>
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <Navbar />

                {children}
            </body>
        </html>
    );
}
