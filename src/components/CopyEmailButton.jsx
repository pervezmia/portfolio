"use client";

import { useState } from "react";
import { Copy, Check } from "@gravity-ui/icons";

export function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard permission denied — user can still select the text manually
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3.5 py-1.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-white"
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}