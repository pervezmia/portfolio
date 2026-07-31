"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
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
    <Button variant="outline" size="md" onPress={handleCopy}>
      {copied ? <Check /> : <Copy />}
      {copied ? "Copied" : "Copy email"}
    </Button>
  );
}