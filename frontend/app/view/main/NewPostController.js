Ext.define('Fc.view.main.NewPostController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.newpost',

    formPost: function() {
        var form = this.lookupReference('newpostForm').getForm();
        var me = this;

        if (form.isValid()) {
            let currentUser = Fc.getApplication().currentUser;
            form.submit({
                url: 'api/newposts/' + currentUser.username,
                waitMsg: 'Uploading your photo...',
                success: function(fp, o) {
                    //Ext.Msg.alert('Success');
                    me.onFreeItemsClick();
                },
                failure: function(form, action) {
                    //Ext.Msg.alert('Failed', action.response.responseText);
                    me.onFreeItemsClick();
                }
            });
        }
    },
    onFreeItemsClick: function () {
        //this.lookupReference("newpost-view").destroy();

        //this.lookupReference("home").add({xtype:'imageview'});

        this.getView().layout.setActiveItem(0);
    },

    /*
    onFreeItemsClick: function () {
        Ext.getCmp("newpost-view").destroy();

        Ext.getCmp("home-test").add({xtype:'imageview'});
    }
    */


    firstFormReset: function() {
        this.lookupReference('firstForm').getForm().reset();
    }
});