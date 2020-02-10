var CanvasImage = /** @class */ (function () {
    function CanvasImage(Image) {
        this.Image = Image;
    }
    CanvasImage.prototype.Render = function (ctx, X, Y) {
        ctx.drawImage(this.Image, X, Y);
    };
    return CanvasImage;
}());
