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
var BouncheWhenHitComponent = /** @class */ (function (_super) {
    __extends(BouncheWhenHitComponent, _super);
    function BouncheWhenHitComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Hit = false;
        return _this;
    }
    BouncheWhenHitComponent.prototype.Notified = function () {
        //This should be notified if it's owner collides with something.
        this.Hit = true;
    };
    BouncheWhenHitComponent.prototype.Update = function () {
        if (this.Hit) {
            //Calculate a new velocity from current velocity.
            this.Hit = false;
        }
    };
    return BouncheWhenHitComponent;
}(Component));
