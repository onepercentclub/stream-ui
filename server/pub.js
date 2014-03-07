// server: publish all messages for a given room
Meteor.publish("messages", function () {
  return Messages.find({});
});