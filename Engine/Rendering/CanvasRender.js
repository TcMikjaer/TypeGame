var CanvasRender = /** @class */ (function () {
    function CanvasRender(width, height) {
        this.Canvas = document.getElementById("MainCanvas");
        this.Context = this.Canvas.getContext("2d");
        this.Canvas.height = height; //720;
        this.Canvas.width = width; //1710;
    }
    CanvasRender.prototype.ClearScene = function (scene) {
        this.Context.fillStyle = "black";
        this.Context.fillRect(0 - scene.Camera.Position.X, 0 - scene.Camera.Position.Y, this.Canvas.width, this.Canvas.height);
    };
    CanvasRender.prototype.Test = function () {
        this.Context.fillStyle = "red";
        this.Context.fillRect(100, 100, 100, 100);
    };
    CanvasRender.prototype.Render = function (gameObject, X, Y) {
        gameObject.RenderType.Render(this.Context, X, Y);
    };
    CanvasRender.prototype.RenderScene = function (scene) {
        var _this = this;
        scene.GameObjects.forEach(function (gameObject) {
            if (true) //TODO: Check if the gameObject is within the borders of the camera.
             {
                //Render the object according to it's position to the camera.
                _this.Render(gameObject, gameObject.Position.X - scene.Camera.Position.X, gameObject.Position.Y - scene.Camera.Position.Y);
            }
        });
    };
    return CanvasRender;
}());
