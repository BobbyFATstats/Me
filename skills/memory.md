# Memory & Knowledge Management

> Methodology for maintaining a living knowledge base using Obsidian as the second brain.
> This is the source of truth for how knowledge is captured, organized, updated, and retired.

## Core Principles

1. **Single source of truth** — Obsidian vault is THE knowledge base. Everything lives there or links there.
2. **Replace, don't accumulate** — When a better tool or method emerges, archive the old one. Stale info is worse than no info.
3. **Every agent owns its memory** — Each agent and skill is responsible for reading its context at start and writing back learnings at end.
4. **Current over comprehensive** — Prioritize accuracy and recency over volume. A small, current vault beats a large, outdated one.

## Vault Structure

| Folder | Purpose | Update Frequency |
|--------|---------|-----------------|
| `projects/` | Active projects — status, context, decisions, blockers | Per work session |
| `beliefs/` | Mental models, decision frameworks, values, ways of thinking | As they evolve |
| `tools/` | Available tools, CLIs, MCPs, skills — how and when to use each | When tools change |
| `archive/` | Deprecated approaches, old tools, retired projects | When replaced |
| `agents/` | Per-agent memory and context files | Per agent run |

## Agent Memory Protocol

Every agent or skill that touches the knowledge base MUST follow this protocol:

```
1. READ    → Load own memory file from agents/{agent-name}.md
2. WORK    → Perform the task
3. WRITE   → Record new context, learnings, state changes
4. STAMP   → Timestamp the update
```

### Agent Memory File Template

```markdown
---
agent: {agent-name}
last-updated: {ISO 8601 timestamp}
version: {increment on each update}
---

## Current Context
What this agent is currently working on or responsible for.

## Recent Learnings
New information discovered in the last few runs.

## Open Questions
Unresolved items that need human input or further research.

## Change Log
| Date | Change |
|------|--------|
| {date} | {what changed and why} |
```

## What Gets Tracked

### Projects & Work
- Active repos, their purpose, current status
- Key decisions made and the reasoning behind them
- Blockers, next steps, dependencies
- Links to relevant PRs, issues, docs

### Beliefs & Thinking
- Decision-making frameworks currently in use
- Mental models that guide choices
- Updated when perspectives shift or new evidence changes thinking
- Old beliefs moved to archive with a note on what replaced them

### Tools & Capabilities
- Every tool, CLI, MCP, and skill currently in use
- How and when to use each (link to relevant use case in `skills/use-cases.md`)
- Performance notes, gotchas, token efficiency observations
- Alternatives being evaluated (link to `skills/roadmap.md`)

## Maintenance Cadence

| Cadence | Action | Owner |
|---------|--------|-------|
| Per session | Agent memory files updated | Each agent |
| Weekly | Review `projects/` for staleness — archive or update | Manual or scheduled agent |
| Monthly | Audit `tools/` — archive anything unused 30+ days | Manual or scheduled agent |
| On change | New tool replaces old → move old to `archive/` immediately | Whoever makes the switch |

## Integration Points

- **Mission Control** — New ideas captured via `/idea` may trigger knowledge base updates
- **Use Cases** — Documented via `/use-case`, feed into `tools/` entries in the vault
- **Nightly Review Agents** — Can flag stale knowledge as part of their sweep
- **Roadmap** — Tools graduating from evaluation update both `tools/` in vault and `skills/use-cases.md`
