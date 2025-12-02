import { ReactNode } from "react";

export type Blog = {
    title: string;
    description: string | ReactNode;
    tags: string[];
    image?: string;
    data?: ReactNode;
    date: string;
    author: string;
};

