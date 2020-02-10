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