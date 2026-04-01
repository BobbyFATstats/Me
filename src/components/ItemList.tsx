"use client";

import { Item } from "@/lib/types";
import ItemCard from "./ItemCard";

interface ItemListProps {
  items: Item[];
  onUpdate: (id: string, updates: Partial<Item>) => void;
  onDelete: (id: string) => void;
}

export default function ItemList({ items, onUpdate, onDelete }: ItemListProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No items yet</p>
        <p className="text-gray-600 text-sm mt-1">
          Add your first idea, task, or issue below
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
