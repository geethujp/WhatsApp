var ChatRow = Backbone.View.extend({
    tagName     : 'li',
    
    initialize  : function(options) {
        this.users       = options.users;
        this.messages    = options.messages;
     
        this.listenTo(this.model, 'add', this.render);
        this.listenTo(this.model, 'remove', this.render);
       
    },

    render: function() {
        console.log(this);
        var senderId        = parseInt(this.model.get('user_id'));
        var sender          = this.users.findWhere({
            id: senderId
        });

        var receiverId      = parseInt(this.model.get('receiver_id'));
        var receiver        = this.users.findWhere({
            id: receiverId
        });
        var messageId       = parseInt(this.model.get('message_id'));
        var message         = this.messages.findWhere({
            id: messageId
        });

        var tmp=_.template("<table class='table'><tr><td><%= sender %></td><td><%= receiver %></td><td><%= message %></td></tr></table>" );
       
        var sender_name     = " Sender:  "     + sender.get('name'),
        receiver_name       = " Receiver:"     + receiver.get('name'),
        message_text        = " Message: "     + message.get('text');

        this.compiled       =   tmp({sender:sender_name,receiver:receiver_name,message:message_text});
         console.log(this.compiled);
        this.$el.append(this.compiled );
        return this;
    }
});

var ChatList = Backbone.View.extend({
    tagName  : 'ul',
 
    initialize: function(options) {
        this.users    = options.users;
        this.messages = options.messages;
        this.allData  = options.allData;

        this.listenTo(this.collection, 'add', this.render);
        this.listenTo(this.collection, 'remove', this.render);
    },
    render: function() {
        var listItem,
            html        = [];
        this.collection.each(function(allData) {
            chatItem    = new ChatRow({
                model: allData,
                "users"     : users,
                "messages"  : messages,
                "allData"   : allData
            });
            html.push(chatItem.render().el);
        });
        this.$el.html(html);
        return this;
    }
});