import { Sprite } from "artistic-engine";

//@ts-ignore
import aX from "../assets/aX.png";

export default class IntroScene extends Sprite {    
    public opacity = 0;
    private image: ImageBitmap | undefined;
    constructor() {
        super();
        const i = new Image();
        i.src = aX;
        i.onload = async () => {
            this.image = await createImageBitmap(i);
        }
    }
    onDraw(context: CanvasRenderingContext2D, delay: number): void {
        context.globalAlpha = this.opacity;
        if (this.image) {
            const scale = 0.4;
            context.drawImage(
                this.image, 
                (context.canvas.width - this.image.width * scale) / 2,
                (context.canvas.height - this.image.height * scale) / 2, 
                this.image.width * scale,
                this.image.height * scale
            );
        }
    }

} 
