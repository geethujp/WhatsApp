var ChatModel = Backbone.Model.extend ({
	defaults: {
		user_id		: '',
		receiver_id	: '',
		message_id	: ''
		}
});

var ChatCollection = Backbone.Collection.extend ({
model : ChatModel
});