"use client";

import { useState, useEffect, useCallback } from "react";
import { Item } from "@/lib/types";
import MorningBrief from "@/components/MorningBrief";
import FilterBar from "@/components/FilterBar";
import ItemList from "@/components/ItemList";
import QuickAddForm from "@/components/QuickAddForm";

export default function Dashboard() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<{
    category: string | null;
    type: string | null;
    priority: string | null;
    status: string | null;
  }>({ category: null, type: null, priority: null, status: null });

  const fetchItems = useCallback(async () => {
    const res = await fetch("/api/items");
    const data = await res.json();
    setItems(data.items);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleAdd = async (newItem: {
    title: string;
    description: string;
    type: string;
    category: string;
    priority: string;
  }) => {
    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    const data = await res.json();
    setItems((prev) => [data.item, ...prev]);
  };

  const handleUpdate = async (id: string, updates: Partial<Item>) => {
    const res = await fetch(`/api/items/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    const data = await res.json();
    setItems((prev) =>
      prev.map((item) => (item.id === id ? data.item : item))
    );
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/items/${id}`, { method: "DELETE" });
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleFilter = (key: string, value: string | null) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredItems = items.filter((item) => {
    if (filters.category && item.category !== filters.category) return false;
    if (filters.type && item.type !== filters.type) return false;
    if (filters.priority && item.priority !== filters.priority) return false;
    if (filters.status && item.status !== filters.status) return false;
    return true;
  });

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading Mission Control...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-24">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-100">Mission Control</h1>
          <p className="text-sm text-gray-500 mt-1">{today}</p>
        </header>

        <div className="space-y-4">
          <MorningBrief items={items} />
          <FilterBar filters={filters} onFilter={handleFilter} />
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">
              {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""}
            </p>
          </div>
          <ItemList
            items={filteredItems}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        </div>
      </div>

      <QuickAddForm onAdd={handleAdd} />
    </main>
  );
}
