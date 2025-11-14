import { inject } from '../di/inject.js';
import { BitmapFont } from '../graphics/bitmapFont.js';
import { Image } from '../graphics/image.js';
import { AssetLoader, type AssetLoadOptions } from './assetLoader.js';
import type { Assets } from './assets.js';

export class BitmapFontLoader extends AssetLoader<BitmapFont> {
  @inject()
  private readonly assets!: Assets;

  constructor() {
    super(BitmapFont);
  }

  async load(id: string, path: string, options?: AssetLoadOptions): Promise<BitmapFont> {
    const keep = options?.keep ?? true;
    const image = await this.assets.load(Image, `rain_bitmap_font_${id}`, `${path}.png`, { keep });
    const data = await this.assets.load(String, `rain_bitmap_font_${id}`, `${path}.fnt`, { keep });

    const font = new BitmapFont(image, data.valueOf());
    if (keep) {
      this.loadedAssets[id] = font;
    }

    return font;
  }

  override unload(id: string): boolean {
    if (this.loadedAssets[id]) {
      this.assets.unload(Image, `rain_bitmap_font_${id}`);
      this.assets.unload(String, `rain_bitmap_font_${id}`);
    }

    return super.unload(id);
  }
}
