const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const table = document.getElementById('iphone-table');
const tableRect = table.getBoundingClientRect();
const canvasWidth = tableRect.width;
const canvasHeight = tableRect.height;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

canvas.style.position = 'absolute';
canvas.style.top = table.offsetTop + 'px';
canvas.style.left = table.offsetLeft + 'px';
canvas.style.zIndex = '-1';

document.body.appendChild(canvas);

function drawLightning() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.strokeStyle = 'yellow';

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(canvasWidth, 0);
  ctx.lineTo(canvasWidth, canvasHeight);
  ctx.lineTo(0, canvasHeight);
  ctx.closePath();
  ctx.stroke();

  const lightningSegments = 50; 
  const segmentLength = canvasWidth / lightningSegments;
  const halfSegmentLength = segmentLength / 2;

  for (let i = 0; i < lightningSegments; i++) {
    const x = i * segmentLength + halfSegmentLength;
    const y = Math.random() * (canvasHeight - segmentLength) + halfSegmentLength;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + halfSegmentLength, y + halfSegmentLength);
    ctx.lineTo(x, y + segmentLength);
    ctx.lineTo(x - halfSegmentLength, y + halfSegmentLength);
    ctx.closePath();
    ctx.stroke();
  }
}

function animateLightning() {
  drawLightning();
  ctx.strokeStyle = 'purple';

  requestAnimationFrame(animateLightning);
}

animateLightning();
