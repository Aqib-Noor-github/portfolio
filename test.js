// alert("hellow")
var hamMenu = document.querySelector(".ham-menu");
var dropMenu = document.querySelector(".drop-menu");
var dropMenuList = document.querySelectorAll(".drop-menu div");
var dropMenuListText = document.querySelectorAll(".drop-menu div a");
console.log(dropMenu);
console.log(hamMenu);
// console.log("aqib");
// hamMenu.onclick = () => {
//       dropMenu.classList.remove ("inactive");
//       dropMenu.classList.add("active");
//       console.log("inactive");
// };
// function myfunction() {
//   console.log(dropMenu);
//   dropMenu.classList.remove("inactive");
//   dropMenu.classList.add("active")
//   console.log("aqib")
// }

hamMenu.addEventListener("click", () => {
  dropMenu.classList.toggle("drop-down");
  hamMenu.children[0].classList.toggle("top");
  hamMenu.children[1].classList.toggle("mid");
  hamMenu.children[2].classList.toggle("bottom");
});

dropMenuList.forEach((li) => {
  li.addEventListener("mouseover", (e) => {
    li.style.backgroundImage = "linear-gradient(to right,#EBF5F8,#58A29F)";
    li.children[0].style.color = "white";
  });

  li.addEventListener("mouseleave", (e) => {
    li.style.backgroundImage = "linear-gradient(to right,#EBF5F8,#EBF5F8)";
    li.children[0].style.color = "#58A29F";
  });
});
