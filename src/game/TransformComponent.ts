import { Component } from "../engine/ecs/Component";

export class TransformComponent extends Component {
    public posX: number;
    public posY: number;

    constructor(posX: number, posY: number) {
        super();
        this.posX = posX;
        this.posY = posY;
    }
}
