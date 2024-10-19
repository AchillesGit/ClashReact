import { ResourceState } from "../models/resources.model";

export class ResourceService {
  loadResources(): ResourceState {
    let resources: ResourceState = {
      gold: 100,
      wood: 100,
      stone: 100,
      steel: 100,
    };

    try {
      const data = localStorage.getItem("resources");
      if (data) {
        resources = JSON.parse(data);
      } else {
        console.warn("No resources found in local storage.");
      }
    } catch (error) {
      console.error("Failed to load resources from local storage:", error);
    }
    return resources;
  }

  saveResources(resources: ResourceState): void {
    try {
      const data = JSON.stringify(resources);
      localStorage.setItem("resources", data);
    } catch (error) {
      console.error("Failed to save resources to local storage:", error);
    }
  }
}
