const dangerWealth = 4;
const seekCost = 0.25;

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
      { action: "RIGHT", x: positionValidity(this.x + v, true), y: this.y },
    ];
    return actions.filter((ac) => {
      if (ac.x != null && ac.y != null) return ac;
    });
  }
  move(act) {
    moveAgent(this.x, this.y, act.x, act.y, this.color);
    GameData[this.y][this.x] = { ...GameData[this.y][this.x], id: null };
    GameData[act.y][act.x] = { v: 0, id: this.agentID };
    this.x = act.x;
    this.y = act.y;
    this.wealth -= seekCost;
  }
  seek() {
    for (let v = 1; v <= this.vision; v++) {
      const actions = this.getActions(v);
      for (const act of actions) {
        if (GameData[act.y][act.x].v && !GameData[act.y][act.x].id) {
          this.move(act);
          this.wealth += GameData[act.y][act.x].v;
          return;
        }
      }
    }
    const actions = this.getActions(1);
    while (actions.length >= 0) {
      let pickRandom = Math.floor(Math.random() * actions.length);
      let act = actions[pickRandom];
      if (!GameData[act.y][act.x].id) {
        this.move(act);
        return;
      }
      actions.splice(pickRandom, 1);
    }
  }
}

class Talented extends Agent {
  work() {
    if (this.diligence == 1) {
      this.diligence = TData.diligence;
      this.seek();
    } else this.diligence -= 1;
  }
}

class HardWorker extends Agent {
  work() {
    if (this.diligence == 1) {
      this.diligence = HWData.diligence;
      this.seek();
    } else this.diligence -= 1;
  }
}

class RichKid extends Agent {
  work() {
    if (this.diligence == 1) {
      this.diligence = RKData.diligence;
      this.seek();
    } else this.diligence -= 1;
  }
}

