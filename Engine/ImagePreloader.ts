class ImagePreloader
{
    Images: HTMLImageElement[] = [];

    constructor(urls: string[], callback: Function)
    {
        urls.forEach((url) =>{
            let image = document.createElement("img");
            image.onload = () => {
                this.Images.push(image);
                if (this.Images.length == urls.length)
                {
                    callback(this.Images);
                }
            };
            image.src = url;
        });
    }
}