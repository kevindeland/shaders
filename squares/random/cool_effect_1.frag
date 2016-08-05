/**
 * This file creates an array of solid squares
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
  float squareWidth = 20.0;
  float squareCenterX = midX;
  float squareCenterY = midY;

  // array attributes
  float squareDist = 1.0; // distance between square centers
  float squarePixelTolerance = 1.0;
    
  if(
     (
      mod(gl_FragCoord.x - squareCenterX, squareDist) < squarePixelTolerance &&
      mod(gl_FragCoord.y - squareCenterY, squareDist) < squarePixelTolerance
      )      
     )
    gl_FragColor = squareColor;
  
}
