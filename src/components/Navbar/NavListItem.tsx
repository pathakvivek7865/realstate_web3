"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavListItem = ({ title, href }: { title: string; href: string }) => {
    const pathname = usePathname();

    const splitedPaths = pathname?.split("/").filter((path) => path !== "");

    // navbar active link
    const isActiveLink = (path: string) => {
        if (path == "home" && pathname == "/") return true;
        return splitedPaths?.includes(path);
    };

    return (
        <li
            key={title}
            className={`cursor-pointer ${
                isActiveLink(title) === true
                    ? "text-primary"
                    : "text-darkGray hover:text-textBlack"
            } `}
        >
            <Link href={href}>
                <p className="first-letter:uppercase">{title}</p>
                <div
                    className={`${
                        isActiveLink(title) ? "block" : "hidden"
                    } h-0.5  rounded-md bg-primary`}
                ></div>
            </Link>
        </li>
    );
};

export default NavListItem;
