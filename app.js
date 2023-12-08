const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const progresses = Array.from(document.querySelectorAll("progress"));

const width = 1200;
const height = 690;
const size = 30;

canvas.width = width;
canvas.height = height;

const GameData =new Array(height / size)
  .fill(0)
  .map(() => Array(width / size).fill({ v: 0, id: null }));

gridBoard();

const cookiesNumber = 200;
distributeCookies();

const AgentData = [];
distributeAgents("HW",20);
distributeAgents("T",20);
distributeAgents("RK",10);
distributeAgents("C",20);
distributeAgents("R",10);

// const c = new Contented(CData,5,5,0);
// GameData[5][5] = { ...GameData[5][5], id: 0 };
// AgentData.push(c);
// const r = new Robber(RData,5,6,1);
// GameData[6][5] = { ...GameData[6][5], id: 1};
// AgentData.push(r);

// AgentData[0].live()
// AgentData[1].live()

const game = setInterval(() => {
  if (AgentData.length <= 0) {
    console.log("END");
    clearInterval(game);
  }
  AgentData.forEach((agent) => {
    if (agent.live()) {
      agent.work();
    } else {
      agent.die();
      AgentData.splice(AgentData.indexOf(agent), 1);
    }
  });
  renderAgentsWealth()
}, 1000);