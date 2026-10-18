export function createProject(name) {
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("A project must have a non-blank name.");
  }

  return {
    id: crypto.randomUUID(),
    name: name.trim(),
    todos: [],
  };
}
