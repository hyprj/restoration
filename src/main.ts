import { ECS } from "./engine/ecs/ECS";
import { Entity } from "./engine/ecs/Entity";
import { World } from "./engine/World";
import { SpriteComponent } from "./game/SpriteComponent";
import { SpriteRendererSystem } from "./game/SpriteRendererSystem";

import "./style.css";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

const ecs = new ECS();

const playerEntity = new Entity().attachComponent(
    SpriteComponent,
    new SpriteComponent("../public/zwierz.gif", {
        frames: 5,
        xFrame: 6,
        yFrame: 4,
        repetitions: 6,
        dirOffset: {
            bottom: 0,
            left: 1,
            right: 2,
            top: 3,
        },
    })
);

ecs.addEntity(playerEntity);

const world = new World(ecs, canvas, "../public/Forest_Retreat.webp");
ecs.addSystem(new SpriteRendererSystem(world.ctx));

world.start();
