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
        gameObject.circle.Render(this.Context, X, Y);
    }

    RenderScene(scene: Scene)
    {
        scene.GameObjects.forEach((gameObject) =>{
            //Check if the gameObject is within the borders of the camera.
            if (true)
            {
                //Render the object according to it's position to the camera.
                this.Render(gameObject, gameObject.Position.X - scene.Camera.Position.X, gameObject.Position.Y - scene.Camera.Position.Y);
            }
        });
    }
}











class RigidBody2d
{
    constructor(public readonly Position: Vector2, ) {}
    get RenderType(): IRendable {
        return new Rectangle(this.Position.X, this.Position.Y, )
    }

}



interface IRendable
{
    Render(ctx: CanvasRenderingContext2D, X: number, Y: number): void;
}

interface IRigidBody2d
{
    
}

class Rectangle implements IRendable
{
    constructor(private Width: number, private Height: number, private FillColor: Color | undefined = undefined, private StrokeColor: Color | undefined  = undefined){}

    Render(ctx: CanvasRenderingContext2D, X: number, Y: number): void
    {
        if (this.FillColor != undefined)
        {
            ctx.fillStyle = this.FillColor;
            ctx.fillRect(X, Y, this.Width, this.Height);
        }

        if (this.StrokeColor != undefined)
        {
            ctx.strokeStyle = this.StrokeColor;
            ctx.strokeRect(X, Y, this.Width, this.Height);
        }
    }

    
    // CollisionWithRectangle(rectangle: Rectangle, position: Vector2): boolean
    // {
    //     if (rectangle.) false;
    //     return true;
    // }
}

class Circle implements IRendable
{
    constructor(public Radius: number, private FillColor: Color | undefined  = undefined, private StrokeColor: Color | undefined  = undefined){}

    Render(ctx: CanvasRenderingContext2D, X: number, Y: number): void
    {

        if (this.StrokeColor != undefined)
        {
            ctx.strokeStyle = this.StrokeColor;
            ctx.beginPath();
            ctx.arc(X, Y, this.Radius, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.stroke();
        }

        if (this.FillColor != undefined)
        {
            ctx.fillStyle = this.FillColor;
            ctx.beginPath();
            ctx.arc(X, Y, this.Radius, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();            
        }
    }
}


class RandomBackground implements IRendable
{
    Color1 = "rgba(100, 0, 50, 1.0)";
    Color2 = "rgba(0, 100, 50, 1.0)";

    Render(ctx: CanvasRenderingContext2D, X: number, Y: number): void
    {
        for (var i = 0; i < 10; i++)
        {
            for (var j = 0; j < 10; j++)
            {
                if (i % 2 )
                {
                    ctx.fillStyle = this.Color1;
                }
                else
                {
                    ctx.fillStyle = this.Color2;
                }
                
                ctx.fillRect(X * j, Y * i, 300, 300);
            }
        }
    }
}

class CanvasImage implements IRendable
{
    constructor(private Image: HTMLImageElement){}

    Render(ctx: CanvasRenderingContext2D, X: number, Y: number): void
    {
        ctx.drawImage(this.Image, X, Y);
    }
}

class ImageLoader
{
    
}


enum Color
{
    Red = "red",
    Black = "black",
    Blue = "blue",
    LightBlue = "rgba(0,147,255,1.0)"
}