var btnGenera = document.getElementById('genera');
btnGenera.addEventListener('click',
  function() {
    var inputNome = document.getElementById('nome-viaggiatore');
    var nomePasseggero = inputNome.value;
    console.log(nomePasseggero);

    var inputKm = document.getElementById('km');
    var lunghezzaViaggio = parseInt(inputKm.value);
    console.log(lunghezzaViaggio);

    var inputEta = document.getElementById('eta-viaggiatore');
    var etaPasseggero = inputEta.value;
    console.log(etaPasseggero);

    // prezzo biglietto (0.21euro/km)
    var prezzoBiglietto = 0.21 * lunghezzaViaggio;
    var offerta = 'Standard';

    // sconto del 20% se minorenne
    if (etaPasseggero == 'minorenne') {
      prezzoBiglietto -= ((prezzoBiglietto / 100) * 20);
      offerta = 'Sconto Minorenne';

    }
    // sconto 40% se over 65
    else if (etaPasseggero == 'over65') {
      prezzoBiglietto -= ((prezzoBiglietto / 100) * 40);
      offerta = 'Sconto Senior';
    }

    document.getElementById('nome-passeggero').innerHTML = nomePasseggero;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('costo').innerHTML = prezzoBiglietto.toFixed(2);
    var carrozza = Math.floor(Math.random() * 10) + 1;
    var cp = Math.floor(Math.random() * (100000 - 90000 + 1) + 90000);
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('cp-code').innerHTML = cp;
    var bigliettoDisplay = document.getElementById('biglietto');
    bigliettoDisplay.classList.remove('hidden');
    bigliettoDisplay.classList.add('display');

  }
);
var btnAnnulla = document.getElementById('annulla');
btnAnnulla.addEventListener('click',
  function() {
    document.getElementById('nome-viaggiatore').value = '';
    document.getElementById('km').value = '';
    document.getElementById('eta-viaggiatore').value = '';
    var bigliettoDisplay = document.getElementById('biglietto');
    bigliettoDisplay.classList.remove('display');
    bigliettoDisplay.classList.add('hidden');
  }
);
