Ext.define('Fc.view.main.NewPost', {
    extend: 'Ext.panel.Panel',
    xtype: 'newpost',
    id: 'newpost-view',
    requires: [
        'Ext.data.*',
        'Ext.util.*',
        'Ext.view.View',
        'Ext.app.route.Route',

        'Fc.view.main.MainController'
    ],
    controller: 'main',
    tbar: [
    	'->',
    	{
            xtype: 'button',
            text: '<div style="color: white">Free Items</div>',
            style: {
                'background-color': 'magenta'
            },
            listeners: {
                click: 'onFreeItemsClick'
            }
        }
    ],

    defaults: {
        xtype: 'form',
        layout: 'anchor',

        bodyPadding: 10,
        style: {
            'margin-bottom': '20px'
        },

        defaults: {
            anchor: '100%'
        }
    },
    items: [{
        title: 'Freecycle Something!',
        frame: true,
        bodyPadding: '10 10 0 20',
        reference: 'newpostForm',
        style: {
 			'border-color': '#006633'
        },

        defaults: {
            anchor: '100%',
            allowBlank: false,
            msgTarget: 'side',
            labelWidth: 70
        },

        items: [{
            xtype: 'textfield',
            fieldLabel: 'Title'
        }, {
        	xtype: 'textfield',
        	fieldLabel: 'Location'
        }, {
        	xtype: 'textarea',
        	fieldLabel: 'Description'
        }, {
            xtype: 'filefield',
            emptyText: 'Select an image',
            fieldLabel: 'Photo',
            name: 'photo-path',
            accept: 'image',
            multiple: true,
            buttonText: '',
            buttonConfig: {
                iconCls: 'fa-upload'
            }
        }],

        buttons: [{
            text: 'Post',
            handler: 'formPost'
        }, {
            text: 'Reset',
            handler: 'firstFormReset'
        }]
    }]
});
