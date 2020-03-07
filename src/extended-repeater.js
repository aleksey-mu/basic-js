
module.exports = function repeater(str, options) {
    const result =[];
    const additionalBase = []

    let {
        repeatTimes = 1,
        separator = '+',
        addition,
        additionRepeatTimes = 1,
        additionSeparator = '|'
    } = options;

    if (addition === null) {
        addition = 'null';
    }
    if (str === null) {
        str = 'null';
    }

    for (let i = 1; i <= additionRepeatTimes; i += 1) {
        additionalBase.push(addition);
        additionalBase.push(additionSeparator);
    }
   
    const additionalStr = additionalBase.slice(0, additionalBase.length - 1).join('');
    for (let i = 1; i <= repeatTimes; i += 1) {
        result.push(str);
        result.push(additionalStr);
        result.push(separator);
        
    }

    return result.slice(0, result.length - 1).join('');
};
  