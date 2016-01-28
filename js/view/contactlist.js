var ContactRow = Backbone.View.extend ({
    tagName: 'li',

    initialize : function(options) {
        this.users       = options.users;
        } ,

    render : function() {
        var contactId    = this.model.get('id');
        var foundContact = this.users.findWhere({id: contactId});
        var userName     = foundContact.get('name');
        var userStatus   = foundContact.get('status');
        var photo        = foundContact.get('user_image');
        
        var tmp          = _.template("<table class='table'><tr><td><img src='<%= photo %>' alt='dp' ></td><td><b><%= userName %></b><br><%= userStatus %></td></tr></table>" );
        this.compiled    = tmp({photo:photo,userName:userName,userStatus:userStatus});
        
        this.$el.append(this.compiled );
        return this;
    }
});


var ContactList = Backbone.View.extend ({
    tagName     : 'ul',
    className   : 'contactList',

    initialize: function(options) {
        this.users     = options.users;
    },

    allRender: function() {
        var li, html   = ['<h2>Contacts</h2>'];
        this.users.each(function(mod) {
            li         = new ContactRow ({
                model   : mod,
                users   : this.users
            });

            html.push(li.render().el);
        });
        this.$el.html(html);
    },

    render: function(mod, col, action) {
        

        if (!action) {
            this.allRender();
        }
        else if (!!action && action.add) {
            li = new ContactRow({
                model   : mod,
                users   : this.users
            });
            
            this.$el.append(li.render().el);
        };
        return this;
    }
});