import { Breadcrumb } from "@/components/Breadcrumb";

export default function ProperytDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Breadcrumb />
            {children}
        </>
    );
}
