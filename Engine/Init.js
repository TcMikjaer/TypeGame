window.onload = function () {
    new ImagePreloader(["Images/bg.jpg"], function (images) {
        var game = new Game(images);
        game.Run();
    });
};