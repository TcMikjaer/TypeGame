var ImagePreloader = /** @class */ (function () {
    function ImagePreloader(urls, callback) {
        var _this = this;
        this.Images = [];
        urls.forEach(function (url) {
            var image = document.createElement("img");
            image.onload = function () {
                _this.Images.push(image);
                if (_this.Images.length == urls.length) {
                    callback(_this.Images);
                }
            };
            image.src = url;
        });
    }
    return ImagePreloader;
}());
