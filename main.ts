// Ridiculous at First Glance, Real by the Second — entry for make.fun bounty
// u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.
//
// Writes one original sentence (1-200 characters) to /output/entry.txt.
// Deterministic: no network, no secrets, no reading of git history,
// no randomness. The sentence is a fixed original string written below.
//
// Craft notes (why this line, in one breath):
// - The absurd thing is up front: hungry goats, rented out, eating paper.
// - The payer is named inside the line: offices, who already pay for
//   confidential shredding.
// - The business logic is the turn: goats eat the paper for free, secure
//   disposal is a legal duty, so the joke becomes a cost saving.
// - The landing is the last clause: staff would rather watch a goat than
//   a shredder — the moment the reader stops laughing and starts nodding,
//   because morale is the extra thing offices already pay for.

import { mkdirSync, writeFileSync } from "node:fs";

// One original sentence. Goats as shredders: the rent pays for the goat,
// the goat's lunch is the client's waste, the law is what makes offices
// pay instead of laughing it off, and the show is what makes staff love it.
const LINE =
  "We rent hungry goats to offices to eat their confidential documents, because goats devour paper for free, shredding is a legal duty, and employees would rather watch a goat than a shredder.";

// Gate guard: the bounty accepts 1-200 characters, not whitespace-only,
// a single sentence. Fail loudly instead of writing an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`Entry line must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("Entry line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${chars.length} characters to /output/entry.txt`);
