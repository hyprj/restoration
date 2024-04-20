import { ECS } from "./ecs/ECS";

export class World {
    private ecs: ECS;
    private lastFrameTimestamp: number;
    private canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    private bgImage: HTMLImageElement;

    constructor(ecs: ECS, canvas: HTMLCanvasElement, bgPath: string) {
        this.ecs = ecs;
        this.lastFrameTimestamp = 0;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!;

        const bgImage = new Image();
        bgImage.src = bgPath;

        this.bgImage = bgImage;
    }

    // private drawCanvas() {
    //     this.ctx.drawImage(this.bgImage, 0, 0)
    // }

    public start = (currFrameTimestamp = 0) => {
        const delta = currFrameTimestamp - this.lastFrameTimestamp;
        if (delta / 16 >= 1) {
            // this.drawCanvas();
            this.ecs.update(delta);
            this.lastFrameTimestamp = currFrameTimestamp;
        }

        window.requestAnimationFrame(this.start);
    };

    public stop() {}
}
