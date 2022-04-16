import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegCopy, FaRegClipboard } from "react-icons/fa";
import Prism from "prismjs";

interface CodeBlockProps {
  className: string;
  children: string;
}

const CodeBlock = ({ className = "lang-js", children }: CodeBlockProps) => {
  const language = className.replace("lang-", "");

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <div className="flex flex-col">
      <pre>
        <code className={`language-${language}`}>{children}</code>
      </pre>

      <CopyToClipboard text={children} onCopy={() => setIsCopied(true)}>
        <button className="flex self-center">
          {isCopied ? (
            <FaRegClipboard className="mx-2 self-center" />
          ) : (
            <FaRegCopy className="mx-2 self-center" />
          )}{" "}
          {isCopied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CodeBlock;
