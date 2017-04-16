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

    // This is the search bar
    tbar: [
        {xtype: 'textfield', flex: 1.0 },
        {xtype: 'button', text: 'Search', iconCls: 'x-fa fa-search' },
        {
            xtype: 'button',
            text: 'New Post',
        }
    ],

<<<<<<< HEAD
=======
    columns: [
        { dataIndex: 'name', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
>>>>>>> 1098e0c3b46173cf5a380d82a6c93f6238dd9590

    listeners: {
        select: 'onItemSelected'
    }
});
