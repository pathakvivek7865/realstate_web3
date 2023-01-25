"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Breadcrumb = () => {
    const pathname = usePathname();

    const splitedPaths = pathname?.split("/").filter((path) => path !== "");

    return (
        <nav className="w-full mt-4 ">
            <ol className="flex items-center list-reset ">
                <li>
                    <Link
                        href="/"
                        className="font-semibold text-gray-800 hover:text-primary"
                    >
                        Home
                    </Link>
                </li>

                {splitedPaths?.map((path, index) => {
                    const isLast = index === splitedPaths.length - 1;

                    return (
                        <>
                            <li key={path} className="flex items-center">
                                <ChevronRightIcon className="w-5 h-5 text-darkGray" />
                                <a
                                    href="#"
                                    className={`${
                                        isLast
                                            ? "text-gray-500"
                                            : "text-gray-800 hover:text-primary"
                                    }`}
                                >
                                    <p>{path}</p>
                                </a>
                            </li>
                        </>
                    );
                })}
            </ol>
        </nav>
    );
};
