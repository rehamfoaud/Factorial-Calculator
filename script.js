function showResult(){
    let num = document.querySelector('#Input').value
    let cards = document.querySelector('.cards')
    let result= document.querySelector('#result')
    if ( num === '' || num<0){
        result .innerHTML = ' enter a correct number'
        return
    }

    let factorial = 1;
    let i = 1;
    while (i <= num) {
        factorial *= i; 
        i++;
    }
    result.innerHTML = factorial

    cards.innerHTML = "";
    for (let i = 1; i <= factorial; i++) {
        let card = document.createElement("div");
        card.className = "card";
        card.innerText = `card ${i}`;
        cards.appendChild(card);
    }
}