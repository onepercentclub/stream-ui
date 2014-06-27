// server: publish all messages for a given room
Meteor.publish("messages", function (options) {
  check(options, Object);
  check(options.limit, Number);

  return Messages.find({}, {limit: options.limit, sort: {created: -1}});
});