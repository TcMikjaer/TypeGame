class Game
{
    private Scene1 = new Scene(800, 600); //TODO: Create SceneManager
    private Render = new CanvasRender(800, 600);

    constructor(images: Array<HTMLImageElement>)
    {
        let ball = new Ball(
            new Circle(5, Color.LightBlue, Color.LightBlue),
            new Vector2(Math.floor(this.Scene1.Width / 2), Math.floor(this.Scene1.Height / 2)) //Center of scene.
        );
        ball.Add(new MoveComponent(ball, VectorFactory.CreateFromAngle(LinearInterpolation(Math.random(), 0, Math.PI * 2)))); //Random Direction
        ball.Add(new BounceWhenHitComponent(ball));
        this.Scene1.Add(ball);

        this.Scene1.Add(new Wall(
            new Rectangle(this.Scene1.Width, 5, Color.White, Color.White),
            new Vector2(0, 0) //Top border of scene.
        ));
        this.Scene1.Add(new Wall(
            new Rectangle(this.Scene1.Width, 5, Color.White, Color.White),
            new Vector2(0, this.Scene1.Height - 5) //Bottom border of scene.
        ));
        this.Scene1.Add(new Wall(
            new Rectangle(5, this.Scene1.Height, Color.White, Color.White),
            new Vector2(this.Scene1.Width - 5, 0) //Right border of scene.
        ));
        this.Scene1.Add(new Wall(
            new Rectangle(5, this.Scene1.Height, Color.White, Color.White),
            new Vector2(0, 0) //Left border of scene.
        ));
    }

    public Run = () =>
    {
        this.Scene1.Update();
        this.Render.ClearScene(this.Scene1);
        this.Render.RenderScene(this.Scene1);
        requestAnimationFrame(this.Run);
    }
}