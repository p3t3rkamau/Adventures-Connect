import type { Safari } from "../../safari"



// loadSafaris.ts
export async function loadSafaris() {
  const files = (import.meta as any).glob("./safaris/*.json", { eager: true })
  const safaris: any[] = [];

  for (const path in files) {
    const safariModule = await files[path]();
    safaris.push(safariModule.default);
  }

  return safaris;
}