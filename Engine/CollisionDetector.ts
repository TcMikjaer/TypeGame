class CollisionDetector 
{
    // constructor(private Scene: Scene){}

    GameObjectHitSceneBorder(gameObject: GameObject)
    {
        // if (gameObject.Position.X >= this.Scene.Width) { /*Hit the right border*/ }
        // if (gameObject.Position.X <= 0) { /*Hit the left border*/ }
        // if (gameObject.Position.Y >= this.Scene.Height) { /*Hit the bottom border*/ }
        // if (gameObject.Position.Y <= 0) { /*Hit the top border*/ }
    }
    
    CircleCollisionWithCircle(circle1: Circle, position1: Vector2, circle2: Circle, position2: Vector2): boolean
    {
        return Math.sqrt( Math.pow(position1.X - position2.X, 2) + Math.pow(position1.Y - position2.Y, 2) ) >= circle1.Radius + circle2.Radius
    }
}



























// interface ISubject
// {
// //     Register(observer: IObserver): void;
// //     Notify(): void;
// }

// interface IObserver
// {
// //     Update(): void;
// }






// function Collision(gameObject1: GameObject, gameObject2: GameObject)
// {
//     gameObject1.RenderType
// }




// function CircleIntersectRectangle(circle: Circle, rectangle: Rectangle)
// {
//     circle
// }








// class Person
// {

// }

// class Instagrammer
// {
//     Post()
//     {
//         console.log("I post stuff on the internet.");
//     }
// }




// class MoveComponent implements ISubject
// {
//     Observers : IObserver[] = [];

//     Register(observer: IObserver): void
//     {

//     }

//     Notify(): void
//     {
        
//     }
// }



// class DragAndDrop {
//     item: Item;
//     documentBody: HTMLBodyElement;
//     constructor(documentBody: HTMLBodyElement, item: Item) {
//         this.documentBody = documentBody;
//         this.item = item;
//         this.documentBody.addEventListener("mousedown", this.onmousedown.bind(this));
//     }
//     onmousedown(event: MouseEvent): void {
//         if (CollisionDetector.pointInRect(event.clientX, event.clientY, this.item)) {
//             this.documentBody.addEventListener("mousemove", this.onMouseMove.bind(this));
//             this.documentBody.addEventListener("mouseup", this.onMouseUp.bind(this));
//         }
//     }
//     onMouseMove(event: MouseEvent): void {
//         this.item.x = event.clientX;
//         this.item.y = event.clientY;
//     }
//     onMouseUp(event: MouseEvent): void {
//         this.documentBody.removeEventListener("mousemove", this.onMouseMove.bind(this));
//         this.documentBody.removeEventListener("mouseup", this.onMouseUp.bind(this));
//     }
// }

// class DragAndDrop {
//     item: Item;
//     documentBody: HTMLBodyElement;
//     constructor(documentBody: HTMLBodyElement, item: Item) {
//         this.documentBody = documentBody;
//         this.item = item;
//         this.documentBody.addEventListener("mousedown", this.onmousedown);
//     }
//     onmousedown = (event: MouseEvent): void => {
//         if (CollisionDetector.pointInRect(event.clientX, event.clientY, this.item)) {
//             // Similarly ...
//         }
//     }
// }



