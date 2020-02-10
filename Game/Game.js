var Game = /** @class */ (function () {
    function Game(images) {
        var _this = this;
        this.Scene1 = new Scene(800, 600); //TODO: Create SceneManager
        this.Render = new CanvasRender(800, 600);
        this.Run = function () {
            _this.Scene1.Update();
            _this.Render.ClearScene(_this.Scene1);
            _this.Render.RenderScene(_this.Scene1);
            requestAnimationFrame(_this.Run);
        };
        var ball = new Ball(new Circle(5, Color.LightBlue, Color.LightBlue), new Vector2(Math.floor(this.Scene1.Width / 2), Math.floor(this.Scene1.Height / 2)) //Center of scene.
        );
        ball.AddComponent(new MoveComponent(ball, new Vector2(1, 1)));
        this.Scene1.Add(ball);
        this.Scene1.Add(new Wall(new Rectangle(this.Scene1.Width, 5, Color.White, Color.White), new Vector2(0, 0) //Top border of scene.
        ));
        this.Scene1.Add(new Wall(new Rectangle(this.Scene1.Width, 5, Color.White, Color.White), new Vector2(0, this.Scene1.Height - 5) //Bottom border of scene.
        ));
        this.Scene1.Add(new Wall(new Rectangle(5, this.Scene1.Height, Color.White, Color.White), new Vector2(this.Scene1.Width - 5, 0) //Right border of scene.
        ));
        this.Scene1.Add(new Wall(new Rectangle(5, this.Scene1.Height, Color.White, Color.White), new Vector2(0, 0) //Left border of scene.
        ));
    }
    return Game;
}());
