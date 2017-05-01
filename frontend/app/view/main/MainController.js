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


    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },


    onMainTabChange: function(tabpanel, newCard, oldCard, eOpts) {
        var hash = location.hash.substring(1, location.hash.length);
        var hashArr = hash.split('/');
        var newHash = ''.concat(
                        hashArr[0] + "/",
                        hashArr[1] + "/",
                        newCard.reference);
        this.redirectTo(newHash);
    },

    onClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('test');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    }
});
