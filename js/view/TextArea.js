var TextArea = Backbone.View.extend ({
    tagName    : 'textarea',
    initialize : function() {
      
    },
    render: function() {
        this.$el.attr('placeholder', 'Enter msg here');
        return this;
    },
    getValue: function() {
        return this.$el.val();
    }
});