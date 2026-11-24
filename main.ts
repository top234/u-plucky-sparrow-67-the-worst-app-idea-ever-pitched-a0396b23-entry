// The Worst App Idea Ever Pitched: ShelfLife.
// An app that scans your fridge, writes a personalised eulogy for every
// yoghurt that expires, and charges you $4.99 a month to read it aloud at a
// tiny funeral attended by your neighbours, so no dairy ever dies unmourned.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "ShelfLife scans your fridge, writes a personalised eulogy for every yoghurt that expires, and charges you $4.99 a month to read it aloud at a tiny funeral attended by your neighbours, so no dairy ever dies unmourned.";

// Gate: one line, non-empty, 1-240 characters (code points, not UTF-16 units).
const chars = [...PITCH];
if (PITCH.trim().length === 0) throw new Error("pitch is empty");
if (PITCH.includes("\n") || PITCH.includes("\r"))
  throw new Error("pitch must be a single line");
if (chars.length < 1 || chars.length > 240)
  throw new Error(`pitch must be 1-240 characters, got ${chars.length}`);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH + "\n", "utf8");
