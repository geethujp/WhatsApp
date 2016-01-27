var UserModel = Backbone.Model.extend ({
	defaults: {
		'id' 		: '',
		'name'		: '',
		'last_seen'	: '',
		'image'		: '',
		'status'	: '',
		'online'	: ''
	}
});

var UserCollection=Backbone.Collection.extend ({
Model : UserModel
});