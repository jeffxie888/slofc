/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Fc.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Fc',

    //defaultToken : 'home',

    stores: [
        // TODO: add global / shared stores here
    ],

    views: [
        'Fc.view.login.Login',
        'Fc.view.main.Main'
    ],
    
    launch: function () {
        // TODO - Launch the application
        Ext.History.init();
        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;
        var currentUser;
        loggedIn = Fc.getApplication().isLoggedin;


        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });
        

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
