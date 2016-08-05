/**
 * This file creates a single pulsating square
 * Predecessors: sq_1
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
  
  // background color
  gl_FragColor = BLK_4;
  
  // square color
  vec4 squareColor = GRN_4;

  // midpoints
  float midX = u_resolution.x / 2.0;
  float midY = u_resolution.y / 2.0;
  
  // square attributes
  float staticSquareWidth = 100.0;
  float squareBorder = 20.0;
  float squareCenterX = midX;
  float squareCenterY = midY;

  // square pulation attributes
  // TODO double check me
  float BPM = 120.0;
  float pulseSpeed = BPM / 60.0 * (PI * 2.0);
  float pulseAmplitude = 20.0;
  float squareWidth = staticSquareWidth + pulseAmplitude * sin(pulseSpeed * u_time);

  if(
     (// inside outer square
      gl_FragCoord.x > squareCenterX - (squareWidth / 2.0) - (squareBorder / 2.0) &&
      gl_FragCoord.x < squareCenterX + (squareWidth / 2.0) + (squareBorder / 2.0) &&
      gl_FragCoord.y > squareCenterY - (squareWidth / 2.0) - (squareBorder / 2.0) &&
      gl_FragCoord.y < squareCenterY + (squareWidth / 2.0) + (squareBorder / 2.0)
      ) &&
     (// not within inner square
      gl_FragCoord.x < squareCenterX - (squareWidth / 2.0) + (squareBorder / 2.0) ||
      gl_FragCoord.x > squareCenterX + (squareWidth / 2.0) - (squareBorder / 2.0) ||
      gl_FragCoord.y < squareCenterY - (squareWidth / 2.0) + (squareBorder / 2.0) ||
      gl_FragCoord.y > squareCenterY + (squareWidth / 2.0) - (squareBorder / 2.0)
      )
     )
    gl_FragColor = squareColor;
  
}
