// /* ---------------------------------------------*/
// /* 1. Write a ts program to print all natural numbers from 1 to n. - using while loop*/
// /* ---------------------------------------------*/
var problem01 = document.querySelector("#problem01");
var input01a = document.querySelector("#input01a");
var input01b = document.querySelector("#input01b");
function whileLoopNtoY(x, y) {
    if (x < y) {
        while (x <= y) {
            console.log("".concat(x));
            x++;
        }
    }
    else {
        console.log("Loop From ".concat(x, " must be less than Loop T0 ").concat(y));
    }
}
problem01.addEventListener("submit", function (e) {
    e.preventDefault();
    whileLoopNtoY(input01a.valueAsNumber, input01b.valueAsNumber);
});
// /* ---------------------------------------------*/
// /* 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop*/
// /* ---------------------------------------------*/
var problem02 = document.querySelector("#problem02");
var input02a = document.querySelector("#input02a");
var input02b = document.querySelector("#input02b");
function nFromY(x, y) {
    if (x > y) {
        while (x >= y) {
            console.log("".concat(x));
            x--;
        }
    }
    else {
        console.log("Loop From ".concat(x, " must be greater than Loop T0 ").concat(y));
    }
}
problem02.addEventListener("submit", function (e) {
    e.preventDefault();
    nFromY(input02a.valueAsNumber, input02b.valueAsNumber);
});
// /* ---------------------------------------------*/
// /* 3. Write a ts program to print all alphabets from a to z. - using while loop */
// /* ---------------------------------------------*/
var problem03 = document.querySelector("#problem03");
function printabc() {
    var abc = ('abcdefghijklmnopqrstuvwxyz');
    var i = 0;
    while (i <= abc.length) {
        console.log("".concat(abc[i]));
        i++;
    }
}
problem03.addEventListener("submit", function (e) {
    e.preventDefault();
    printabc();
});
// /* ---------------------------------------------*/
// /* 4. Write a ts program to print all even numbers between 1 to 100. - using while loop*/
// /* ---------------------------------------------*/
var problem04 = document.querySelector("#problem04");
function printEven() {
    var e = 2;
    while (e < 100) {
        if (e % 2 == 0) {
            console.log("".concat(e));
        }
        e++;
    }
}
problem04.addEventListener("submit", function (e) {
    e.preventDefault();
    printEven();
});
// /* ---------------------------------------------*/
// /* 5. Write a ts program to print all odd number between 1 to 100.*/
// /* ---------------------------------------------*/
var problem05 = document.querySelector("#problem05");
function printOdd() {
    var o = 1;
    while (o < 100) {
        if (o % 2 == 1) {
            console.log("".concat(o));
        }
        o++;
    }
}
problem05.addEventListener("submit", function (e) {
    e.preventDefault();
    printOdd();
});
// /* ---------------------------------------------*/
// /* 6. Write a ts program to find sum of all natural numbers between 1 to n.*/
// /* ---------------------------------------------*/
var problem06 = document.querySelector("#problem06");
var input06 = document.querySelector("#input06");
function sumTonNumber(x) {
    var sum = 0;
    var i = 1;
    while (i <= x) {
        console.log("".concat(i, " + ").concat(sum, " = ").concat(sum + i));
        sum = sum + i;
        i++;
    }
}
problem06.addEventListener("submit", function (e) {
    e.preventDefault();
    sumTonNumber(input06.valueAsNumber);
});
// /* ---------------------------------------------*/
// /* 7. Write a ts program to find sum of all even numbers between 1 to n.*/
// /* ---------------------------------------------*/
var problem07 = document.querySelector("#problem07");
var input07 = document.querySelector("#input07");
function printEvenTon(x) {
    var e = 2;
    var evenSum = 0;
    while (e < x) {
        if (e % 2 == 0) {
            console.log("".concat(e, " + ").concat(evenSum, " = ").concat(evenSum + e));
            evenSum = evenSum + e;
        }
        e++;
    }
}
problem07.addEventListener("submit", function (e) {
    e.preventDefault();
    printEvenTon(input07.valueAsNumber);
});
// /* ---------------------------------------------*/
// /* 8. Write a ts program to find sum of all odd numbers between 1 to n.*/
// /* ---------------------------------------------*/
var problem08 = document.querySelector("#problem08");
var input08 = document.querySelector("#input08");
function printOddTon(x) {
    var o = 1;
    var oddSum = 0;
    while (o < x) {
        if (o % 2 == 1) {
            console.log("".concat(o, " + ").concat(oddSum, " = ").concat(oddSum + o));
            oddSum = oddSum + o;
        }
        o++;
    }
}
problem08.addEventListener("submit", function (e) {
    e.preventDefault();
    printOddTon(input08.valueAsNumber);
});
/* ---------------------------------------------*/
/* 9. Write a ts program to print multiplication table of any number.*/
/* ---------------------------------------------*/
/* ---------------------------------------------*/
/* 10. Write a ts program to count number of digits in a number.*/
/* ---------------------------------------------*/
var problem10 = document.querySelector("#problem10");
var input10 = document.querySelector("#input10");
function countDigits(x) {
    var count = x.toString().length;
    console.log(count);
}
problem10.addEventListener("submit", function (e) {
    e.preventDefault();
    countDigits(input10.valueAsNumber);
});
/* ---------------------------------------------*/
/* 11. Write a ts program to find first and last digit of a number.*/
/* ---------------------------------------------*/
var problem11 = document.querySelector("#problem11");
var input11 = document.querySelector("#input11");
function flDigits(x) {
    var digit = x.toString();
    var lDigit = (x.toString().length) - 1;
    console.log("    The Number is = ".concat(x, "\n    First Digit of the Number = ").concat(digit[0], "\n    Last  Digit of the Number = ").concat(digit[lDigit]));
}
problem11.addEventListener("submit", function (e) {
    e.preventDefault();
    flDigits(input11.valueAsNumber);
});
/* ---------------------------------------------*/
/* 12. Write a ts program to find sum of first and last digit of a number.*/
/* ---------------------------------------------*/
var problem12 = document.querySelector("#problem12");
var input12 = document.querySelector("#input12");
function flDigitSum(a) {
    var numArray = a.toString().split(''); //stringify the number, then make each digit an item in an array
    var newArray = numArray.map(function (x) { return parseInt(x); }); //convert all the items back into numbers
    console.log(newArray[0] + newArray[newArray.length - 1]);
}
problem12.addEventListener("submit", function (e) {
    e.preventDefault();
    flDigitSum(input12.valueAsNumber);
});
/* ---------------------------------------------*/
/* 13. Write a ts program to swap first and last digits of a number.*/
/* ---------------------------------------------*/
var problem13 = document.querySelector("#problem13");
var input13 = document.querySelector("#input13");
function swapDigit(a) {
    var numArray = a.toString().split(''); //stringify the number, then make each digit an item in an array
    var newArray = numArray.map(function (x) { return parseInt(x); }); //convert all the items back into numbers
    var x = 0; // First element of Array
    var y = -1; // Last element of Array
    newArray[x] = newArray.splice(y, 1, newArray[x])[0];
    console.log(newArray);
}
problem13.addEventListener("submit", function (e) {
    e.preventDefault();
    swapDigit(input13.valueAsNumber);
});
/* ---------------------------------------------*/
/* 14. Write a ts program to calculate sum of digits of a number.*/
/* ---------------------------------------------*/
var problem14 = document.querySelector("#problem14");
var input14 = document.querySelector("#input14");
function sumOfDigits(a) {
    var numArray = a.toString().split(''); //stringify the number, then make each digit an item in an array
    var newArray = numArray.map(function (x) { return parseInt(x); }); //convert all the items back into numbers
    var arrayLenth = newArray.length;
    // console.log(`Array Length  ${arrayLenth}`)
    var sOd = 0;
    for (var n = 0; n < arrayLenth; n++) {
        // console.log(`${sOd} + ${newArray[n]} = ${newArray[n] + sOd}`)
        sOd = newArray[n] + sOd;
    }
    console.log("The Sum Of Digits = ".concat(sOd));
}
problem14.addEventListener("submit", function (e) {
    e.preventDefault();
    sumOfDigits(input14.valueAsNumber);
});
/* ---------------------------------------------*/
/* 15. Write a ts program to calculate product of digits of a number.*/
/* ---------------------------------------------*/
// var problem14 = document.querySelector("#problem14")! as HTMLFormElement
// var input14 = document.querySelector("#input14")! as HTMLInputElement
function productOffDigits(a) {
    var numArray = a.toString().split(''); //stringify the number, then make each digit an item in an array
    var newArray = numArray.map(function (x) { return parseInt(x); }); //convert all the items back into numbers
    var arrayLenth = newArray.length;
    // console.log(`Array Length  ${arrayLenth}`)
    var pOd = 1;
    for (var n = 0; n < arrayLenth; n++) {
        pOd = newArray[n] * pOd;
    }
    console.log("The Product Of Digits (".concat(a, ") = ").concat(pOd));
}
console.log("----------------------------------------\nProblem #15");
productOffDigits(3215);
/* ---------------------------------------------*/
/* 16. Write a ts program to enter a number and print its reverse.*/
/* ---------------------------------------------*/
function reverseNumber(r) {
    var arrayToString = r.toString().split(''); //stringify the number, then make each digit an item in an array
    var newArray = arrayToString.map(function (x) { return parseInt(x); }); //convert all the items back into numbers
    var revArray = newArray.reverse();
    var joinArray = revArray.join('');
    console.log("The Number(".concat(r, ") after revers = ").concat(joinArray));
}
console.log("----------------------------------------\nProblem #16");
reverseNumber(123456);
/* ---------------------------------------------*/
/* 17. Write a ts program to check whether a number is palindrome or not.*/
/* ---------------------------------------------*/
function isPalindrome(p) {
    var pToString = p.toString().split('');
    var pLength = pToString.length;
    if (pLength % 2 == 0) {
        var pRight = pToString.slice(0, pLength / 2);
        var pRJoin = pRight.join('');
        // console.log(pRJoin)
        var pLeft = pToString.slice(pLength / 2, pLength);
        // console.log(pLeft)
        var pLeftRV = pLeft.reverse();
        var pLJoin = pLeft.join('');
        // console.log(pLJoin)
        if (pRJoin == pLJoin) {
            console.log("The Number ".concat(p, " is \"PALINDROME\""));
        }
        else {
            console.log("The Number ".concat(p, " is \"NOT PALINDROME\" "));
        }
    }
    else {
        var pRight = pToString.slice(0, (pLength - 1) / 2);
        var pRJoin = pRight.join('');
        // console.log(pRJoin)
        var pLeft = pToString.slice((pLength + 1) / 2, pLength);
        // console.log(pLeft)
        var pLeftRV = pLeft.reverse();
        var pLJoin = pLeft.join('');
        // console.log(pLJoin)
        if (pRJoin == pLJoin) {
            console.log("The Number ".concat(p, " is \"PALINDROME\""));
        }
        else {
            console.log("The Number ".concat(p, " is \"NOT PALINDROME\" "));
        }
    }
}
console.log("----------------------------------------\nProblem #17");
isPalindrome(16898610);
/* ---------------------------------------------*/
/* 18. Write a ts program to find frequency of each digit in a given integer.*/
/* ---------------------------------------------*/
console.log("----------------------------------------\nProblem #18");
/* ---------------------------------------------*/
/* 19. Write a ts program to enter a number and print it in words.*/
/* ---------------------------------------------*/
function NumInWord(nw) {
    var nwToString = nw.toString().split(''); //stringify the number, then make each digit an item in an array
    var newArray = nwToString.map(function (x) { return parseInt(x); }); //convert all the items back into numbers
    for (var i = 0; i < nwToString.length; i++) {
        switch (newArray[i]) {
            case 0:
                console.log(" Zero ");
                break;
            case 1:
                console.log(" One ");
                break;
            case 2:
                console.log(" Two ");
                break;
            case 3:
                console.log(" Three ");
                break;
            case 4:
                console.log(" Four");
                break;
            case 5:
                console.log(" Five ");
                break;
            case 6:
                console.log(" Six ");
                break;
            case 7:
                console.log(" Seven ");
                break;
            case 8:
                console.log(" Eight ");
                break;
            case 9:
                console.log(" Nine");
                break;
        }
    }
}
console.log("----------------------------------------\nProblem #19");
NumInWord(52698746312586);
/* ---------------------------------------------*/
/* 20. Write a ts program to print all ASCII character with their values.*/
/* ---------------------------------------------*/
// 0-9 = 48-57
// A-Z = 65-90
// a-z = 97-122
function AscciToChar() {
    for (var ascii = 48; ascii <= 122; ascii++) {
        if (ascii >= 48 && ascii <= 57) {
            var text = String.fromCharCode(ascii);
            console.log("".concat(ascii, " = ").concat(text));
        }
        else if (ascii >= 65 && ascii <= 90) {
            var text = String.fromCharCode(ascii);
            console.log("".concat(ascii, " = ").concat(text));
        }
        else if (ascii >= 97 && ascii <= 122) {
            var text = String.fromCharCode(ascii);
            console.log("".concat(ascii, " = ").concat(text));
        }
        else {
        }
    }
}
console.log("----------------------------------------\nProblem #20");
AscciToChar();
/* ---------------------------------------------*/
/* 21. Write a ts program to find power of a number using for loop.*/
/* ---------------------------------------------*/
/* ---------------------------------------------*/
/* 22. Write a ts program to find all factors of a number.*/
/* ---------------------------------------------*/
function FactrOfNumber(x) {
    for (var fn = 1; fn <= x; fn++) {
        if (x % fn == 0) {
            console.log("".concat(fn));
        }
    }
}
console.log("----------------------------------------\nProblem #22");
var fectNum = 15;
console.log("Factors of Number ".concat(fectNum, " "));
FactrOfNumber(fectNum);
/* ---------------------------------------------*/
/* 23. Write a ts program to calculate factorial of a number.*/
/* ---------------------------------------------*/
function factorial(a) {
    var factNum = 1;
    for (var n = 1; n <= a; n++) {
        factNum = factNum * n;
    }
    console.log("The Facotrial Of Digits (".concat(a, "!) = ").concat(factNum));
}
console.log("----------------------------------------\nProblem #23");
factorial(9);
/* ---------------------------------------------*/
/* 24. Write a ts program to find HCF (GCD) of two numbers.*/
/* ---------------------------------------------*/
var xFactors = [];
var yFactors = [];
var commenFactors = [];
function whatHCF(x, y) {
    //Factorization of x and append in xFactor Array
    for (var fx = 1; fx <= x; fx++) {
        if (x % fx == 0) {
            xFactors.push(fx);
        }
    }
    // console.log(`Factors of ${x} = ${xFactors}`)
    //Factorization of y and append in yFactor Array
    for (var fy = 1; fy <= y; fy++) {
        if (y % fy == 0) {
            yFactors.push(fy);
        }
    }
    // console.log(`Factors of ${y} = ${yFactors}`)
    for (var ix = 0; ix < xFactors.length; ix++) {
        for (var iy = 0; iy < yFactors.length; iy++) {
            if (xFactors[ix] == yFactors[iy]) {
                commenFactors.push(xFactors[ix]);
            }
        }
    }
    // console.log(commenFactors)
    var HCF = Math.max.apply(Math, commenFactors);
    console.log("HCF of ".concat(x, " , ").concat(y, " = ").concat(HCF));
}
console.log("----------------------------------------\nProblem #24");
// console.log(`Factor of the Number `)
whatHCF(12, 16);
/* ---------------------------------------------*/
/* 25. Write a ts program to find LCM of two numbers.*/
/* ---------------------------------------------*/
var lFactors = [];
var mFactors = [];
var LMcommenFactors = [];
function whatLCM(l, m) {
    //Factorization of x and append in xFactor Array
    for (var fl = 1; fl <= l; fl++) {
        if (l % fl == 0) {
            lFactors.push(fl);
        }
    }
    // console.log(`Factorization of ${l} = ${lFactors}`)
    //Factorization of y and append in yFactor Array
    for (var fm = 1; fm <= m; fm++) {
        if (m % fm == 0) {
            mFactors.push(fm);
        }
    }
    // console.log(`Factorization of ${m} = ${mFactors}`)
    for (var il = 0; il < lFactors.length; il++) {
        for (var im = 0; im < mFactors.length; im++) {
            if (lFactors[il] == mFactors[im]) {
                LMcommenFactors.push(lFactors[il]);
            }
        }
    }
    // console.log(LMcommenFactors)
    var HCF25 = Math.max.apply(Math, LMcommenFactors);
    // console.log(HCF25)
    var lcm = (l * m) / HCF25;
    console.log("LCM of ".concat(l, " , ").concat(m, " = ").concat(lcm));
}
console.log("----------------------------------------\nProblem #25");
// console.log(`Factor of the Number `)
whatLCM(12, 20);
/* ---------------------------------------------*/
/* 26. Write a ts program to check whether a number is Prime number or not.*/
/* ---------------------------------------------*/
function isPrime(p) {
    var prime = [];
    for (var pr = 1; pr <= p; pr++) {
        if (p % pr == 0) {
            prime.push(pr);
        }
    }
    // console.log(prime)
    if (prime.length > 2) {
        console.log("The Number (".concat(p, ") is PRIME"));
    }
    else {
        console.log("The Number (".concat(p, ") is NOT PRIME"));
    }
}
console.log("----------------------------------------\nProblem #26");
isPrime(6);
/* ---------------------------------------------*/
/* 27. Write a ts program to print all Prime numbers between 1 to n.*/
/* ---------------------------------------------*/
function isPrimeToN(pn) {
    for (var pni = 1; pni <= pn; pni++) {
        isPrime(pni); //isPrime() is defined in problem #26
    }
}
console.log("----------------------------------------\nProblem #27");
isPrimeToN(10);
/* ---------------------------------------------*/
/* 28. Write a ts program to find sum of all prime numbers between 1 to n.*/
/* ---------------------------------------------*/
function isPrime2(p) {
    var prime = [];
    var primeArray = [];
    for (var pr = 1; pr <= p; pr++) {
        if (p % pr == 0) {
            prime.push(pr);
        }
    }
    // console.log(prime)
    if (prime.length > 2) {
        primeArray.push(p);
        // return p
        // console.log(`${p}`)
    }
    return primeArray;
}
// function sumPrimeToN(sp: number) {
// for (let spi = 1; spi <= 8; spi++) {
//     console.log(isPrime2(spi))
// }
// }
console.log("----------------------------------------\nProblem #28");
console.log(isPrime2(11));
/* ---------------------------------------------*/
/* 29. Write a ts program to find all prime factors of a number.*/
/* ---------------------------------------------*/
console.log("----------------------------------------\nProblem #29\nUnsolved");
// console.log(isPrime2(11))
/* ---------------------------------------------*/
/* 30. Write a ts program to check whether a number is Armstrong number or not.*/
/* ---------------------------------------------*/
function isArmstrong(ar) {
    var arToString = ar.toString().split(''); //stringify the number, then make each digit an item in an array
    var arArray = arToString.map(function (x) { return parseInt(x); }); //convert all the items back into numbers
    // console.log(arArray)
    var arrayArmstrong = [];
    for (var ari = 0; ari < arArray.length; ari++) {
        arrayArmstrong.push(Math.pow((arArray[ari]), arArray.length));
    }
    console.log(arrayArmstrong);
    var sumArrayArmstrong = 0;
    for (var aAi = 0; aAi < arrayArmstrong.length; aAi++) {
        sumArrayArmstrong = sumArrayArmstrong + arrayArmstrong[aAi];
    }
    console.log(sumArrayArmstrong);
    if (ar == sumArrayArmstrong) {
        console.log("The Number ".concat(ar, " is \"ARMSTRONG\""));
    }
    else {
        console.log("The Number ".concat(ar, " is \"NOT ARMSTRONG\""));
    }
}
console.log("----------------------------------------\nProblem #30");
isArmstrong(1634);
/* ---------------------------------------------*/
/* 31. Write a ts program to print all Armstrong numbers between 1 to n. */
/* ---------------------------------------------*/
console.log("----------------------------------------\nProblem #31\nUnsolved");
/* ---------------------------------------------*/
/*  32. Write a ts program to check whether a number is Perfect number or not.*/
/* ---------------------------------------------*/
// function FactrOfNumber(x: number) {
//     for (var fn = 1; fn <= x; fn++) {
//         if (x % fn == 0) {
//             console.log(`${fn}`)
//         }
//     }
// }
// console.log(`----------------------------------------
// Problem #22`)
// let fectNum: number = 15
// console.log(`Factors of Number ${fectNum} `)
// FactrOfNumber(fectNum)
function isPerfect(pe) {
    var peFactors = [];
    var numPerfect = 0;
    for (var pei = 1; pei < pe; pei++) {
        if (pe % pei == 0) {
            peFactors.push(pei);
        }
    }
    console.log(peFactors);
    for (var pes = 0; pes < peFactors.length; pes++) {
        numPerfect = numPerfect + peFactors[pes];
    }
    console.log(numPerfect);
    if (pe == numPerfect) {
        console.log("The Number(".concat(pe, ") is \"PERFECT\""));
    }
    else {
        console.log("The Number(".concat(pe, ") is \"NOT PERFECT\""));
    }
}
console.log("----------------------------------------\nProblem #32");
isPerfect(496);
/* ---------------------------------------------*/
/* 33. Write a ts program to print all Perfect numbers between 1 to n. */
/* ---------------------------------------------*/
console.log("----------------------------------------\nProblem #33\nUnsolved");
/* ---------------------------------------------*/
/* 34. Write a ts program to check whether a number is Strong number or not. */
/* ---------------------------------------------*/
function isStrong(s) {
    var sToString = s.toString().split(''); //stringify the number, then make each digit an item in an array
    var sArray = sToString.map(function (x) { return parseInt(x); }); //convert all the items back into numbers
    // console.log(sArray)
    function factorial34(f) {
        var factNum = 1;
        for (var n = 1; n <= f; n++) {
            factNum = factNum * n;
        }
        // console.log(`The Facotrial Of Digits (${f}!) = ${factNum}`)
        return factNum;
    }
    var NewsArray = sArray.map(factorial34);
    console.log(NewsArray);
    var strongNum = 0;
    for (var sn = 0; sn < NewsArray.length; sn++) {
        strongNum = strongNum + NewsArray[sn];
    }
    if (s == strongNum) {
        console.log("The NUmber ".concat(s, " is \"STRONG NUMBER\""));
    }
    else {
        console.log("The NUmber ".concat(s, " is \"NOT STRONG NUMBER\""));
    }
}
/*
1, 2, 145, 40585 are Strong number
*/
console.log("----------------------------------------\nProblem #34");
isStrong(1145);
/* ---------------------------------------------*/
/* 35. Write a ts program to print all Strong numbers between 1 to n. */
/* ---------------------------------------------*/
console.log("----------------------------------------\nProblem #35\nUnsolved");
/* ---------------------------------------------*/
/* 36. Write a ts program to print Fibonacci series up to n terms. */
/* ---------------------------------------------*/
function FibonacciSeries(fs) {
    var fsArray = [];
    var fsNum = 0;
    for (var fsi = 0; fsi < fs; fsi++) {
        fsNum = fsNum + fsi;
        fsArray.push(fsNum);
    }
    console.log(fsArray);
    console.log(fsNum);
}
console.log("----------------------------------------\nProblem #36");
FibonacciSeries(8);
/* ---------------------------------------------*/
/*  37. Write a ts program to find one's complement of a binary number.*/
/* ---------------------------------------------*/
console.log("----------------------------------------\nProblem #37");
/* ---------------------------------------------*/
/*  45(a). Write a ts program to convert Decimal to Binary number system.*/
/* ---------------------------------------------*/
/*function decToBinA(db:number){
    let binNum:number[] = []
    let step:number = 0
    
    if(db != 0){
        for(let dbi = 0; dbi<db; dbi++){
            step =
            let reminder:number =
        }
    }
    

}
console.log(`----------------------------------------
Problem #45(a)`)
decToBinA(255)      */
/* ---------------------------------------------*/
/*  45(b). Write a ts program to convert Decimal to Binary number system.*/
/* ---------------------------------------------*/
function decToBinB(db) {
    var dtb = db.toString(2).split(''); //stringify the number into base 2, then make each digit an item in an array
    var dtbArray = dtb.map(function (x) { return parseInt(x); }); //convert all the items back into numbers
    var dtbNum = dtbArray.join('');
    console.log(dtbNum);
}
console.log("----------------------------------------\nProblem #45(b)");
decToBinB(255);
/* ---------------------------------------------*/
/*  */
/* ---------------------------------------------*/
/*
38. Write a ts program to find two's complement of a binary number.
39. Write a ts program to convert Binary to Octal number system.
40. Write a ts program to convert Binary to Decimal number system.
41. Write a ts program to convert Binary to Hexadecimal number system.
42. Write a ts program to convert Octal to Binary number system.
43. Write a ts program to convert Octal to Decimal number system.
44. Write a ts program to convert Octal to Hexadecimal number system.
46. Write a ts program to convert Decimal to Octal number system.
47. Write a ts program to convert Decimal to Hexadecimal number system.
48. Write a ts program to convert Hexadecimal to Binary number system.
49. Write a ts program to convert Hexadecimal to Octal number system.
50. Write a ts program to convert Hexadecimal to Decimal number system.
51. Write a ts program to print Pascal triangle upto n rows. */
/*

let arToString = ar.toString().split('') //stringify the number, then make each digit an item in an array
let arArray: number[] = arToString.map(x => parseInt(x)) //convert all the items back into numbers
// console.log(arArray)

*/ 
