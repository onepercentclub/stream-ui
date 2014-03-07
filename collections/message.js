Messages = new Meteor.Collection("messages");

Messages.allow({
	insert: function(userId, message){
		return false;
	},

	update: function(messageId, message){
		return true;
	},

	remove: function(messageId) {
		return true;
	}
});


Meteor.methods({
	messageInsert: function(message){
		check(message, Object);
		check(message.text, String);
		check(message.created, Object);

		var messageId = Messages.insert(message);
		return messageId;
	},
});