// Writes the finished one-liner to /output/entry.txt for the sealed scorer.
//
// The entry lives in line.txt next to this script. This driver reads it,
// checks it against the gate (UTF-8 text, 1 to 200 characters, not only
// whitespace, a single line), and copies it byte-for-byte into entry.txt.
// Nothing is generated or changed here: the line is the entry, as written.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The directory this module lives in, from its own URL.
const here = new URL(".", import.meta.url).pathname;

let content = readFileSync(join(here, "line.txt"), "utf8");

// Drop one trailing line break if the file carries one.
content = content.replace(/\n$/, "").replace(/\r$/, "");

// The gate: present, at most 200 characters, one line, real text.
if (content.length === 0) throw new Error("nothing to submit: line.txt is empty");
if (content.length > 200) throw new Error(`too long: ${content.length} characters, ceiling is 200`);
if (content.trim() === "") throw new Error("nothing but whitespace: the entry has no real text");
if (/[\r\n]/.test(content)) throw new Error("one line only: the entry contains a line break");

const target = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(target, { recursive: true });
writeFileSync(join(target, "entry.txt"), content, "utf8");
