var UserModel = Backbone.Model.extend ({
	defaults: {
		'id' 		: '',
		'name'		: '',
		'last_seen'	: '',
		'user_image': '',
		'status'	: '',
		'online'	: ''
	}
});

var UserCollection=Backbone.Collection.extend ({
Model : UserModel
});