const firstOutcomeHtml = document.getElementById ("firstOutcome")
const secondOutcomeHtml = document.getElementById ("secondOutcome")
const outcomeWinLoseHtml = document.getElementById("outcomeWinLose")
const rollButtonHtml = document.getElementById ("rollButton")

let clickCounter = 0

console.log (firstOutcomeHtml)
console.log (secondOutcomeHtml)

//Creating function to randomize numbers for Human and computer

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}

function printResult(){
    
    let rndHuman = randomInt(1,6)
    console.log(rndHuman)

    let rndComputer = randomInt(1,6)
    console.log(rndComputer)

    firstOutcomeHtml.innerHTML = rndHuman
    secondOutcomeHtml.innerHTML = rndComputer

    if (rndHuman > rndComputer){
        outcomeWinLoseHtml.innerHTML = "Hai Vinto!"

        console.log(outcomeWinLoseHtml)
    }
    else if (rndHuman < rndComputer){
        outcomeWinLoseHtml.innerHTML = "Hai Perso!"
    }
    else{
        outcomeWinLoseHtml.innerHTML = "Hai pareggiato!"
    } 

    clickCounter++
    
    if (clickCounter === 5){
        window.alert("Il gioco d'azzardo fa male, basta!")
        rollButtonHtml.disabled = true
    }
}

rollButtonHtml.addEventListener("click", printResult)


