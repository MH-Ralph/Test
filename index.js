let btns = document.querySelectorAll(".btn");

btns.forEach((btn, key) => {
  console.log(btn);
  btn.onclick = () => console.log("tao la nut: ", btn);
});
