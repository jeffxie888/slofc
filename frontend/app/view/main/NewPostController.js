Ext.define('Fc.view.main.NewPostController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.newpost',
    requires: [
        'Fc.view.main.MainController'
    ],


    formPost: function() {
        //var win = this.lookupReference('newpost-view');
        var formPanel = this.lookupReference('newpostForm');
        var form = formPanel.getForm();
        var currentUser = Fc.getApplication().currentUser;
        if (form.isValid()) {
            
            form.submit({
                url: 'api/newposts/' + currentUser.username,
                waitMsg: 'Uploading your photo...',
                success: function(fp, o) {
                    //Ext.Msg.alert('Success');
                    //me.close();
                    this.lookupReference('newpostWindow').hide();
                    
                },
                failure: function(form, action) {
                    //Ext.Msg.alert('Failed', action.response.responseText);
                }
            });
            Ext.ComponentQuery.query('#newpostWindow').hide();
            //this.lookupReference('newpostWindow').hide();
        }

    }
});