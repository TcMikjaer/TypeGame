var Scene = /** @class */ (function () {
    function Scene(Width, Height, camera) {
        this.Width = Width;
        this.Height = Height;
        this.GameObjects = [];
        camera != undefined ? this.Camera = camera : this.Camera = new Camera(new Vector2(0, 0), this.Width, this.Height);
    }
    Scene.prototype.Add = function (gameObject) {
        this.GameObjects.push(gameObject);
    };
    Scene.prototype.Update = function () {
        // if (this.Camera.Position.X + this.Camera.Width < 3840)
        // {
        //     this.Camera.Position = new Vector2(this.Camera.Position.X + 9, this.Camera.Position.Y);
        // }
        this.GameObjects.forEach(function (gameObject) {
            gameObject.Update();
        });
    };
    return Scene;
}());
var Camera = /** @class */ (function () {
    function Camera(Position, Width, Height) {
        this.Position = Position;
        this.Width = Width;
        this.Height = Height;
    }
    return Camera;
}());
