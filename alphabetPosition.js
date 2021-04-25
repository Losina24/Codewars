function alphabetPosition(text) {
    var equivalences = {
        'a': '1',
        'b': '2',
        'c': '3',
        'd': '4',
        'e': '5',
        'f': '6',
        'g': '7',
        'h': '8',
        'i': '9',
        'j': '10',
        'k': '11',
        'l': '12',
        'm': '13',
        'n': '14',
        'o': '15',
        'p': '16',
        'q': '17',
        'r': '18',
        's': '19',
        't': '20',
        'u': '21',
        'v': '22',
        'w': '23',
        'x': '24',
        'y': '25',
        'z': '26',
    }
    var result;
    var newText = text.toLowerCase().replace(/\s/g, '');

    for (var i = 0; i < newText.length; i++) {
        var letter = newText.charAt(i);

        if (newText[i].match(/[a-z]/i)) {
            if (i == 0) {
                result = equivalences[letter];
            } else {
                result += ' ' + equivalences[letter];
            }
        } else {
            if (i == 0) {
                result = ''
            } else {
                result += ''
            }

        }
    }

    return result.trim();
}