Ext.define('Fc.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Fc.view.login.LoginController',
        'Ext.form.Panel',
        'Fc.view.login.Register'
    ],

    controller: 'login',
    bodyPadding: 10,
    //title: 'SLO FreeCycle',
    title: '<div style="text-align:center;">SLO Freecycle</div>',
    closable: false,
    autoShow: true,
    width: '25%',
    draggable: false,

    items: [{
            xtype: 'form',
            reference: 'loginForm',
            url: 'api/login',
            items: [{
                margin: '8px 0px',
                html: '<div style="color: red">Have an account?</div>'
            }, {
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
                text: 'Login',
                formBind: true,
                width: '100%',
                handler: 'onLoginClick' 
            }]
        }, {
            xtype : 'menuseparator',
            margin: '8px 0px',
            width : '100%'
        }, {
            margin: '0px 0px 8px 0px',
            html: 'New to Slo Freecycle?'
        }, {
            buttonAlign: 'center',
            buttons: [{
                text: 'Sign Up',
                margin: '8px 0px',
                width: '100%',
                listeners: {
                    click: 'onRegisterClick'
                }
            }]
        }/* {
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
        }*/]
});