/**
 * The values returned from a scale mode function.
 */
export type ScaleModeResult = {
  /**
   * The scaled game view width in pixels.
   */
  viewWidth: number;

  /**
   * The scaled game view heigh in pixels.
   */
  viewHeight: number;

  /**
   * The amount scaled on the x axis.
   */
  scaleFactorX: number;

  /**
   * The amount scaled on the y axis.
   */
  scaleFactorY: number;

  /**
   * The horizontal view offset inside the canvas in pixels.
   */
  offsetX: number;

  /**
   * The vertical view offset inside the canvas in pixels.
   */
  offsetY: number;
};

/**
 * The parameters passed into a scale mode function.
 */
export type ScaleModeOptions = {
  /**
   * The width in pixels the game is designed for before scaling.
   */
  designWidth: number;

  /**
   * The height in pixels the game is designed for before scaling.
   */
  designHeight: number;

  /**
   * The canvas width in pixels.
   */
  canvasWidth: number;

  /**
   * The canvas height in pixels.
   */
  canvasHeight: number;

  /**
   * The horizontal anchor in the screen (0 - 1).
   */
  anchorX: number;

  /**
   * The vertical anchor in the screen (0 - 1).
   */
  anchorY: number;
};

/**
 * The scale mode function blueprint.
 */
export type ScaleMode = (options: ScaleModeOptions) => ScaleModeResult;

/**
 * Scale the view to fit the canvas. Will cut off parts of the view to make it fit. Keeps aspect ratio.
 * @param options The scale mode options.
 * @return The scaled values.
 */
export function scaleModeFitView({
  designWidth,
  designHeight,
  canvasWidth,
  canvasHeight,
  anchorX,
  anchorY,
}: ScaleModeOptions): ScaleModeResult {
  const designRatio = designWidth / designHeight;
  const canvasRatio = canvasWidth / canvasHeight;

  let viewWidth = 0;
  let viewHeight = 0;
  if (canvasRatio < designRatio) {
    viewWidth = designWidth;
    viewHeight = Math.ceil(viewWidth / canvasRatio);
  } else {
    viewHeight = designHeight;
    viewWidth = Math.ceil(viewHeight * canvasRatio);
  }

  const scaleFactor = canvasWidth / viewWidth;

  const offsetX = (canvasWidth - designWidth * scaleFactor) * anchorX;
  const offsetY = (canvasHeight - designHeight * scaleFactor) * anchorY;

  return {
    viewWidth: viewWidth,
    viewHeight: viewHeight,
    scaleFactorX: scaleFactor,
    scaleFactorY: scaleFactor,
    offsetX: offsetX,
    offsetY: offsetY,
  };
}

/**
 * Scale the view to fit the design resolution.
 * @param options The scale mode options.
 * @return The scaled values.
 */
export function scaleModeFitDesign({
  designWidth,
  designHeight,
  canvasWidth,
  canvasHeight,
  anchorX,
  anchorY,
}: ScaleModeOptions): ScaleModeResult {
  const designRatio = designWidth / designHeight;
  const canvasRatio = canvasWidth / canvasHeight;

  let viewWidth = 0;
  let viewHeight = 0;
  if (canvasRatio > designRatio) {
    viewWidth = designWidth;
    viewHeight = Math.ceil(viewWidth / canvasRatio);
  } else {
    viewHeight = designHeight;
    viewWidth = Math.ceil(viewHeight * canvasRatio);
  }

  const scaleFactor = canvasWidth / viewWidth;

  const offsetX = (canvasWidth - designWidth * scaleFactor) * anchorX;
  const offsetY = (canvasHeight - designHeight * scaleFactor) * anchorY;

  return {
    viewWidth: viewWidth,
    viewHeight: viewHeight,
    scaleFactorX: scaleFactor,
    scaleFactorY: scaleFactor,
    offsetX: offsetX,
    offsetY: offsetY,
  };
}

/**
 * Scale the view to fit the width of the canvas. Will cut off parts at the top and bottom to fit. Keeps aspect ratio.
 * @param options The scale mode options.
 * @return The scaled values.
 */
export function scaleModeFitWidth({
  designWidth,
  designHeight,
  canvasWidth,
  canvasHeight,
  anchorX,
  anchorY,
}: ScaleModeOptions): ScaleModeResult {
  const canvasRatio = canvasWidth / canvasHeight;
  const viewWidth = designWidth;
  const viewHeight = Math.ceil(viewWidth / canvasRatio);
  const scaleFactor = canvasWidth / viewWidth;
  const offsetX = (canvasWidth - designWidth * scaleFactor) * anchorX;
  const offsetY = (canvasHeight - designHeight * scaleFactor) * anchorY;

  return {
    viewWidth: viewWidth,
    viewHeight: viewHeight,
    scaleFactorX: scaleFactor,
    scaleFactorY: scaleFactor,
    offsetX: offsetX,
    offsetY: offsetY,
  };
}

/**
 * Scale the view to fit the height of the canvas. Will cut off parts at the left and right to fit. Keeps aspect ratio.
 * @param options The scale mode options.
 * @return The scaled values.
 */
export function scaleModeFitHeight({
  designWidth,
  designHeight,
  canvasWidth,
  canvasHeight,
  anchorX,
  anchorY,
}: ScaleModeOptions): ScaleModeResult {
  const canvasRatio = canvasWidth / canvasHeight;
  const viewHeight = designHeight;
  const viewWidth = Math.ceil(viewHeight * canvasRatio);

  const scaleFactor = canvasHeight / viewHeight;

  const offsetX = (canvasWidth - designWidth * scaleFactor) * anchorX;
  const offsetY = (canvasHeight - designHeight * scaleFactor) * anchorY;

  return {
    viewWidth: viewWidth,
    viewHeight: viewHeight,
    scaleFactorX: scaleFactor,
    scaleFactorY: scaleFactor,
    offsetX: offsetX,
    offsetY: offsetY,
  };
}

/**
 * Don't scale the view. Just offset it inside the canvas if needed.
 * @param options The scale mode options.
 * @return The scaled values.
 */
export function scaleModeNoScale({
  designWidth,
  designHeight,
  canvasWidth,
  canvasHeight,
  anchorX,
  anchorY,
}: ScaleModeOptions): ScaleModeResult {
  const offsetX = (canvasWidth - designWidth) * anchorX;
  const offsetY = (canvasHeight - designHeight) * anchorY;

  return {
    viewWidth: designWidth,
    viewHeight: designHeight,
    scaleFactorX: 1.0,
    scaleFactorY: 1.0,
    offsetX: offsetX,
    offsetY: offsetY,
  };
}

/**
 * Stretch the view to fit the canvas. Does not keep the aspect ratio and can distort the view.
 * @param options The scale mode options.
 * @return The scaled values.
 */
export function scaleModeStretch({
  designWidth,
  designHeight,
  canvasWidth,
  canvasHeight,
}: ScaleModeOptions): ScaleModeResult {
  const viewWidth = designWidth;
  const viewHeight = designHeight;

  const scaleFactorX = canvasWidth / viewWidth;
  const scaleFactorY = canvasHeight / viewHeight;

  return {
    viewWidth: viewWidth,
    viewHeight: viewHeight,
    scaleFactorX: scaleFactorX,
    scaleFactorY: scaleFactorY,
    offsetX: 0,
    offsetY: 0,
  };
}
