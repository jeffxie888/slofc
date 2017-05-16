Ext.define('Fc.view.main.ProfileView', {
    extend: 'Ext.panel.Panel',
    xtype: 'profileview',
    requires: [
        'Ext.data.*',
        'Ext.util.*',
        'Ext.view.View',
        'Ext.app.route.Route',

        'Fc.view.main.MainController'
    ],

    controller: 'main',

    // New post button
    tbar: [
        '->', // Right aligns it
        {
            xtype: 'button',
            text: '<div style="color: black">Logout</div>',
            handler: 'onLogoutButton',
            style: {
                'background-color': '#f6f6f6'
            }
        }/*,
        {
            xtype: 'button',
            text: '<div style="color: white">New Post</div>',
            style: {
                'background-color': '#006633'
            }
        }*/

    ],
    
    items: [{
        xtype: 'tabpanel',
        fullscreen: true,
        style: {
            'width': '369px',
            'height': '400px'
        },
        items: [
            {
                xtype: 'panel',
                title: 'Recent Posts',
                html: 'hi',
            },
            {
                xtype: 'panel',
                title: 'Your Favorites',
                html: 'yo'
            },
            {
                xtype: 'panel',
                title: 'Wishlist',
                html: 'hi',
            },
            {
                xtype: 'panel',
                title: 'Settings',
                html: 'hi',
            }]
    }]
});



