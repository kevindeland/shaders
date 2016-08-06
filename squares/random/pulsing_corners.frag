/**
 * This file creates an array of outlined squares, centered when modulus = 0
 * Predecessors: n/a
 */

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

void main(void) {
  // initialize colors
  vec4 BLK_4 = vec4(0.0, 0.0, 0.0, 1.0);
  vec4 GRN_4 = vec4(0.0, 1.0, 0.0, 1.0);
  vec4 BLU_4 = vec4(0.0, 0.0, 1.0, 1.0);
  
  // background color
  gl_FragColor = BLK_4;
  
  // square color
  vec4 squareColor = GRN_4;
  vec4 squareColor2 = BLU_4;

  // midpoints
  float midX = u_resolution.x / 2.0;
  float midY = u_resolution.y / 2.0;
  
  // square attributes
  float squareWidth = 100.0 + 20.0 * sin(2.0 * PI * u_time);
  float squareCenterX = midX;
  float squareCenterY = midY;
  float squareBorder = 10.0 - 5.0 * sin(2.0 * PI * u_time);
  float halfSquareBorder = squareBorder / 2.0;

  // array attributes
  float squareDist = 150.0; // distance between square centers
  float squarePixelTolerance = squareWidth / 2.0;

  // green squares are centered on the midpoint of the display
  float fmx = mod(gl_FragCoord.x - squareCenterX, squareDist);
  float fmy = mod(gl_FragCoord.y - squareCenterY, squareDist);
  float w = squarePixelTolerance;
  float b = halfSquareBorder;
  float d = squareDist;
  float mid = d / 2.0;

  if(
     // lower left (upper right corner)
     //((fmx < w + b) && (fmy < w + b) && ( (fmx > w - b) || (fmy > w - b))) ||
     // upper left (lower right corner)
          ((fmx < w + b) && (fmy > d - (w + b)) && ( (fmx > w - b) || (fmy < d - (w - b))) ) ||
     // upper right (lower left corner)
     //     ( (fmx > d - (w + b)) && (fmy > d - (w + b)) && ( (fmx < d - (w - b)) || (fmy < d - (w - b))) ) ||
     // lower right (upper left corner)
     ( (fmx > d - (w + b)) && (fmy < w + b) && ( (fmx < d - (w - b)) || (fmy > w - b) ) )
     )

    gl_FragColor = squareColor;

  
  //blue squares are centered on the botom left corner of the display (0,0)
  if(
     (
      (mod(gl_FragCoord.x, squareDist) < squarePixelTolerance ||
       mod(gl_FragCoord.x, squareDist) > squareDist - squarePixelTolerance)&&
      (mod(gl_FragCoord.y, squareDist) < squarePixelTolerance ||
       mod(gl_FragCoord.y, squareDist) > squareDist - squarePixelTolerance
       )     
      )      
     )
    true;
    //    gl_FragColor = squareColor2;

  
}
