Template.home.greeting = function () {
  return "Welcome Stream!";
};

Template.home.events({
  'click .save': function (event, template) {
    var text = $(template.find(".text textarea")).val(),
        created = Date.now();

    Messages.insert({text: text, created: created});
  }
});

Template.home.helpers({
  messages: function () {
    return Messages.find({}, {sort: {created: -1}});
  }
});