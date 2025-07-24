export function hexToHSL(hex) {
    // regular expression extracts red green blue components
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    
    // Converstion of Hex to RGB
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
  
    // RGB normalized to scale 0-1
    (r /= 255), (g /= 255), (b /= 255);
    let max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2; // Lightness
  
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min); // Saturation
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6; // Hue calculation
    }
  
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
  
    return { h, s, l };
  }