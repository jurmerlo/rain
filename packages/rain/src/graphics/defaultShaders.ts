import { glsl } from './glContext.js';

const SHAPE_VERT: string = glsl`
  #version 300 es

  in vec3 a_position;
  in vec4 a_color;

  uniform mat4 u_projection;

  out vec4 v_color;

  void main() {
    gl_Position = u_projection * vec4(a_position, 1.0);
    v_color = a_color;
  }
`;

const SHAPE_FRAG: string = glsl`
  #version 300 es

  precision mediump float;

  in vec4 v_color;

  out vec4 o_color;

  void main() {
    o_color = v_color;
  }
`;

const SHAPE_VERT_GL1: string = glsl`
  #version 100

  attribute vec3 a_position;
  attribute vec4 a_color;

  uniform mat4 u_projection;

  varying vec4 v_color;

  void main() {
    gl_Position = u_projection * vec4(a_position, 1.0);
    v_color = a_color;
  }
`;

const SHAPE_FRAG_GL1: string = glsl`
  #version 100

  precision mediump float;

  varying vec4 v_color;

  void main() {
    gl_FragColor = v_color;
  }
`;

const IMAGE_VERT: string = glsl`
  #version 300 es

  in vec3 a_position;
  in vec4 a_color;
  in vec2 a_uv;

  uniform mat4 u_projection;

  out vec2 v_uv;
  out vec4 v_color;

  void main() {
    gl_Position = u_projection * vec4(a_position, 1.0);
    v_uv = a_uv;
    v_color = a_color;
  }
`;

const IMAGE_FRAG: string = glsl`
  #version 300 es

  precision mediump float;

  uniform sampler2D u_texture;

  in vec2 v_uv;
  in vec4 v_color;

  out vec4 o_color;

  void main() {
    vec4 color = texture(u_texture, v_uv) * v_color;
    color.rgb *= v_color.a;
    o_color = color;
  }
`;

const IMAGE_VERT_GL1: string = glsl`
  #version 100

  attribute vec3 a_position;
  attribute vec4 a_color;
  attribute vec2 a_uv;

  uniform mat4 u_projection;

  varying vec2 v_uv;
  varying vec4 v_color;

  void main() {
    gl_Position = u_projection * vec4(a_position, 1.0);
    v_uv = a_uv;
    v_color = a_color;
  }
`;

const IMAGE_FRAG_GL1: string = glsl`
  #version 100

  precision mediump float;

  uniform sampler2D u_texture;

  varying vec2 v_uv;
  varying vec4 v_color;

  void main() {
    vec4 color = texture2D(u_texture, v_uv) * v_color;
    color.rgb *= v_color.a;
    gl_FragColor = color;
  }
`;

/**
 * Get the source code for the shape vertex shader.
 * @param gl1 - If true, returns the GL1 version of the vertex shader.
 * @returns The shader source.
 */
export function getShapeVertexSource(gl1: boolean): string {
  return gl1 ? SHAPE_VERT_GL1 : SHAPE_VERT;
}

/**
 * Get the source code for the shape fragment shader.
 * @param gl1 - If true, returns the GL1 version of the fragment shader.
 * @returns The shader source.
 */
export function getShapeFragmentSource(gl1: boolean): string {
  return gl1 ? SHAPE_FRAG_GL1 : SHAPE_FRAG;
}

/**
 * Get the source code for the image vertex shader.
 * @param gl1 - If true, returns the GL1 version of the vertex shader.
 * @returns The shader source.
 */
export function getImageVertexSource(gl1: boolean): string {
  return gl1 ? IMAGE_VERT_GL1 : IMAGE_VERT;
}

/**
 * Get the source code for the image fragment shader.
 * @param gl1 - If true, returns the GL1 version of the fragment shader.
 * @returns The shader source.
 */
export function getImageFragmentSource(gl1: boolean): string {
  return gl1 ? IMAGE_FRAG_GL1 : IMAGE_FRAG;
}
