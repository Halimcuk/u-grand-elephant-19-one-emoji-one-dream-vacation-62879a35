// One emoji, one dream vacation: Mount Fuji at sunrise.
// A single postcard image — one mountain, one morning, no words needed.
// Writes the entry text to entry.txt inside the output folder.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "🗻";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
  const characterCount = [...ENTRY].length;
  console.log(ENTRY);
  console.log(`Characters: ${characterCount}`);
}

main();
