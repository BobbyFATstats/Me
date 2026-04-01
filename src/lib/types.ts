export type ItemType = "idea" | "issue" | "task" | "event";

export type Category = "park-acquisitions" | "wholesale" | "personal" | "family";

export type Priority = "high" | "medium" | "low";

export type Status = "new" | "in-progress" | "done";

export interface Item {
  id: string;
  title: string;
  description: string;
  type: ItemType;
  category: Category;
  priority: Priority;
  status: Status;
  createdAt: string;
  updatedAt: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  "park-acquisitions": "Park Acquisitions",
  wholesale: "Wholesale",
  personal: "Personal",
  family: "Family",
};

export const TYPE_LABELS: Record<ItemType, string> = {
  idea: "Idea",
  issue: "Issue",
  task: "Task",
  event: "Event",
};

export const PRIORITY_LABELS: Record<Priority, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
};

export const STATUS_LABELS: Record<Status, string> = {
  new: "New",
  "in-progress": "In Progress",
  done: "Done",
};

export const CATEGORIES: Category[] = [
  "park-acquisitions",
  "wholesale",
  "personal",
  "family",
];

export const ITEM_TYPES: ItemType[] = ["idea", "issue", "task", "event"];
export const PRIORITIES: Priority[] = ["high", "medium", "low"];
export const STATUSES: Status[] = ["new", "in-progress", "done"];
