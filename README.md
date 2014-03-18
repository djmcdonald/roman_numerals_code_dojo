Roman Numerals Code Dojo
========================

Code dojo for generating/parsing Roman numerals in a TDD fashion.

I've included libraries such as jQuery, QUnit and Sinon.js (QUnit and Sinon.js for unit testing and mock objects respectively).

Feel free to include any others you may want, the purpose of the exercise is to develop the code by writing tests first.

There are two JavaScript objects:
* The roman_numeral_service is responsible for parsing Roman numeral strings into numbers and generating Roman numeral strings from numbers.
* The roman_numeral_controller is responsible for displaying the results/errors from the roman_numeral_service on the page.
 * So I would expect it to listen to clicks from the user and do things like display an error if the user hadn't entered any values into the input field, etc.

Sinon.js has been included so you can mock out the roman_numeral_service when unit testing the controller.

[Wikipedia has a much better explanation of what Roman Numerals are than I can write here.](https://en.wikipedia.org/wiki/Roman_numerals) The general gist is that:
1 = I
2 = II
3 = III
4 = IV
5 = V
6 = VI
9 = IX
10 = X
40 = XL
50 = L
90 = XC
100 = C
500 = D
1,000 = M

(There are quite a few combinations)

There is no Roman numeral for the number zero nor any number higher than 3,999 so it'd be nice if the user was given an error message if values outside of that range have been entered.

Chrome allows you to run the test HTML files without a HTTP server so I'd suggest using that.