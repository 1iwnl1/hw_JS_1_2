// Задача 1 (однострочный коментарий)
/*  Многострочный
Коментарий */

// Задача 2

var myName

// Setup Задача 3

var a;

// Only change code below this line 

a = 7;

// Setup Задача 4

var a;
a = 7;
var b;

// Only change code below this line

b = a;

// Задача 5

var a = 9;

// Задача 6

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Задача 7

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Задача 8

var sum = 10 + 10;

// Задача 9

var difference = 45 - 33;

// Задача 10

var product = 8 * 10;

// Задача 11

var quotient = 66 / 33;

// Задача 12

var myVar = 87;
myVar++;

// Задача 13

var myVar = 11;
myVar--;

// Задача 14

var myDecimal = 5.7;

// Задача 15

var product = 2.0 * 2.5;

// Задача 16

var quotient = 4.4 / 2.0;

// Задача 17

var remainder = 11 % 3;

// Задача 18

var a = 3;
var b = 17;
var c = 12;

// Only change code below this line

a += 12;
b += 9;
c += 7;

// Задача 19

var a = 11;
var b = 9;
var c = 3;

// Only change code below this line

a -= 6;
b -= 15;
c -= 1;

// Задача 20

var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line

a *= 5;
b *= 3;
c *= 10;

// Задача 21

var a = 48;
var b = 108;
var c = 33;

// Only change code below this line

a /= 12;
b /= 4;
c /= 11;

// Задача 22

var myFirstName = 'Дмитрий';
var myLastName = 'Алексеев';

// Задача 23

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// Задача 24

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Задача 25

var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';

// Задача со звездочками (С лекции) , 1 из вариантов решения

let result_ = '';
const LINE_ = 10; 
const STAR = 20;
for(let i = 0; i < LINE_; ++i)
{
    for (let j = 0; j < STAR; ++j)
    {
        if(i >= j || ((j >= LINE_) && (STAR - 1 - i <= j)))
        {
            result_ += '* ';
        }
        else
        {
            result_ += '  ';
        }
    }
    console.log(result_);
    result_ = ''
}

for(let i = 0; i < LINE_; ++i)
{
    for (let j = 0; j < STAR; ++j)
    {
        if((j < LINE_ && LINE_ - 1 - i >= j) || (j >= LINE_) && (i + LINE_ <= j))
        {
            result_ += '* ';
        }
        else
        {
            result_ += '  ';
        }
    }
    console.log(result_);
    result_ = ''
}

