/* ---------------------------------------------*/
/* 1. Write a ts program to print all natural numbers from 1 to n. - using while loop*/
/* ---------------------------------------------*/
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
/* ---------------------------------------------*/
/* 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop*/
/* ---------------------------------------------*/
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
/* ---------------------------------------------*/
/* 3. Write a ts program to print all alphabets from a to z. - using while loop */
/* ---------------------------------------------*/
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
/* ---------------------------------------------*/
/* 4. Write a ts program to print all even numbers between 1 to 100. - using while loop*/
/* ---------------------------------------------*/
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
/* ---------------------------------------------*/
/* 5. Write a ts program to print all odd number between 1 to 100.*/
/* ---------------------------------------------*/
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
/* ---------------------------------------------*/
/* 6. Write a ts program to find sum of all natural numbers between 1 to n.*/
/* ---------------------------------------------*/
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
/* ---------------------------------------------*/
/* 7. Write a ts program to find sum of all even numbers between 1 to n.*/
/* ---------------------------------------------*/
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
/* ---------------------------------------------*/
/* 8. Write a ts program to find sum of all odd numbers between 1 to n.*/
/* ---------------------------------------------*/
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
var problem09 = document.querySelector("#problem09");
var input09 = document.querySelector("#input09");
function whatTable(x) {
    for (var t = 1; t <= 10; t++) {
        console.log("".concat(x, " x ").concat(t, " = ").concat(x * t));
    }
}
problem09.addEventListener("submit", function (e) {
    e.preventDefault();
    whatTable(input09.valueAsNumber);
});
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
