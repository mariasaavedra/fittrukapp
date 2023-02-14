module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Re-usable display logic & templates",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (ex: EventCard)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.tsx",
        templateFile: "templates/component/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.module.css",
        templateFile: "templates/component/styles.hbs",
      },
      {
        type: "add",
        path: "src/stories/{{name}}.stories.tsx",
        templateFile: "templates/component/story.hbs",
      },
    ],
  });
};
