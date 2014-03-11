module("Roman Numeral Service tests");
test("generates the 'I'", function() {
    equal(roman_numeral_service.generate(1), 'I');
});

test("0 isn't a valid number in Roman numerals", function() {
    throws(
        function() {
            roman_numeral_service.generate(0);
        },
        ArgumentException,
        "0 isn't a valid Roman numeral number"
    );
});

