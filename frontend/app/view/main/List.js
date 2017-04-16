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
        {xtype: 'textfield', flex: 1 },
        {xtype: 'button', text: 'Search' }
    ],

    columns: [
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
