Ext.define('Fc.view.main.NewPostController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.newpost',

    getFilePath: function() {
        var v = this.lookupReference('basicFile').getValue();

        Ext.Msg.alert('Selected File', v && v !== '' ? v : 'None');
    },

    buttonOnlyChange: function(field, value) {
        Ext.toast('<b>Selected:</b> ' + value);
    },

    formPost: function() {
        var form = this.lookupReference('newpostForm').getForm();

        if (form.isValid()) {
            form.submit({
                url: 'data/form/file-upload.php',
                waitMsg: 'Uploading your photo...',
                success: function(fp, o) {
                    var tpl = new Ext.XTemplate(
                        'File processed on the server.<br />',
                        'Name: {fileName}<br />',
                        'Size: {fileSize:fileSize}'
                    );

                    Ext.Msg.alert('Success', tpl.apply(o.result));
                }
            });
        }
    },

    firstFormReset: function() {
        this.lookupReference('firstForm').getForm().reset();
    }
});