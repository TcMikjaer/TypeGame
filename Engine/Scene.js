var Scene = /** @class */ (function () {
    function Scene(Width, Height, camera) {
        this.Width = Width;
        this.Height = Height;
        this.GameObjects = [];
        this.CollisionDetector = new CollisionDetector();
        //Default Camera
        camera != undefined ? this.Camera = camera : this.Camera = new Camera(new Vector2(0, 0), this.Width, this.Height);
    }
    Scene.prototype.Add = function (gameObject) {
        this.GameObjects.push(gameObject);
    };
    Scene.prototype.Update = function () {
        this.GameObjects.forEach(function (gameObject) {
            gameObject.Update();
        });
    };
    return Scene;
}());
