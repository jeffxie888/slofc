Ext.define('Fc.view.main.NewPost', {
    extend: 'Ext.panel.Panel',
    xtype: 'newpost',
    reference: 'newpost-view',
    requires: [
        'Ext.data.*',
        'Ext.util.*',
        'Ext.view.View',
        'Ext.app.route.Route',

        'Fc.view.main.MainController'
    ],
    controller: 'newpost',
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
        layout: 'anchor',
        bodyPadding: 10,
        style: {
            'margin-bottom': '20px'
        },
        anchor: '100%'
    },
    items: [{
        title: 'Freecycle Something!',
        bodyPadding: '10 10 0 20',
        xtype: 'form',
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
            fieldLabel: 'Title',
            name: 'title',
        }, {
        	xtype: 'textfield',
        	fieldLabel: 'Location',
            name: 'location'
        }, {
        	xtype: 'textarea',
        	fieldLabel: 'Description',
            name: 'description'
        }, {
            xtype: 'filefield',
            emptyText: 'Select an image',
            fieldLabel: 'Photo',
            name: 'file',
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
