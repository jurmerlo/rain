/**
 * Parameters needed to load an asset.
 */
export type AssetLoaderLoadParams = {
  id: string;
  path: string;
  props?: unknown;
  keep?: boolean;
};

/**
 * Base class for custom asset loaders.
 */
export abstract class AssetLoader<T> {
  /**
   * The type of asset the loader manages.
   */
  readonly assetType: new (
    // biome-ignore lint/suspicious/noExplicitAny: Asset type constructor can take any parameters.
    ...args: any[]
  ) => T;

  /**
   * The map of loaded assets for this loader.
   */
  protected loadedAssets: Record<string, T> = {};

  /**
   * Create a new loader instance.
   * @param assetType The type of asset to manage.
   */

  // biome-ignore lint/suspicious/noExplicitAny: Asset type constructor can take any parameters.
  constructor(assetType: new (...args: any[]) => T) {
    this.assetType = assetType;
  }

  /**
   * Load an asset. This needs to be implemented per loader.
   * @param params The parameters needed to load the asset.
   */
  abstract load(params: AssetLoaderLoadParams): Promise<T>;

  /**
   * Add an externally loaded asset to the loader.
   * @param id The id used to reference the asset.
   * @param instance The asset instance to add.
   */
  add(id: string, instance: T): void {
    this.loadedAssets[id] = instance;
  }

  /**
   * Get a loaded asset by id.
   * @param id The id of the asset to load.
   * @returns The loaded asset. Will throw if the asset does not exist.
   */
  get(id: string): T {
    if (this.loadedAssets[id]) {
      return this.loadedAssets[id];
    }

    throw new Error(`Asset with id "${id}" not loaded`);
  }

  /**
   * Unload a loaded asset.
   * @param id The id of the asset to unload.
   * @returns True if the unload wsa successful.
   */
  unload(id: string): boolean {
    if (this.loadedAssets[id]) {
      delete this.loadedAssets[id];
    }
    return true;
  }
}
