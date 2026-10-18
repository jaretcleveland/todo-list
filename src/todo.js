const priorities = ["low", "medium", "high"];

function validateTitle(title) {
  if (typeof title !== "string" || title.trim() === "") {
    throw new Error("A todo must have a non-blank title.");
  }
}

function validatePriority(priority) {
  if (!priorities.includes(priority)) {
    throw new Error("Priority must be low, medium, or high.");
  }
}

export function createTodo(
  title,
  { description = "", dueDate = null, priority = "medium" } = {},
) {
  validateTitle(title);
  validatePriority(priority);

  return {
    id: crypto.randomUUID(),
    title: title.trim(), 
    description,
    dueDate,
    priority,
    completed: false,

    updateDetails({
      title = this.title,
      description = this.description,
      dueDate = this.dueDate,
    } = {}) {
      // Validate before assigning so an invalid edit changes nothing.
      validateTitle(title);

      this.title = title.trim();
      this.description = description;
      this.dueDate = dueDate;
    },

    setPriority(priority) {
      validatePriority(priority);
      this.priority = priority;
    },

    toggleComplete() {
      this.completed = !this.completed;
    },
  };
}
