function sum (val_1, val_2) {
    return val_1 + val_2;
}

function mul (val_1, val_2) {
    return val_1 * val_2;
}

function min (val_1, val_2) {
    return Math.min(val_1, val_2);
}

function max (val_1, val_2) {
    return Math.max(val_1, val_2);
}

module.exports.sum = sum;
module.exports.mul = mul;
module.exports.min = min;
module.exports.max = max;