class Scene
{
    
    //4k = 3840 x 2160
    public GameObjects: GameObject[] = [];
    public readonly Camera: Camera;

    constructor(public readonly Width: number, public readonly Height: number, camera?: Camera)
    {
        camera != undefined ?  this.Camera = camera : this.Camera = new Camera(new Vector2(0, 0), this.Width, this.Height);
    }

    Add(gameObject: GameObject)
    {
        this.GameObjects.push(gameObject);
    }

    Update()
    {
        // if (this.Camera.Position.X + this.Camera.Width < 3840)
        // {
        //     this.Camera.Position = new Vector2(this.Camera.Position.X + 9, this.Camera.Position.Y);
        // }
        


        this.GameObjects.forEach((gameObject) =>{
            gameObject.Update();
        });
    }
}

class Camera
{
    constructor(public Position: Vector2, public readonly Width: number, public readonly Height: number){}
}