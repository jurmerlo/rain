/**
 * Type representing a class constructor.
 */
// biome-ignore lint/suspicious/noExplicitAny: Class type can take any parameters.
export type ClassType<T> = new (...args: any[]) => T;

/**
 * Extra options for loading an asset.
 */
export type AssetLoadOptions = {
  /**
   * Additional properties needed to load the asset.
   */
  props?: unknown;

  /**
   * Whether to keep the asset in the asset manager after loading. Defaults to true.
   */
  keep?: boolean;
};

/**
 * Base class for custom asset loaders.
 */
export abstract class AssetLoader<T> {
  /**
   * The type of asset the loader manages.
   */
  readonly assetType: ClassType<T>;

  /**
   * The map of loaded assets for this loader.
   */
  protected loadedAssets: Record<string, T> = {};

  /**
   * Create a new loader instance.
   * @param assetType - The type of asset to manage.
   */
  constructor(assetType: ClassType<T>) {
    this.assetType = assetType;
  }

  /**
   * Load an asset. This needs to be implemented per loader.
   * @param id - The id used to reference the asset.
   * @param path - The url path to the asset.
   * @param options - Any other properties needed to load the asset.
   */
  abstract load(id: string, path: string, options?: AssetLoadOptions): Promise<T>;

  /**
   * Add an externally loaded asset to the loader.
   * @param id - The id used to reference the asset.
   * @param instance - The asset instance to add.
   * @param overwrite - Whether to overwrite existing assets. Defaults to false.
   * @throws Error if asset with the same id already exists and overwrite is false.
   */
  add(id: string, instance: T, overwrite: boolean = false): void {
    if (!overwrite && this.has(id)) {
      throw new Error(`Asset with id "${id}" already exists`);
    }
    this.loadedAssets[id] = instance;
  }

  /**
   * Get a loaded asset by id.
   * @param id - The id of the asset to get.
   * @returns The loaded asset. Will throw if the asset does not exist.
   * @throws Error if the asset is not loaded.
   */
  get(id: string): T {
    if (this.has(id)) {
      return this.loadedAssets[id];
    }

    throw new Error(`Asset with id "${id}" not loaded`);
  }

  /**
   * Check if an asset is loaded.
   * @param id - The id of the asset to check.
   * @returns True if the asset is loaded.
   */
  has(id: string): boolean {
    return id in this.loadedAssets;
  }

  /**
   * Get a loaded asset by id if it exists.
   * @param id - The id of the asset to get.
   * @returns The loaded asset or undefined if not found.
   */
  tryGet(id: string): T | undefined {
    return this.loadedAssets[id];
  }

  /**
   * Get all loaded asset ids.
   * @returns Array of asset ids.
   */
  getLoadedIds(): string[] {
    return Object.keys(this.loadedAssets);
  }

  /**
   * Get the count of loaded assets.
   * @returns Number of loaded assets.
   */
  getLoadedCount(): number {
    return Object.keys(this.loadedAssets).length;
  }

  /**
   * Unload a loaded asset.
   * @param id - The id of the asset to unload.
   * @returns True if the asset was found and unloaded, false if not found.
   */
  unload(id: string): boolean {
    if (this.loadedAssets[id]) {
      delete this.loadedAssets[id];
      return true;
    }

    return false;
  }

  /**
   * Unload all loaded assets.
   * @returns The number of assets that were unloaded.
   */
  unloadAll(): number {
    const count = this.getLoadedCount();
    this.loadedAssets = {};

    return count;
  }
}
