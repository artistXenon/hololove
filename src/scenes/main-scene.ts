import { Sprite } from "artistic-engine";

export default class MainScene extends Sprite {
    private c = "";
    constructor() {
        super();
    }
    
    onDraw(context: CanvasRenderingContext2D, delay: number): void {
        context.fillStyle = this.c;
        context.fillRect(0, 0, 100, 100);
    }

    public loadConfig() {
        /** 
         * config: {
         *  stage,
         *  lanes
         * }
         * 
         * 
         */
    }

    public setColor(s: number) {
        this.c = "rgb(" + s + ", 0, 0)";
    }
} 
