import { inject } from '../di/inject.js';
import { Atlas } from '../graphics/atlas.js';
import { Image } from '../graphics/image.js';
import { AssetLoader, type AssetLoaderLoadParams, type Assets } from './assets.js';

export class AtlasLoader extends AssetLoader<Atlas> {
  @inject()
  private readonly assets!: Assets;

  constructor() {
    super(Atlas);
  }

  async load({ id, path, keep = true }: AssetLoaderLoadParams): Promise<Atlas> {
    const image = await this.assets.load({ type: Image, id: `rain_atlas_${id}`, path: `${path}.png`, keep });
    const data = await this.assets.load({ type: String, id: `rain_atlas_${id}`, path: `${path}.json`, keep });

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
