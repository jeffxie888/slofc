Ext.define('Fc.view.main.NewPost', {
    extend: 'Ext.window.Window',
    xtype: 'newpost',
    reference: 'newpostWindow',
    itemId: 'newpost-id',
    autoShow: true,
    requires: [
        'Ext.data.*',
        'Ext.util.*',
        'Ext.view.View',
        'Ext.app.route.Route',
        'Fc.view.main.MainController',
    ],
    controller: 'main',//'newpost',
    defaults: {
        layout: 'anchor',
        bodyPadding: 10,
        style: {
            'margin-bottom': '20px'
        },
        anchor: '100%',
        height: 350,
        width: 500
    },
    header: {
        title: 'Freecycle Something!'
    },
    items: [{
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
            //multiple: 'multiple',
            buttonText: '',
            buttonConfig: {
                iconCls: 'fa-upload'
            }
            /*listeners:{
                afterrender:function(cmp){
                    cmp.fileInputEl.set({
                        multiple:'multiple'
                    });
                }
            }*/
        }/*, {
            xtype: 'filefield',
            emptyText: '[OPTIONAL]Select an image',
            fieldLabel: 'Photo',
            name: 'file',
            accept: 'image',
            buttonText: '',
            buttonConfig: {
                iconCls: 'fa-upload'
            },
            allowBlank: true
        }, {
            xtype: 'filefield',
            emptyText: '[OPTIONAL]Select an image',
            fieldLabel: 'Photo',
            name: 'file',
            accept: 'image',
            buttonText: '',
            buttonConfig: {
                iconCls: 'fa-upload'
            },
            allowBlank: true
        }*/],

        buttons: [{
            text: 'Post',
            handler: 'formPost'
        }]
    }]
});
