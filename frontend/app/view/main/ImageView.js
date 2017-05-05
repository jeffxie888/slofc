Ext.define('Fc.view.main.ImageView', {
    extend: 'Ext.panel.Panel',
    id: 'images-view',
    xtype: 'imageview',
    requires: [
        'Ext.data.*',
        'Ext.util.*',
        'Ext.view.View',
        'Ext.app.route.Route',

        'Fc.view.main.MainController'
    ],
    controller: 'main',
    // This is the search bar
    tbar: [
        {xtype: 'textfield', flex: 1.0 },
        {xtype: 'button', text: 'Search', iconCls: 'x-fa fa-search' },
        {
            xtype: 'button',
            text: '<div style="color: white">New Post</div>',
            style: {
                'background-color': '#006633'
            },
            listeners: {
                click: 'onAboutClick'
            }
        }
    ],
    /**
     * @method initComponent
     * @inheritdoc
     * @return {void}
     */
    initComponent: function() {
        if(typeof(ImageModel) == 'undefined'){
        	ImageModel = Ext.define('ImageModel', {
    	        extend: 'Ext.data.Model',
    	        fields: [
    	           {name: 'name'},
    	           {name: 'url'},
                   {name: 'location'},
                   {name: 'time', type: 'date', dateFormat: 'm/d/Y'}
    	           //{name: 'size', type: 'float'}
    	           //{name:'lastmod', type:'date', dateFormat:'timestamp'}
    	        ]
    	    })
        };


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
                        '<b>{shortName:htmlEncode}</b>',
                        '<div style="color: green">{address:htmlEncode}</div>',
                        '{postTime:htmlEncode}',
                    '</div>',
                '</tpl>',
                '<div class="x-clear"></div>'
            ],
            selectionModel: {
                mode   : 'SINGLE',

            },
            //height: 500,
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
                    address: Ext.util.Format.ellipsis(data.location, 30),
                    postTime: Ext.util.Format.date(data.time, "m/d/Y")
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
                },
                click: 'onAboutClick'
            }
        };
    	
        this.callParent(arguments);
    }
});



