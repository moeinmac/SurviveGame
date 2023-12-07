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

const agent = new HardWorker(HWData,25 ,5 ,1);
const ac = agent.getActions(1);
agent.live()
console.log(ac);