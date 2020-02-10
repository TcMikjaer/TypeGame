var Vector2 = /** @class */ (function () {
    function Vector2(X, Y) {
        this.X = X;
        this.Y = Y;
    }
    Vector2.prototype.Add = function (vector) {
        return new Vector2(this.X + vector.X, this.Y + vector.Y);
    };
    Vector2.prototype.Multiply = function (value) {
        return new Vector2(this.X * value, this.Y * value);
    };
    Vector2.prototype.Unit = function () {
    };
    return Vector2;
}());
var VectorFactory = /** @class */ (function () {
    function VectorFactory() {
    }
    VectorFactory.CreateFromAngle = function (angle) {
        return new Vector2(Math.cos(angle), Math.sin(angle));
    };
    return VectorFactory;
}());
