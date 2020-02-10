class KeyValue<T, U>
{
    constructor(public Key: T, public Value: U){}
}

class Dictionary<T, U>
{
    private Content: Array<KeyValue<T, U>> = new Array();

    public Add(key: T, value: U): void
    {
        this.Content.forEach(element => {
            if (element.Key == key) throw new Error("An element with the given key already exists.");
        });

        this.Content.push(new KeyValue(key, value));
    }

    public Get(key: T): U
    {
        this.Content.forEach(element => {
            if (element.Key == key) return element.Value; 
        });
        
        throw new Error("No element with the given key exist in dictionary.");
    }
}