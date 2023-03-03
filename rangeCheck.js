function rangeCheck(input, min, max){
    if( input < min || input > max){
        return false;
    }
    return true;
}
module.exports = {rangeCheck};