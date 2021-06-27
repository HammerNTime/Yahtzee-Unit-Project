/* -------------------------Constants------------------------- */


/* -------------------------Cached Elements------------------------- */

const dice = document.querySelector("#dice")
const dice1 = document.querySelector("#dice1")
const dice2 = document.querySelector("#dice2")
const dice3 = document.querySelector("#dice3")
const dice4 = document.querySelector("#dice4")
const dice5 = document.querySelector("#dice5")
const diceHold = document.querySelector("#dice-hold")
const rollButtonForm = document.querySelector("#roll-button-form")
const rollButton = document.querySelector("#roll-button")
const scoreCard = document.querySelector("#score-card")
const column1 = document.querySelector("#column-1")
const column2 = document.querySelector("#column-2")
const column3 = document.querySelector("#column-3")
const column4 = document.querySelector("#column-4")
const plr1Name = document.querySelector("#plr-1-name")
const plr2Name = document.querySelector("#plr-2-name")
const aces1 = document.querySelector("#aces-1")
const aces2 = document.querySelector("#aces-2")
const twos1 = document.querySelector("#twos-1")
const twos2 = document.querySelector("#twos-2")
const threes1 = document.querySelector("#threes-1")
const threes2 = document.querySelector("#threes-2")
const fours1 = document.querySelector("#fours-1")
const fours2 = document.querySelector("#fours-2")
const fives1 = document.querySelector("#fives-1")
const fives2 = document.querySelector("#fives-2")
const sixes1 = document.querySelector("#sixes-1")
const sixes2 = document.querySelector("#sixes-2")
const bonus1 = document.querySelector("#bonus-1")
const bonus2 = document.querySelector("#bonus-2")
const upperTotal1 = document.querySelector("#upper-total-1")
const upperTotal2 = document.querySelector("#upper-total-2")
const threeKind1 = document.querySelector("#three-kind-1")
const threeKind2 = document.querySelector("#three-kind-2")
const fourKind1 = document.querySelector("#four-kind-1")
const fourKind2 = document.querySelector("#four-kind-2")
const fullHouse1 = document.querySelector("#full-house-1")
const fullHouse2 = document.querySelector("#full-house-2")
const smStraight1 = document.querySelector("#sm-straight-1")
const smStraight2 = document.querySelector("#sm-straight-2")
const lgStraight1 = document.querySelector("#lg-straight-1")
const lgStraight2 = document.querySelector("#lg-straight-2")
const yahtzee1 = document.querySelector("#yahtzee-1")
const yahtzee2 = document.querySelector("#yahtzee-2")
const chance1 = document.querySelector("#chance-1")
const chance2 = document.querySelector("#chance-2")
const yahtzeeBonus1 = document.querySelector("#yahtzee-bonus-1")
const yahtzeeBonus2 = document.querySelector("#yahtzee-bonus-2")
const lowerTotal1 = document.querySelector("#lower-total-1")
const lowerTotal2 = document.querySelector("#lower-total-2")
const upperTotal11 = document.querySelector("#upper-total-11")
const upperTotal22 = document.querySelector("#upper-total-22")
const grandTotal1 = document.querySelector("#grand-total-1")
const grandTotal2 = document.querySelector("#grand-total-2")



/*---------------------------- Variables (state) ----------------------------*/

let dice1Check, dice2Check, dice3Check, dice4Check, dice5Check, diceArray, currentRoll, 
currentTurn, plr1Array, plr1Upper, plr2Upper, checkUpper, plr1Lower, plr2Lower, turnCounter, bonusCheck1, bonusCheck2

const player1Obj = {
    aces: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null,
}

/* -------------------------Event Listeners------------------------- */

rollButtonForm.addEventListener("click", rollNewDice)
scoreCard.addEventListener("click", scoreCardClick)
dice.addEventListener("click", diceHoldInit)


/* -------------------------Functions------------------------- */
init()

