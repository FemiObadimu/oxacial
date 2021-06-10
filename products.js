// Oxacial Scripts
// Event Listeners
let aomias = document
  .getElementById("aomias")
  .addEventListener("click", showAomias);
let samsung = document
  .getElementById("samsung")
  .addEventListener("click", showSamsung);
let airpod = document
  .getElementById("airpod")
  .addEventListener("click", showAirpod);
let joygeek = document
  .getElementById("joygeek")
  .addEventListener("click", showJoygeeks);

let adidas = document
  .getElementById("adidas")
  .addEventListener("click", showAdidas);
let bag = document.getElementById("bag").addEventListener("click", showBag);

let phasier = document
  .getElementById("phasier")
  .addEventListener("click", showPhasier);

let manfrotto = document
  .getElementById("manfrotto")
  .addEventListener("click", showManfrotto);

let casio = document
  .getElementById("casio")
  .addEventListener("click", showCasio);

let checkout = document
  .getElementById("checkout")
  .addEventListener("click", calculateCart);

let cancel = document
  .getElementById("cancel")
  .addEventListener("click", clearCart);

// declaring variables

let amp = document.getElementById("aomias-price");
smg = document.getElementById("samsung-price");
air = document.getElementById("airpod-price");
jyg = document.getElementById("joygeek-price");
ads = document.getElementById("adidas-price");
bgs = document.getElementById("bag-price");
phr = document.getElementById("phasier-price");
mft = document.getElementById("manfrotto-price");
cso = document.getElementById("casio-price");

const output = document.getElementById("output");
const output2 = document.getElementById("output2");
const checked = document.getElementById("checked");

let products = [];

// Toggle Bar
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

// Calculate Cart
function calculateCart() {
  if (output.innerHTML === "") {
    document.getElementById("err").style.display = "block";
    output2.innerHTML = "__ __ __";
    setTimeout(() => {
      document.getElementById("err").style.display = "none";
    }, 2000);
  } else {
    output2.innerHTML = products.reduce((a, b) => a + b);
    checked.style.display = "block";
  }
}

// Clear Carted items
function clearCart() {
  output.innerHTML = "";
  output2.innerHTML = "__ __ __";
  checked.style.display = "none";
}

// Utility Items Functions
function showAomias() {
  products.push(parseInt(amp.value));
  output.innerHTML += ` ${amp.previousElementSibling.previousElementSibling.innerText}; `;
}

function showSamsung() {
  products.push(parseInt(smg.value));
  output.innerHTML += ` ${smg.previousElementSibling.previousElementSibling.innerText} ;`;
}

function showAirpod() {
  products.push(parseInt(air.value));
  output.innerHTML += `  ${air.previousElementSibling.previousElementSibling.innerText} ;`;
}

function showJoygeeks() {
  products.push(parseInt(jyg.value));
  output.innerHTML += ` ${jyg.previousElementSibling.previousElementSibling.innerText} ;`;
}

function showAdidas() {
  products.push(parseInt(ads.value));
  output.innerHTML += `   ${ads.previousElementSibling.previousElementSibling.innerText} ;`;
}

function showBag() {
  products.push(parseInt(bgs.value));
  output.innerHTML += `    ${bgs.previousElementSibling.previousElementSibling.innerText} ;`;
}

function showPhasier() {
  products.push(parseInt(phr.value));
  output.innerHTML += `   ${phr.previousElementSibling.previousElementSibling.innerText} ;`;
}

function showManfrotto() {
  products.push(parseInt(mft.value));
  output.innerHTML += `  ${mft.previousElementSibling.previousElementSibling.innerText} ;`;
}

function showCasio() {
  products.push(parseInt(cso.value));
  output.innerHTML += ` ${cso.previousElementSibling.previousElementSibling.innerText} ;`;
}
