Ext.define('Fc.view.main.ProfileView', {
    extend: 'Ext.tab.Panel',
    xtype: 'profileview',
    requires: [
        'Ext.data.*',
        'Ext.util.*',
        'Ext.view.View',
        'Ext.app.route.Route'
    ],
    
    items: [{
        title: 'panel 1',
        html: 'panel 1'
    }],

    tbar: [
        {
            xtype: 'button',
            text: '<div style="color: white">New Post</div>',
            style: {
                'background-color': '#006633'
            }
        }
    ]

});



