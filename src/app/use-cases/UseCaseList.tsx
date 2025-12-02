import BlogCard from "@/components/blog-components/BlogCard";
import { Blog } from "@/types/blog";

export const useCases: Record<string, Blog> = {
  "gratification-abuse-prevention": {
    title: "How to prevent gratification abuse in your business?",
    description:
      "Gratification abuse is a serious problem that can cost businesses millions of dollars in fraud.",
    tags: [
      "Fraud Detection",
      "Customer Data Platform",
      "Customer Experience",
      "Instant Business Action",
      "Rule & Signal",
      "Business Strategy",
    ],
    image: "/gratification_abuse.png",
    date: "Oct 12, 2025",
    author: "Deepak",
  },
  "rewarding-healthy-habits": {
    title:
      "Rewarding Healthy Habits: Building a Smart Incentive System for Health Insurance",
    description:
      "Learn how HealthGuard Insurance built a comprehensive wellness incentive system that tracks steps, nutrition, and exercise to reward consistently healthy users with premium discounts.",
    tags: [
      "Health Insurance",
      "Wellness Incentives",
      "Real-time Tracking",
      "Customer Engagement",
      "Rule & Signal",
      "Business Strategy",
    ],
    image: "/consistent_user_rule.png",
    date: "Oct 13, 2025",
    author: "Deepak",
  },
  "secure-payment-experiment": {
    title:
      "Reducing Cart Abandonment: Building Trust Through Strategic Security Messaging",
    description:
      "Discover how targeted security messaging can reduce cart abandonment and increase conversion rates by building trust at the critical payment moment. Learn to implement A/B tests that turn your payment page from a graveyard into a goldmine.",
    tags: [
      "E-commerce",
      "Cart Abandonment",
      "Payment Security",
      "A/B Testing",
      "Conversion Optimization",
      "Customer Trust",
      "Rule & Signal",
    ],
    image: "/secure_payment_experiment.png",
    date: "Oct 14, 2025",
    author: "Deepak",
  },
  "churn-prevention-saas-app": {
    title:
      "Preventing Customer Churn: A Data-Driven Approach to Retaining High-Value SaaS Customers",
    description:
      "Discover how to predict and prevent customer churn before it happens. Learn to build a real-time churn detection system that identifies at-risk customers through spending pattern analysis and triggers automated interventions to save your most valuable relationships.",
    tags: [
      "SaaS",
      "Customer Churn",
      "Predictive Analytics",
      "Customer Retention",
      "Revenue Protection",
      "Real-time Monitoring",
      "Rule & Signal",
      "Customer Success",
    ],
    image: "/churn_prevention_rule.png",
    date: "Oct 15, 2025",
    author: "Deepak",
  },
  "llm-token-tracking": {
    title:
      "Smart Token Management: How to Prevent LLM Cost Overruns Before They Happen",
    description:
      "Stop bleeding money on uncontrolled token usage. Learn to build an intelligent token management system that automatically prevents cost overruns, tracks usage in real-time, and converts heavy users into paying customers while protecting your margins.",
    tags: [
      "LLM",
      "Token Management",
      "Cost Control",
      "Real-time Monitoring",
      "Revenue Optimization",
      "User Limits",
      "Rule & Signal",
      "AI Business Model",
    ],
    image: "/token_usage_24h.png",
    date: "Oct 16, 2025",
    author: "Deepak",
  },
};

export default function UseCaseList() {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(useCases).map(([path, blog]) => (
          <BlogCard key={path} path={path} blog={blog} basePath="/use-cases" />
        ))}
      </div>
    </section>
  );
}
