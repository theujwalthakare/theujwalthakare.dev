import { openDB } from 'idb';

const DB_NAME = 'orb-agent-cache';
const STORE_NAME = 'kv';

const getDb = () => openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME);
    }
  },
});

export const cacheSet = async <T>(key: string, value: T) => {
  try {
    const db = await getDb();
    await db.put(STORE_NAME, value, key);
  } catch (error) {
    console.warn('[AgentCache] Failed to store entry', key, error);
  }
};

export const cacheGet = async <T>(key: string) => {
  try {
    const db = await getDb();
    return (await db.get(STORE_NAME, key)) as T | undefined;
  } catch (error) {
    console.warn('[AgentCache] Failed to read entry', key, error);
    return undefined;
  }
};

export const cacheDelete = async (key: string) => {
  try {
    const db = await getDb();
    await db.delete(STORE_NAME, key);
  } catch (error) {
    console.warn('[AgentCache] Failed to delete entry', key, error);
  }
};

export const cacheClear = async () => {
  try {
    const db = await getDb();
    await db.clear(STORE_NAME);
  } catch (error) {
    console.warn('[AgentCache] Failed to clear store', error);
  }
};
