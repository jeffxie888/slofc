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
        'Ext.app.route.Route',
        'Ext.util.History'
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

    onLogin: function() {
        Ext.create({
            xtype: 'login'
        });
    },


    onLogoutButton: function () {
        // Remove the localStorage key/value
        Fc.getApplication().isLoggedIn = false;

        // Remove Main View
        Ext.getCmp("main-page").destroy();
        //this.getView().destroy();
        //Ext.util.Cookies.clear("key", 'value');
        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },


    onNewPostClick: function () {
        /*Ext.create({
            xtype: 'newpost'
        }).center();*/
        var win = this.lookupReference('newpostWindow');

        if (!win) {
            win = new Fc.view.main.NewPost();

            // A Window is a floating component, so by default it is not connected
            // to our main View in any way. By adding it, we are creating this link
            // and allow the window to be controlled by the main ViewController,
            // as well as be destroyed automatically along with the main View.
            this.getView().add(win);
        }

        win.show().center();
    },

    formPost: function(button) {
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
                },
                failure: function(form, action) {
                    //Ext.Msg.alert('Failed', action.response.responseText);
                }
            });
            //Ext.ComponentQuery.query('#newpost-id').destroy();
            //this.lookupReference('newpostWindow').hide();
        }
    },

    onTabChange: function(tabPanel, tab) {
        var tokenDelimiter = ':';
        var tabs = [],
        ownerCt = tabPanel.ownerCt, 
        oldToken, newToken;

        tabs.push(tab.id);
        tabs.push(tabPanel.id);

        while (ownerCt && ownerCt.is('tabpanel')) {
            tabs.push(ownerCt.id);
            ownerCt = ownerCt.ownerCt;
        }
        
        newToken = tabs.reverse().join(tokenDelimiter);
        
        oldToken = Ext.History.getToken();
       
        if (oldToken === null || oldToken.search(newToken) === -1) {
            Ext.History.add(newToken);
        }
    },

    onAfterRender: function() {
        var tokenDelimiter = ':';
        Ext.History.on('change', function(token) {
            var parts, length, i;
            
            if (token) {
                parts = token.split(tokenDelimiter);
                length = parts.length;
                
                // setActiveTab in all nested tabs
                for (i = 0; i < length - 1; i++) {
                    Ext.getCmp(parts[i]).setActiveTab(Ext.getCmp(parts[i + 1]));
                }
            }
        });
        
        // This is the initial default state.  Necessary if you navigate starting from the
        // page without any existing history token params and go back to the start state.
        /*
        var activeTab1 = Ext.getCmp('main-page').getActiveTab(),
            activeTab2 = activeTab1.getActiveTab();
            
        onTabChange(activeTab1, activeTab2);
        */
    }

});
