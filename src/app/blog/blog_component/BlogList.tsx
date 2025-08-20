import { ReactNode } from "react";
import BlogCard from "./BlogCard";

export type Blog = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  data?: ReactNode;
  date: string;
  author: string;
};

export const blogs: Record<string, Blog> = {
  "customer-data": {
    title: "How to turn every interaction into a competitive edge?",
    description:
      "Ingest, unify & build rules and signals in a single platform to power personalised customer experiences. Take real-time personalised action at scale and collaborate better across team for smooth decision",
    tags: [
      "Customer Data Platform",
      "Data Ingestion",
      "Collaborate",
      "Personalised Experience",
    ],
    image: "/graph.png",
    date: "August 12, 2025",
    author: "Garima",
  },
  "why-datablit": {
    title: "How to Turn Customer Data into Instant Business Action?",
    description:
      "With Datablit as the central platform, data engineer, developer, and business team can self serve — accessing and acting on data the instant it’s created. The result is faster strategy execution, scalable personalisation and more reliable insights at a fraction of the time and cost.",
    tags: [
      "Customer Data Platform",
      "Customer Experience",
      "Instant Business Action",
      "Rule & Signal",
      "Business Strategy",
    ],
    image: "/datasystem.svg",
    date: "August 11, 2025",
    author: "Garima",
  },
};

export default function BlogList() {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(blogs).map(([path, blog]) => (
          <BlogCard key={path} path={path} blog={blog} />
        ))}
      </div>
    </section>
  );
}

// "How to Turn Customer Data into Real-Time Personalised Customer Experience at Scale?",
