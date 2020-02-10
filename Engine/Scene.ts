class Scene
{
    public GameObjects: GameObject[] = [];
    public readonly Camera: Camera;
    private CollisionDetector = new CollisionDetector();

    constructor(public readonly Width: number, public readonly Height: number, camera?: Camera)
    {
        //Default Camera
        camera != undefined ?  this.Camera = camera : this.Camera = new Camera(new Vector2(0, 0), this.Width, this.Height);
    }

    Add(gameObject: GameObject)
    {
        this.GameObjects.push(gameObject);
    }

    Update()
    {
        this.GameObjects.forEach((gameObject) =>{
            gameObject.Update();
        });
    }
}