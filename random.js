seed = function(s) {

    return function(lower, upper, floating) {
        if(typeof floating !== "undefined") {
            assert(4);
        }
        if(typeof upper === "undefined") {
            upper = lower;
            lower = 0;
        }

        var x = Math.sin(s++) * 10000;
        x = x - Math.floor(x);

        return Math.floor(lower + x*(upper-lower+1));
    };
}ls;

_.random = seed(1234);
