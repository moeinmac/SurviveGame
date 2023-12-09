const dangerWealth = 5;
const seekCost = 0.25;

class Agent {
  constructor(agentData, x, y, ID) {
    this.vision = agentData.vision;
    this.metabolism = agentData.metabolism;
    this.diligence = agentData.diligence;
    this.wealth = agentData.wealth;
    this.color = agentData.color;
    this.ID = ID;
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
    GameData[act.y][act.x] = { v: 0, id: this.ID };
    this.x = act.x;
    this.y = act.y;
    this.wealth -= seekCost;
  }
  seek() {
    for (let v = 1; v <= this.vision; v++) {
      const actions = this.getActions(v);
      for (const act of actions) {
        if (GameData[act.y][act.x].v && GameData[act.y][act.x].id == null) {
          this.wealth += GameData[act.y][act.x].v;
          this.move(act);
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

class Contented extends Agent {
  work() {
    if (this.wealth <= dangerWealth) this.seek();
  }
}

class Robber extends Agent {
  theif() {
    const action = this.getActions(1);
    for (const act of action) {
      if (GameData[act.y][act.x].id != null) {
        const robbed = AgentData.find((agent) => {
          if (agent.ID == GameData[act.y][act.x].id) return agent;
        });
        if (robbed.constructor.name == "Robber") {
          this.seek();
          return;
        }
        this.wealth += robbed.wealth / 2;
        robbed.wealth -= robbed.wealth / 2;
        robberyAgent(robbed.x, robbed.y, robbed.color);
        if(robbed.constructor.name == "Contented"){
          this.die()
        AgentData.splice(AgentData.indexOf(this), 1);
        }
        return;
      }
    }
    this.seek();
  }
  work() {
    if (this.diligence == 1) {
      this.diligence = RData.diligence;
      this.theif();
    } else this.diligence -= 1;
  }
}

const distributeAgents = (type, aNumber) => {
  let aCounter = 0;
  while (aCounter < aNumber) {
    let x = Math.floor(Math.random() * (width / size - 1));
    let y = Math.floor(Math.random() * (height / size - 1));
    if (!GameData[y][x].id) {
      const agentTypes = new Map([
        ["T", new Talented(TData, x, y, AgentData.length)],
        ["HW", new HardWorker(HWData, x, y, AgentData.length)],
        ["RK", new RichKid(RKData, x, y, AgentData.length)],
        ["C", new Contented(CData, x, y, AgentData.length)],
        ["R", new Robber(RData, x, y, AgentData.length)],
      ]);
      const agent = agentTypes.get(type);
      AgentData.push(agent);
      GameData[y][x] = { ...GameData[y][x], id: AgentData.length };
      aCounter++;
    }
  }
};
