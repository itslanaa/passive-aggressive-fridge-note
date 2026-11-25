import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The note the fridge leaves on its door screen.
const note =
  "I've kept your salad cold for a week. You've opened me 40 times looking for something better. It's still salad.";

// The bounty gate: the text must be 1 to 200 characters, not only whitespace.
if (note.length < 1 || note.length > 200 || note.trim().length === 0) {
  throw new Error(`Entry must be 1-200 non-blank characters, got ${note.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), note, "utf8");
console.log(`Wrote entry.txt (${note.length} chars) to ${outDir}`);
