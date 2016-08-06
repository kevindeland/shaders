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
  float squareWidth = 50.0;
  float squareCenterX = midX;
  float squareCenterY = midY;

  // array attributes
  float squareDist = 100.0; // distance between square centers
  float squarePixelTolerance = squareWidth / 2.0;

  // rotation traits
  float circleCenterX = 0.0;
  float circleCenterY = 0.0;
  vec2 pixelVector = vec2(gl_FragCoord.x - circleCenterX, gl_FragCoord.y - circleCenterY);
  float pixelDist = sqrt( pow(pixelVector.x, 2.0) +  pow(pixelVector.y, 2.0));
  // NEXT: rotation
 

  // green squares are centered on the midpoint of the display
  if(
     (mod(gl_FragCoord.x - squareCenterX, squareDist) < squarePixelTolerance ||
      mod(gl_FragCoord.x - squareCenterX, squareDist) > squareDist - squarePixelTolerance) &&
     (mod(gl_FragCoord.y - squareCenterY, squareDist) < squarePixelTolerance ||
      mod(gl_FragCoord.y - squareCenterY, squareDist) > squareDist - squarePixelTolerance)
     )
    gl_FragColor = squareColor;

  if(pixelDist < 300.0) gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);

  
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
