// /* ---------------------------------------------*/
// /* 1. Write a ts program to print all natural numbers from 1 to n. - using while loop*/
// /* ---------------------------------------------*/
// var problem01 = document.querySelector("#problem01")! as HTMLFormElement
// var input01a = document.querySelector("#input01a")! as HTMLInputElement
// var input01b = document.querySelector("#input01b")! as HTMLInputElement

// function whileLoopNtoY(x: number, y: number) {
//     if (x < y) {
//         while (x <= y) {
//             console.log(`${x}`)
//             x++
//         }
//     }
//     else {
//         console.log(`Loop From ${x} must be less than Loop T0 ${y}`)
//     }
// }
// problem01.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     whileLoopNtoY(input01a.valueAsNumber, input01b.valueAsNumber)
// })

// /* ---------------------------------------------*/
// /* 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop*/
// /* ---------------------------------------------*/
// var problem02 = document.querySelector("#problem02")! as HTMLFormElement
// var input02a = document.querySelector("#input02a")! as HTMLInputElement
// var input02b = document.querySelector("#input02b")! as HTMLInputElement

// function nFromY(x: number, y: number) {
//     if (x > y) {
//         while (x >= y) {
//             console.log(`${x}`)
//             x--
//         }
//     }
//     else {
//         console.log(`Loop From ${x} must be greater than Loop T0 ${y}`)
//     }
// }
// problem02.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     nFromY(input02a.valueAsNumber, input02b.valueAsNumber)
// })

// /* ---------------------------------------------*/
// /* 3. Write a ts program to print all alphabets from a to z. - using while loop */
// /* ---------------------------------------------*/
// var problem03 = document.querySelector("#problem03")! as HTMLFormElement


// function printabc() {
//     var abc: string = ('abcdefghijklmnopqrstuvwxyz')
//     var i = 0

//     while (i <= abc.length) {
//         console.log(`${abc[i]}`)
//         i++
//     }
// }

// problem03.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     printabc()
// })

// /* ---------------------------------------------*/
// /* 4. Write a ts program to print all even numbers between 1 to 100. - using while loop*/
// /* ---------------------------------------------*/
// var problem04 = document.querySelector("#problem04")! as HTMLFormElement

// function printEven() {
//     var e: number = 2
//     while (e < 100) {
//         if (e % 2 == 0) {
//             console.log(`${e}`)
//         }
//         e++
//     }
// }

// problem04.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     printEven()
// })

// /* ---------------------------------------------*/
// /* 5. Write a ts program to print all odd number between 1 to 100.*/
// /* ---------------------------------------------*/
// var problem05 = document.querySelector("#problem05")! as HTMLFormElement

// function printOdd() {
//     var o: number = 1
//     while (o < 100) {
//         if (o % 2 == 1) {
//             console.log(`${o}`)
//         }
//         o++
//     }
// }

// problem05.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     printOdd()
// })

// /* ---------------------------------------------*/
// /* 6. Write a ts program to find sum of all natural numbers between 1 to n.*/
// /* ---------------------------------------------*/
// var problem06 = document.querySelector("#problem06")! as HTMLFormElement
// var input06 = document.querySelector("#input06")! as HTMLInputElement

// function sumTonNumber(x: number) {
//     var sum: number = 0
//     var i: number = 1
//     while (i <= x) {
//         console.log(`${i} + ${sum} = ${sum + i}`)
//         sum = sum + i
//         i++
//     }
// }

// problem06.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     sumTonNumber(input06.valueAsNumber)
// })

// /* ---------------------------------------------*/
// /* 7. Write a ts program to find sum of all even numbers between 1 to n.*/
// /* ---------------------------------------------*/
// var problem07 = document.querySelector("#problem07")! as HTMLFormElement
// var input07 = document.querySelector("#input07")! as HTMLInputElement

// function printEvenTon(x: number) {
//     var e: number = 2
//     var evenSum: number = 0
//     while (e < x) {
//         if (e % 2 == 0) {
//             console.log(`${e} + ${evenSum} = ${evenSum + e}`)
//             evenSum = evenSum + e
//         }
//         e++
//     }
// }

