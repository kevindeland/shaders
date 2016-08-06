/**
 * This file uses a generalized function to generate diamonds
 * Predecessors: n/a
 */

#ifdef GL_ES
precision mediump float;
#endif


uniform vec2 u_resolution;

/**
 * draws a diamond of color c centered on (x,y), with width w and height h
 */
void drawDiamond(float x, float y,float w,float h, vec4 c) {
  if(
     w*y + h*x < w*h &&
     w*y - h*x > -w*h &&
     w*y + h*x > -w*h &&
     w*y - h*x < w*h
      )
    gl_FragColor = c;
}


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

  float diamondUnit = 40.0;
  float diamondGrid = 8.0;

  float xA = x + 0.0 * diamondUnit,
    yA = y + 2.0 * diamondUnit,
    wA = 2.0 * diamondUnit;
  drawDiamond(xA, yA, wA, wA, diamondColor);

  float xB = x - 3.0 * diamondUnit,
    yB = y + 0.0 * diamondUnit,
    wB = 1.0 * diamondUnit;
  drawDiamond(xB, yB, wB, wB, diamondColor);

  float xC = x - 2.0 * diamondUnit,
    yC = y - 1.0 * diamondUnit,
    wC = 1.0 * diamondUnit;
  drawDiamond(xC, yC, wC, wC, diamondColor);

  float xD = x + 0.0 * diamondUnit,
    yD = y - 3.0 * diamondUnit,
    wD = 1.0 * diamondUnit;
  drawDiamond(xD, yD, wD, wD, diamondColor);

  float xE = x + 2.0 * diamondUnit,
    yE = y - 1.0 * diamondUnit,
    wE = 1.0 * diamondUnit;
  drawDiamond(xE, yE, wE, wE, diamondColor);

  float xF = x + 3.0 * diamondUnit,
    yF = y - 0.0 * diamondUnit,
    wF = 1.0 * diamondUnit;
  drawDiamond(xF, yF, wF, wF, diamondColor);

    //  drawDiamond(x2, y2, wh1, wh1, diamondColor);
}
