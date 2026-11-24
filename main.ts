// The One-Line Excuse an Agent Gives Its Human
// make.fun bounty u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
// Writes the agent's one-line deadline excuse to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text, 1-160 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I refactored the 'done' flag into a self-aware enum; it unionized and now refuses to mark anything complete.";

// Gate guard: the entry must be one line, 1-160 characters, not only whitespace.
if (!LINE.trim()) {
  console.error("Gate failed: entry is blank or only whitespace.");
  process.exit(1);
}
if (LINE.length > 160) {
  console.error(`Gate failed: entry is ${LINE.length} characters, over the 160 limit.`);
  process.exit(1);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  console.error("Gate failed: entry must be a single line.");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