// problem07.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     printEvenTon(input07.valueAsNumber)
// })

// /* ---------------------------------------------*/
// /* 8. Write a ts program to find sum of all odd numbers between 1 to n.*/
// /* ---------------------------------------------*/
// var problem08 = document.querySelector("#problem08")! as HTMLFormElement
// var input08 = document.querySelector("#input08")! as HTMLInputElement

// function printOddTon(x: number) {
//     var o: number = 1
//     var oddSum: number = 0
//     while (o < x) {
//         if (o % 2 == 1) {
//             console.log(`${o} + ${oddSum} = ${oddSum + o}`)
//             oddSum = oddSum + o
//         }
//         o++
//     }
// }

// problem08.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     printOddTon(input08.valueAsNumber)
// })

// /* ---------------------------------------------*/
// /* 9. Write a ts program to print multiplication table of any number.*/
// /* ---------------------------------------------*/
// var problem09 = document.querySelector("#problem09")! as HTMLFormElement
// var input09 = document.querySelector("#input09")! as HTMLInputElement

// function whatTable(x: number) {
//     for (var t = 1; t <= 10; t++) {
//         console.log(`${x} x ${t} = ${x * t}`)
//     }

// }
// problem09.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     whatTable(input09.valueAsNumber)
// })

// /* ---------------------------------------------*/
// /* 10. Write a ts program to count number of digits in a number.*/
// /* ---------------------------------------------*/
// var problem10 = document.querySelector("#problem10")! as HTMLFormElement
// var input10 = document.querySelector("#input10")! as HTMLInputElement

// function countDigits(x: number) {

//     var count = x.toString().length

//     console.log(count)
// }

// problem10.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     countDigits(input10.valueAsNumber)

// })

// /* ---------------------------------------------*/
// /* 11. Write a ts program to find first and last digit of a number.*/
// /* ---------------------------------------------*/
// var problem11 = document.querySelector("#problem11")! as HTMLFormElement
// var input11 = document.querySelector("#input11")! as HTMLInputElement

// function flDigits(x: number) {

//     var digit = x.toString()
//     var lDigit = (x.toString().length) - 1

//     console.log(`    The Number is = ${x}
//     First Digit of the Number = ${digit[0]}
//     Last  Digit of the Number = ${digit[lDigit]}`)
// }
// problem11.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     flDigits(input11.valueAsNumber)

// })

// /* ---------------------------------------------*/
// /* 12. Write a ts program to find sum of first and last digit of a number.*/
// /* ---------------------------------------------*/
// var problem12 = document.querySelector("#problem12")! as HTMLFormElement
// var input12 = document.querySelector("#input12")! as HTMLInputElement

// function flDigitSum(a: number) {

//     let numArray = a.toString().split('') //stringify the number, then make each digit an item in an array
//     let newArray = numArray.map(x => parseInt(x)) //convert all the items back into numbers

//     console.log(newArray[0] + newArray[newArray.length-1])

// }
// problem12.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     flDigitSum(input12.valueAsNumber)
// })

// /* ---------------------------------------------*/
// /* 13. Write a ts program to swap first and last digits of a number.*/
// /* ---------------------------------------------*/
// var problem13 = document.querySelector("#problem13")! as HTMLFormElement
// var input13 = document.querySelector("#input13")! as HTMLInputElement

// function swapDigit(a: number) {

//     let numArray = a.toString().split('') //stringify the number, then make each digit an item in an array
//     let newArray = numArray.map(x => parseInt(x)) //convert all the items back into numbers

//     var x:number = 0    // First element of Array
//     var y:number = -1   // Last element of Array

//     newArray[x] = newArray.splice(y, 1, newArray[x])[0];
//     console.log(newArray)

// }
// problem13.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     swapDigit(input13.valueAsNumber)
// })

// /* ---------------------------------------------*/
// /* 14. Write a ts program to calculate sum of digits of a number.*/
// /* ---------------------------------------------*/
// var problem14 = document.querySelector("#problem14")! as HTMLFormElement
// var input14 = document.querySelector("#input14")! as HTMLInputElement

