var roman_numeral_controller = {
    init: function() {
        var that = this;
        $('#generate_button').bind('click', function() {
            that.generate();
            $('#generate_result').show();
        });
        $('#parse_button').bind('click', function() {
            that.parse();
            $('#parse_result').show();
        });
    },
    generate: function() {
        console.log("Generate: " + roman_numeral_service.generate(1));
    },
    parse: function() {
        console.log("Parse: " + roman_numeral_service.parse('I'));
    }
};

roman_numeral_controller.init();