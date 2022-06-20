const CONT = document.querySelector('.container');

let NUM = Math.random()*(5-1)+1;
let NUM_FULL = Math.floor(NUM);

// ........ Player 1 input ........

let inp1 = document.createElement('input');
inp1.id = 'inp1';
inp1.placeholder = 'Insert Player 1 Number';

inp1?.addEventListener('input', function(event) {
    const target = event.target as HTMLInputElement;
    p1Score.innerHTML = `${target.value}`
    return p1Score.innerHTML;
});

// ........ Player 2 input ........

let inp2 = document.createElement('input');
inp2.id = 'inp2';
inp2.placeholder = 'Insert Player 2 Number';

inp2?.addEventListener('input', function(event) {
    const target = event.target as HTMLInputElement;
    p2Score.innerHTML = `${target.value}`
});

// ..... Contenitore punteggi .....

let scoreCont: any = document.createElement('div');
scoreCont.id = 'scoreCont';

let p1Score: any = document.createElement('p');
p1Score.id = 'p1Score';

let p2Score: any = document.createElement('p');
p2Score.id = 'p2Score';

let houseScore: any = document.createElement('p');
houseScore.id = 'houseScore';

scoreCont.append(p1Score, p2Score, houseScore);

// ..... Btn Lancia numero Banco - Mostra risultato .....

let btnHouse = document.createElement('button');
btnHouse.id = 'btnHouse';
btnHouse.innerText = 'Throw House Number';

let resultDiv: any = document.createElement('div');
resultDiv.id = 'resultDiv';

CONT?.append(inp1, inp2, scoreCont, btnHouse, resultDiv);

btnHouse.addEventListener('click', function(): any {

    houseScore.innerHTML = `${NUM_FULL}`;
    // se entrambi uguali o non uguali al banco
    if (houseScore.innerHTML == p1Score.innerHTML && p2Score.innerHTML ) {
        resultDiv.innerHTML = 'Both Players won!';
    } else if (houseScore.innerHTML != p1Score.innerHTML && p2Score.innerHTML ) {
        resultDiv.innerHTML = 'Both Players lost!';
    } 
    // se p1 o p2 e' uguale al banco
    if (houseScore.innerHTML == p1Score.innerHTML) {
        resultDiv.innerHTML = 'Congratulations Player1!!!';
    } else if (houseScore.innerHTML == p2Score.innerHTML) {
        resultDiv.innerHTML = 'Congratulations Player2!!!';
    } 
});