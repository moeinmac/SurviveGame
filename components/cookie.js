const cookie1 = document.querySelector("#c1");
const cookie2 = document.querySelector("#c2");
const cookie3 = document.querySelector("#c3");
const cookie4 = document.querySelector("#c4");

const cookieImgs = [cookie1, cookie2, cookie3, cookie4];

const cookie = (x, y, v) => {
  ctx.clearRect(x * size + 1, y * size + 1, size - 2, size - 2);
  ctx.drawImage(cookieImgs[v - 1], x * size, y * size);
};

const distributeCookies = () => {
  let cookieCounter = 0;
  while (cookieCounter < cookiesNumber) {
    let x = Math.floor(Math.random() * (width / size - 1));
    let y = Math.floor(Math.random() * (height / size - 1));
    if (!GameData[y][x].v) {
      let value = Math.floor(Math.random() * 4 + 1);
      cookie(x, y, value, size);
      GameData[y][x] = { v: value, id: null };
      cookieCounter++;
    }
  }
};