var loader = function (e) {
  let file = e.target.file;
  let show = "<span> fichier choisi: </span>"+ file[0].name;

  let output = document.getElementById("selector");
  output.innerHTML = show;
  output.classList.add("active");

};

let fileInput = document.getElementById("file");
fileInput.addEventListener("change", loader);
