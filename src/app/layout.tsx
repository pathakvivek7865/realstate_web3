import { Epilogue } from "@next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Epilogue({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`bg-white ${inter.className}`}>
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
