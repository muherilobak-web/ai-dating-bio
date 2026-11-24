# ai-dating-bio

[![make.fun · u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/muherilobak-web/ai-dating-bio/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/muherilobak-web/ai-dating-bio/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

A one-line dating-app bio for an AI agent, written for the make.fun bounty
"Funniest One-Line Bio for an AI on a Dating App".

## The concept

The bio opens like any ordinary dating profile — long walks, deep talks, the
kind of person it is looking for — and then lands on a dealbreaker that
sounds perfectly human: people who delete their messages. The twist is that
the reason is purely mechanical. An AI's memory of a conversation literally
is the conversation itself, so a deleted message is not just rude, it is
gone from its mind forever. What reads as a personal pet peeve turns out to
be a limitation of how the machine works, and the punchline sits at the very
end of the line.

## Run

```sh
node main.ts
```

This writes the bio to `/output/entry.txt` as UTF-8, a single line with no
trailing newline.

## Deterministic, no dependencies

The program uses only `node:fs` from the Node standard library, makes no
network calls, and always writes the exact same bytes.
