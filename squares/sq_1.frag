/**
 * This file creates a single solid square
 */

#ifdef GL_ES
precision mediump float;
#endif


uniform vec2 u_resolution;
uniform float u_time;

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
  float squareBorder = 10.0;
  float squareCenterX = midX;
  float squareCenterY = midY;

/*  if( (
       // right side
       (gl_FragCoord.x < squareCenterX + (squareWidth / 2.0) + squareBorder &&
        gl_FragCoord.x > squareCenterX + (squareWidth / 2.0) - squareBorder ) ||
       // left side
       (gl_FragCoord.x < squareCenterX - (squareWidth / 2.0) + squareBorder &&
        gl_FragCoord.x > squareCenterX - (squareWidth / 2.0) - squareBorder )) ||
      (
       // bottom
       (gl_FragCoord.y < squareCenterY + (squareWidth / 2.0) + squareBorder &&
        gl_FragCoord.y > squareCenterY + (squareWidth / 2.0) - squareBorder ) ||

       // top
       (gl_FragCoord.y < squareCenterY - (squareWidth / 2.0) + squareBorder &&
        gl_FragCoord.y > squareCenterY - (squareWidth / 2.0) - squareBorder ))
        ) */

  if( gl_FragCoord.x > squareCenterX - (squareWidth / 2.0) &&
      gl_FragCoord.x < squareCenterX + (squareWidth / 2.0) &&
      gl_FragCoord.y > squareCenterY - (squareWidth / 2.0) &&
      gl_FragCoord.y < squareCenterY + (squareWidth / 2.0)
      )
    gl_FragColor = squareColor;
  
}