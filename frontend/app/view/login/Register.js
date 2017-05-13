Ext.define('Fc.view.login.Register', {
    extend: 'Ext.window.Window',
    xtype: 'register',

    requires: [
        'Fc.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    //title: 'SLO FreeCycle',
    title: '<div style="text-align:center;">SLO Freecycle - Sign up!</div>',
    closable: false,
    autoShow: true,
    width: '25%',

    items: [/*{
            xtype: 'form',
            reference: 'form',
            items: [{
                xtype: 'textfield',
                name: 'username',
                emptyText: 'Username',
                width: '100%',
                //fieldLabel: 'Username',
                allowBlank: false
            }, {
                xtype: 'textfield',
                blankText: 'password',
                name: 'password',
                emptyText: 'Password',
                width: '100%',
                inputType: 'password',
                //fieldLabel: 'Password',
                allowBlank: false
            }],
            buttonAlign: 'center',
            buttons: [{
                text: 'Sign Up',
                listeners: {
                    //click: 'onRegisterClick'
                }
            }]
        }, {
            xtype : 'menuseparator',
            width : '100%'
        },*/ {
            xtype: 'form',
            reference: 'form',
            buttonAlign: 'center',
            items: [{
                xtype: 'textfield',
                name: 'firstname',
                margin: '8px 0px',
                width: '100%',
                emptyText: 'First Name',
                allowBlank: false
            },{
                xtype: 'textfield',
                name: 'email',
                width: '100%',
                emptyText: 'Cal Poly Email',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'password',
                width: '100%',
                inputType: 'password',
                emptyText: 'Password',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'repeatpassword',
                width: '100%',
                inputType: 'password',
                emptyText: 'Repeat Password',
                allowBlank: false
            }],
            buttons: [{
                text: 'Sign up!',
                formBind: true,
                listeners: {
                    click: 'onLoginClick'
                }
            }]
        }]
});