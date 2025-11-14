import type { AssetLoader, AssetLoadOptions, ClassType } from './assetLoader.js';

/**
 * An item representing an asset to be loaded. Used in bulk loading.
 */
export type AssetItem = {
  /**
   * The class type of the asset to load.
   */
  type: ClassType<unknown>;

  /**
   * The id used to reference the asset.
   */
  id: string;

  /**
   * The url path to the asset.
   */
  path: string;

  /**
   * Any other properties needed to load the asset.
   */
  props?: unknown;
};

/**
 * Class to load and manage assets.
 */
export class Assets {
  /**
   * The registered loaders.
   */
  private readonly loaders = new Map<ClassType<unknown>, AssetLoader<unknown>>();

  /**
   * Register a new loader.
   * @param loader The loader to register.
   */
  registerLoader<T>(loader: AssetLoader<T>): void {
    this.loaders.set(loader.assetType, loader);
  }

  /**
   * Load an asset.
   * @param type The class type of asset to load.
   * @param id The id used to reference the asset.
   * @param path The url path to the asset.
   * @param options Additional options for loading the asset.
   * @returns The loaded asset.
   * @throws Error if a loader is not registered for the type.
   */
  async load<T>(type: ClassType<T>, id: string, path: string, options?: AssetLoadOptions): Promise<T> {
    const finalOptions: AssetLoadOptions = {
      keep: true,
      ...options,
    };

    const loader = this.getLoader(type);

    try {
      return (await loader.load(id, path, finalOptions)) as T;
    } catch (error) {
      throw new Error(`Failed to load asset "${id}": ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Load a list of assets in parallel. Returns when all assets are loaded.
   * @param assets The assets to load.
   * @throws Error if any asset fails to load.
   */
  async loadAll(assets: AssetItem[]): Promise<void> {
    if (assets.length === 0) {
      return;
    }

    const loadPromises = assets.map((asset) =>
      this.load(asset.type, asset.id, asset.path, { props: asset.props, keep: true }),
    );

    await Promise.all(loadPromises);
  }

  /**
   * Add an externally loaded asset to the manager.
   * @param type The type of asset to add.
   * @param id The id used to reference the asset.
   * @param instance The asset to add.
   * @param overwrite Whether to overwrite existing assets. Defaults to false.
   * @throws Error if a loader is not registered for the type.
   */
  add<T>(type: ClassType<T>, id: string, instance: T, overwrite: boolean = false): void {
    const loader = this.getLoader(type);
    loader.add(id, instance, overwrite);
  }

  /**
   * Get a loaded asset.
   * @param type The type of asset to get.
   * @param id The id of the asset.
   * @returns The loaded asset. Will throw if the asset is not loaded.
   * @throws Error if a loader is not registered for the type.
   */
  get<T>(type: ClassType<T>, id: string): T {
    const loader = this.getLoader(type);
    return loader.get(id) as T;
  }

  /**
   * Try to get a loaded asset.
   * @param type The type of asset.
   * @param id The id of the asset.
   * @returns The loaded asset or undefined if not loaded.
   * @throws Error if a loader is not registered for the type.
   */
  tryGet<T>(type: ClassType<T>, id: string): T | undefined {
    const loader = this.getLoader(type);
    return loader.tryGet(id) as T | undefined;
  }

  /**
   * Check if an asset is loaded.
   * @param type The type of asset.
   * @param id The id of the asset.
   * @returns True if the asset is loaded.
   * @throws Error if a loader is not registered for the type.
   */
  has<T>(type: ClassType<T>, id: string): boolean {
    const loader = this.getLoader(type);
    return loader.has(id);
  }

  /**
   * Get the list of loaded asset IDs of a specific type.
   * @param type The type of asset.
   * @returns The list of loaded asset IDs.
   * @throws Error if a loader is not registered for the type.
   */
  getLoadedIds<T>(type: ClassType<T>): string[] {
    const loader = this.getLoader(type);
    return loader.getLoadedIds();
  }

  /**
   * Get the count of loaded assets of a specific type.
   * @param type The type of asset.
   * @returns The count of loaded assets.
   * @throws Error if a loader is not registered for the type.
   */
  getLoadedCount<T>(type: ClassType<T>): number {
    const loader = this.getLoader(type);
    return loader.getLoadedCount();
  }

  /**
   * Unload and remove an asset from the manager.
   * @param type The type of asset to unload.
   * @param id The id of the asset.
   * @returns True if the asset was found and unloaded, false if not found.
   * @throws Error if a loader is not registered for the type.
   */
  unload<T>(type: ClassType<T>, id: string): boolean {
    const loader = this.getLoader(type);
    return loader.unload(id);
  }

  /**
   * Unload all assets of a specific type.
   * @param type The type of asset to unload.
   * @returns The number of assets that were unloaded.
   * @throws Error if a loader is not registered for the type.
   */
  unloadAll<T>(type: ClassType<T>): number {
    const loader = this.getLoader(type);
    return loader.unloadAll();
  }

  /**
   * Check if a loader is registered for the given type.
   * @param type The type to check.
   * @returns True if a loader is registered for the type.
   */
  hasLoader<T>(type: ClassType<T>): boolean {
    return this.loaders.has(type);
  }

  /**
   * Get all registered loader types.
   * @returns Array of registered asset types.
   */
  getRegisteredTypes(): ClassType<unknown>[] {
    return Array.from(this.loaders.keys());
  }

  /**
   * Get a loader for the specified type.
   * @param type The asset type.
   * @returns The loader for the type.
   * @throws Error if no loader is registered for the type.
   */
  private getLoader<T>(type: ClassType<T>): AssetLoader<unknown> {
    const loader = this.loaders.get(type);
    if (!loader) {
      throw new Error(`Loader is not registered for type: ${type.name}`);
    }
    return loader;
  }
}
