let currentURL = "";

function generate(){
  const url = document.getElementById("link").value;
  const currentURL = "https://soon-tm.ml/?q=" + btoa(url);
  document.getElementById("generated").style.display = "block";
  document.getElementById("output").innerText = currentURL;
}

function copyLink() {
  navigator.clipboard.writeText(currentURL);
  alert("Copied to clipboard!");
}