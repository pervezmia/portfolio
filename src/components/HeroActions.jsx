"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { ArrowRight, FileArrowDown} from '@gravity-ui/icons';

export function HeroActions() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <Link href="#projects">
        <Button variant="primary" size="lg">
          View my work
          <ArrowRight />
        </Button>
      </Link>

      <Link href="/resume.pdf" target="_blank">
        <Button variant="outline" size="lg">
          <FileArrowDown />
          Resume
        </Button>
      </Link>
    </div>
  );
}