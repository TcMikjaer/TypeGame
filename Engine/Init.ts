window.onload = () => {
    new ImagePreloader(["Images/bg.jpg"], (images: Array<HTMLImageElement>) => {
        let game = new Game(images);
        game.Run();
    });
}