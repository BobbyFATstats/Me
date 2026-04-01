"use client";

import { useState } from "react";
import { Item, CATEGORY_LABELS, STATUSES, PRIORITIES, Status, Priority } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import StatusBadge from "./StatusBadge";

interface ItemCardProps {
  item: Item;
  onUpdate: (id: string, updates: Partial<Item>) => void;
  onDelete: (id: string) => void;
}

export default function ItemCard({ item, onUpdate, onDelete }: ItemCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-100 truncate">{item.title}</h3>
          <p className="text-xs text-gray-500 mt-1">
            {CATEGORY_LABELS[item.category]} &middot; {formatDate(item.createdAt)}
          </p>
        </div>
        <div className="flex gap-1.5 flex-shrink-0">
          <StatusBadge value={item.priority} />
          <StatusBadge value={item.type} />
        </div>
      </div>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-gray-800" onClick={(e) => e.stopPropagation()}>
          {item.description && (
            <p className="text-sm text-gray-400 mb-3">{item.description}</p>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <label className="text-xs text-gray-500">Status:</label>
            <select
              value={item.status}
              onChange={(e) => onUpdate(item.id, { status: e.target.value as Status })}
              className="bg-gray-800 text-gray-300 text-xs rounded px-2 py-1 border border-gray-700"
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </option>
              ))}
            </select>

            <label className="text-xs text-gray-500 ml-2">Priority:</label>
            <select
              value={item.priority}
              onChange={(e) => onUpdate(item.id, { priority: e.target.value as Priority })}
              className="bg-gray-800 text-gray-300 text-xs rounded px-2 py-1 border border-gray-700"
            >
              {PRIORITIES.map((p) => (
                <option key={p} value={p}>
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </option>
              ))}
            </select>

            <button
              onClick={() => onDelete(item.id)}
              className="ml-auto text-xs text-red-400 hover:text-red-300 px-2 py-1"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
