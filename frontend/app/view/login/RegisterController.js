Ext.define('Fc.view.login.RegisterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.register',

    onSignupClick: function() {
        var me = this;
        var formPanel = this.lookupReference('registerForm'),
            form = formPanel.getForm();

        if (form.isValid()) { // make sure the form contains valid data before submitting
            form.submit({
                success: function(form, action) {
                    me.getView().destroy();
                    Ext.create({
                        xtype: 'app-main'
                    });
                },
                failure: function(form, action) {
                    //debugger;
                    Ext.Msg.alert('Failed', JSON.parse(action.response.responseText).message);
                }
            });
        } else { // display error alert if the data is invalid
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
        }
    }

});