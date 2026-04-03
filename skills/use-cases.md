# Use Cases

> Maps business problems to the best tools, skills, and methodologies.
> Living document — updated as new tools emerge and old ones are deprecated.
> Use `/use-case` in Claude Code to add new entries.

## Format Guide

Each use case follows this structure for consistent AI parsing:

- **ID**: Unique lowercase hyphenated slug
- **Problem**: What you're trying to solve
- **Tools**: Ranked table with role (`primary` | `secondary` | `exploring`) and notes
- **Methodology**: Step-by-step approach
- **Status**: `active` | `exploring` | `deprecated`
- **Last Reviewed**: Date of last review

---

## Active Use Cases

### nightly-code-review

**Problem**: Code quality degrades over time without consistent review. Need automated nightly sweeps across all repos that find cleanup opportunities, suggest improvements, create PRs with fixes, and deliver a morning brief summarizing everything.

**Tools**:

| Tool | Role | Notes |
|------|------|-------|
| Claude Code (agent teams) | Primary | Multi-agent orchestration — one agent per repo for analysis and fixes |
| Cron / GitHub Actions | Primary | Schedule nightly triggers (~2am) |
| GitHub MCP | Supporting | PR creation, issue management, commenting |
| CI/CD pipelines | Supporting | Validate fixes pass tests before PR |

**Methodology**:

1. Scheduled trigger kicks off agent team nightly
2. Each agent pulls the latest for its assigned repo
3. Analysis pass: lint issues, dead code, type improvements, test coverage gaps, dependency updates
4. For each actionable finding: create branch, apply fix, open PR with explanation
5. Compile morning brief: summary of all PRs created, findings, metrics, recommendations
6. Deliver brief via preferred channel (Mission Control dashboard, email, or Slack)

**Open Questions**:
- Agent teams may only be available in Claude Code terminal — need to confirm scheduling options
- Determine if GitHub Actions or a standalone cron job is better for triggering
- Define severity thresholds (what warrants an auto-PR vs. just a recommendation)

**Status**: exploring
**Last Reviewed**: 2026-04-03

---

### ui-ux-qa-testing

**Problem**: Web apps, mobile apps, and landing pages ship with UI/UX issues — broken layouts, poor mobile experience, accessibility gaps, visual regressions. Need an automated QA assistant that catches these before users do, provides screenshots, detailed bug reports, and actionable fix recommendations.

**Tools**:

| Tool | Role | Notes |
|------|------|-------|
| Playwright CLI | Primary | Browser automation, screenshots, assertions, cross-browser testing |
| Komos MCP | Exploring | Evaluate as alternative/complement to Playwright — compare token efficiency, issue detection quality, recommendation depth |
| Claude Code | Supporting | Analyze screenshots, generate structured bug reports, suggest CSS/layout fixes |

**Methodology**:

1. Define critical user flows per app (signup, checkout, key pages)
2. Playwright scripts navigate each flow, capture screenshots at every step
3. AI analyzes screenshots for visual regressions, layout breaks, accessibility issues, UX problems
4. Generate structured report per finding: screenshot, description, severity, file/component location, recommended fix
5. Post results to repo issues or Mission Control dashboard
6. For Komos MCP evaluation: run same test suite through both tools, compare results side by side

**Open Questions**:
- Komos MCP documentation and setup — need to evaluate capabilities vs Playwright
- Best approach for mobile testing (real devices vs emulation)
- How to maintain test scripts as UI evolves

**Status**: exploring
**Last Reviewed**: 2026-04-03

---

### memory-knowledge-management

**Problem**: Knowledge goes stale. Tools change. Without active maintenance, the knowledge base becomes unreliable and agents make decisions on outdated information. Need a systematic approach to keeping everything current — projects, tools, beliefs, methodologies.

**Tools**:

| Tool | Role | Notes |
|------|------|-------|
| Obsidian | Primary | Vault-based knowledge management — the second brain |
| Claude Code skills | Supporting | Automated memory updates per agent/skill |
| Mission Control | Supporting | Track and trigger knowledge maintenance tasks |

**Methodology**:

1. See `skills/memory.md` for full protocol
2. Every agent reads its memory file at start, writes back learnings at end
3. Weekly review of projects for staleness
4. Monthly audit of tools — archive anything unused for 30+ days
5. When a new tool replaces an old one, archive the old immediately with a note on why

**Status**: active
**Last Reviewed**: 2026-04-03

---

## Archive

> Deprecated use cases and approaches. Kept for context on why they were replaced.
> Format: move the full use case here, add `**Deprecated**: {date}` and `**Replaced By**: {new approach}`.

_No archived use cases yet._
