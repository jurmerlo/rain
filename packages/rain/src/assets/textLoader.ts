/** biome-ignore-all lint/complexity/noBannedTypes: I need the string interface to use it as a type. */
import { AssetLoader, type AssetLoadOptions } from './assetLoader.js';

export class TextLoader extends AssetLoader<String> {
  constructor() {
    super(String);
  }

  async load(id: string, path: string, options?: AssetLoadOptions): Promise<String> {
    const keep = options?.keep ?? true;
    const response = await fetch(path);
    if (response.status < 400) {
      const text = new String(await response.text());
      if (keep) {
        this.loadedAssets[id] = text;
      }

      return text;
    }

    throw new Error(`Unable to load text ${path}.`);
  }
}
