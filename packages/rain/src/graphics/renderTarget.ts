import { inject } from '../di/inject.js';
import { Mat4 } from '../math/mat4.js';
import type { GLContext } from './glContext.js';

/**
 * A render target is an object that can be rendered to and then used as a texture.
 */
export class RenderTarget {
  /**
   * The width of the render target in pixels.
   */
  readonly width: number;

  /**
   * The height of the render target in pixels.
   */
  readonly height: number;

  /**
   * The projection matrix.
   */
  projection: Mat4;

  /**
   * The texture that can be used to render to.
   */
  readonly texture: WebGLTexture;

  /**
   * The framebuffer that can be used to render to.
   */
  readonly buffer: WebGLFramebuffer;

  /**
   * The WebGL rendering context.
   */
  @inject('glContext')
  private glContext!: GLContext;

  /**
   * Create a new render target.
   * @param width - The width of the render target in pixels.
   * @param height - The height of the render target in pixels.
   */
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.projection = new Mat4();
    this.projection.ortho(0, width, height, 0, -1, 1);

    const gl = this.glContext.gl;

    this.buffer = gl.createFramebuffer();
    this.texture = gl.createTexture();

    const tex2d = gl.TEXTURE_2D;
    gl.bindTexture(tex2d, this.texture);
    gl.texImage2D(tex2d, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.glContext.getGLTextureFilter('linear'));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.glContext.getGLTextureFilter('linear'));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.glContext.getGLTextureWrap('clamp to edge'));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.glContext.getGLTextureWrap('clamp to edge'));

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.buffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, tex2d, this.texture, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(tex2d, null);
  }

  /**
   * Destroy the render target.
   */
  destroy(): void {
    const gl = this.glContext.gl;
    gl.deleteTexture(this.texture);

    gl.deleteFramebuffer(this.buffer);
  }
}
