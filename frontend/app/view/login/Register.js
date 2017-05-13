Ext.define('Fc.view.login.Register', {
    extend: 'Ext.window.Window',
    xtype: 'register',
    reference: 'registerWindow',

    requires: [
        'Fc.view.login.LoginController',
        'Fc.view.login.RegisterController',
        'Ext.form.Panel'
    ],

    controller: 'register',
    bodyPadding: 10,
    //title: 'SLO FreeCycle',
    title: '<div style="text-align:center;">SLO Freecycle - Sign up!</div>',
    closable: false,
    autoShow: true,
    width: '25%',

    items: [{
            xtype: 'form',
            reference: 'registerForm',
            buttonAlign: 'center',
            url: 'api/signup',
            items: [{
                xtype: 'textfield',
                name: 'name',
                width: '100%',
                emptyText: 'Full Name',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'email',
                width: '100%',
                emptyText: 'Cal Poly Email',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'username',
                margin: '8px 0px',
                width: '100%',
                emptyText: 'Username',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'password',
                width: '100%',
                inputType: 'password',
                emptyText: 'Password',
                allowBlank: false
            }],
            buttons: [{
                text: 'Sign up!',
                formBind: true,
                handler: 'onSignupClick'
            }]
        }]
});