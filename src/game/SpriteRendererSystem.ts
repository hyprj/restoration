import { Entity } from "../engine/ecs/Entity";
import { System } from "../engine/ecs/System";
import { SpriteComponent } from "./SpriteComponent";

export class SpriteRendererSystem extends System {
    public componentsRequired: Set<Function> = new Set([SpriteComponent]);
    private ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        super();
        this.ctx = ctx;
    }

    public update(entities: Set<Entity>, fixedDelta: number): void {
        for (const entity of entities) {
            // console.log('xdd')
            // console.log(sprite.image)
            const sprite = entity.getComponent(
                SpriteComponent
            ) as SpriteComponent;
            if (sprite) {
                this.ctx.clearRect(0, 0, 600, 300);
                this.ctx.drawImage(
                    sprite.image,
                    sprite.currentFrame * sprite.spritewidth,
                    sprite.config.dirOffset[sprite.direction] *
                        sprite.spriteHeight,
                    sprite.spritewidth,
                    sprite.spriteHeight,
                    0,
                    0,
                    sprite.spritewidth,
                    sprite.spriteHeight
                );
                if (sprite.frameRepetition === sprite.config.repetitions - 1) {
                    //move to next frame;
                    sprite.frameRepetition = 0;
                    sprite.currentFrame =
                        sprite.config.frames == sprite.currentFrame + 1
                            ? 0
                            : sprite.currentFrame + 1;
                    // console.log(sprite.currentFrame)
                } else {
                    sprite.frameRepetition++;
                    // console.log(sprite.frameRepetition)
                }
            }
        }
    }
}
