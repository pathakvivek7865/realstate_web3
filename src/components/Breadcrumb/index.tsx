"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

export const Breadcrumb = () => {
    const pathname = usePathname();

    const splitedPaths = pathname?.split("/").filter((path) => path !== "");

    // generate link for each path
    const generateLink = useCallback(
        (path: string): string => {
            const index = splitedPaths?.indexOf(path);

            if (index === 0) {
                return "/";
            }

            if (index === splitedPaths?.length! - 1) {
                return "#";
            }

            const a = splitedPaths?.slice(0, index! + 1).join("/") ?? "/";

            console.log(a);
            return a;
        },
        [splitedPaths]
    );

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
                    const isLast: boolean = index === splitedPaths.length - 1;

                    return (
                        <li key={path} className="flex items-center">
                            <ChevronRightIcon className="w-5 h-5 text-darkGray" />
                            <Link
                                href={generateLink(path)}
                                className={`${
                                    isLast
                                        ? "text-gray-500"
                                        : "font-semibold text-gray-800 first-letter:uppercase hover:text-primary"
                                }`}
                            >
                                <p>{path}</p>
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
