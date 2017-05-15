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
    defaultButton: 'loginButton',

    items: [{
            xtype: 'form',
            reference: 'loginForm',
            url: 'api/login',
            items: [{
                margin: '8px 0px',
                html: '<div style="color: #006633"><b>Have an account?</b></div>'
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
                reference: 'loginButton',
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
            html: '<div style="color: magenta"><b>New to Slo Freecycle?</b></div>'
        }, {
            buttonAlign: 'center',
            buttons: [{
                text: 'Sign Up',
                style: {
                    'background-color': 'magenta',
                    'border-color': 'magenta'
                },
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