var Root = Backbone.View.extend({
    el: '#root',
    initialize: function(options) {
        this.users      = options.users;
        this.messages   = options.messages;  
        this.allData    = options.allData;
    },
    render: function() {
        var chatForm    = new ChatForm ({
            "users"     : this.users,
            "messages"  : this.messages,
            "allData"   : this.allData
        });
        var chatList    = new ChatList ({
            collection  : this.allData,
            "users"     : users,
            "messages"  : messages,
        });
        var contactList = new ContactList ({
            "users"     : this.users
        });
        console.log(contactList);
        this.$el.append(contactList.render().el); 
        this.$el.append(chatForm.render().el);
        this.$el.append(chatList.render().el);
        // console.log(chatList.render().el);
        // return this;
    }
});