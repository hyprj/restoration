import { Component } from "./Component";

export class Entity {
    private static nextUUID = 0;

    public id: number;
    public components = new Map<Function, Component>();

    constructor() {
        this.id = Entity.nextUUID;
        Entity.nextUUID++;
    }

    public attachComponent(constructor: Function, component: Component) {
        this.components.set(constructor, component);
        return this;
    }

    public detachComponent(component: string) {
        // this.components.delete(component);
    }

    public getComponent(component: Function) {
        return this.components.get(component);
    }
}
