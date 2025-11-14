import { inject } from '../di/inject.js';
import { Atlas } from '../graphics/atlas.js';
import { Image } from '../graphics/image.js';
import { AssetLoader, type AssetLoadOptions } from './assetLoader.js';
import type { Assets } from './assets.js';

export class AtlasLoader extends AssetLoader<Atlas> {
  @inject()
  private readonly assets!: Assets;

  constructor() {
    super(Atlas);
  }

  async load(id: string, path: string, options?: AssetLoadOptions): Promise<Atlas> {
    const keep = options?.keep ?? true;
    const image = await this.assets.load(Image, `rain_atlas_${id}`, `${path}.png`, { keep });
    const data = await this.assets.load(String, `rain_atlas_${id}`, `${path}.json`, { keep });

    const atlas = new Atlas(image, data.valueOf());
    if (keep) {
      this.loadedAssets[id] = atlas;
    }

    return atlas;
  }

  override unload(id: string): boolean {
    if (this.loadedAssets[id]) {
      this.assets.unload(Image, `rain_atlas_${id}`);
      this.assets.unload(String, `rain_atlas_${id}`);

      return super.unload(id);
    }

    return false;
  }
}
