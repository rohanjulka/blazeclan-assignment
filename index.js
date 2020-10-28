var Jimp = require('jimp');

// open a file called "lenna.png"
new Jimp(256, 256, (err, image) => {
    // this image is 256 x 256, every pixel is set to 0x00000000
    image
    .resize(256, 128);
    
    image.quality(60) // set JPEG quality
    .write('image.jpg'); // save
    // Generate algorithmically.
    for (let i = 0; i < 32768; i++) {
        let x = i & 255;
        let y = i / 256;
        let r = i << 3 & 0xF8;
        let g = i >> 2 & 0xF8;
        let b = i >> 7 & 0xF8;
        image.setPixelColor((r << 8 | g) << 8 | b, x, y);
    }
    image.quality(60) // set JPEG quality
    .write('image.jpg'); // save
  });
