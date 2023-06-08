// array di numeri
let numeri = Array.from({length: 76}, function(element, index) {
    return index + 1;
  });
  
// tabellone della tombola
const tabellone = document.getElementById("tabellone");
for (let i = 1; i <= 76; i++) {
  const numero = document.createElement("div");
  numero.textContent = i;
  numero.classList.add("numero");
  tabellone.appendChild(numero);
}


function estraiNumero() {
    const numeroEstratto = document.getElementById("numero-estratto");
    const numeriTabellone = document.querySelectorAll("#tabellone .numero");
    if (numeri.length === 0) {
        alert('TOMBOLAAA')
      numeroEstratto.textContent = "Tutti i numeri sono stati estratti!";
      return;
    }
    const indice = Math.floor(Math.random() * numeri.length);
    const numero = numeri[indice];
    numeri.splice(indice, 1);
    numeroEstratto.textContent = numero;
    numeriTabellone[numero - 1].classList.add("estratto");
    numeriTabellone[numero - 1].classList.add("disabled");
  }