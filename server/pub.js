// server: publish all messages for a given room
Meteor.publish("messages", function (options) {
  check(options, Object);
  check(options.limit, Number);

  var filter = {};
  if (typeof options.messageType == 'string') filter.type = options.messageType;

  return Messages.find(filter, {limit: options.limit, sort: {created: -1}});
});