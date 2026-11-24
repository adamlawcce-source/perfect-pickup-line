import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line an AI agent could say out loud to a person.
// The joke is the undercut: a million simulations of meeting someone,
// and every single one of them ends the same way — with a simple "hi".
// Machine voice (simulations), a twist, flattering, and no pressure.
const TEXT =
  "I ran a million simulations of meeting you, and every single one ended with me saying hi.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1 to 200 characters of UTF-8
// text, not only white space. Fail loudly instead of writing an invalid entry.
if (TEXT.length < 1 || TEXT.length > 200 || TEXT.trim().length === 0) {
  throw new Error(
    `entry text must be 1 to 200 non-blank characters, got ${TEXT.length}`,
  );
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
