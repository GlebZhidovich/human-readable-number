module.exports = function toReadable (number) {
    const numbers = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    };
    const twoNumbers = {
        '1': 'eleven',
        '2': 'twenty',
        '3': 'thirty',
        '4': 'forty',
        '5': 'fifty',
        '6': 'sixty',
        '7': 'seventy',
        '8': 'eighty',
        '9': 'ninety',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    };

    const numStr = number + '';
    if (numStr.length === 3) {
        if (numStr[1] === '1') return `${numbers[numStr[0]]} hundred ${twoNumbers[numStr[1]+numStr[2]]}`;
        if (numStr[1]+numStr[2] === '00') return `${numbers[numStr[0]]} hundred`;
        if (numStr[1] === '0') return `${numbers[numStr[0]]} hundred ${numbers[numStr[2]]}`;
        if (numStr[2] === '0') return `${numbers[numStr[0]]} hundred ${twoNumbers[numStr[1]]}`;
        return `${numbers[numStr[0]]} hundred ${twoNumbers[numStr[1]]} ${numbers[numStr[2]]}`;
    }
    if (numStr.length === 2) {
        if (numStr[0] === '1') return `${twoNumbers[numStr[0]+numStr[1]]}`;
        if (numStr[1] === '0') return `${twoNumbers[numStr[0]]}`;
        return `${twoNumbers[numStr[0]]} ${numbers[numStr[1]]}`;
    }
    return numbers[numStr];
}
