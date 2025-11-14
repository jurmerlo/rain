import { inject } from '../di/inject.js';
import { BitmapFont } from '../graphics/bitmapFont.js';
import { Image } from '../graphics/image.js';
import { AssetLoader, type AssetLoadOptions } from './assetLoader.js';
import type { Assets } from './assets.js';

/**
 * A loader for bitmap font assets.
 */
export class BitmapFontLoader extends AssetLoader<BitmapFont> {
  /**
   * The assets manager to use for loading dependent assets.
   */
  @inject()
  private readonly assets!: Assets;

  /**
   * Create a new BitmapFontLoader.
   */
  constructor() {
    super(BitmapFont);
  }

  /**
   * Load a bitmap font.
   * @param id - The id of the bitmap font.
   * @param path - The path to the bitmap font (without file extension).
   * @param options - The load options.
   * @returns The loaded bitmap font.
   * @throws Error if the bitmap font files cannot be loaded or are invalid.
   */
  async load(id: string, path: string, options?: AssetLoadOptions): Promise<BitmapFont> {
    const keep = options?.keep ?? true;
    const imageId = this.getImageId(id);
    const dataId = this.getDataId(id);

    try {
      // Load image and fnt data in parallel for better performance
      const [image, data] = await Promise.all([
        this.assets.load(Image, imageId, `${path}.png`, { keep }),
        this.assets.load(String, dataId, `${path}.fnt`, { keep }),
      ]);

      // Validate that we have valid data
      if (!image) {
        throw new Error(`Failed to load bitmap font image: ${path}.png`);
      }
      if (!data) {
        throw new Error(`Failed to load bitmap font data: ${path}.fnt`);
      }

      const font = new BitmapFont(image, data.valueOf());
      if (keep) {
        this.loadedAssets[id] = font;
      }

      return font;
    } catch (error) {
      // Clean up any partially loaded assets
      if (keep) {
        try {
          this.assets.unload(Image, imageId);
          this.assets.unload(String, dataId);
        } catch {
          // Ignore cleanup errors
        }
      }
      throw new Error(`Failed to load bitmap font "${id}": ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Unload and remove a bitmap font.
   * @param id - The id of the bitmap font.
   * @returns True if the bitmap font was found and unloaded, false if not found.
   */
  override unload(id: string): boolean {
    if (this.has(id)) {
      this.assets.unload(Image, this.getImageId(id));
      this.assets.unload(String, this.getDataId(id));
      return super.unload(id);
    }

    return false;
  }

  /**
   * Unload all loaded bitmap fonts.
   * @returns The number of bitmap fonts that were unloaded.
   */
  override unloadAll(): number {
    const ids = this.getLoadedIds();

    // Unload all dependent assets.
    for (const id of ids) {
      this.assets.unload(Image, this.getImageId(id));
      this.assets.unload(String, this.getDataId(id));
    }

    return super.unloadAll();
  }

  /**
   * Generate the internal id for the atlas image asset.
   * @param id - The atlas id.
   * @returns The internal image asset id.
   */
  private getImageId(id: string): string {
    return `rain_bitmap_font_image_${id}`;
  }

  /**
   * Generate the internal id for the atlas data asset.
   * @param id - The atlas id.
   * @returns The internal data asset id.
   */
  private getDataId(id: string): string {
    return `rain_bitmap_font_data_${id}`;
  }
}
