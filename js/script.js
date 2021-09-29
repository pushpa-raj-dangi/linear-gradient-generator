const container = document.getElementById("container");
const colorLeft = document.getElementById("color-left");
const colorRight = document.getElementById("color-right");
const position = document.getElementsByTagName("position");
const tooltip = document.querySelector(".tooltip");
var title = document.getElementById("myInput");
const range = document.querySelector("#range");
var deg = document.querySelector("#deg");
const btn = document.getElementById("btn")

var rangeValue = "90deg";
range.addEventListener("input", function () {
  deg.textContent = range.value + "°";
  rangeValue = range.value + "deg";
  bgChange(rangeValue)
});

function bgChange(rangeValue) {
  container.style.background = `linear-gradient(${rangeValue}, ${colorLeft.value},${colorRight.value})`;
  setTitle()
}
setTitle()

function setBg() {
  container.style.background = `linear-gradient(${rangeValue}, ${colorLeft.value},${colorRight.value})`;
  setTitle()
}

function setTitle() {
  title.value = `background:linear-gradient(${rangeValue}, ${colorLeft.value},${colorRight.value})`;

}
colorRight.addEventListener("input", setBg);
colorLeft.addEventListener("input", setBg);


btn.addEventListener("click", () => {
  var copyBg = document.getElementById("myInput");
  copyBg.select();
  copyBg.setSelectionRange(0, 99999)
  document.execCommand("copy");
  setTimeout(() => {
    tooltip.style.visibility = 'hidden';
    tooltip.style.transition="visibility 0s linear 0.33s, opacity 0.33s linear";
    btn.textContent="copy";
  }, 3000);
  btn.textContent="👏";
  tooltip.style.visibility = 'visible';

})