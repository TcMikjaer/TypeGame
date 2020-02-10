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
        gameObject.circle.Render(this.Context, X, Y);
    };
    CanvasRender.prototype.RenderScene = function (scene) {
        var _this = this;
        scene.GameObjects.forEach(function (gameObject) {
            //Check if the gameObject is within the borders of the camera.
            if (true) {
                //Render the object according to it's position to the camera.
                _this.Render(gameObject, gameObject.Position.X - scene.Camera.Position.X, gameObject.Position.Y - scene.Camera.Position.Y);
            }
        });
    };
    return CanvasRender;
}());
var RigidBody2d = /** @class */ (function () {
    function RigidBody2d(Position) {
        this.Position = Position;
    }
    Object.defineProperty(RigidBody2d.prototype, "RenderType", {
        get: function () {
            return new Rectangle(this.Position.X, this.Position.Y);
        },
        enumerable: true,
        configurable: true
    });
    return RigidBody2d;
}());
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
var RandomBackground = /** @class */ (function () {
    function RandomBackground() {
        this.Color1 = "rgba(100, 0, 50, 1.0)";
        this.Color2 = "rgba(0, 100, 50, 1.0)";
    }
    RandomBackground.prototype.Render = function (ctx, X, Y) {
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                if (i % 2) {
                    ctx.fillStyle = this.Color1;
                }
                else {
                    ctx.fillStyle = this.Color2;
                }
                ctx.fillRect(X * j, Y * i, 300, 300);
            }
        }
    };
    return RandomBackground;
}());
var CanvasImage = /** @class */ (function () {
    function CanvasImage(Image) {
        this.Image = Image;
    }
    CanvasImage.prototype.Render = function (ctx, X, Y) {
        ctx.drawImage(this.Image, X, Y);
    };
    return CanvasImage;
}());
var ImageLoader = /** @class */ (function () {
    function ImageLoader() {
    }
    return ImageLoader;
}());
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Black"] = "black";
    Color["Blue"] = "blue";
    Color["LightBlue"] = "rgba(0,147,255,1.0)";
})(Color || (Color = {}));
