class GameObject
{
    constructor(
        public readonly circle: Circle, 
        public Position: Vector2,
        public Velocity: Vector2,
        public Speed: number
    ){}

    Update()
    {
        this.Position = this.Position.Add(this.Velocity.Multiply(this.Speed));
        
    }

    //Should be called in case the object moves somewhere it can't, so it can be corrected.
    CorrectPosition()
    {

    }

    Bounche(xAxis: boolean)
    {
        if (xAxis)
        {
            this.Velocity = new Vector2(this.Velocity.X * -1, this.Velocity.Y);
        }
        else 
        {
            this.Velocity = new Vector2(this.Velocity.X, this.Velocity.Y * -1);
        }
    }
}



// interface IComponent
// {
//     Update(): void;
// }

// class GameObject
// {
//     private Components: Array<IComponent> = new Array();

//     constructor(public readonly RenderType: IRendable, public Position: Vector2){}

//     Update()
//     {
//         this.Components.forEach((component) =>
//         {
//             component.Update();
//         });
//     }

//     AddComponent(component: IComponent)
//     {
//         this.Components.push(component);
//     }
// }

// abstract class Component implements IComponent
// {
//     constructor(protected Owner: GameObject){}

//     abstract Update(): void;
// }

// class MoveComponent extends Component
// {
//     constructor(Owner: GameObject, private Velocity: Vector2)
//     {
//         super(Owner)
//     }

//     Update(): void
//     {
//         this.Owner.Position = this.Owner.Position.Add(this.Velocity);

//         dispatchEvent(new CustomEvent("GameObjectMovesEvent",{detail: {
//             owner : this.Owner 
//         }}));

//         console.log("Event Dispatched");
//     }
// }

// class BouncheWhenHitComponent extends Component
// {
//     private Hit = false;

//     constructor(Owner: GameObject) 
//     {
//         super(Owner);
//     }

//     Notified()
//     {
//         //This should be notified if it's owner collides with something.
//         this.Hit = true;
//     }

//     Update(): void
//     {
//         if (this.Hit)
//         {
//             //Calculate a new velocity from current velocity.
//             // this.Owner.
//             this.Hit = false;
//         }
//     }
// }





// // let div: any = document.getElementById("my_div");



// // div.addEventListener("build", function(e: CustomEvent) { // change here Event to CustomEvent
// //     console.log(e.detail);
// // }.bind(this));


// // let gameObjectMovesEvent = new CustomEvent("GameObjectMovesEvent",{detail: });
// // div.dispatchEvent(gameObjectMovesEvent);