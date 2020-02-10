class GameObject
{
    protected Components: Array<IComponent> = new Array();

    constructor(public readonly RenderType: IRendable, public Position: Vector2){}

    Update()
    {
        this.Components.forEach((component) =>
        {
            component.Update();
        });
    }

    AddComponent(component: IComponent)
    {
        this.Components.push(component);
    }
}