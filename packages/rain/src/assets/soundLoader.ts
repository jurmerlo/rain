import type { Audio } from '../audio/audio.js';
import { Sound } from '../audio/sound.js';
import { inject } from '../di/inject.js';
import { AssetLoader, type AssetLoadOptions } from './assetLoader.js';

/**
 * A loader for sound assets.
 */
export class SoundLoader extends AssetLoader<Sound> {
  /**
   * The audio manager to use for decoding sound data.
   */
  @inject()
  private readonly audio!: Audio;

  /**
   * Create a new SoundLoader.
   */
  constructor() {
    super(Sound);
  }

  /**
   * Load a sound.
   * @param id - The id of the sound.
   * @param path - The path to the sound.
   * @param options - The load options.
   * @returns The loaded sound.
   * @throws Error if the sound cannot be loaded or is invalid.
   */
  async load(id: string, path: string, options?: AssetLoadOptions): Promise<Sound> {
    const keep = options?.keep ?? true;

    try {
      const response = await this.fetchSoundFile(path);
      const buffer = await response.arrayBuffer();
      if (buffer.byteLength === 0) {
        throw new Error('Sound file is empty or corrupted');
      }

      const sound = await this.audio.decodeSound(id, buffer);
      if (!sound) {
        throw new Error('Failed to decode sound data - unsupported format or corrupted file');
      }

      if (keep) {
        this.loadedAssets[id] = sound;
      }

      return sound;
    } catch (error) {
      throw new Error(
        `Failed to load sound "${id}" from "${path}": ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  /**
   * Fetch a sound file from the given path with proper error handling.
   * @param path - The path to the sound file.
   * @returns Promise that resolves to the response.
   */
  private async fetchSoundFile(path: string): Promise<Response> {
    const response = await fetch(path);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Sound file not found: ${path}`);
      }
      if (response.status === 403) {
        throw new Error(`Access denied to sound file: ${path}`);
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    // Check content type if available
    const contentType = response.headers.get('content-type');
    if (contentType && !this.isSupportedAudioType(contentType)) {
      console.warn(`Potentially unsupported audio type: ${contentType} for file: ${path}`);
    }

    return response;
  }

  /**
   * Check if the content type is a supported audio format.
   * @param contentType - The MIME type to check.
   * @returns True if the content type is likely a supported audio format.
   */
  private isSupportedAudioType(contentType: string): boolean {
    const supportedTypes = [
      'audio/mpeg',
      'audio/mp4',
      'audio/ogg',
      'audio/wav',
      'audio/webm',
      'audio/flac',
      'audio/aac',
    ];

    return supportedTypes.some((type) => contentType.toLowerCase().includes(type));
  }
}
