# shaders

LED_spin: a spinning LED windmill
- changes directions and speeds based on the quadrant your mouse is in

line_bounce.frag: just a weird sine wave type thing

- poi.frag: for simulating poi?

### Squares progression
- sq_0: a single solid square {ax}
- sq_1: an outlined square {0}
- sq_2: a pulsating outlined square {2}
- sq_3: an array of solid squares (centered on mod=0) {0}
- sq_4: an array of outlined squares (centered on mod=0)  {1,3}
- sq_5: an array of pulsating, outlined squares centered on mod=0 {2,4}
- sq_6: an array of pulsating, outlined squares centered on mod=d/2  {5}
- sq_7: a rotating array of solid squares

### Diamonds progression
- di_0: a single solid diamond {ax}
- di_1: a pattern of diamonds {0}
