let Scene1: Scene;
let CD: CollisionDetector;
let Render: CanvasRender;

window.onload = () => {
    new ImagePreloader(["bg.jpg"], (images: Array<HTMLImageElement>) => {
        let game = new Game(images);
        game.Run();
    });
}

function Init()
{
    Scene1 = new Scene(800, 600);
    CD = new CollisionDetector(Scene1);
    Render = new CanvasRender(800, 600);
}

class Game
{
    constructor(images: HTMLImageElement[])
    {
        let ball = new GameObject(
            new Circle(5, Color.LightBlue, Color.Red), //Form 
            new Vector2(400, 300), //Position Vector.
            VectorFactory.CreateFromAngle(LinearInterpolation(Math.random(), 0, Math.PI * 2)), //Create a random unit vector as velocity.
            3 //Speed
        );

        Scene1.Add(ball);
    }

    Run = () =>
    {
        Scene1.Update();
        Render.ClearScene(Scene1);
        Render.RenderScene(Scene1);
        requestAnimationFrame(this.Run);
    }
}



//GameObject wants to tell CollisionDetector that it moves, and where.

// class EventHandler
// {
//     private Events = new Dictionary<string, Function>();

//     NotifySubsribers()
//     {

//     }

//     //This is called when an object want to tell that it did something.
//     Fire(eventName: string)
//     {

//         this.Events.Get(eventName)();
//     }

//     //Here an object can ask to be notified when specific events happens.
//     Subscribe(eventName: string, callback: Function)
//     {
//         this.Events.Add(eventName, callback);
//     }
// }

// var Events = new EventHandler();