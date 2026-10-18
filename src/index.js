import "./styles.css";
import { createAppState } from "./app-state.js";

const state = createAppState();
const defaultProject = state.getSelectedProject();
const learningProject = state.addProject("Learning");

state.addTodo(defaultProject.id, "Learn Webpack", {
  description: "Learn how to use Webpack to bundle your JavaScript applications.",
  dueDate: "2024-06-30",
  priority: "high",
});
state.addTodo(learningProject.id, "Learn JavaScript", {
  dueDate: "2024-07-15",
  priority: "medium",
});

state.selectProject(learningProject.id);
console.log("All projects:", state.getProjects());
console.log("Selected project:", state.getSelectedProject());