function init() {
    plr1Array = []
    plr2Array = []
    plr1Upper = []
    plr2Upper = []
    plr1Lower = []
    plr2Lower = []
    bonusCheck1 = null
    bonusCheck2 = null
    turnCounter = 0
    diceReset()
    turnReset()
    currentTurn = 1
}

/* -------------------------Click Event Functions------------------------- */

function scoreCardClick(event) {
    upperCheck = event.target.id
    if (event.target.parentElement === column1 
        || event.target.parentElement === column2 
        || event.target.id === "score-card"
        || event.target.id === "column-1"
        || event.target.id === "column-2"
        || event.target.id === "column-3"
        || event.target.id === "column-4"
        || event.target.id === "plr-1-name"
        || event.target.id === "plr-2-name"
        || event.target.innerText === ""){
        return
    }
    else if (currentTurn === 1){
        if (plr1Array.includes(event.target.id && event.target.id !== "yahtzee-bonus-2")){
            return
        } 
        else if (checkIfUpper() === true) {
            plr1Array.push(event.target.id)
            plr1Upper.push(parseInt(event.target.innerText))
            diceReset()
            turnReset()
        } else {
            plr1Array.push(event.target.id)
            plr1Lower.push(parseInt(event.target.innerText))
            diceReset()
            turnReset()
        }
    } else {
        if (plr2Array.includes(event.target.id) && event.target.id !== "yahtzee-bonus-2"){
            return
        } 
        else if (checkIfUpper() === true) {
            plr2Array.push(event.target.id)
            plr2Upper.push(parseInt(event.target.innerText))
            diceReset()
            turnReset()
        } else {
            plr2Array.push(event.target.id)
            plr2Lower.push(parseInt(event.target.innerText))
            diceReset()
            turnReset()
        }
    }
}

function diceHoldInit(event) {
    if (event.target.id === "dice1"){
        dice1Check *= -1
        if (dice1Check === -1){
            dice1.style.backgroundColor = "red"
        }
        if (dice1Check === 1){
            dice1.style.backgroundColor = "white"
        }
    }
    if (event.target.id === "dice2"){
        dice2Check *= -1
        if (dice2Check === -1){
            dice2.style.backgroundColor = "red"
        }
        if (dice2Check === 1){
            dice2.style.backgroundColor = "white"
        }
    }
    if (event.target.id === "dice3"){
        dice3Check *= -1
        if (dice3Check === -1){
            dice3.style.backgroundColor = "red"
        }
        if (dice3Check === 1){
            dice3.style.backgroundColor = "white"
        }
    }
    if (event.target.id === "dice4"){
        dice4Check *= -1
        if (dice4Check === -1){
            dice4.style.backgroundColor = "red"
        }
        if (dice4Check === 1){
            dice4.style.backgroundColor = "white"
        }
    }
    if (event.target.id === "dice5"){
        dice5Check *= -1
        if (dice5Check === -1){
            dice5.style.backgroundColor = "red"
        }
        if (dice5Check === 1){
            dice5.style.backgroundColor = "white"
        }
    }
}



/* -------------------------Roll Dice Functions------------------------- */


function rollNewDice() {
    if (dice1Check === -1 
    && dice2Check === -1
    && dice3Check === -1
    && dice4Check === -1
    && dice5Check === -1
    || currentRoll > 3){
        return    
    }
    rollCheck()
    // if (currentRoll === "reset"){
    //     diceReset()
    //     turnReset()
    //     return
    // }
    let roll
    
    if (dice1Check !== -1){
        roll = randomDiceRoll()
        dice1.innerText = roll
        diceArray.splice(0, 1, roll)
        
    }
    if (dice2Check !== -1){
        roll = randomDiceRoll()
        dice2.innerText = roll
        diceArray.splice(1, 1, roll)
    }
    if (dice3Check !== -1){
        roll = randomDiceRoll()
        diceArray.splice(2, 1, roll)
        dice3.innerText = roll
    }
    if (dice4Check !== -1){
        roll = randomDiceRoll()
        dice4.innerText = roll
        diceArray.splice(3, 1, roll)
    }
    if (dice5Check !== -1){
        roll = randomDiceRoll()
        dice5.innerText = roll
        diceArray.splice(4, 1, roll)
    }
    render()
}

