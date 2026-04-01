---
name: idea
description: Quickly capture an idea, task, issue, or event to Mission Control
user_invocable: true
---

# /idea - Quick Capture to Mission Control

When the user invokes `/idea`, capture a new item for the Mission Control Dashboard.

## Instructions

1. Parse the user's input after `/idea` to extract:
   - **title** (required): A concise summary of the idea/task/issue/event
   - **description** (optional): Any additional detail the user provides
   - **type**: One of `idea`, `issue`, `task`, `event` (default: `idea`)
   - **category**: One of `park-acquisitions`, `wholesale`, `personal`, `family` (default: `personal`)
   - **priority**: One of `high`, `medium`, `low` (default: `medium`)

2. Infer fields from context clues in the user's message:
   - Mentions of "bug", "fix", "broken", "error" → type: `issue`
   - Mentions of "do", "need to", "should", "action" → type: `task`
   - Mentions of "meeting", "appointment", "schedule", "calendar" → type: `event`
   - Mentions of "park", "acquisition", "lot", "MHP", "mobile home", "RV" → category: `park-acquisitions`
   - Mentions of "wholesale", "deal", "flip", "property", "contract" → category: `wholesale`
   - Mentions of "family", "kids", "wife", "home", "vacation" → category: `family`
   - Mentions of "urgent", "asap", "critical", "immediately" → priority: `high`
   - Mentions of "someday", "eventually", "low priority", "when I get to it" → priority: `low`

3. Read the current file at `data/items.json`

4. Generate a new item object:
   ```json
   {
     "id": "item_{timestamp_ms}_{4_random_hex_chars}",
     "title": "parsed title",
     "description": "parsed description or empty string",
     "type": "inferred type",
     "category": "inferred category",
     "priority": "inferred priority",
     "status": "new",
     "createdAt": "ISO 8601 now",
     "updatedAt": "ISO 8601 now"
   }
   ```

5. Add the new item to the beginning of the `items` array and write the file back

6. Confirm to the user:
   ```
   ✅ Added to Mission Control:
     Title: [title]
     Type: [type] | Category: [category label] | Priority: [priority]
   ```

## Examples

- `/idea Build an automated lead scoring system for wholesale deals`
  → type: idea, category: wholesale, priority: medium

- `/idea urgent: Fix the broken contact form on the park acquisitions landing page`
  → type: issue, category: park-acquisitions, priority: high

- `/idea Schedule family dinner for Saturday evening`
  → type: event, category: family, priority: medium

- `/idea Need to review the due diligence docs for the Riverside lot`
  → type: task, category: park-acquisitions, priority: medium
