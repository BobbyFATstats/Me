"use client";

import { useState } from "react";
import { Item, CATEGORY_LABELS } from "@/lib/types";
import { getGreeting } from "@/lib/utils";
import StatusBadge from "./StatusBadge";

export default function MorningBrief({ items }: { items: Item[] }) {
  const [expanded, setExpanded] = useState(true);
  const urgent = items.filter(
    (item) => item.priority === "high" && item.status !== "done"
  );

  if (urgent.length === 0) {
    return (
      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4">
        <p className="text-green-400 font-medium">
          {getGreeting()}, Bobby. All clear — no high-priority items.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg p-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between"
      >
        <div>
          <p className="text-amber-400 font-medium text-left">
            {getGreeting()}, Bobby.
          </p>
          <p className="text-sm text-amber-400/70 text-left">
            {urgent.length} high-priority item{urgent.length !== 1 ? "s" : ""}{" "}
            need attention
          </p>
        </div>
        <span className="text-amber-400/50 text-sm">
          {expanded ? "▲" : "▼"}
        </span>
      </button>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-amber-500/20 space-y-2">
          {urgent.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-2"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-200 truncate">{item.title}</p>
                <p className="text-xs text-gray-500">
                  {CATEGORY_LABELS[item.category]}
                </p>
              </div>
              <StatusBadge value={item.type} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
