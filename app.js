const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const progresses = Array.from(document.querySelectorAll("progress"));

const addCookieButton = document.querySelector(".addCookie");

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

const loadAddCookieButton = ()=>{
  setTimeout(()=>{
    addCookieButton.classList.add("loadCookieButton");
  },10000)
}

addCookieButton.addEventListener("click",()=>{
  distributeCookies()
  addCookieButton.classList.remove("loadCookieButton")
  loadAddCookieButton()
});

document.addEventListener("DOMContentLoaded",loadAddCookieButton);

const AgentData = [];
distributeAgents("HW",20);
distributeAgents("T",20);
distributeAgents("RK",10);
distributeAgents("C",20);
distributeAgents("R",10);


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