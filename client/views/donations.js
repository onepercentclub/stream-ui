Template.donations.rendered = function () {
  Session.set('messageType', 'donations');
};

Template.donations.events({
  'click #load-more': function (event, template) {
    Session.set('limit', Session.get('limit') + App.defaults.skip);
  },

  'click .save': function (event, template) {
    var text = $(template.find(".text textarea"));

    var message = {
      text: text.val(),
      created: Date.now()
    };

    Meteor.call("messageInsert", message, function(error, messageId){
      if (error) {
        console.log("Error: ", error);
      } else {
        text.val("");
      }
    });
  }
});

Template.donations.helpers({
  donations: function () {
    return Messages.find({}, {sort: {created: -1}}).fetch().slice(0, Session.get('limit'));
  },
  hideLoadMore: function () {
    var status = Session.get("hideLoadMore");

    return _.isUndefined(status) ? false : status;
  }
});