function rollCheck() {
    if (currentRoll === 1) {
        rollButton.innerHTML = "Roll 2"
        currentRoll++
    }
    else if (currentRoll === 2){
        rollButton.innerHTML = "Roll 3"
        currentRoll++
    }
    else if (currentRoll === 3){
        rollButton.innerHTML = "Make Your Selection"
        currentRoll++
    }
}

const randomDiceRoll = () => {
   return parseInt(Math.floor((Math.random() * 6) + 1))
} 


/* -------------------------Reset Functions------------------------- */


function diceReset() {
    dice1Check = 1
    dice2Check = 1
    dice3Check = 1
    dice4Check = 1
    dice5Check = 1
    dice1.style.backgroundColor = "white"
    dice2.style.backgroundColor = "white"
    dice3.style.backgroundColor = "white"
    dice4.style.backgroundColor = "white"
    dice5.style.backgroundColor = "white"
    diceArray = [null, null, null, null, null]
}


function turnReset() {
    currentRoll = 1
    rollButton.innerHTML = "Roll 1"
    render()
    turnChange()
    gameOver()
}

function turnChange() {
    currentTurn *= -1
    turnCounter++
}


/* -------------------------Render Functions------------------------- */

function render() {
    checkPossibilities()
    updateTotals()
}
function checkPossibilities(){
    if (currentTurn === 1){
        checkAces(plr1Array, "aces-1", aces1)
        checkTwos(plr1Array, "twos-1", twos1)
        checkThrees(plr1Array, "threes-1", threes1)
        checkFours(plr1Array, "fours-1", fours1)
        checkFives(plr1Array, "fives-1", fives1)
        checkSixes(plr1Array, "sixes-1", sixes1)
        check3Kind(plr1Array, "three-kind-1", threeKind1)
        check4Kind(plr1Array, "four-kind-1", fourKind1)
        checkFullHouse(plr1Array, "full-house-1", fullHouse1)
        checkSmStraight(plr1Array, "sm-straight-1", smStraight1)
        checkLgStraight(plr1Array, "lg-straight-1", lgStraight1)
        checkYahtzee(plr1Array, "yahtzee-1", yahtzee1)
        checkChance(plr1Array, "chance-1", chance1)
        checkYahtzeeBonus(plr1Array, "yahtzee-bonus-1", yahtzeeBonus1, "yahtzee-1")
        // checkLowerTotal(plr1Array, "lower-total-1", lowerTotal1)
        // checkUpperTotal2(plr1Array, "upper-total-11", upperTotal11)
        // checkGrandTotal(plr1Array, "grand-total-1", grandTotal1)
    }
    if (currentTurn === -1){
        checkAces(plr2Array, "aces-2", aces2)
        checkTwos(plr2Array, "twos-2", twos2)
        checkThrees(plr2Array, "threes-2", threes2)
        checkFours(plr2Array, "fours-2", fours2)
        checkFives(plr2Array, "fives-2", fives2)
        checkSixes(plr2Array, "sixes-2", sixes2)
        check3Kind(plr2Array, "three-kind-2", threeKind2)
        check4Kind(plr2Array, "four-kind-2", fourKind2)
        checkFullHouse(plr2Array, "full-house-2", fullHouse2)
        checkSmStraight(plr2Array, "sm-straight-2", smStraight2)
        checkLgStraight(plr2Array, "lg-straight-2", lgStraight2)
        checkYahtzee(plr2Array, "yahtzee-2", yahtzee2)
        checkChance(plr2Array, "chance-2", chance2)
        checkYahtzeeBonus(plr2Array, "yahtzee-bonus-2", yahtzeeBonus2, "yahtzee-2")
        // checkLowerTotal(plr2Array, "lower-total-2", lowerTotal2)
        // checkUpperTotal2(plr2Array, "upper-total-22", upperTotal22)
        // checkGrandTotal(plr2Array, "grand-total-2", grandTotal2)

    }
}

