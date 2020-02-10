var GameObject = /** @class */ (function () {
    function GameObject(RenderType, Position) {
        this.RenderType = RenderType;
        this.Position = Position;
        this.Components = new Array();
    }
    GameObject.prototype.Update = function () {
        this.Components.forEach(function (component) {
            component.Update();
        });
    };
    GameObject.prototype.AddComponent = function (component) {
        this.Components.push(component);
    };
    return GameObject;
}());
