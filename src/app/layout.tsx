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
        <html
            lang="en"
            className={`bg-white ${font.className} scrollbar-thumb-darkGray lg:scrollbar-thin`}
        >
            <head />
            <body>
                <Navbar />

                {children}
            </body>
        </html>
    );
}
