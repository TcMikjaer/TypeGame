class CanvasRender
{
    private Canvas : HTMLCanvasElement;
    public Context : CanvasRenderingContext2D;

    constructor(width: number, height: number)
    {
        this.Canvas = <HTMLCanvasElement>document.getElementById("MainCanvas");
        this.Context = <CanvasRenderingContext2D>this.Canvas.getContext("2d");
        this.Canvas.height = height; //720;
        this.Canvas.width = width; //1710;
    }
    
    ClearScene(scene: Scene)
    {
        this.Context.fillStyle = "black";
        this.Context.fillRect(0 - scene.Camera.Position.X, 0 - scene.Camera.Position.Y, this.Canvas.width, this.Canvas.height);
    }

    Test()
    {
        this.Context.fillStyle = "red";
        this.Context.fillRect(100, 100, 100, 100);
    }

    Render(gameObject: GameObject, X: number, Y: number)
    {
        gameObject.RenderType.Render(this.Context, X, Y);
    }

    RenderScene(scene: Scene)
    {
        scene.GameObjects.forEach((gameObject) =>{
            if (true)//TODO: Check if the gameObject is within the borders of the camera.
            {
                //Render the object according to it's position to the camera.
                this.Render(gameObject, gameObject.Position.X - scene.Camera.Position.X, gameObject.Position.Y - scene.Camera.Position.Y);
            }
        });
    }
}