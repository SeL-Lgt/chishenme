import list from "./food/dj.js";

function random() {
  let run = 0;
  const heading = document.querySelector("h1");
  let timer;

  document.getElementById("start").addEventListener("click", function () {
    if (!run) {
      heading.innerHTML = heading.innerHTML.replace("吃这个！", "吃什么？");
      this.value = "停止";
      timer = setInterval(function () {
        const r = Math.ceil(Math.random() * list.length),
          food = list[r - 1];
        document.getElementById("what").innerHTML = food;
        const rTop = Math.ceil(Math.random() * document.documentElement.clientHeight),
          rLeft = Math.ceil(Math.random() * (document.documentElement.clientWidth - 50)),
          rSize = Math.ceil(Math.random() * (37 - 14) + 14);
        const span = document.createElement("span");
        span.className = "temp";
        span.innerHTML = food;
        span.style.display = "none";
        span.style.position = "absolute";
        span.style.top = rTop + "px";
        span.style.left = rLeft + "px";
        span.style.color = "rgba(0,0,0," + Math.random() + ")";
        span.style.fontSize = rSize + "px";
        document.body.appendChild(span);
        span.style.display = "block";
        span.style.opacity = 0;
        setTimeout(() => {
          span.style.transition = "opacity 1s";
          span.style.opacity = 1;
          setTimeout(() => {
            span.style.opacity = 0;
            span.addEventListener("transitionend", () => {
              document.body.removeChild(span);
            });
          }, 1000);
        }, 0);
      }, 50);
      run = 1;
    } else {
      heading.innerHTML = heading.innerHTML.replace("吃什么？", "吃这个！");
      this.value = "不行，换一个";
      clearInterval(timer);
      run = 0;
    }
  });

  document.addEventListener("keydown", function enter(e) {
    e = e || event;
    if (e.keyCode === 13 || e.key === "Enter") {
      document.getElementById("start").click();
    }
  });
}

random();
