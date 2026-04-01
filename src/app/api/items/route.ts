import { NextRequest, NextResponse } from "next/server";
import { readItems, writeItems } from "@/lib/storage";
import { generateId } from "@/lib/utils";
import { Item, Category, ItemType, Priority } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function GET() {
  const items = await readItems();
  return NextResponse.json({ items });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.title || typeof body.title !== "string" || !body.title.trim()) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const now = new Date().toISOString();
  const item: Item = {
    id: generateId(),
    title: body.title.trim(),
    description: body.description?.trim() || "",
    type: (body.type as ItemType) || "task",
    category: (body.category as Category) || "personal",
    priority: (body.priority as Priority) || "medium",
    status: "new",
    createdAt: now,
    updatedAt: now,
  };

  const items = await readItems();
  items.unshift(item);
  await writeItems(items);

  return NextResponse.json({ item }, { status: 201 });
}
