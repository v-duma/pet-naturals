const phoneMask = document.getElementById("phone");
const name = document.getElementById("name");

IMask(phoneMask, {
  mask: "+{38}({\\000)000-00-00",
});

document.getElementById("phone").oninput = function () {
  const value = this.value;

  if (value.length > 0) {
    this.classList.add("highlight");
  } else {
    this.classList.remove("highlight");
  }
};

document.getElementById("name").oninput = function () {
  const nameValue = this.value;
  this.classList.add("highlight");
};
