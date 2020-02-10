var Circle = /** @class */ (function () {
    function Circle(Radius, FillColor, StrokeColor) {
        if (FillColor === void 0) { FillColor = undefined; }
        if (StrokeColor === void 0) { StrokeColor = undefined; }
        this.Radius = Radius;
        this.FillColor = FillColor;
        this.StrokeColor = StrokeColor;
    }
    Circle.prototype.Render = function (ctx, X, Y) {
        if (this.StrokeColor != undefined) {
            ctx.strokeStyle = this.StrokeColor;
            ctx.beginPath();
            ctx.arc(X, Y, this.Radius, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.stroke();
        }
        if (this.FillColor != undefined) {
            ctx.fillStyle = this.FillColor;
            ctx.beginPath();
            ctx.arc(X, Y, this.Radius, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();
        }
    };
    return Circle;
}());
