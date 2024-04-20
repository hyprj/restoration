import { Component } from "../engine/ecs/Component";

export type Direction = "top" | "bottom" | "left" | "right";

interface SpriteConfig {
    xFrame: number;
    yFrame: number;
    frames: number;
    repetitions: number;
    dirOffset: { [key in Direction]: number };
}

export class SpriteComponent extends Component {
    public image: HTMLImageElement;
    public direction: Direction;
    public currentFrame: number;
    public config: SpriteConfig;
    public spritewidth: number;
    public spriteHeight: number;
    public isLoaded: boolean;
    public frameRepetition: number;

    // public framesRepetition: number;
    // {framesRepetition, xFrames, yFrames, startingXFrameIndex, startingYFrameIndex}
    constructor(imgSource: string, config: SpriteConfig) {
        super();
        this.image = new Image();
        this.image.src = imgSource;
        this.isLoaded = false;
        this.spriteHeight = 0;
        this.spritewidth = 0;
        this.frameRepetition = 0;

        // this.image.onload(() => {
        this.isLoaded = true;
        this.spriteHeight = this.image.height / 4;
        this.spritewidth = this.image.width / 6;
        // console.log(this.spriteHeight)
        // })
        this.direction = "bottom";
        this.currentFrame = 0;
        this.config = config;
    }
}
