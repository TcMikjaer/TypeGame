var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MoveComponent = /** @class */ (function (_super) {
    __extends(MoveComponent, _super);
    function MoveComponent(Owner, Velocity) {
        var _this = _super.call(this, Owner) || this;
        _this.Velocity = Velocity;
        return _this;
    }
    MoveComponent.prototype.Update = function () {
        console.log("yeeees?");
        this.Owner.Position = this.Owner.Position.Add(this.Velocity);
    };
    return MoveComponent;
}(Component));
