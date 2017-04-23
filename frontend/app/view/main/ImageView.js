Ext.define('Fc.view.main.ImageView', {
    extend: 'Ext.panel.Panel',
    xtype: 'imageview',
    requires: [
        'Ext.data.*',
        'Ext.util.*',
        'Ext.view.View'
    ],

    // This is the search bar
    tbar: [
        {xtype: 'textfield', flex: 1.0 },
        {xtype: 'button', text: 'Search', iconCls: 'x-fa fa-search' },
        {
            xtype: 'button',
            text: '<div style="color: white">New Post</div>',
            style: {
                'background-color': '#006633'
            }
        }
    ],

    /**
     * @method initComponent
     * @inheritdoc
     * @return {void}
     */
    initComponent: function() {
    	ImageModel = Ext.define('ImageModel', {
	        extend: 'Ext.data.Model',
	        fields: [
	           {name: 'name'},
	           {name: 'url'},
	           {name: 'size', type: 'float'}
	           //{name:'lastmod', type:'date', dateFormat:'timestamp'}
	        ]
	    });

	    var store = Ext.create('Ext.data.Store', {
	        model: 'ImageModel',
	        autoLoad: true,
	        proxy: {
	            type: 'ajax',
	            url: '/api/images',
	            reader: {
	                type: 'json',
	                rootProperty: 'images'
	            }
	        }
	    });

        // var store = Ext.create('Ext.data.Store', {
        //          model: 'ImageModel',
        //          data : [
        //             {
        //                 name: 'chair-img1',
        //                 shortName: 'img1',
        //                 url: 'app/test/images/chair.jpg'
        //             },
        //          ]
        // });

	    this.items = {
	    	xtype: 'dataview',
            store: store,
            tpl: [
                '<tpl for=".">',
                    '<div class="thumb-wrap" id="{name:stripTags}">',
                        '<div class="thumb"><img src="{url}" title="{name:htmlEncode}"></div>',
                        '<span class="x-editable">{shortName:htmlEncode}</span>',
                    '</div>',
                '</tpl>',
                '<div class="x-clear"></div>'
            ],
            selectionModel: {
                mode   : 'SIMPLE'
            },
            height: 310,
            width: 150,
            trackOver: true,
            overItemCls: 'x-item-over',
            itemSelector: 'div.thumb-wrap',
            emptyText: 'No images to display',
            plugins: [
                //Ext.create('Ext.ux.DataView.DragSelector', {}),
                //Ext.create('Ext.ux.DataView.LabelEditor', {dataIndex: 'name'})
            ],
            prepareData: function(data) {
                Ext.apply(data, {
                    shortName: Ext.util.Format.ellipsis(data.name, 15),
                    sizeString: Ext.util.Format.fileSize(data.size),
                    //dateString: Ext.util.Format.date(data.lastmod, "m/d/Y g:i a")
                });
                return data;
            },
            listeners: {
                selectionchange: function(dv, nodes ){
                    var l = nodes.length,
                        s = l !== 1 ? 's' : '';
                    //this.up('panel').setTitle('Simple DataView (' + l + ' item' + s + ' selected)');
                }
            }
        };
    	
    	this.callParent(arguments);
    }
});



