"use client";
import React, { useState } from "react";
import { Copy } from "lucide-react"; // Optional icon

function CodeBlock({ children }: any) {
  const [copied, setCopied] = useState<boolean>(false);

  const codeElement = children.props;
  const language = codeElement?.className?.replace("language-", "") || "text";
  const code = codeElement?.children.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-surface rounded-md p-4 my-4 overflow-auto ">
      <div className="absolute top-2 left-3 text-xs font-mono text-text-para">
        {language}
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-3 text-xs hover:text-gray-500 text-text-para"
      >
        {copied ? "Copied" : <Copy size={14} />}
      </button>
      <pre className="mt-6 text-sm text-text-para whitespace-pre-wrap">
        <code className={codeElement?.className}>{code}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
