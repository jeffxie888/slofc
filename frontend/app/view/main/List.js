/**
 * This view is an example list of people.
 */
Ext.define('Fc.view.main.List', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist',
    layout: 'absolute',
    defaults: {
        bodyPadding: 15,
        width: 300,
        height: 350,
        frame: true, 
    },

    items: [
        {
            /*xtype: 'panel',
            title: 'Child Panel 1',
            height: 100,
            columnWidth: '0.3333'*/
            title: 'Panel 1',
            x: 0,
            y: 0,
            style: {
                backgroundImage: 'url(Fc.test.images.chair.jpg'
            }
        },
        {
            /*xtype: 'panel',
            title: 'Child Panel 2',
            height: 100,
            columnWidth: '0.3333'*/
            title: 'Panel 2',
            x: 337,
            y: 0,
            xtype: 'image',
            src: 'Users/Jenna/work/slofc/frontend/app/test/images/chair.jpg'
        },
        {
            /*xtype: 'panel',
            title: 'Child Panel 3',
            height: 100,
            columnWidth: '0.3333'*/
            title: 'Panel 3',
            x: 675,
            y: 0,
        }
    ],

    requires: [
        'Ext.layout.container.Absolute'
    ],

    store: {
        
    },

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

    listeners: {
        select: 'onItemSelected'
    }
});
