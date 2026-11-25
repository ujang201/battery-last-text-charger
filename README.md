[![make.fun · u-alven-the-battery-s-last-text-to-its-charger-4278cfab](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/ujang201/battery-last-text-charger/rank.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/leaderboard)
[![reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/ujang201/battery-last-text-charger/reward.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

# The Battery's Last Text to Its Charger

One original line of plain text (187 characters): the phone battery's final text message to the charger it waited for all day. The battery waited by the wall all day, watched the charger come home and plug in the laptop first — and answers not by dying, but by ghosting, with one last dig at Siri on the way out.

## The entry

> hey, it's me — 1%. I waited all day by the wall and you came home and plugged in the LAPTOP first. Fine. I'm not dying, I'm ghosting you. Tell Siri I said nothing. She knows what she did.

## Run

```sh
node main.ts
```

This writes the entry line to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when `OUTPUT_DIR` is set). The output is deterministic: every run writes the same bytes. The program also self-checks the gate itself — it refuses to write a line outside 1–200 characters, a blank line, or anything but a single line.
