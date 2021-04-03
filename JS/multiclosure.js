function add (x) {
    var sum = x;
    var tmp = function(y) {
        sum = sum + y;
        return tmp;
    }

    tmp.toString = function(){
        return sum;
    }

    return tmp;
}



