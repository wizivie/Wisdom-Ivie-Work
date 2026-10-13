"use client";
import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-text transition-colors hover:border-text"
    >
      <Printer size={14} /> Print
    </button>
  );
}