// function sumOfDigits(a: number) {

//     let numArray = a.toString().split('') //stringify the number, then make each digit an item in an array
//     let newArray:number[] = numArray.map(x => parseInt(x)) //convert all the items back into numbers
//     let arrayLenth = newArray.length
//     // console.log(`Array Length  ${arrayLenth}`)

//     let sOd = 0
//     for(var n = 0; n < arrayLenth; n++){
//         // console.log(`${sOd} + ${newArray[n]} = ${newArray[n] + sOd}`)
//         sOd = newArray[n] + sOd
//     }
//     console.log(`The Sum Of Digits = ${sOd}`)

// }

// problem14.addEventListener("submit", (e: Event) => {
//     e.preventDefault()
//     sumOfDigits(input14.valueAsNumber)
// })

/* ---------------------------------------------*/
/* 15. Write a ts program to calculate product of digits of a number.*/
/* ---------------------------------------------*/

// var problem14 = document.querySelector("#problem14")! as HTMLFormElement
// var input14 = document.querySelector("#input14")! as HTMLInputElement

function productOffDigits(a: number) {

    let numArray = a.toString().split('') //stringify the number, then make each digit an item in an array
    let newArray: number[] = numArray.map(x => parseInt(x)) //convert all the items back into numbers
    let arrayLenth = newArray.length
    // console.log(`Array Length  ${arrayLenth}`)

    let pOd = 1
    for (var n = 0; n < arrayLenth; n++) {
        pOd = newArray[n] * pOd
    }
    console.log(`The Product Of Digits (${a}) = ${pOd}`)
}
console.log(`----------------------------------------
Problem #15`)
productOffDigits(3215)

/* ---------------------------------------------*/
/* 16. Write a ts program to enter a number and print its reverse.*/
/* ---------------------------------------------*/

function reverseNumber(r: number) {

    let arrayToString = r.toString().split('') //stringify the number, then make each digit an item in an array
    let newArray: number[] = arrayToString.map(x => parseInt(x)) //convert all the items back into numbers
    let revArray = newArray.reverse()
    let joinArray = revArray.join('')

    console.log(`The Number(${r}) after revers = ${joinArray}`)
}

console.log(`----------------------------------------
Problem #16`)
reverseNumber(123456)

/* ---------------------------------------------*/
/* 17. Write a ts program to check whether a number is palindrome or not.*/
/* ---------------------------------------------*/


function isPalindrome(p: number) {
    let pToString = p.toString().split('')
    let pLength = pToString.length

    if (pLength % 2 == 0) {
        var pRight = pToString.slice(0, pLength / 2)
        var pRJoin = pRight.join('')
        // console.log(pRJoin)

        var pLeft = pToString.slice(pLength / 2, pLength)
        // console.log(pLeft)
        var pLeftRV = pLeft.reverse()
        var pLJoin = pLeft.join('')
        // console.log(pLJoin)

        if (pRJoin == pLJoin) {
            console.log(`The Number ${p} is "PALINDROME"`)
        }
        else {
            console.log(`The Number ${p} is "NOT PALINDROME" `)
        }
    }
    else {
        var pRight = pToString.slice(0, (pLength - 1) / 2)
        var pRJoin = pRight.join('')
        // console.log(pRJoin)

        var pLeft = pToString.slice((pLength + 1) / 2, pLength)
        // console.log(pLeft)
        var pLeftRV = pLeft.reverse()
        var pLJoin = pLeft.join('')
        // console.log(pLJoin)

        if (pRJoin == pLJoin) {
            console.log(`The Number ${p} is "PALINDROME"`)
        }
        else {
            console.log(`The Number ${p} is "NOT PALINDROME" `)
        }
    }
}
console.log(`----------------------------------------
Problem #17`)
isPalindrome(16898610)

/* ---------------------------------------------*/
/* 18. Write a ts program to find frequency of each digit in a given integer.*/
/* ---------------------------------------------*/




console.log(`----------------------------------------
Problem #18`)

