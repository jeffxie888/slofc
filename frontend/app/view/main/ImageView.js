Ext.define('Fc.view.main.ImageView', {
    extend: 'Ext.panel.Panel',
    id: 'images-view',
    xtype: 'imageview',
    requires: [
        'Ext.data.*',
        'Ext.util.*',
        'Ext.view.View',
        'Ext.app.route.Route'
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
               {name: 'location'}
	           //{name: 'size', type: 'float'}
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

        store.load();
        
	    this.items = {
	    	xtype: 'dataview',
            store: store,
            tpl: [
                '<tpl for=".">',
                    '<div class="thumb-wrap" id="{name:stripTags}">',
                        '<div class="thumb"><img src="{url}" title="{name:htmlEncode}"></div>',
                        '<span class="x-editable"> {shortName:htmlEncode}</span>',
                        '<span class="x-editable"> <div style="color: blue">{address:htmlEncode}</div></span>',
                    '</div>',
                '</tpl>',
                '<div class="x-clear"></div>'
            ],
            selectionModel: {
                mode   : 'SINGLE',

            },
            height: 300,
            //width: 150,
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
                    shortName: Ext.util.Format.ellipsis(data.name, 25),
                    address: Ext.util.Format.ellipsis(data.location, 30)
                    //sizeString: Ext.util.Format.fileSize(data.size),
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



