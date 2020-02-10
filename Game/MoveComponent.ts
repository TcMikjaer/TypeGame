class MoveComponent extends Component
{
    constructor(Owner: GameObject, private Velocity: Vector2)
    {
        super(Owner)
    }

    Update(): void
    {
        console.log("yeeees?");
        this.Owner.Position = this.Owner.Position.Add(this.Velocity);
    }
}