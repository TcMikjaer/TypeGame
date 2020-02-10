class Vector2
{
    constructor(public readonly X: number, public readonly Y: number) {}

    Add(vector: Vector2): Vector2
    {
        return new Vector2(this.X + vector.X, this.Y + vector.Y);
    }

    Multiply(value: number): Vector2
    {
        return new Vector2(this.X * value, this.Y * value);
    }

    Unit()
    {

    }
}


class VectorFactory
{
    static CreateFromAngle(angle: number)
    {
        return new Vector2(Math.cos(angle), Math.sin(angle));
    }
}
