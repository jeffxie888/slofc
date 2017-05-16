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
        reference: 'firstForm',
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
            buttonText: '',
            buttonConfig: {
                iconCls: 'fa-upload'
            }
        }],

        buttons: [{
            text: 'Save',
            handler: 'firstFormSave'
        }, {
            text: 'Reset',
            handler: 'firstFormReset'
        }]
    }]
    /*
    initComponent: function() {
	    this.items = {
		    items: [{
		        xtype: 'component',
		        html: [
		            '<h3>Basic File Field</h3>',
		            '<p>A typical file upload field with Ext style. Direct editing ',
		            'of the text field cannot be done in a consistent, cross-browser way, ',
		            'so it is always read-only. The file path reported by the ',
		            '<code>getValue</code> method will depend on the browser and cannot ',
		            'be controlled by Ext JS.'
		        ]
			}, {
			        xtype: 'filefield',
			        hideLabel: true,
			        reference: 'basicFile'
			}, {
			        xtype: 'button',
			        text: 'Get File Path',
			        handler: 'getFilePath'
			}]
		}
	}
	*/



});
