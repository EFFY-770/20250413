let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("fefae0");

  // 產生 40 個圓
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 50),
      color: randomColor() // 使用自訂函數產生柔和色彩
    });
  }
}

function draw() {
  background("fefae0");

  // 繪製圓
  for (let circle of circles) {
    let newSize = map(mouseX, 0, width, 20, 80); // 根據滑鼠 X 軸位置調整大小
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, newSize, newSize);
  }
}

// 自訂函數：產生淡黃色、淡粉色、淡藍色的柔和色彩
function randomColor() {
  let colors = [
    color(random(240, 255), random(220, 240), random(200, 220)), // 淡黃色
    color(random(250, 255), random(200, 220), random(210, 230)), // 淡粉色
    color(random(200, 220), random(220, 240), random(240, 255))  // 淡藍色
  ];
  return random(colors);
}