function updateTotals() {
    bonusCheck()
    upperTotal1.innerText = plr1Upper.reduce((acc, num) => acc += num, 0) 
    upperTotal2.innerText = plr2Upper.reduce((acc, num) => acc += num, 0)
    lowerTotal1.innerText = plr1Lower.reduce((acc, num) => acc += num, 0) 
    lowerTotal2.innerText = plr2Lower.reduce((acc, num) => acc += num, 0)
    upperTotal11.innerText = upperTotal1.innerText
    upperTotal22.innerText = upperTotal2.innerText
    grandTotal1.innerText = (Number(upperTotal1.innerText) + Number(lowerTotal1.innerText))
    grandTotal2.innerText = (Number(upperTotal2.innerText) + Number(lowerTotal2.innerText))

    
}

function checkIfUpper(){
    if (upperCheck === "aces-1"
    || upperCheck === "twos-1"
    || upperCheck === "threes-1"
    || upperCheck === "fours-1"
    || upperCheck === "fives-1"
    || upperCheck === "sixes-1"
    || upperCheck === "aces-2"
    || upperCheck === "twos-2"
    || upperCheck === "threes-2"
    || upperCheck === "fours-2"
    || upperCheck === "fives-2"
    || upperCheck === "sixes-2"
    ){
        return true
    } else {
        return false
    }
}
function gameOver() {
    if (turnCounter === 26){
        console.log('DONE!')
    }
}

/* ------------------------- Game Logic ------------------------- */

function checkAces(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(1)){
        el.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 1){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       el.innerText = total
    } else {
        el.style.backgroundColor = "white"
        el.innerText = null
    }
    if (!diceArray.includes(1) && currentRoll === 4){
        el.style.backgroundColor = "yellow"
        el.innerText = 0

    }
}
function checkTwos(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(2)){
        el.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 2){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       el.innerText = total
    } else {
        el.style.backgroundColor = "white"
        el.innerText = null
    }
    if (!diceArray.includes(2) && currentRoll === 4){
        el.style.backgroundColor = "yellow"
        el.innerText = 0

    }
}
function checkThrees(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(3)){
        el.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 3){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       el.innerText = total
    } else {
        el.style.backgroundColor = "white"
        el.innerText = null
    }
    if (!diceArray.includes(3) && currentRoll === 4){
        el.style.backgroundColor = "yellow"
        el.innerText = 0

    }
}
function checkFours(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(4)){
        el.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 4){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       el.innerText = total
    } else {
        el.style.backgroundColor = "white"
        el.innerText = null
    }
    if (!diceArray.includes(4) && currentRoll === 4){
        el.style.backgroundColor = "yellow"
        el.innerText = 0

    }
}
function checkFives(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(5)){
        el.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 5){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       el.innerText = total
    } else {
        el.style.backgroundColor = "white"
        el.innerText = null
    }
    if (!diceArray.includes(5) && currentRoll === 4){
        el.style.backgroundColor = "yellow"
        el.innerText = 0

    }
}
function checkSixes(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let filteredNumsArray = []
    let total
    if (diceArray.includes(6)){
        el.style.backgroundColor = "#42f581"
        diceArray.forEach(num => {
            if (num === 6){
                filteredNumsArray.push(num)
            }      
        })
       total = filteredNumsArray.reduce((acc, currentnum) => acc + currentnum);  
       el.innerText = total
    } else {
        el.style.backgroundColor = "white"
        el.innerText = null
    }
    if (!diceArray.includes(6) && currentRoll === 4){
        el.style.backgroundColor = "yellow"
        el.innerText = 0

    }
}

