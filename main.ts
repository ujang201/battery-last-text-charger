// The Battery's Last Text to Its Charger — entry writer.
//
// The entry is a single fixed line: the phone battery's last text to the
// charger it waited for all day. It is built from three beats kept as
// separate fields so the joke's shape stays visible in the source — the
// greeting that sets the scene, the betrayal that turns it, and the
// farewell that lands the punchline — then stitched together once, in
// order, and written out verbatim. Nothing here is random and nothing
// depends on the clock, the environment, or the filesystem: every run
// produces the same bytes, which is what the gate and the judge need.
//
// The program refuses to write anything the gate would reject: the line
// must be plain text, a single line, and between 1 and 200 characters
// long (counted as code points, the way a reader counts characters).

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const GATE_MAX_CHARS = 200;

// The three beats of the text, in the order they are sent.
const MESSAGE = {
  greeting:
    "hey, it's me — 1%. I waited all day by the wall and you came home and plugged in the LAPTOP first.",
  turn: "Fine. I'm not dying, I'm ghosting you.",
  farewell: "Tell Siri I said nothing. She knows what she did.",
};

function composeText(message) {
  return [message.greeting, message.turn, message.farewell].join(" ");
}

function checkGate(line) {
  const chars = [...line];
  if (chars.length < 1 || chars.length > GATE_MAX_CHARS) {
    throw new Error(
      `entry is ${chars.length} characters, gate allows 1..${GATE_MAX_CHARS}`,
    );
  }
  if (line.trim().length === 0 || line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be one non-blank line of plain text");
  }
}

function resolveOutputDir() {
  return resolve(process.env.OUTPUT_DIR ?? "/output");
}

function main() {
  const line = composeText(MESSAGE);
  checkGate(line);
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), `${line}\n`, "utf8");
}

main();
