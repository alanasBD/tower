let disk = "";
document.getElementById("disk1").addEventListener("click", (event) => {
  disk = event.target;
  console.log(disk);
  event.stopPropagation();
});

document.getElementById("disk2").addEventListener("click", (event) => {
  console.log(event.target);
  event.stopPropagation();
});

document.getElementById("disk3").addEventListener("click", (event) => {
  console.log(event.target);
  event.stopPropagation();
});

document.getElementById("tower-area1").addEventListener("click", (event) => {
  console.log(event.target);
});

document.getElementById("tower-area2").addEventListener("click", (event) => {
  console.log(event.target);
});
document.getElementById("tower-area3").addEventListener("click", (event) => {
  console.log(event.target);
});
