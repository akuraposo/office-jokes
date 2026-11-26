// make.fun office joke entry: writes the joke to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const joke = "I replied 'per my last email' and resent it in bold, because in this office, shouting is just a font size.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
