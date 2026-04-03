# Skills Knowledge Base

Reference documents for organizing tools, methodologies, and strategies across all projects. These are living documents — updated as new tools emerge and old ones are replaced.

## Files

| File | Purpose | When to Reference |
|------|---------|-------------------|
| [use-cases.md](use-cases.md) | Maps business problems to the best tools and methodology | Starting a new project or solving a specific challenge |
| [memory.md](memory.md) | Obsidian-based knowledge management methodology | Setting up agent memory, maintaining the knowledge base |
| [roadmap.md](roadmap.md) | Tools and skills to explore, with evaluation framework | Deciding whether to adopt a new tool or skill |

## How It Works

1. **Encounter a problem** → Check `use-cases.md` for an existing solution
2. **Discover a new tool** → Add it to `roadmap.md` for evaluation
3. **Adopt a tool** → Move it from roadmap to the relevant use case
4. **Need to document a new use case** → Run `/use-case` in Claude Code

## Relationship to Claude Code Skills

These files are **reference documents**, not executable skills. Invocable Claude Code skills live in `.claude/skills/` and include:

- `/idea` — Quick capture to Mission Control
- `/use-case` — Document a new use case into `use-cases.md`
