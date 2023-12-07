const drawAgent = (x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x * size + 1, y * size + 1, size - 2, size - 2);
};

const eraseAgent = async (x, y) => {
  ctx.moveTo(x * size + 1, y * size + 1);
  drawAgent(x, y, "#717D7B");
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ctx.clearRect(x * size + 1, y * size + 1, size - 2, size - 2));
    }, 1000);
  });
  await promise;
};

const moveAgent = (x, y, newX, newY, color) => {
  ctx.clearRect(x * size + 1, y * size + 1, size - 2, size - 2);
  ctx.moveTo(newX * size + 1, newY * size + 1);
  drawAgent(newX, newY, color);
};

const positionValidity = (pos, isWidth) => {
  if (
    pos < 0 ||
    pos > width / size - 1 ||
    (pos > height / size - 1 && !isWidth)
  )
    return null;
  return pos;
};
