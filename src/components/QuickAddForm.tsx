"use client";

import { useState } from "react";
import {
  CATEGORIES,
  ITEM_TYPES,
  PRIORITIES,
  CATEGORY_LABELS,
  TYPE_LABELS,
  PRIORITY_LABELS,
  Category,
  ItemType,
  Priority,
} from "@/lib/types";

interface QuickAddFormProps {
  onAdd: (item: {
    title: string;
    description: string;
    type: ItemType;
    category: Category;
    priority: Priority;
  }) => void;
}

export default function QuickAddForm({ onAdd }: QuickAddFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<ItemType>("task");
  const [category, setCategory] = useState<Category>("personal");
  const [priority, setPriority] = useState<Priority>("medium");
  const [showOptions, setShowOptions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({ title: title.trim(), description: description.trim(), type, category, priority });
    setTitle("");
    setDescription("");
    setType("task");
    setCategory("personal");
    setPriority("medium");
    setShowOptions(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 pb-safe">
      <form onSubmit={handleSubmit}>
        {showOptions && (
          <div className="mb-3 space-y-2">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description (optional)"
              rows={2}
              className="w-full bg-gray-800 text-gray-200 text-sm rounded-lg px-3 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
            />
            <div className="flex gap-2">
              <select
                value={type}
                onChange={(e) => setType(e.target.value as ItemType)}
                className="flex-1 bg-gray-800 text-gray-300 text-xs rounded-lg px-2 py-2 border border-gray-700"
              >
                {ITEM_TYPES.map((t) => (
                  <option key={t} value={t}>{TYPE_LABELS[t]}</option>
                ))}
              </select>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="flex-1 bg-gray-800 text-gray-300 text-xs rounded-lg px-2 py-2 border border-gray-700"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>
                ))}
              </select>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as Priority)}
                className="flex-1 bg-gray-800 text-gray-300 text-xs rounded-lg px-2 py-2 border border-gray-700"
              >
                {PRIORITIES.map((p) => (
                  <option key={p} value={p}>{PRIORITY_LABELS[p]}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowOptions(!showOptions)}
            className="bg-gray-800 text-gray-400 hover:text-gray-300 rounded-lg px-3 py-3 border border-gray-700 text-sm"
            title="More options"
          >
            {showOptions ? "−" : "+"}
          </button>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add idea, task, issue..."
            className="flex-1 bg-gray-800 text-gray-200 rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-500 focus:outline-none text-sm"
          />
          <button
            type="submit"
            disabled={!title.trim()}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 text-white font-medium rounded-lg px-4 py-3 text-sm transition-colors"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