// checks for 3 of a kind validity. had to slice the diceArray to get a shallow copy so i could 
// mutate it without effecting the whole. also makes sure it doesn't hit a false positive with
// nulls in the diceArray
function check3Kind(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let total
    let copyDiceArray = diceArray.slice(0, 5)
    let sortedNumArray = copyDiceArray.sort((a, b) => a - b)
    if ((sortedNumArray[0] === sortedNumArray[2] && diceArray[0] !== null)
        || (sortedNumArray[1] === sortedNumArray[3] && diceArray[0] !== null)
        || (sortedNumArray[2] === sortedNumArray[4] && diceArray[0] !== null))
        { 
            el.style.backgroundColor = "#42f581"
            total = sortedNumArray.reduce((acc, num) => acc += num, 0)
            el.innerText = total
        } else {
            el.style.backgroundColor = "white"
            el.innerText = null
        }
    if (sortedNumArray[0] !== sortedNumArray[2]
        && sortedNumArray[1] !== sortedNumArray[3]
        && sortedNumArray[2] !== sortedNumArray[4]
        && currentRoll === 4
        ){
            el.style.backgroundColor = "yellow"
            el.innerText = 0
        }
}

function check4Kind(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let total
    let copyDiceArray = diceArray.slice(0, 5)
    let sortedNumArray = copyDiceArray.sort((a, b) => a - b)
    if ((sortedNumArray[0] === sortedNumArray[3] && diceArray[0] !== null)
        || (sortedNumArray[1] === sortedNumArray[4] && diceArray[0] !== null))
        { 
            el.style.backgroundColor = "#42f581"
            total = sortedNumArray.reduce((acc, num) => acc += num, 0)
            el.innerText = total
        } else {
            el.style.backgroundColor = "white"
            el.innerText = null
        }
    if (sortedNumArray[0] !== sortedNumArray[3]
        && sortedNumArray[1] !== sortedNumArray[4]
        && currentRoll === 4
        ){
            el.style.backgroundColor = "yellow"
            el.innerText = 0
        }
}
function checkFullHouse(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let total
    let copyDiceArray = diceArray.slice(0, 5)
    let sortedNumArray = copyDiceArray.sort((a, b) => a - b)
    if ((sortedNumArray[0] === sortedNumArray[2] && sortedNumArray[3] === sortedNumArray[4] && sortedNumArray[0] !== sortedNumArray[4] && diceArray[0] !== null)
        || (sortedNumArray[0] === sortedNumArray[1] && sortedNumArray[2] === sortedNumArray[4] && sortedNumArray[0] !== sortedNumArray[4] && diceArray[0] !== null))
        { 
            el.style.backgroundColor = "#42f581"
            total = sortedNumArray.reduce((acc, num) => acc += num, 0)
            el.innerText = 25
        } else {
            el.style.backgroundColor = "white"
            el.innerText = null
        }
    if (sortedNumArray[0] !== sortedNumArray[1] || sortedNumArray[3] !== sortedNumArray[4]){
        if (sortedNumArray[0] !== sortedNumArray[2] && sortedNumArray[2] !== sortedNumArray[4] && currentRoll === 4){
            el.style.backgroundColor = "yellow"
            el.innerText = 0
        }
    }
}

