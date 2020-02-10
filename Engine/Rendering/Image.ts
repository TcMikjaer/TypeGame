class CanvasImage implements IRendable
{
    constructor(private Image: HTMLImageElement){}

    Render(ctx: CanvasRenderingContext2D, X: number, Y: number): void
    {
        ctx.drawImage(this.Image, X, Y);
    }
}