import { Image } from '../graphics/image.js';
import { AssetLoader, type AssetLoadOptions } from './assetLoader.js';

/**
 * A loader for image assets.
 */
export class ImageLoader extends AssetLoader<Image> {
  /**
   * Create a new ImageLoader.
   */
  constructor() {
    super(Image);
  }

  /**
   * Load an image.
   * @param id - The id of the image.
   * @param path - The path to the image.
   * @param options - The load options.
   * @returns The loaded image.
   * @throws Error if the image cannot be loaded or is invalid.
   */
  async load(id: string, path: string, options?: AssetLoadOptions): Promise<Image> {
    const keep = options?.keep ?? true;

    try {
      const element = await this.loadImageElement(path);
      const imageData = this.extractImageData(element);
      const image = new Image(element.width, element.height, imageData);

      if (keep) {
        this.loadedAssets[id] = image;
      }

      return image;
    } catch (error) {
      throw new Error(
        `Failed to load image "${id}" from "${path}": ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  /**
   * Load an HTML image element from a path.
   * @param path - The path to the image.
   * @returns Promise that resolves to the loaded image element.
   */
  private loadImageElement(path: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const element = document.createElement('img');

      const cleanup = (): void => {
        element.onload = null;
        element.onerror = null;
        element.onabort = null;
      };

      element.onload = (): void => {
        cleanup();

        if (element.width === 0 || element.height === 0) {
          reject(new Error('Image has invalid dimensions (0x0)'));
          return;
        }

        resolve(element);
      };

      element.onerror = (): void => {
        cleanup();
        reject(new Error('Failed to load image'));
      };

      element.onabort = (): void => {
        cleanup();
        reject(new Error('Image loading was aborted'));
      };

      // Set crossOrigin if needed for CORS
      element.crossOrigin = 'anonymous';
      element.src = path;
    });
  }

  /**
   * Extract image data from an HTML image element.
   * @param element - The loaded image element.
   * @returns The image data as Uint8ClampedArray.
   */
  private extractImageData(element: HTMLImageElement): Uint8ClampedArray {
    const canvas = document.createElement('canvas');
    canvas.width = element.width;
    canvas.height = element.height;

    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Failed to get 2D canvas context');
    }

    try {
      context.drawImage(element, 0, 0);
      const imageData = context.getImageData(0, 0, element.width, element.height);

      return imageData.data;
    } catch (error) {
      throw new Error(`Failed to extract image data: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Unload a loaded image.
   * @param id - The id of the image.
   * @returns True if the image was found and unloaded, false if not found.
   */
  override unload(id: string): boolean {
    if (this.has(id)) {
      const image = this.loadedAssets[id];
      image.destroy();

      return super.unload(id);
    }

    return false;
  }

  /**
   * Unload all loaded images.
   * @returns The number of images that were unloaded.
   */
  override unloadAll(): number {
    const ids = this.getLoadedIds();
    for (const id of ids) {
      const image = this.loadedAssets[id];
      if (image) {
        image.destroy();
      }
    }

    return super.unloadAll();
  }
}
