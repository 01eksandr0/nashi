var button = document.getElementById("mybutton");
var element = document.getElementById("myelement");

button.addEventListener("click", function () {
  element.classList.add("is-open");
});
