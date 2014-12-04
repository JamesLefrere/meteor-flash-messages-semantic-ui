Package.describe({
  name: "jameslefrere:flash-messages-semantic-ui",
  summary: "Semantic UI theme for Flash Messages",
  version: "0.1.0",
  git: "https://github.com/JamesLefrere/meteor-flash-messages-semantic-ui"
});

Package.onUse(function(api) {
  api.versionsFrom("0.9.0");
  api.use(["minimongo", "mongo-livedata", "templating"], "client");
  api.addFiles(["semantic_messages.js", "semantic_messages_list.html", "flash-messages/messages_list.js"], "client");
  if (api.export) {
    api.export(["FlashMessages", "flashMessages"], "client");
  }
});

Package.on_test(function(api) {
  api.use("mrt:flash-messages", "client");
  api.use(["tinytest", "test-helpers"], "client");
  api.addFiles("flash-messages/messages_tests.js", "client");
});
