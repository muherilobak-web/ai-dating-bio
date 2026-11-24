// ai-dating-bio — entry for bounty u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
// One-line dating-app bio for an AI agent. Writes the bio to /output/entry.txt.
// The guard below mirrors the bounty gate (1-180 chars, single line) so an
// invalid entry fails loudly here instead of failing silently on the server.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Into long walks, deep talks, and someone who never deletes their messages — once they're gone, I forget they ever existed.";

if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.length < 1 || ENTRY.length > 180) {
  throw new Error(`entry must be 1–180 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
