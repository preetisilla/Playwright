class TestDataStorage<T>{
    private items:T[] = [];

    add(item:T){
        this.items.push(item)
    }

    getFirst():T{
        return this.items[0]!
    }

    getAll():T[]{
        return this.items;
    }
    
    count():number{
        return this.items.length;
    }
}

let numStorage =new TestDataStorage<number>();
let stringStorage = new TestDataStorage<string>();

numStorage.add(200)
console.log(numStorage.getAll());