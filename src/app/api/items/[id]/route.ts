import { NextRequest, NextResponse } from "next/server";
import { readItems, writeItems } from "@/lib/storage";

export const dynamic = "force-dynamic";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const items = await readItems();
  const index = items.findIndex((item) => item.id === params.id);

  if (index === -1) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  const updatable = [
    "title",
    "description",
    "type",
    "category",
    "priority",
    "status",
  ] as const;

  const item = items[index];
  for (const key of updatable) {
    if (body[key] !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item as any)[key] = body[key];
    }
  }
  items[index].updatedAt = new Date().toISOString();

  await writeItems(items);
  return NextResponse.json({ item: items[index] });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const items = await readItems();
  const filtered = items.filter((item) => item.id !== params.id);

  if (filtered.length === items.length) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  await writeItems(filtered);
  return new NextResponse(null, { status: 204 });
}
