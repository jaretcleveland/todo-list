import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

export function createAppState() {
  const defaultProject = createProject("Default");
  const projects = [defaultProject];
  let selectedProjectId = defaultProject.id;

  function getProjects() {
    // Return a new array so callers cannot add or remove projects directly.
    return [...projects];
  }

  function getProject(projectId) {
    const project = projects.find((project) => project.id === projectId);

    if (!project) {
      throw new Error("Project not found.");
    }

    return project;
  }

  function addProject(name) {
    const project = createProject(name);
    projects.push(project);
    return project;
  }

  function selectProject(projectId) {
    // Check that the project exists before changing the selection.
    getProject(projectId);
    selectedProjectId = projectId;
  }

  function getSelectedProject() {
    return getProject(selectedProjectId);
  }

  function addTodo(projectId, title, options = {}) {
    const project = getProject(projectId);
    const todo = createTodo(title, options);
    project.todos.push(todo);
    return todo;
  }

  function getTodo(projectId, todoId) {
    const project = getProject(projectId);
    const todo = project.todos.find((todo) => todo.id === todoId);

    if (!todo) {
      throw new Error("Todo not found in this project.");
    }

    return todo;
  }

  function deleteTodo(projectId, todoId) {
    const project = getProject(projectId);
    const todo = getTodo(projectId, todoId);
    const index = project.todos.indexOf(todo);
    project.todos.splice(index, 1);
  }

  return {
    getProjects,
    getProject,
    addProject,
    selectProject,
    getSelectedProject,
    addTodo,
    getTodo,
    deleteTodo,
  };
}
