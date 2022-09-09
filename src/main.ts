/* ---------------------------------------------*/
/* 1. Write a ts program to print all natural numbers from 1 to n. - using while loop*/
/* ---------------------------------------------*/
var problem01 = document.querySelector("#problem01")! as HTMLFormElement
var input01a = document.querySelector("#input01a")! as HTMLInputElement
var input01b = document.querySelector("#input01b")! as HTMLInputElement

function whileLoopNtoY(x: number, y: number) {
    if (x < y) {
        while (x <= y) {
            console.log(`${x}`)
            x++
        }
    }
    else {
        console.log(`Loop From ${x} must be less than Loop T0 ${y}`)
    }
}
problem01.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    whileLoopNtoY(input01a.valueAsNumber, input01b.valueAsNumber)
})

/* ---------------------------------------------*/
/* 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop*/
/* ---------------------------------------------*/
var problem02 = document.querySelector("#problem02")! as HTMLFormElement
var input02a = document.querySelector("#input02a")! as HTMLInputElement
var input02b = document.querySelector("#input02b")! as HTMLInputElement

function nFromY(x: number, y: number) {
    if (x > y) {
        while (x >= y) {
            console.log(`${x}`)
            x--
        }
    }
    else {
        console.log(`Loop From ${x} must be greater than Loop T0 ${y}`)
    }
}
problem02.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    nFromY(input02a.valueAsNumber, input02b.valueAsNumber)
})

/* ---------------------------------------------*/
/* 3. Write a ts program to print all alphabets from a to z. - using while loop */
/* ---------------------------------------------*/
var problem03 = document.querySelector("#problem03")! as HTMLFormElement


function printabc() {
    var abc: string = ('abcdefghijklmnopqrstuvwxyz')
    var i = 0

    while (i <= abc.length) {
        console.log(`${abc[i]}`)
        i++
    }
}

problem03.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    printabc()
})

/* ---------------------------------------------*/
/* 4. Write a ts program to print all even numbers between 1 to 100. - using while loop*/
/* ---------------------------------------------*/
var problem04 = document.querySelector("#problem04")! as HTMLFormElement

function printEven() {
    var e: number = 2
    while (e < 100) {
        if (e % 2 == 0) {
            console.log(`${e}`)
        }
        e++
    }
}

problem04.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    printEven()
})

/* ---------------------------------------------*/
/* 5. Write a ts program to print all odd number between 1 to 100.*/
/* ---------------------------------------------*/
var problem05 = document.querySelector("#problem05")! as HTMLFormElement

function printOdd() {
    var o: number = 1
    while (o < 100) {
        if (o % 2 == 1) {
            console.log(`${o}`)
        }
        o++
    }
}

problem05.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    printOdd()
})

/* ---------------------------------------------*/
/* 6. Write a ts program to find sum of all natural numbers between 1 to n.*/
/* ---------------------------------------------*/
var problem06 = document.querySelector("#problem06")! as HTMLFormElement
var input06 = document.querySelector("#input06")! as HTMLInputElement

function sumTonNumber(x: number) {
    var sum: number = 0
    var i: number = 1
    while (i <= x) {
        console.log(`${i} + ${sum} = ${sum + i}`)
        sum = sum + i
        i++
    }
}

problem06.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    sumTonNumber(input06.valueAsNumber)
})

/* ---------------------------------------------*/
/* 7. Write a ts program to find sum of all even numbers between 1 to n.*/
/* ---------------------------------------------*/
var problem07 = document.querySelector("#problem07")! as HTMLFormElement
var input07 = document.querySelector("#input07")! as HTMLInputElement

function printEvenTon(x: number) {
    var e: number = 2
    var evenSum: number = 0
    while (e < x) {
        if (e % 2 == 0) {
            console.log(`${e} + ${evenSum} = ${evenSum + e}`)
            evenSum = evenSum + e
        }
        e++
    }
}

problem07.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    printEvenTon(input07.valueAsNumber)
})

/* ---------------------------------------------*/
/* 8. Write a ts program to find sum of all odd numbers between 1 to n.*/
/* ---------------------------------------------*/
var problem08 = document.querySelector("#problem08")! as HTMLFormElement
var input08 = document.querySelector("#input08")! as HTMLInputElement

function printOddTon(x: number) {
    var o: number = 1
    var oddSum: number = 0
    while (o < x) {
        if (o % 2 == 1) {
            console.log(`${o} + ${oddSum} = ${oddSum + o}`)
            oddSum = oddSum + o
        }
        o++
    }
}

problem08.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    printOddTon(input08.valueAsNumber)
})

/* ---------------------------------------------*/
/* 9. Write a ts program to print multiplication table of any number.*/
/* ---------------------------------------------*/
var problem09 = document.querySelector("#problem09")! as HTMLFormElement
var input09 = document.querySelector("#input09")! as HTMLInputElement

function whatTable(x: number) {
    for (var t = 1; t <= 10; t++) {
        console.log(`${x} x ${t} = ${x * t}`)
    }

}
problem09.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    whatTable(input09.valueAsNumber)
})

/* ---------------------------------------------*/
/* 10. Write a ts program to count number of digits in a number.*/
/* ---------------------------------------------*/
var problem10 = document.querySelector("#problem10")! as HTMLFormElement
var input10 = document.querySelector("#input10")! as HTMLInputElement

function countDigits(x: number) {

    var count = x.toString().length

    console.log(count)
}

problem10.addEventListener("submit", (e:Event) => {
    e.preventDefault()
    countDigits(input10.valueAsNumber)

})
