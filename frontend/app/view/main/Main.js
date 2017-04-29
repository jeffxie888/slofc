/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Fc.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Fc.view.main.MainController',
        'Fc.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-recycle'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    listeners: {
        tabchange: 'onMainTabChange'
    },
    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        reference: 'home',
        items: [{
            autoScroll: true,
            //overflowY: 'scroll',
            xtype: 'imageview'
        }],
        
    }, {
        title: 'Profile',
        iconCls: 'fa-user',
        reference: 'profile',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'About',
        iconCls: 'fa-info-circle',
        reference: 'about',
        bind:  {
            html: '{aboutus}'
        }
    }]
});
