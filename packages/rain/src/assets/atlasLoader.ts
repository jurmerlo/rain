import { inject } from '../di/inject.js';
import { Atlas } from '../graphics/atlas.js';
import { Image } from '../graphics/image.js';
import { AssetLoader, type AssetLoadOptions } from './assetLoader.js';
import type { Assets } from './assets.js';

/**
 * A loader for sprite atlas assets.
 */
export class AtlasLoader extends AssetLoader<Atlas> {
  /**
   * The assets manager to use for loading dependent assets.
   */
  @inject()
  private readonly assets!: Assets;

  /**
   * Create a new AtlasLoader.
   */
  constructor() {
    super(Atlas);
  }

  /**
   * Load a sprite atlas.
   * @param id - The id of the atlas.
   * @param path - The path to the atlas (without file extension).
   * @param options - The load options.
   * @returns The loaded atlas.
   * @throws Error if the atlas files cannot be loaded or are invalid.
   */
  async load(id: string, path: string, options?: AssetLoadOptions): Promise<Atlas> {
    const keep = options?.keep ?? true;
    const imageId = this.getImageId(id);
    const dataId = this.getDataId(id);

    try {
      // Load image and JSON data in parallel for better performance
      const [image, data] = await Promise.all([
        this.assets.load(Image, imageId, `${path}.png`, { keep }),
        this.assets.load(String, dataId, `${path}.json`, { keep }),
      ]);

      // Validate that we have valid data
      if (!image) {
        throw new Error(`Failed to load atlas image: ${path}.png`);
      }
      if (!data) {
        throw new Error(`Failed to load atlas data: ${path}.json`);
      }

      const atlas = new Atlas(image, data.valueOf());
      if (keep) {
        this.loadedAssets[id] = atlas;
      }

      return atlas;
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
      throw new Error(`Failed to load atlas "${id}": ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Unload and remove a sprite atlas.
   * @param id - The id of the atlas.
   * @returns True if the atlas was found and unloaded, false if not found.
   */
  override unload(id: string): boolean {
    if (this.has(id)) {
      // Unload dependent assets
      this.assets.unload(Image, this.getImageId(id));
      this.assets.unload(String, this.getDataId(id));

      return super.unload(id);
    }

    return false;
  }

  /**
   * Unload all loaded sprite atlases.
   * @returns The number of sprite atlases that were unloaded.
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
    return `rain_atlas_image_${id}`;
  }

  /**
   * Generate the internal id for the atlas data asset.
   * @param id - The atlas id.
   * @returns The internal data asset id.
   */
  private getDataId(id: string): string {
    return `rain_atlas_data_${id}`;
  }
}
