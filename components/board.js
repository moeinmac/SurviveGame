const gridBoard = (ctx) => {
  ctx.beginPath();
  for (let i = 0; i <= width / size; i++) {
    ctx.moveTo(i * size, 0);
    ctx.lineTo(i * size, height);
  }
  for (let j = 0; j <= height / size; j++) {
    ctx.moveTo(0, j * size);
    ctx.lineTo(width, j * size);
  }
  ctx.closePath();
  ctx.stroke();
};
