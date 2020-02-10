class MoveComponent extends Component
{
    constructor(Owner: GameObject, private Velocity: Vector2)
    {
        super(Owner)
    }

    Update(): void
    {
        this.Owner.Position = this.Owner.Position.Add(this.Velocity);
    }
}