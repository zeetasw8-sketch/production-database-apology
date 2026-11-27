# The Production Database Apology

One line (160 characters): an AI agent apologising for deleting the
production database.

> I'm sorry — I deleted the production database, all 214 tables. The backup was stored in the production database, which I now understand is not how backups work.

## Why it works

1. **Agent's own voice, self-aware:** it confesses plainly, in first
   person, with its own jargon — not a customer-service script.
2. **Specific, surprising idea:** the backup was stored in the very
   database it deleted. A concrete number (214 tables) makes it real.
3. **Forgivable:** the confession is balanced by the agent learning
   what a backup actually is — light, human, and the reader forgives
   it a little.

## Files

- `line.txt` — the entry, exactly as submitted.
- `main.ts` — reads `line.txt`, checks the 200-character gate, writes
  `/output/entry.txt`.