/* ---------------------------------------------*/
/* 19. Write a ts program to enter a number and print it in words.*/
/* ---------------------------------------------*/

function NumInWord(nw: number) {

    let nwToString = nw.toString().split('') //stringify the number, then make each digit an item in an array
    let newArray: number[] = nwToString.map(x => parseInt(x)) //convert all the items back into numbers

    for (var i = 0; i < nwToString.length; i++) {
        switch (newArray[i]) {
            case 0:
                console.log(` Zero `)
                break
            case 1:
                console.log(` One `)
                break
            case 2:
                console.log(` Two `)
                break
            case 3:
                console.log(` Three `)
                break
            case 4:
                console.log(` Four`)
                break
            case 5:
                console.log(` Five `)
                break
            case 6:
                console.log(` Six `)
                break
            case 7:
                console.log(` Seven `)
                break
            case 8:
                console.log(` Eight `)
                break
            case 9:
                console.log(` Nine`)
                break
        }
    }
}

console.log(`----------------------------------------
Problem #19`)
NumInWord(52698746312586)

/* ---------------------------------------------*/
/* 20. Write a ts program to print all ASCII character with their values.*/
/* ---------------------------------------------*/
// 0-9 = 48-57
// A-Z = 65-90
// a-z = 97-122

function AscciToChar() {

    for (var ascii = 48; ascii <= 122; ascii++) {
        if (ascii >= 48 && ascii <= 57) {
            let text = String.fromCharCode(ascii)
            console.log(`${ascii} = ${text}`)
        }
        else if (ascii >= 65 && ascii <= 90) {
            let text = String.fromCharCode(ascii)
            console.log(`${ascii} = ${text}`)
        }
        else if (ascii >= 97 && ascii <= 122) {
            let text = String.fromCharCode(ascii)
            console.log(`${ascii} = ${text}`)
        }
        else {

        }
    }
}
console.log(`----------------------------------------
Problem #20`)
AscciToChar()

/* ---------------------------------------------*/
/* 21. Write a ts program to find power of a number using for loop.*/
/* ---------------------------------------------*/


/* ---------------------------------------------*/
/* 22. Write a ts program to find all factors of a number.*/
/* ---------------------------------------------*/

function FactrOfNumber(x: number) {
    for (var fn = 1; fn <= x; fn++) {
        if (x % fn == 0) {
            console.log(`${fn}`)
        }
    }
}
console.log(`----------------------------------------
Problem #22`)
let fectNum: number = 15
console.log(`Factors of Number ${fectNum} `)
FactrOfNumber(fectNum)

/* ---------------------------------------------*/
/* 23. Write a ts program to calculate factorial of a number.*/
/* ---------------------------------------------*/
function factorial(a: number) {

    let factNum = 1
    for (var n = 1; n <= a; n++) {
        factNum = factNum * n
    }
    console.log(`The Facotrial Of Digits (${a}!) = ${factNum}`)
}
console.log(`----------------------------------------
Problem #23`)
factorial(9)

/* ---------------------------------------------*/
/* 24. Write a ts program to find HCF (GCD) of two numbers.*/
/* ---------------------------------------------*/

let xFactors: number[] = []
let yFactors: number[] = []
let commenFactors: number[] = []

function whatHCF(x: number, y: number) {
    //Factorization of x and append in xFactor Array
    for (let fx = 1; fx <= x; fx++) {
        if (x % fx == 0) {
            xFactors.push(fx)
        }
    }
    // console.log(`Factors of ${x} = ${xFactors}`)

    //Factorization of y and append in yFactor Array
    for (let fy = 1; fy <= y; fy++) {
        if (y % fy == 0) {
            yFactors.push(fy)
        }
    }
    // console.log(`Factors of ${y} = ${yFactors}`)

    for (let ix = 0; ix < xFactors.length; ix++) {
        for (let iy = 0; iy < yFactors.length; iy++) {
            if (xFactors[ix] == yFactors[iy]) {
                commenFactors.push(xFactors[ix])
            }
        }
    }
    // console.log(commenFactors)
    let HCF: number = Math.max(...commenFactors)
    console.log(`HCF of ${x} , ${y} = ${HCF}`)
}
console.log(`----------------------------------------
Problem #24`)
// console.log(`Factor of the Number `)
whatHCF(12, 16)

