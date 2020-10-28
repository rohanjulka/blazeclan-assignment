const sharp = require('sharp');
// Create a blank 300x200 PNG image of semi-transluent red pixels
sharp({
    create: {
      width: 300,
      height: 200,
      channels: 4,
      background: { r: 255, g: 255, b: 255 }
    }
  })
  .jpeg()
  .toFile("test.jpg");