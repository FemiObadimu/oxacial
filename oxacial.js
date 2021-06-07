let bar = document.getElementById("bar");
remove = document.getElementById("remove");

function changeIcon() {
  if (remove.style.display === "none") {
    bar.style.display = "none";
    remove.style.display = "block";
  } else {
    bar.style.display = "block";
    remove.style.display = "none";
  }
}

changeIcon();
