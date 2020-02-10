var Rectangle = /** @class */ (function () {
    function Rectangle(Width, Height, FillColor, StrokeColor) {
        if (FillColor === void 0) { FillColor = undefined; }
        if (StrokeColor === void 0) { StrokeColor = undefined; }
        this.Width = Width;
        this.Height = Height;
        this.FillColor = FillColor;
        this.StrokeColor = StrokeColor;
    }
    Rectangle.prototype.Render = function (ctx, X, Y) {
        if (this.FillColor != undefined) {
            ctx.fillStyle = this.FillColor;
            ctx.fillRect(X, Y, this.Width, this.Height);
        }
        if (this.StrokeColor != undefined) {
            ctx.strokeStyle = this.StrokeColor;
            ctx.strokeRect(X, Y, this.Width, this.Height);
        }
    };
    return Rectangle;
}());
