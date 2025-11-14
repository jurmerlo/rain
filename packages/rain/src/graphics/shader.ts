import { inject } from '../di/inject.js';
import { getImageVertexSource, getShapeVertexSource } from './defaultShaders.js';
import type { GLContext } from './glContext.js';
import type { BlendParameters, TextureParameters } from './types.js';

/**
 * Is the shader for shapes or images.
 */
export type ShaderType = 'shape' | 'image';

/**
 * A shader program that can be used to render shapes or images.
 */
export class Shader {
  /**
   * The type of shader.
   */
  readonly type: ShaderType;

  /**
   * The location of the vertex position attribute.
   */
  readonly positionLocation = 0;

  /**
   * The location of the vertex color attribute.
   */
  readonly colorLocation = 1;

  /**
   * The location of the vertex UV attribute if this is an image shader.
   */
  readonly uvLocation = 2;

  /**
   * All uniform locations for the shader.
   */
  readonly uniforms: Record<string, WebGLUniformLocation>;

  /**
   * All blending parameters for the shader.
   */
  blendParameters: BlendParameters;

  /**
   * All texture filtering and wrapping parameters for the shader.
   */
  textureParameters: TextureParameters;

  private static shapeVertShader: WebGLShader;

  private static imageVertShader: WebGLShader;

  /**
   * The WebGL rendering context.
   */
  @inject('glContext')
  private glContext!: GLContext;

  /**
   * The shader program.
   */
  private program: WebGLProgram;

  /**
   * The anisotropic filter extension if it is available.
   */
  private anisotropicFilter: EXT_texture_filter_anisotropic | null;

  /**
   * Create a new shader.
   * @param type - The type of shader to create.
   * @param source - The fragment shader source.
   */
  constructor(type: ShaderType, source: string) {
    this.type = type;
    this.uniforms = {};
    const gl = this.glContext.gl;

    this.anisotropicFilter = this.glContext.gl.getExtension('EXT_texture_filter_anisotropic');

    const vertexShader = type === 'shape' ? this.getShapeVertShader() : this.getImageVertShader();
    const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, source);

    this.program = this.createProgram(gl, vertexShader, fragmentShader);

    const projection = this.getUniformLocation('u_projection');
    if (!projection) {
      throw new Error('projection not available in the vertex shader');
    }

    this.uniforms.u_projection = projection;
    if (type === 'image') {
      const texture = this.getUniformLocation('u_texture');
      if (!texture) {
        throw new Error('tex not available in the fragment shader');
      }
      this.uniforms.u_texture = texture;
    }

    this.blendParameters = {
      source: 'blend one',
      destination: 'inverse source alpha',
      operation: 'add',
      alphaSource: 'blend one',
      alphaDestination: 'inverse source alpha',
      alphaOperation: 'add',
    };

    this.textureParameters = {
      minFilter: 'linear',
      magFilter: 'linear',
      mipmap: 'none',
      uWrap: 'clamp to edge',
      vWrap: 'clamp to edge',
    };
  }

  /**
   * Use the shader program.
   */
  use(): void {
    this.glContext.gl.useProgram(this.program);
  }

  /**
   * Get the location of a uniform in the shader program.
   * @param id - The uniform identifier.
   * @returns The uniform location or null if it does not exist.
   */
  getUniformLocation(id: string): WebGLUniformLocation | null {
    return this.program ? this.glContext.gl.getUniformLocation(this.program, id) : null;
  }

  /**
   * Apply the texture parameters to a texture.
   * @param textUnit - The texture unit to apply the parameters to.
   */
  applyTextureParameters(textUnit: number): void {
    const gl = this.glContext.gl;
    gl.activeTexture(gl.TEXTURE0 + textUnit);

    const tex2d = gl.TEXTURE_2D;
    gl.texParameteri(tex2d, gl.TEXTURE_WRAP_S, this.glContext.getGLTextureWrap(this.textureParameters.uWrap));
    gl.texParameteri(tex2d, gl.TEXTURE_WRAP_T, this.glContext.getGLTextureWrap(this.textureParameters.vWrap));
    gl.texParameteri(
      tex2d,
      gl.TEXTURE_MIN_FILTER,
      this.glContext.getGLTextureFilter(this.textureParameters.minFilter, this.textureParameters.mipmap),
    );
    gl.texParameteri(
      tex2d,
      gl.TEXTURE_MAG_FILTER,
      this.glContext.getGLTextureFilter(this.textureParameters.magFilter, this.textureParameters.mipmap),
    );

    if (this.textureParameters.minFilter === 'anisotropic' && this.anisotropicFilter) {
      gl.texParameteri(tex2d, this.anisotropicFilter.TEXTURE_MAX_ANISOTROPY_EXT, 4);
    }
  }

  /**
   * Apply the shader blend mode.
   */
  applyBlendMode(): void {
    const gl = this.glContext.gl;
    if (this.blendParameters.source === 'blend one' && this.blendParameters.destination === 'blend zero') {
      gl.disable(gl.BLEND);
    } else {
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(
        this.glContext.getGLBlendMode(this.blendParameters.source),
        this.glContext.getGLBlendMode(this.blendParameters.destination),
        this.glContext.getGLBlendMode(this.blendParameters.alphaSource),
        this.glContext.getGLBlendMode(this.blendParameters.alphaDestination),
      );
      gl.blendEquationSeparate(
        this.glContext.getGLBlendOperation(this.blendParameters.operation),
        this.glContext.getGLBlendOperation(this.blendParameters.alphaOperation),
      );
    }
  }

  /**
   * Destroy the shader.
   */
  destroy(): void {
    this.glContext.gl.deleteProgram(this.program);
  }

  private getShapeVertShader(): WebGLShader {
    if (!Shader.shapeVertShader) {
      Shader.shapeVertShader = this.createShader(
        this.glContext.gl.VERTEX_SHADER,
        getShapeVertexSource(this.glContext.isGL1),
      );
    }

    return Shader.shapeVertShader;
  }

  private getImageVertShader(): WebGLShader {
    if (!Shader.imageVertShader) {
      Shader.imageVertShader = this.createShader(
        this.glContext.gl.VERTEX_SHADER,
        getImageVertexSource(this.glContext.isGL1),
      );
    }

    return Shader.imageVertShader;
  }

  /**
   * Create a shader.
   * @param type - The type of shader to create. (vertex or fragment).
   * @param source - The shader source.
   * @returns The compiled shader.
   */
  private createShader(type: number, source: string): WebGLShader {
    const gl = this.glContext.gl;
    const shader = gl.createShader(type);
    if (!shader) {
      throw new Error('Unable to create shader.');
    }

    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(`Error compiling shader:\n${gl.getShaderInfoLog(shader)}`);
    }

    return shader;
  }

  /**
   * Create a shader program.
   * @returns The shader program.
   */
  private createProgram(
    gl: WebGL2RenderingContext,
    vertexShader: WebGLShader,
    fragmentShader: WebGLShader,
  ): WebGLProgram {
    const program = gl.createProgram();
    if (program) {
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      const success = gl.getProgramParameter(program, gl.LINK_STATUS) as boolean;
      if (!success) {
        const error = gl.getProgramInfoLog(program);
        throw new Error(`Error while linking shader program: ${error}`);
      }

      gl.bindAttribLocation(program, this.positionLocation, 'a_position');
      gl.bindAttribLocation(program, this.colorLocation, 'a_color');

      if (this.type === 'image') {
        gl.bindAttribLocation(program, this.uvLocation, 'a_uv');
      }

      return program;
    }

    throw new Error('Unable to create shader program');
  }
}
