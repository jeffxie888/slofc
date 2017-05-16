/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Fc.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'Ext.app.route.Route'
    ],

    config: {
        currentPerspective: null
    },

    routes: {
        'home': {
            before: 'checkSession',
            action: 'onHomeClick'
        },
        'login': {
            action: 'onLogin'
        }
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    checkSession : function() {
        var args   = Ext.Array.slice(arguments),
            action = args[args.length - 1];

        if (Fc.user) {
            action.resume();
        } else {
            action.stop();

            this.redirectTo('login');
        }
    },

    onHomeClick: function() {
        Fc.getMainView().setActiveItem(0);
    },

    onLogin: function() {
        Ext.create({
            xtype: 'login'
        });
    },


    onLogoutButton: function () {
        // Remove the localStorage key/value
    

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },


    onNewPostClick: function () {
        Ext.getCmp("images-view").destroy();

        Ext.getCmp("home-test").add({xtype:'newpost'});
    },

    onFreeItemsClick: function () {
        Ext.getCmp("newpost-view").destroy();

        Ext.getCmp("home-test").add({xtype:'imageview'});
    }
    

});
