var ChatForm = Backbone.View.extend({
    tagName   : 'form',
    events    : {
        'submit': 'submit'
    },
   initialize: function(options) {
        this.users   = options.users;
        this.messages = options.messages;
        this.allData  = options.allData;
    },
    render: function() {
        var html           = [];
        this.chooseDescription = new TextArea();
        html.push(this.chooseDescription.render().el);
        this.$el.append(html);
        this.$el.append('<button type="submit" class="btn btn-primary">Send</button>');
        return this;
    },
    submit: function(e) {
        e.preventDefault();
        
        var time        = new Date();
        var hours       = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
        var am_pm       = time.getHours() >= 12 ? "PM" : "AM";
        hours           = hours < 10 ? "0" + hours : hours;
        var minutes     = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
        var seconds     = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
        
        var currenttime = hours + ":" + minutes + ":" + seconds + " " + am_pm; 
        var currentdate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        console.log(currentdate);

        this.allData.add({
            
            'description': this.chooseDescription.getValue(),
            'posted_time': currenttime,
            'posted_date': currentdate
        });
        console.log(this.allData);
        var stringData = JSON.stringify( this.allData.toJSON() );
        localStorage.setItem( LS_KEY, stringData );
    }
});