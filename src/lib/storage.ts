import { promises as fs } from "fs";
import path from "path";
import { Item } from "./types";

const DATA_FILE = path.join(process.cwd(), "data", "items.json");

export async function readItems(): Promise<Item[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw).items;
  } catch {
    return [];
  }
}

export async function writeItems(items: Item[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify({ items }, null, 2) + "\n");
}
