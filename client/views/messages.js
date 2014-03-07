Template.messages.events({
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

Template.messages.helpers({
  messages: function () {
    return Messages.find({}, {sort: {created: -1}});
  }
});

