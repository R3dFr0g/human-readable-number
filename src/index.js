module.exports = function toReadable (number) {
    //task range: [1 <---> 999]
    let stringFromNumber = number.toString();
    let result = '';
    if (stringFromNumber.length === 3){
        switch (stringFromNumber[0]) {
            case '1': result = 'one hundred'; break;
            case '2': result = 'two hundred'; break;
            case '3': result = 'three hundred'; break;
            case '4': result = 'four hundred'; break;
            case '5': result = 'five hundred'; break;
            case '6': result = 'six hundred'; break;
            case '7': result = 'seven hundred'; break;
            case '8': result = 'eight hundred'; break;
            case '9': result = 'nine hundred'; break;
        }
        if (stringFromNumber.endsWith('10')) return result + " ten";
        if (stringFromNumber.endsWith('11')) return result + " eleven";
        if (stringFromNumber.endsWith('12')) return result + " twelve";
        if (stringFromNumber.endsWith('13')) return result + " thirteen";
        if (stringFromNumber.endsWith('14')) return result + " fourteen";
        if (stringFromNumber.endsWith('15')) return result + " fifteen";
        if (stringFromNumber.endsWith('16')) return result + " sixteen";
        if (stringFromNumber.endsWith('17')) return result + " seventeen";
        if (stringFromNumber.endsWith('18')) return result + " eighteen";
        if (stringFromNumber.endsWith('19')) return result + " nineteen";
        
        switch (stringFromNumber[1]) {
            case '2': result = result + ' twenty'; break;
            case '3': result = result + ' thirty'; break;
            case '4': result = result + ' forty'; break;
            case '5': result = result + ' fifty'; break;
            case '6': result = result + ' sixty'; break;
            case '7': result = result + ' seventy'; break;
            case '8': result = result + ' eighty'; break;
            case '9': result = result + ' ninety'; break;
        }
        switch (stringFromNumber[2]) {
            
            case '1': result = result + ' one'; break;
            case '2': result = result + ' two'; break;
            case '3': result = result + ' three'; break;
            case '4': result = result + ' four'; break;
            case '5': result = result + ' five'; break;
            case '6': result = result + ' six'; break;
            case '7': result = result + ' seven'; break;
            case '8': result = result + ' eight'; break;
            case '9': result = result + ' nine'; break;
        }
        return result;
    }

    else if (stringFromNumber.length === 2){
        if (stringFromNumber.endsWith('10')) return result + "ten";
        if (stringFromNumber.endsWith('11')) return result + "eleven";
        if (stringFromNumber.endsWith('12')) return result + "twelve";
        if (stringFromNumber.endsWith('13')) return result + "thirteen";
        if (stringFromNumber.endsWith('14')) return result + "fourteen";
        if (stringFromNumber.endsWith('15')) return result + "fifteen";
        if (stringFromNumber.endsWith('16')) return result + "sixteen";
        if (stringFromNumber.endsWith('17')) return result + "seventeen";
        if (stringFromNumber.endsWith('18')) return result + "eighteen";
        if (stringFromNumber.endsWith('19')) return result + "nineteen";

        switch (stringFromNumber[0]) {
            case '2': result = result + 'twenty'; break;
            case '3': result = result + 'thirty'; break;
            case '4': result = result + 'forty'; break;
            case '5': result = result + 'fifty'; break;
            case '6': result = result + 'sixty'; break;
            case '7': result = result + 'seventy'; break;
            case '8': result = result + 'eighty'; break;
            case '9': result = result + 'ninety'; break;
        }

        switch (stringFromNumber[1]) {
            
            case '1': result = result + ' one'; break;
            case '2': result = result + ' two'; break;
            case '3': result = result + ' three'; break;
            case '4': result = result + ' four'; break;
            case '5': result = result + ' five'; break;
            case '6': result = result + ' six'; break;
            case '7': result = result + ' seven'; break;
            case '8': result = result + ' eight'; break;
            case '9': result = result + ' nine'; break;
        }
        return result;
    }
    else if (stringFromNumber.length === 1){

        switch (stringFromNumber[0]) {
            case '0': return 'zero';
            case '1': return 'one'; 
            case '2': return 'two'; 
            case '3': return 'three'; 
            case '4': return'four'; 
            case '5': return 'five'; 
            case '6': return 'six'; 
            case '7': return 'seven'; 
            case '8': return 'eight'; 
            case '9': return 'nine'; 
        };
    };
};