var ChatRow = Backbone.View.extend({
    tagName     : 'li',
    
    initialize  : function(options) {
        this.users       = options.users;
        this.messages    = options.messages;
     
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'remove', this.render);
    },

    render: function() {
        var sender       = this.model.get('sender_id');
        var receiver     = this.model.get('receiver_id');
        var message      = this.model.get('message_id');
     
        this.$el.append(html );
        return this;
    }
});

var ChatList = Backbone.View.extend({
    tagName  : 'ul',
 
    initialize: function(options) {
        this.users   = options.users;
        this.messages = options.messages;
        this.allData  = options.allData;

        this.listenTo(this.collection, 'add', this.render);
        this.listenTo(this.collection, 'remove', this.render);
    },
    render: function() {
        var listItem,
            html        = ['<label>'+"My messages" +'</label>'];
        this.collection.each(function(chat) {
            chatItem  = new ChatRow({
                model: chat,
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