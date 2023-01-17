let img;

let rgbValue = 51;
let height;
let width;
let blockSize;
let drawSize;
let blocks = [];
let _loadImage

function preload() {
  img = loadImage('/image.png');
}

function setup() {
  createCanvas(window.innerWidth / 2 + 10, (window.innerWidth / 2 + 10) * img.height / img.width);
  img.loadPixels();
  updateSize(10);
  background(0);
  noStroke();
}

function changeImage(url) {
  img = loadImage(url, () => {
    resizeCanvas(window.innerWidth / 2 + 10, (window.innerWidth / 2 + 10) * img.height / img.width);
    background(0);
    img.loadPixels();
  }, () => {
    
  });
}

function updateSize(h) {
  height = h;
  blockSize = Math.floor(img.height / height);
  drawSize = Math.floor((window.innerWidth / 2 + 10) / height);
  width = Math.floor(img.width / img.height * height);
  console.log(height, width, blockSize);
}

class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    
    const color = getAvgColor(x, y);
    
    this.r = Math.round(color.r / rgbValue);
    this.g = Math.round(color.g / rgbValue);
    this.b = Math.round(color.b / rgbValue);
  }
  
  draw() {
    fill(this.r * rgbValue, this.g * rgbValue, this.b * rgbValue)
    rect(this.x * drawSize, this.y * drawSize, drawSize);
  }

  getStrings() {
    let strings = [];
    for(const v in 'rgb') {
      for(let i = 0; i < this['rgb'[v]]; i++) {
        strings.push(`1,278,2,${this.x * 15},3,${this.y * 15},21,${+v + 1}`);
      }
    }
    return strings;
  }
}

function getAvgColor(ix, iy) {
  const totalPixels = Math.pow(blockSize, 2);
  let r = 0;
  let g = 0;
  let b = 0;
  
  for(let x = ix * blockSize; x < (ix + 1) * blockSize; x++) {
    for(let y = iy * blockSize; y < (iy + 1) * blockSize; y++) {
      //const color = img.pixels[pixelID(x, y)];
      r += img.pixels[(x + y * img.width) * 4];
      g += img.pixels[(x + y * img.width) * 4 + 1];
      b += img.pixels[(x + y * img.width) * 4 + 2];
    }
  }
  return {
    r: Math.round(r / totalPixels),
    g: Math.round(g / totalPixels),
    b: Math.round(b / totalPixels)
  }
}


function generateImage() {
  background(0);
  blocks = [];
  
  for(let x = 0; x < width; x++) {
    for(let y = 0; y < height; y++) {
      blocks.push(new Block(x, y));
    }
  }
  for(const block of blocks) {
    block.draw();
  }
}

function getLevelStrings() {
  let strings = [];
  for(const i of blocks) strings = strings.concat(i.getStrings());
  return strings.join(';');
}