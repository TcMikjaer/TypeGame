class Rectangle implements IRendable
{
    constructor(private Width: number, private Height: number, private FillColor: Color | undefined = undefined, private StrokeColor: Color | undefined = undefined){}

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
}