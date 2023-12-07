class Agent {
  constructor(agentData, x, y, agentID) {
    this.vision = agentData.vision;
    this.metabolism = agentData.metabolism;
    this.diligence = agentData.diligence;
    this.wealth = agentData.wealth;
    this.color = agentData.color;
    this.agentID = agentID;
    this.x = x;
    this.y = y;
  }
  live() {
    drawAgent(this.x, this.y, this.color);
    this.wealth -= this.metabolism;
    if (this.wealth <= 0) return false;
    return true;
  }
  die() {
    GameData[this.y][this.x].id = null;
    eraseAgent(this.x, this.y);
    return;
  }
  getActions(v) {
    const actions = [
      { action: "TOP", x: this.x, y: positionValidity(this.y - v) },
      { action: "BOTTOM", x: this.x, y: positionValidity(this.y + v) },
      { action: "LEFT", x: positionValidity(this.x - v, true), y: this.y },
      { action: "RIGHT", x: positionValidity(this.x + v,true), y: this.y },
    ];
    return actions.filter((ac) => {
      if (ac.x != null && ac.y != null) return ac;
    });
  }
}

const drawAgent = (x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x * size + 1, y * size + 1, size - 2, size - 2);
};

const eraseAgent = async (x, y) => {
  ctx.moveTo(x * size + 1, y * size + 1);
  drawAgent(ctx, x, y, "#717D7B");
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ctx.clearRect(x * size + 1, y * size + 1, size - 2, size - 2));
    }, 1000);
  });
  await promise;
};

const positionValidity = (pos, isWidth) => {
  if (pos < 0 || pos > width / size - 1 || (pos > height / size - 1 && !isWidth))
    return null;
  return pos;
};
