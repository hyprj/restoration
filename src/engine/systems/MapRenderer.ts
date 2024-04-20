// import { Entity } from "../ecs/Entity";
// import { System } from "../ecs/System";

// export class MapRenderer extends System {
//     public componentsRequired: Set<Function>;
//     public update(entities: Set<Entity>, fixedDelta: number): void {
//         throw new Error("Method not implemented.");
//     }

// }

export class MapRenderer {
    private map: HTMLImageElement;

    constructor(mapPath: string) {
        this.map = new Image();
        this.map.src = mapPath;
    }

    public render() {
        document.body.appendChild(this.map);
    }
}
