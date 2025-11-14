/** biome-ignore-all lint/complexity/noBannedTypes: I need the string interface to use it as a type. */
import { AssetLoader, type AssetLoadOptions } from './assetLoader.js';

/**
 * A loader for text assets.
 */
export class TextLoader extends AssetLoader<String> {
  /**
   * Create a new TextLoader.
   */
  constructor() {
    super(String);
  }

  /**
   * Load a text asset.
   * @param id - The id of the text.
   * @param path - The path to the text.
   * @param options - The load options.
   * @returns The loaded text.
   * @throws Error if the text cannot be loaded or is invalid.
   */
  async load(id: string, path: string, options?: AssetLoadOptions): Promise<String> {
    const keep = options?.keep ?? true;

    try {
      const response = await this.fetchTextFile(path);
      const textContent = await this.extractTextContent(response);
      const text = new String(textContent);

      if (keep) {
        this.loadedAssets[id] = text;
      }

      return text;
    } catch (error) {
      throw new Error(
        `Failed to load text "${id}" from "${path}": ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  /**
   * Fetch a text file from the given path with proper error handling.
   * @param path - The path to the text file.
   * @returns Promise that resolves to the response.
   */
  private async fetchTextFile(path: string): Promise<Response> {
    const response = await fetch(path);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Text file not found: ${path}`);
      }
      if (response.status === 403) {
        throw new Error(`Access denied to text file: ${path}`);
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response;
  }

  /**
   * Extract text content from the response with proper encoding handling.
   * @param response - The fetch response.
   * @returns Promise that resolves to the text content.
   */
  private async extractTextContent(response: Response): Promise<string> {
    const textContent = await response.text();

    // Basic validation - ensure we got some content
    if (textContent === null || textContent === undefined) {
      throw new Error('Text content is null or undefined');
    }

    return textContent;
  }
}
