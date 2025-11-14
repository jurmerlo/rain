import { Image } from '../graphics/image.js';
import { AssetLoader, type AssetLoadOptions } from './assetLoader.js';

export class ImageLoader extends AssetLoader<Image> {
  constructor() {
    super(Image);
  }

  load(id: string, path: string, options?: AssetLoadOptions): Promise<Image> {
    const keep = options?.keep ?? true;

    return new Promise((resolve, reject) => {
      const element = document.createElement('img');
      element.onload = (): void => {
        element.onload = null;

        const canvas = document.createElement('canvas');
        canvas.width = element.width;
        canvas.height = element.height;

        const canvasContext = canvas.getContext('2d');
        canvasContext?.drawImage(element, 0, 0);

        const data = canvasContext?.getImageData(0, 0, element.width, element.height).data;
        if (data) {
          const image = new Image(element.width, element.height, data);
          if (keep) {
            this.loadedAssets[id] = image;
          }
          resolve(image);
        } else {
          reject(new Error(`Unable to load image "${path}".`));
        }
      };

      element.onerror = (): void => {
        reject(new Error(`Unable to load image "${path}".`));
      };

      element.src = path;
    });
  }

  override unload(id: string): boolean {
    const image = this.loadedAssets[id];
    if (image) {
      image.destroy();
      return super.unload(id);
    }

    return false;
  }
}
