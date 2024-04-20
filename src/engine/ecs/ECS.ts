import { Entity } from "./Entity";
import { System } from "./System";

export class ECS {
    private entities = new Set<Entity>();
    private systems = new Map<System, Set<Entity>>();
    private nextEntityId = [];

    public addEntity(entity: Entity): void {
        this.entities.add(entity);
    }

    public addComponent() {}

    public addSystem(system: System) {
        const validEntities = [];

        for (const entity of this.entities) {
            if (system.hasEntityRequiredComponents(entity)) {
                validEntities.push(entity);
            }
        }

        this.systems.set(system, new Set(validEntities));
    }

    public update(fixedDelta: number) {
        for (const [system, entities] of this.systems) {
            system.update(entities, fixedDelta);
        }
    }
}
