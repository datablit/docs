import Link from "next/link";

export const sidebarItems = [
  {
    title: "Getting Started",
    content: (
      <ul className="space-y-1">
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/getting-started`}
            className="hover:text-gray-500 text-text-para"
          >
            Getting Started
          </Link>
        </li>
      </ul>
    ),
  },
  {
    title: "Data Ingestion",
    content: (
      <ul className="space-y-1">
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/data-ingestion`}
            className="hover:text-gray-500 text-text-para"
          >
            Data Ingestion
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/data-ingestion/event-properties-conversion`}
            className="hover:text-gray-500 text-text-para"
          >
            Event Properties Conversion
          </Link>
        </li>

        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sources`}
            className="hover:text-gray-500 text-text-para"
          >
            Sources
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/data-ingestion/key-concepts`}
            className="hover:text-gray-500 text-text-para"
          >
            Key Concepts
          </Link>
        </li>
      </ul>
    ),
  },

  {
    title: "Datablit Sources",
    content: (
      <ul className="space-y-1">
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sources/js`}
            className="hover:text-gray-500 text-text-para"
          >
            Javascript
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sources/kotlin`}
            className="hover:text-gray-500 text-text-para"
          >
            Kotlin
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sources/swift`}
            className="hover:text-gray-500 text-text-para"
          >
            Swift
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sources/facebook-lead-ads`}
            className="hover:text-gray-500 text-text-para"
          >
            Facebook Lead Ads
          </Link>
        </li>
      </ul>
    ),
  },
  {
    title: "Rule and Signal",
    content: (
      <ul className="space-y-1">
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/rule-signal/signal`}
            className="hover:text-gray-500 text-text-para"
          >
            Signal
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/rule-signal/create-signal`}
            className="hover:text-gray-500 text-text-para"
          >
            Create Signal
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/rule-signal/rule`}
            className="hover:text-gray-500 text-text-para"
          >
            Rule
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/rule-signal/create-rule`}
            className="hover:text-gray-500 text-text-para"
          >
            Create Rule
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/rule-signal/logical-expression`}
            className="hover:text-gray-500 text-text-para"
          >
            Logical Expression
          </Link>
        </li>
      </ul>
    ),
  },
  {
    title: "Experiment",
    content: (
      <ul className="space-y-1">
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/experiment`}
            className="hover:text-gray-500 text-text-para"
          >
            Create Experiment
          </Link>
        </li>
      </ul>
    ),
  },
];
