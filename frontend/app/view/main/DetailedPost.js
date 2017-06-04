Ext.define('Fc.view.main.DetailedPost', {
    extend: 'Ext.window.Window',
    xtype: 'detailedpost',
    reference: 'detailedpost-view',
    requires: [
        'Ext.data.*',
        'Ext.util.*',
        'Ext.view.View',
        'Ext.app.route.Route',

        'Fc.view.main.MainController'
    ],
    controller: 'main',
    defaults: {
        layout: 'anchor',
        bodyPadding: 10,
        style: {
            'margin-bottom': '20px'
        },
        //anchor: '100%',
        height: 350,
        width: 500,
        flex: 1
    },
    header: {
        title: 'Detailed Post'
    },
    items: [{
        xtype: 'form',
        reference: 'detailedpost',
        defaults: {
            anchor: '100%',
            allowBlank: false,
            msgTarget: 'side',
            labelWidth: 70
        },

        items: [{
            xtype: 'label',
            fieldLabel: 'Title',
            text: '<image> + detailed post description would be here',
            name: 'title'
        }]
    }]
});
