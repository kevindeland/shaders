/**
 * This file creates a single solid square
 * Predecessors: n/a
 */

#ifdef GL_ES
precision mediump float;
#endif


uniform vec2 u_resolution;

void main(void) {
  // initialize colors
  vec4 BLK_4 = vec4(0.0, 0.0, 0.0, 1.0);
  vec4 GRN_4 = vec4(0.0, 1.0, 0.0, 1.0);
  
  // background color
  gl_FragColor = BLK_4;
  
  // square color
  vec4 squareColor = GRN_4;

  // midpoints
  float midX = u_resolution.x / 2.0;
  float midY = u_resolution.y / 2.0;
  
  // square attributes
  float squareWidth = 300.0;
  float squareCenterX = midX;
  float squareCenterY = midY;

  if(
     gl_FragCoord.x > squareCenterX - (squareWidth / 2.0) &&
     gl_FragCoord.x < squareCenterX + (squareWidth / 2.0) &&
     gl_FragCoord.y > squareCenterY - (squareWidth / 2.0) &&
     gl_FragCoord.y < squareCenterY + (squareWidth / 2.0)
     )
    gl_FragColor = squareColor;
  
}
