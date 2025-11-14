import { Rectangle } from '../math/rectangle.js';
import type { Graphics } from './graphics.js';
import type { Image } from './image.js';

/**
 * Types representing the structure of atlas JSON data.
 */
type Frame = {
  x: number;
  y: number;
  w: number;
  h: number;
};

type SourceSize = {
  w: number;
  h: number;
};

type AtlasFrameInfo = {
  filename: string;
  trimmed: boolean;
  frame: Frame;
  sourceSize: SourceSize;
  spriteSourceSize: Frame;
};

type AtlasData = {
  frames: AtlasFrameInfo[];
};

/**
 * Class representing a single frame in a sprite atlas.
 */
export class AtlasFrame {
  /**
   * The name of the frame.
   */
  readonly name: string;

  /**
   * The rectangle defining the frame within the atlas.
   */
  readonly frame: Rectangle;

  /**
   * Whether the frame is trimmed.
   */
  readonly trimmed: boolean;

  /**
   * The source size and offset of the frame.
   */
  readonly sourceRect: Rectangle;

  /**
   * Create an AtlasFrame from JSON frame data.
   * @param frameInfo - The frame information from the atlas JSON.
   * @returns The atlas frame.
   */
  static fromJsonFrame(frameInfo: AtlasFrameInfo): AtlasFrame {
    const frameRect = new Rectangle(frameInfo.frame.x, frameInfo.frame.y, frameInfo.frame.w, frameInfo.frame.h);
    const sourceRect = new Rectangle(
      frameInfo.spriteSourceSize.x,
      frameInfo.spriteSourceSize.y,
      frameInfo.sourceSize.w,
      frameInfo.sourceSize.h,
    );

    return new AtlasFrame(frameInfo.filename, frameRect, frameInfo.trimmed, sourceRect);
  }

  /**
   * Create a new atlas frame.
   * @param name - The name of the frame.
   * @param frame - The rectangle defining the frame within the atlas.
   * @param trimmed - Whether the frame is trimmed.
   * @param sourceRect - The source size and offset of the frame.
   */
  constructor(name: string, frame: Rectangle, trimmed: boolean, sourceRect: Rectangle) {
    this.name = name;
    this.frame = frame;
    this.trimmed = trimmed;
    this.sourceRect = sourceRect;
  }
}

/**
 * Class representing a sprite atlas.
 */
export class Atlas {
  /**
   * The image containing the atlas textures.
   */
  readonly image: Image;

  /**
   * The frames in the atlas, mapped by their names.
   */
  private frames: Record<string, AtlasFrame> = {};

  /**
   * Create a new sprite atlas.
   * @param image - The atlas image.
   * @param data - The atlas JSON data.
   */
  constructor(image: Image, data: string) {
    this.image = image;

    const frameData = JSON.parse(data) as AtlasData;
    for (const frameInfo of frameData.frames) {
      const frame = AtlasFrame.fromJsonFrame(frameInfo);
      this.frames[frame.name] = frame;
    }
  }

  /**
   * Get a frame by its name.
   * @param name - The name of the frame.
   * @returns The atlas frame.
   */
  getFrame(name: string): AtlasFrame {
    if (!this.frames[name]) {
      console.log(`Frame ${name} does not exist in atlas`);
    }

    return this.frames[name];
  }

  /**
   * Draw a frame from the atlas.
   * @param graphics - The graphics context to draw on.
   * @param name - The name of the frame to draw.
   * @param x - The x position to draw the frame.
   * @param y - The y position to draw the frame.
   * @param anchorX - The anchor x point (0 to 1).
   * @param anchorY - The anchor y point (0 to 1).
   */
  // biome-ignore lint/nursery/useMaxParams: All parameters are necessary.
  drawFrame(
    graphics: Graphics,
    name: string,
    x: number,
    y: number,
    anchorX: number = 0.5,
    anchorY: number = 0.5,
  ): void {
    const frame = this.getFrame(name);
    if (!frame) {
      return;
    }

    graphics.drawImage(
      x - frame.sourceRect.width * anchorX + frame.sourceRect.x,
      y - frame.sourceRect.height * anchorY + frame.sourceRect.y,
      this.image,
      frame.frame,
    );
  }
}
