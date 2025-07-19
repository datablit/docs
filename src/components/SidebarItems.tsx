import Link from "next/link";

export const sidebarItems = [
  {
    title: "Getting Started",
    content: (
      <ul className="space-y-1">
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/getting-started`}
            className="hover:text-gray-900"
          >
            Getting Started
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/analytics-sdk`}
            className="hover:text-gray-900"
          >
            SDK
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/getting-started/data-signal`}
            className="hover:text-gray-900"
          >
            DataSignal
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/getting-started/rule`}
            className="hover:text-gray-900"
          >
            Rule
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/getting-started/logical-expression`}
            className="hover:text-gray-900"
          >
            Logical Expression
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/getting-started/event-properties-conversion`}
            className="hover:text-gray-900"
          >
            Event properties conversion
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/getting-started/experiment`}
            className="hover:text-gray-900"
          >
            Experiment
          </Link>
        </li>
      </ul>
    ),
  },
  {
    title: "Analytics SDK",
    content: (
      <ul className="space-y-1">
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/analytics-sdk/js`}
            className="hover:text-gray-900"
          >
            Analytics js
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/analytics-sdk/kotlin`}
            className="hover:text-gray-900"
          >
            Analytics kotlin
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/analytics-sdk/swift`}
            className="hover:text-gray-900"
          >
            Analytics swift
          </Link>
        </li>
      </ul>
    ),
  },
];
