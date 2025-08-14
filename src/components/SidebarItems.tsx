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
            className="hover:text-gray-900"
          >
            Data Ingestion
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/data-ingestion/event-properties-conversion`}
            className="hover:text-gray-900"
          >
            Event Properties Conversion
          </Link>
        </li>

        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sdk`}
            className="hover:text-gray-900"
          >
            SDK
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/data-ingestion/key-concepts`}
            className="hover:text-gray-900"
          >
            Key Concepts
          </Link>
        </li>
      </ul>
    ),
  },

  {
    title: "Datablit SDK",
    content: (
      <ul className="space-y-1">
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sdk/js`}
            className="hover:text-gray-900"
          >
            Datablit JS
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sdk/kotlin`}
            className="hover:text-gray-900"
          >
            Datablit Kotlin
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sdk/swift`}
            className="hover:text-gray-900"
          >
            Datablit Swift
          </Link>
        </li>
      </ul>
    ),
  },
  {
    title: "Signal",
    content: (
      <ul className="space-y-1">
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/signal`}
            className="hover:text-gray-900"
          >
            Signal
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/signal/signal-concepts`}
            className="hover:text-gray-900"
          >
            Key Concepts
          </Link>
        </li>
      </ul>
    ),
  },
  {
    title: "Rule",
    content: (
      <ul className="space-y-1">
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/rule`}
            className="hover:text-gray-900"
          >
            Rule
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/rule/logical-expression`}
            className="hover:text-gray-900"
          >
            Logical Expression
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/rule/rule-concepts`}
            className="hover:text-gray-900"
          >
            Key Concepts
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
            className="hover:text-gray-900"
          >
            Experiment
          </Link>
        </li>
        <li>
          <Link
            href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/experiment/experiment-concepts`}
            className="hover:text-gray-900"
          >
            Key Concepts
          </Link>
        </li>
      </ul>
    ),
  },
];
