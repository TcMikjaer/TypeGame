var KeyValue = /** @class */ (function () {
    function KeyValue(Key, Value) {
        this.Key = Key;
        this.Value = Value;
    }
    return KeyValue;
}());
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.Content = new Array();
    }
    Dictionary.prototype.Add = function (key, value) {
        this.Content.forEach(function (element) {
            if (element.Key == key)
                throw new Error("An element with the given key already exists.");
        });
        this.Content.push(new KeyValue(key, value));
    };
    Dictionary.prototype.Get = function (key) {
        this.Content.forEach(function (element) {
            if (element.Key == key)
                return element.Value;
        });
        throw new Error("No element with the given key exist in dictionary.");
    };
    return Dictionary;
}());
