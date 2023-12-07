const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

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
distributeAgents("RK",20);


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
}, 1000);