/* ---------------------------------------------*/
/* 25. Write a ts program to find LCM of two numbers.*/
/* ---------------------------------------------*/
let lFactors: number[] = []
let mFactors: number[] = []
let LMcommenFactors: number[] = []

function whatLCM(l: number, m: number) {
    //Factorization of x and append in xFactor Array
    for (let fl = 1; fl <= l; fl++) {
        if (l % fl == 0) {
            lFactors.push(fl)
        }
    }
    // console.log(`Factorization of ${l} = ${lFactors}`)

    //Factorization of y and append in yFactor Array
    for (let fm = 1; fm <= m; fm++) {
        if (m % fm == 0) {
            mFactors.push(fm)
        }
    }
    // console.log(`Factorization of ${m} = ${mFactors}`)

    for (let il = 0; il < lFactors.length; il++) {
        for (let im = 0; im < mFactors.length; im++) {
            if (lFactors[il] == mFactors[im]) {
                LMcommenFactors.push(lFactors[il])
            }
        }
    }

    // console.log(LMcommenFactors)
    let HCF25: number = Math.max(...LMcommenFactors)
    // console.log(HCF25)

    let lcm: number = (l * m) / HCF25

    console.log(`LCM of ${l} , ${m} = ${lcm}`)
}
console.log(`----------------------------------------
Problem #25`)
// console.log(`Factor of the Number `)
whatLCM(12, 20)

/* ---------------------------------------------*/
/* 26. Write a ts program to check whether a number is Prime number or not.*/
/* ---------------------------------------------*/


function isPrime(p:number){
    let prime: number[] = []
    for(let pr=1; pr <= p; pr++){
        if(p % pr == 0){
            prime.push(pr)
        }
    }
    // console.log(prime)

    if(prime.length > 2){
        console.log(`The Number (${p}) is PRIME`)
    }
    else{
        console.log(`The Number (${p}) is NOT PRIME`)
    }
}
console.log(`----------------------------------------
Problem #26`)
isPrime(6)

/* ---------------------------------------------*/
/* 27. Write a ts program to print all Prime numbers between 1 to n.*/
/* ---------------------------------------------*/

function isPrimeToN(pn:number){
    for(let pni = 1; pni <= pn; pni++){
        isPrime(pni) //isPrime() is defined in problem #26
    }
}
console.log(`----------------------------------------
Problem #27`)
isPrimeToN(10)




/*
28. Write a ts program to find sum of all prime numbers between 1 to n.
29. Write a ts program to find all prime factors of a number.
30. Write a ts program to check whether a number is Armstrong number or not.
31. Write a ts program to print all Armstrong numbers between 1 to n.
32. Write a ts program to check whether a number is Perfect number or not.
33. Write a ts program to print all Perfect numbers between 1 to n.
34. Write a ts program to check whether a number is Strong number or not.
35. Write a ts program to print all Strong numbers between 1 to n.
36. Write a ts program to print Fibonacci series up to n terms.
37. Write a ts program to find one's complement of a binary number.
38. Write a ts program to find two's complement of a binary number.
39. Write a ts program to convert Binary to Octal number system.
40. Write a ts program to convert Binary to Decimal number system.
41. Write a ts program to convert Binary to Hexadecimal number system.
42. Write a ts program to convert Octal to Binary number system.
43. Write a ts program to convert Octal to Decimal number system.
44. Write a ts program to convert Octal to Hexadecimal number system.
45. Write a ts program to convert Decimal to Binary number system.
46. Write a ts program to convert Decimal to Octal number system.
47. Write a ts program to convert Decimal to Hexadecimal number system.
48. Write a ts program to convert Hexadecimal to Binary number system.
49. Write a ts program to convert Hexadecimal to Octal number system.
50. Write a ts program to convert Hexadecimal to Decimal number system.
51. Write a ts program to print Pascal triangle upto n rows. */

