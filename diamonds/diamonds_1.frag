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
  
  // 
  vec4 diamondColor = GRN_4;

  // midpoints
  float midX = u_resolution.x / 2.0;
  float midY = u_resolution.y / 2.0;
  
  // square attributes
  float w = 100.0;
  float wh = w / 2.0;
  float x = midX - gl_FragCoord.x, y = midY - gl_FragCoord.y;
  float squareCenterX = midX;
  float squareCenterY = midY;

  float w1 = w * 2.0;
  float wh1 = w1 / 2.0;
  float x1 = midX - gl_FragCoord.x, y1 = midY - gl_FragCoord.y + w1;

  float x2 = x;
  float y2 = y - w;
  
  if(
     (y1 < wh1 - x1 &&
     y1 > x1 - wh1 &&
     y1 < x1 + wh1 &&
      y1 > -wh1 - x1) ||

     (y2 < wh - x2 &&
      y2 > x2 - wh &&
      y2 < x2 + wh &&
      y2 > -wh - x2)
     )
    gl_FragColor = diamondColor;
  
}
