var roman_numeral_service = {};
module("Roman Numeral Controller tests", {
    setup: function() {
        roman_numeral_service = { generate: sinon.stub(), parse: sinon.stub() };
    },
    teardown: function() {

    }
});

test("should set the generate result", function() {
    roman_numeral_controller.generate();

    roman_numeral_service.generate.returns('I');

    equal($('#generate_result').html(), 'Result: I');
});

test("should set an error message when given a value of zero or less to generate", function() {
    equal($('#generate_error').html(), 'Cannot generate zero as a Roman numeral')
});

test("should set an error message when given a value greater than 3,999 to generate", function() {
   ok(false);
});

test("should set the parse result", function() {
   ok(false);
});

test("should set an error message when given an empty string to parse", function() {
    ok(false);
});

test("should generate a value when the onclick event has been fired", function() {
    roman_numeral_service.generate.returns('IV');

    $('#generate_button').trigger('click');

    equal($('#generate_result').html(), 'Result: IV');
});

test("should parse a value when the onclick event has been fired", function() {
    ok(false);
});