import { ResourceType, ResourceState } from "../models/resources";

export class ResourceService {
  private resources: ResourceState = {
    [ResourceType.Gold]: 0,
    [ResourceType.Wood]: 0,
    [ResourceType.Stone]: 0,
    [ResourceType.Steel]: 0,
  };

  loadResources(): void {
    try {
      const data = localStorage.getItem("resources");
      if (data) {
        this.resources = JSON.parse(data);
      } else {
        console.warn("No resources found in local storage.");
      }
    } catch (error) {
      console.error("Failed to load resources from local storage:", error);
    }
  }

  saveResources(): void {
    try {
      const data = JSON.stringify(this.resources);
      localStorage.setItem("resources", data);
    } catch (error) {
      console.error("Failed to save resources to local storage:", error);
    }
  }

  getResources(): ResourceState {
    return this.resources;
  }

  updateResource(type: ResourceType, amount: number): void {
    const updatedResources = { ...this.resources };
    updatedResources[type] += amount;
    this.resources = updatedResources;
    this.saveResources();
  }
}
