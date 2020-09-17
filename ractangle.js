module.export = (x, y, callBack) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() => {
            /**
             * creating Error @obj
             * passed @callBack function 
            */
            callBack(new Error(`Ractangle dimension should be positive number l:${x}, b:${y}`), null);
        }, 2000);
    }
    else {
        setTimeout(() => {
            /**
             * Error @obj => null
            */
            callBack(null, {
                perimeter: (x, y) => (2*(x+y)),
                area: (x, y) => (x*y)
            });
        }, 2000);
    }
}