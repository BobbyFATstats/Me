import { promises as fs } from "fs";
import path from "path";
import { Item } from "./types";

const STORAGE_MODE = process.env.STORAGE_MODE || "file";
const BLOB_KEY = "items.json";
const DATA_FILE = path.join(process.cwd(), "data", "items.json");

// --- File-based storage (local dev) ---

async function readFromFile(): Promise<Item[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw).items;
  } catch {
    return [];
  }
}

async function writeToFile(items: Item[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify({ items }, null, 2) + "\n");
}

// --- Vercel Blob storage (production) ---

async function readFromBlob(): Promise<Item[]> {
  try {
    const { list } = await import("@vercel/blob");
    const { blobs } = await list({ prefix: BLOB_KEY });

    if (blobs.length === 0) {
      // First load — seed from bundled JSON
      const seedItems = await readFromFile();
      if (seedItems.length > 0) {
        await writeToBlob(seedItems);
        return seedItems;
      }
      return [];
    }

    const res = await fetch(blobs[0].url);
    if (!res.ok) return [];
    const data = await res.json();
    return data.items;
  } catch (e) {
    console.error("Blob read failed, falling back to file:", e);
    return readFromFile();
  }
}

async function writeToBlob(items: Item[]): Promise<void> {
  const { put } = await import("@vercel/blob");
  await put(BLOB_KEY, JSON.stringify({ items }, null, 2), {
    access: "public",
    addRandomSuffix: false,
  });
}

// --- Public API ---

export async function readItems(): Promise<Item[]> {
  if (STORAGE_MODE === "blob") {
    return readFromBlob();
  }
  return readFromFile();
}

export async function writeItems(items: Item[]): Promise<void> {
  if (STORAGE_MODE === "blob") {
    return writeToBlob(items);
  }
  return writeToFile(items);
}
