var MessageModel = Backbone.Model.extend ({
	defaults: {
		'id' 		: '',
		'text'		: '',
		'date'		: '',
		'time'		: '',
		'status'	: ''
	}
});

var MessageCollection = Backbone.Collection.extend ({
model : MessageModel
});