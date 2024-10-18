export enum ResourceType {
  Gold = "gold",
  Wood = "wood",
  Stone = "stone",
  Steel = "steel",
}

export interface ResourceState {
  [ResourceType.Gold]: number;
  [ResourceType.Wood]: number;
  [ResourceType.Stone]: number;
  [ResourceType.Steel]: number;
}
