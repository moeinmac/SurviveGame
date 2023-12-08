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

const robberyAgent=async (x,y,color) => {
  ctx.moveTo(x * size + 1, y * size + 1);
  drawAgent(x,y,"purple");
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(drawAgent(x,y,color));
    }, 500);
  });
  await promise;
}

const positionValidity = (pos, isWidth) => {
  if (
    pos < 0 ||
    pos > width / size - 1 ||
    (pos > height / size - 1 && !isWidth)
  )
    return null;
  return pos;
};

const renderAgentsWealth = () => {
  let tWealth = 0;
  let hwWealth = 0;
  let rkWealth = 0;
  let cWealth = 0;
  let rWealth = 0;
  AgentData.forEach((agent) => {
    if (agent.constructor.name === "Talented") tWealth += agent.wealth;
    else if (agent.constructor.name === "HardWorker") hwWealth += agent.wealth;
    else if (agent.constructor.name === "RichKid") rkWealth += agent.wealth;
    else if (agent.constructor.name === "Contented") cWealth += agent.wealth;
    else if (agent.constructor.name === "Robber") rWealth += agent.wealth;
  });
  const maxWealth = tWealth + hwWealth + rWealth + rkWealth + cWealth;
  const agentsWealth = [tWealth, hwWealth, rkWealth, cWealth, rWealth];
  for (let i = 0; i < progresses.length; i++) {
    progresses[i].value = agentsWealth[i];
    progresses[i].max = maxWealth;
  }
};
