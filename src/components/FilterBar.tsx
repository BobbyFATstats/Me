"use client";

import {
  CATEGORIES,
  ITEM_TYPES,
  PRIORITIES,
  STATUSES,
  CATEGORY_LABELS,
  TYPE_LABELS,
  PRIORITY_LABELS,
  STATUS_LABELS,
} from "@/lib/types";

interface FilterBarProps {
  filters: {
    category: string | null;
    type: string | null;
    priority: string | null;
    status: string | null;
  };
  onFilter: (key: string, value: string | null) => void;
}

function FilterGroup({
  label,
  options,
  labels,
  active,
  onSelect,
}: {
  label: string;
  options: readonly string[];
  labels: Record<string, string>;
  active: string | null;
  onSelect: (value: string | null) => void;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-xs text-gray-500 mr-1">{label}:</span>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(active === opt ? null : opt)}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
            active === opt
              ? "bg-blue-500/20 text-blue-400 border border-blue-500/40"
              : "bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-600"
          }`}
        >
          {labels[opt]}
        </button>
      ))}
    </div>
  );
}

export default function FilterBar({ filters, onFilter }: FilterBarProps) {
  const hasFilters = Object.values(filters).some(Boolean);

  return (
    <div className="space-y-2 overflow-x-auto">
      <div className="flex flex-wrap gap-2">
        <FilterGroup
          label="Category"
          options={CATEGORIES}
          labels={CATEGORY_LABELS}
          active={filters.category}
          onSelect={(v) => onFilter("category", v)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <FilterGroup
          label="Type"
          options={ITEM_TYPES}
          labels={TYPE_LABELS}
          active={filters.type}
          onSelect={(v) => onFilter("type", v)}
        />
        <FilterGroup
          label="Priority"
          options={PRIORITIES}
          labels={PRIORITY_LABELS}
          active={filters.priority}
          onSelect={(v) => onFilter("priority", v)}
        />
        <FilterGroup
          label="Status"
          options={STATUSES}
          labels={STATUS_LABELS}
          active={filters.status}
          onSelect={(v) => onFilter("status", v)}
        />
      </div>
      {hasFilters && (
        <button
          onClick={() => {
            onFilter("category", null);
            onFilter("type", null);
            onFilter("priority", null);
            onFilter("status", null);
          }}
          className="text-xs text-gray-500 hover:text-gray-400"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
