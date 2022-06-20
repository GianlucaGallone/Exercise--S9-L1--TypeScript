const CONT = document.querySelector('.container');

const input1 = document.querySelector('#inp1') as HTMLInputElement | null;
const input2 = document.querySelector('#inp2') as HTMLInputElement | null;

const value1 = input1?.value;
const value2 = input2?.value;

let NUM = Math.random()*(100-1)+1;
let NUM_FULL = Math.floor(NUM);

// ........ Player 1 input ........

let inp1 = document.createElement('input');
inp1.id = 'inp1';

inp1?.addEventListener('input', function(event) {
    const target = event.target as HTMLInputElement;
    p1Score.innerHTML = `${target.value}`
    return p1Score.innerHTML;
});

// ........ Player 2 input ........

let inp2 = document.createElement('input');
inp2.id = 'inp2';

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

// ..... Btn Lancia numero Banco .....

let btnHouse = document.createElement('button');
btnHouse.id = 'btnHouse';
btnHouse.innerText = 'Lancia Numero';

btnHouse.addEventListener('click', function(): any {
    return houseScore.innerHTML = `${NUM_FULL}`;
});

// ..... Comparazione numeri .....

let btnResult = document.createElement('button');
btnResult.id = 'btnResult';
btnResult.innerText = 'Vedi Risultato';

let resultDiv: any = document.createElement('div');
resultDiv.id = 'resultDiv';

CONT?.append(inp1, inp2, scoreCont, btnHouse, btnResult, resultDiv);

btnResult.addEventListener('click', function(): any {
    console.log(houseScore.innerHTML, value1, value2);

    if (houseScore.innerHTML == p1Score.innerHTML) {
        resultDiv.innerHTML = 'Congratulations Player1!!!';
    } else resultDiv.innerHTML = 'Player 1 Lost';
    
    if (houseScore.innerHTML == p2Score.innerHTML) {
        resultDiv.innerHTML = 'Congratulations Player2!!!';
    } else resultDiv.innerHTML = 'Player 2 Lost';

});