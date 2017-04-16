/**
 * This view is an example list of people.
 */
Ext.define('Fc.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Fc.store.Personnel'
    ],

    store: {
        type: 'personnel'
    },

    tbar: [
        {xtype: 'textfield', flex: 1.0 },
        {xtype: 'button', text: 'Search', iconCls: 'x-fa fa-search' },
        {
            xtype: 'button',
            text: 'New Post',
        }
    ],


    listeners: {
        select: 'onItemSelected'
    }
});