// checks for sm Straight. had to make new arrays to push into to simplify the check. 
// basically they are looking for the 3 occurances that a small straight can be present 
// and sorting through the dice in order to make sure that if there are duplicate numbers
// they dont prevent the check from being true
function checkSmStraight(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let total
    let check1 = 1
    let check1Array = []
    let check2 = 2
    let check2Array = []
    let check3 = 3
    let check3Array = []
    let copyDiceArray = diceArray.slice(0, 5)
    let sortedNumArray = copyDiceArray.sort((a, b) => a - b)

    sortedNumArray.forEach((num) => {
        if (num === check1) {
            check1Array.push(num)
            check1++
        }
        if (num === check2) {
            check2Array.push(num)
            check2++
        }
        if (num === check3) {
            check3Array.push(num)
            check3++
        }
    })
    if (check1Array.length >= 4 || check2Array.length >= 4 || check3Array.length >= 4) 
    { 
            el.style.backgroundColor = "#42f581"
            total = sortedNumArray.reduce((acc, num) => acc += num, 0)
            el.innerText = 30
        } else {
            el.style.backgroundColor = "white"
            el.innerText = null
        }
    if (check1Array.length < 4 && check2Array.length < 4 && check3Array < 4 && currentRoll === 4)
    {
            el.style.backgroundColor = "yellow"
            el.innerText = 0
    }
}
function checkLgStraight(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let total
    let check1 = 1
    let check1Array = []
    let check2 = 2
    let check2Array = []
    let copyDiceArray = diceArray.slice(0, 5)
    let sortedNumArray = copyDiceArray.sort((a, b) => a - b)

    sortedNumArray.forEach((num) => {
        if (num === check1) {
            check1Array.push(num)
            check1++
        }
        if (num === check2) {
            check2Array.push(num)
            check2++
        }
    })
    if (check1Array.length === 5 || check2Array.length === 5) 
    { 
            el.style.backgroundColor = "#42f581"
            total = sortedNumArray.reduce((acc, num) => acc += num, 0)
            el.innerText = 40
        } else {
            el.style.backgroundColor = "white"
            el.innerText = null
        }
    if (check1Array.length < 5 && check2Array.length < 5 && currentRoll === 4)
    {
            el.style.backgroundColor = "yellow"
            el.innerText = 0
    }
}

function checkYahtzee(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let total
    let copyDiceArray = diceArray.slice(0, 5)
    let sortedNumArray = copyDiceArray.sort((a, b) => a - b)
    if (sortedNumArray[0] === sortedNumArray[4] && diceArray [0] !== null)
        { 
            el.style.backgroundColor = "#42f581"
            total = sortedNumArray.reduce((acc, num) => acc += num, 0)
            el.innerText = 50
        } else {
            el.style.backgroundColor = "white"
            el.innerText = null
        }
    if (sortedNumArray[0] !== sortedNumArray[4] && currentRoll === 4)
    {
        el.style.backgroundColor = "yellow"
        el.innerText = 0
     }
}

function checkChance(plr, id, el){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
        return
    }
    let total
    if (diceArray[0] !== null)
    { 
        el.style.backgroundColor = "#42f581"
        total = diceArray.reduce((acc, num) => acc += num, 0)
        el.innerText = total
    } else {
        el.style.backgroundColor = "white"
        el.innerText = null
    }
}
function checkYahtzeeBonus(plr, id, el, pyt){
    if (plr.includes(id)){
        el.style.backgroundColor = "#ededed"
    }
    if (plr.includes(pyt)){
        let copyDiceArray = diceArray.slice(0, 5)
        let sortedNumArray = copyDiceArray.sort((a, b) => a - b)
        if (sortedNumArray[0] === sortedNumArray[4] && diceArray [0] !== null)
            { 
                el.style.backgroundColor = "#42f581"
                el.innerText = (Number(el.innerText) + 100)
            } 
    }
}

function bonusCheck() {
    if (bonusCheck1 === null && ((plr1Upper.reduce((acc, num) => acc += num, 0)) >= 63)) {
        plr1Upper.push(35)
        bonus1.innerText = 35
        bonusCheck1 = 1
    }
    if (bonusCheck2 === null && ((plr2Upper.reduce((acc, num) => acc += num, 0)) >= 63)) {
        plr2Upper.push(35)
        bonus2.innerText = 35
        bonusCheck1 = 1
    }
}