Template.home.greeting = function () {
  return "Welcome Stream!";
};

Template.home.events({
  'click .save': function (event, template) {
    var text = $(template.find(".text textarea"))

    var message = {
    	text: text.val(),
    	created: Date.now()
    };

    Meteor.call("messageInsert", message, function(error, messageId){
    	if (error) {
    		console.log("Error:", error);
    	} else {
    		text.val("");
    	}
    });
    

  }
});

Template.home.helpers({
  messages: function () {
    return Messages.find({}, {sort: {created: -1}});
  }
});

