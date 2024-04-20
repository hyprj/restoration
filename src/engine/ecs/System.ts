import { ECS } from "./ECS";
import { Entity } from "./Entity";

export abstract class System {
    public abstract componentsRequired: Set<Function>;
    public abstract update(entities: Set<Entity>, fixedDelta: number): void;
    // public ecs: ECS;

    // constructor(ecs: ECS) {
    // this.ecs = ecs;
    // }

    public hasEntityRequiredComponents(entity: Entity) {
        for (const requiredComponent of this.componentsRequired) {
            if (!entity.components.has(requiredComponent)) {
                return false;
            }
        }
        return true;
    }
}
