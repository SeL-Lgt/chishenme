let i = 0;

document.getElementById("start").addEventListener("click", function () {
  i++;
  if (i >= 6) {
    alert("这么作？今天别吃了！");
    document.getElementById("start").style.display = "none";
  }
});
