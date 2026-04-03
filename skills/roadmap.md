# Roadmap

> Tools, skills, MCPs, and capabilities to explore. Evaluated with a consistent framework before adoption.
> When something graduates, it moves to `skills/use-cases.md` under the relevant use case.

## Evaluation Framework

Before adopting any new tool, score it on these criteria:

| Criteria | Weight | Score (1-5) |
|----------|--------|-------------|
| Solves a real current problem | 30% | |
| Better than what we have now | 25% | |
| Integration effort (lower = better) | 20% | |
| Maintenance burden (lower = better) | 15% | |
| Community / support quality | 10% | |

- **Adopt**: Weighted score >= 3.5
- **Keep evaluating**: Score 2.5 – 3.4
- **Archive**: Score < 2.5

## Exploring

### Context7 Skill

- **What**: MCP that provides up-to-date library documentation directly to AI during coding
- **Why**: Reduces hallucinated API usage, ensures code generation uses current APIs
- **When to use**: Any coding task involving third-party libraries or frameworks
- **Evaluate**: Token cost, accuracy vs reading docs manually, coverage of libraries we use
- **Status**: evaluate

### Superpowers Skill

- **What**: Extended Claude Code capabilities beyond standard toolset
- **Why**: Broader automation options for complex workflows
- **When to use**: When standard skills hit their limits on ambitious tasks
- **Evaluate**: What specific capabilities it adds, overlap with existing tools
- **Status**: evaluate

### Front-End Design Skill

- **What**: AI-assisted UI and component design workflow
- **Why**: Faster iteration on Mission Control UI, landing pages, and other front-end work
- **When to use**: Building new pages, components, or redesigning existing UI
- **Evaluate**: Quality of generated designs, integration with Tailwind/React workflow
- **Status**: evaluate

### Agent Teams (Claude Code)

- **What**: Multi-agent orchestration — specialized agents working in concert
- **Why**: Complex tasks benefit from division of labor (one agent reviews, one fixes, one reports)
- **When to use**: Nightly code review, large refactors, multi-repo operations
- **Evaluate**: Terminal-only limitation, scheduling options, cost per run
- **Status**: evaluate

### Komos MCP

- **What**: QA/testing MCP — alternative to Playwright CLI for UI/UX testing
- **Why**: Potentially more token-efficient and better at detecting issues
- **When to use**: UI/UX QA testing (see use case `ui-ux-qa-testing`)
- **Evaluate**: Side-by-side comparison with Playwright CLI on same test suite
- **Status**: evaluate

## Backlog

Ideas worth investigating but not yet in active evaluation:

- Automated Obsidian sync from agent outputs
- Slack/Discord integration for morning briefs
- Voice capture skill (dictate ideas hands-free)
- Mobile-optimized Mission Control PWA
- Financial analysis agent for park acquisition deal evaluation
- Automated dependency update agent (Dependabot alternative with AI review)
- Screenshot diff testing for visual regression detection

## Adopted

Tools that passed evaluation and are now in active use.

| Tool | Adopted | Replaced | Use Case | Score |
|------|---------|----------|----------|-------|
| Obsidian | 2026-04-03 | Scattered notes | `memory-knowledge-management` | — |
| Playwright CLI | 2026-04-03 | Manual QA | `ui-ux-qa-testing` | — |
| Claude Code `/idea` | 2026-04-03 | Manual item entry | Quick capture to Mission Control | — |

## Rejected / Archived

Tools that scored below threshold or were superseded.

_None yet._
