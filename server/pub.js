// server: publish all messages for a given room
Meteor.publish("messages", function (limit) {
  check(limit, Number);

  return Messages.find({}, {limit: limit});
});