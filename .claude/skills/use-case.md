---
name: use-case
description: Document a new use case — map a business problem to the best tools and methodology
user_invocable: true
---

# /use-case - Document a Use Case

When the user invokes `/use-case`, capture a new use case that maps a business problem or challenge to the best tools, skills, and methodology for solving it.

## Instructions

1. Parse the user's input after `/use-case` to extract:
   - **problem** (required): What they're trying to accomplish or solve
   - **tools** (optional): Any tools, CLIs, MCPs, or skills they've already identified
   - **methodology** (optional): Any steps or approach they've already thought through

2. Generate a use case **ID** — a lowercase, hyphenated slug derived from the problem (e.g., `nightly-code-review`, `automated-deploy-pipeline`)

3. Read `skills/use-cases.md` and check for existing entries:
   - If a similar use case already exists, ask the user whether to **update** the existing entry or **create a new one**
   - If the input starts with `update {existing-id}:`, update that entry instead of creating new

4. Check `skills/roadmap.md` for tools in the "Exploring" section that might be relevant to this use case, and suggest them to the user

5. Add a new entry under `## Active Use Cases` in `skills/use-cases.md` using this exact format:

   ```markdown
   ### {id}

   **Problem**: {description of what the user is trying to solve}

   **Tools**:

   | Tool | Role | Notes |
   |------|------|-------|
   | {tool name} | {primary/secondary/exploring} | {brief notes} |

   **Methodology**:

   1. {step}
   2. {step}
   ...

   **Open Questions**:
   - {any unresolved items or things to figure out}

   **Status**: exploring
   **Last Reviewed**: {today's date in YYYY-MM-DD format}
   ```

6. Write the updated `skills/use-cases.md` file

7. Confirm to the user:
   ```
   Added use case: {id}
     Problem: {one-line problem summary}
     Tools: {comma-separated tool list}
     Status: exploring
   ```

## Updating Existing Use Cases

When the user says `update {id}: {changes}`:

1. Read `skills/use-cases.md`
2. Find the entry matching `{id}`
3. Apply the requested changes (add tools, update methodology, change status, etc.)
4. Update `**Last Reviewed**` to today's date
5. Write the file
6. Confirm what was changed

## Moving to Archive

When the user says `archive {id}`:

1. Read `skills/use-cases.md`
2. Cut the entry from `## Active Use Cases`
3. Paste it under `## Archive`
4. Add `**Deprecated**: {today's date}` and `**Replaced By**: {ask user}`
5. Write the file
6. Confirm the archive

## Examples

- `/use-case I need automated nightly code reviews across all my repos with morning briefs`
  → Creates `nightly-code-review` with Claude Code agent teams, cron, CI/CD

- `/use-case I want to QA test my landing pages for mobile responsiveness and UI quality`
  → Creates `mobile-qa-testing` with Playwright CLI, suggests Komos MCP from roadmap

- `/use-case update ui-ux-qa-testing: add Komos MCP as primary after evaluation`
  → Updates existing entry, promotes Komos MCP role

- `/use-case archive manual-testing`
  → Moves to archive section with deprecation date
