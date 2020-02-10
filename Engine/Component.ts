interface IComponent
{
    Update(): void;
}

abstract class Component implements IComponent
{
    constructor(protected Owner: GameObject) {}

    abstract Update(): void;
}