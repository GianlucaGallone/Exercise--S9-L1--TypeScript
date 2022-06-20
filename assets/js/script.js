"use strict";
const CONT = document.querySelector('.container');
let NUM = Math.random() * (100 - 1) + 1;
let NUM_FULL = Math.floor(NUM);
// ........ Player 1 input ........
let inp1 = document.createElement('input');
inp1.id = 'inp1';
inp1 === null || inp1 === void 0 ? void 0 : inp1.addEventListener('input', function (event) {
    const target = event.target;
    p1Score.innerHTML = `${target.value}`;
    return p1Score.innerHTML;
});
// ........ Player 2 input ........
let inp2 = document.createElement('input');
inp2.id = 'inp2';
inp2 === null || inp2 === void 0 ? void 0 : inp2.addEventListener('input', function (event) {
    const target = event.target;
    p2Score.innerHTML = `${target.value}`;
});
// ..... Contenitore punteggi .....
let scoreCont = document.createElement('div');
scoreCont.id = 'scoreCont';
let p1Score = document.createElement('p');
p1Score.id = 'p1Score';
let p2Score = document.createElement('p');
p2Score.id = 'p2Score';
let houseScore = document.createElement('p');
houseScore.id = 'houseScore';
scoreCont.append(p1Score, p2Score, houseScore);
// ..... Btn Lancia numero Banco .....
let btnHouse = document.createElement('button');
btnHouse.id = 'btnHouse';
btnHouse.innerText = 'Lancia Numero';
btnHouse.addEventListener('click', function () {
    return houseScore.innerHTML = `${NUM_FULL}`;
});
// ..... Comparazione numeri .....
let btnResult = document.createElement('button');
btnResult.id = 'btnResult';
btnResult.innerText = 'Vedi Risultato';
let resultDiv = document.createElement('div');
resultDiv.id = 'resultDiv';
CONT === null || CONT === void 0 ? void 0 : CONT.append(inp1, inp2, scoreCont, btnHouse, btnResult, resultDiv);
// al click del button "Vedi Risultato" se il punteggio del banco e' uguale a quello di p1 o p2, il giocatore x vince.
btnResult.addEventListener('click', function () {
    if (houseScore.innerHTML == p1Score.innerHTML || p2Score.innerHTML) {
        if (houseScore.innerHTML == p1Score.innerHTML) {
            resultDiv.innerHTML = 'Congratulations Player1!!!';
        }
        else if (houseScore.innerHTML == p2Score.innerHTML) {
            resultDiv.innerHTML = 'Congratulations Player2!!!';
        }
        else if (houseScore.innerHTML != p1Score.innerHTML && p2Score.innerHTML) {
            resultDiv.innerHTML = 'Both Players lost!';
        }
    }
});
