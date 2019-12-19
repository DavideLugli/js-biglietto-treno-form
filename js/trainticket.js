var btnGenera = document.getElementById('genera');
btnGenera.addEventListener('click',
  function() {
    var inputNome = document.getElementById('nome-viaggiatore');
    console.log(inputNome);
    var nomePasseggero = inputNome.value;
    console.log(nomePasseggero);

    var inputKm = document.getElementById('km');
    console.log(inputKm);
    var lunghezzaViaggio = inputKm.value;
    console.log(lunghezzaViaggio);

    var inputEta = document.getElementById('eta-viaggiatore');
    console.log(inputEta);
    var etaPasseggero = inputEta.value;
    console.log(etaPasseggero);
  }
);

// chiedere all’utente l’età
// var etaPasseggero = parseInt(prompt('Quanti anni hai?'));
// console.log(etaPasseggero);
// // prezzo biglietto (0.21euro/km)
// var prezzoBiglietto = 0.21 * lunghezzaViaggio;
//
// // sconto del 20% se minorenne
// if (etaPasseggero < 18) {
//   prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto / 100) * 20);
//   console.log(prezzoBiglietto);
//   alert('applicato sconto del 20%');
//   document.writeln("il tuo biglietto costa " + prezzoBiglietto + " euro");
// }
// // sconto 40% se over 65
// else if (etaPasseggero >= 65) {
//   prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto / 100) * 40);
//   console.log(prezzoBiglietto);
//   alert('applicato sconto del 40%');
//   document.writeln("il tuo biglietto costa " + prezzoBiglietto + " euro");
// } else {
//   var prezzoBiglietto = 0.21 * lunghezzaViaggio;
//   console.log(prezzoBiglietto);
//   document.writeln("il tuo biglietto costa " + prezzoBiglietto + " euro");
// }
