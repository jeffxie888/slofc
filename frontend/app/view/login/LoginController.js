Ext.define('Fc.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        //localStorage.setItem("test", true);

        var me = this;
        var formPanel = this.lookupReference('loginForm'),
            form = formPanel.getForm();

        if (form.isValid()) { // make sure the form contains valid data before submitting
            form.submit({
                success: function(form, action) {
                    me.getView().destroy();
                    Fc.getApplication().isLoggedIn = true;
                    Fc.getApplication().currentUser = Ext.apply({}, action.result.user);
                    Ext.create({
                        xtype: 'app-main'
                    });
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Failed', JSON.parse(action.response.responseText).message);
                }
            });
        } else { // display error alert if the data is invalid
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
        }

    },

    onRegisterClick: function() {
        // Remove Login Window
        this.getView().destroy();

        Ext.create({
            xtype: 'register'
        });
    }

});