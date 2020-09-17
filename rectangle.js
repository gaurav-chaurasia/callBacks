module.exports = (x, y, callBack) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() => {
            /**
             * creating Error @obj
             * passed @callBack function 
            */
            callBack(new Error(`Ractangle dimension should be positive number unlike => length:${x}, bredth:${y}`), null);
        }, 2000);
    }
    else {
        setTimeout(() => {
            /**
             * Error @obj => null
            */
            callBack(null, {
                perimeter: () => (2*(x+y)),
                area: () => (x*y)
            });
        }, 2000);
    }
}