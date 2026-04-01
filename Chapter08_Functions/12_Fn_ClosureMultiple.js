function makeCounter(){
    let count = 0;
    /*
    *function increment(){
        count++;
        console.log(count);
    }
    function decrement(){
        count--;
        console.log(count);
    }
    function getCount(){
        return count
    }*/
    return {
        increment() { count++},
        decrement() { count--},
        getCount() { return count}
    };

    
}

let counter = makeCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());    
counter.decrement();
console.log(counter.getCount());