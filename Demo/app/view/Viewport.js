Ext.define('Demo.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Fit',
        // 'Demo.view.Main'
        'Demo.view.Employees',
        'Demo.view.Organizations'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        // xtype: 'app-main'
        layout: 'hbox',
        items: [
            Ext.create('Demo.view.Organizations'),
            Ext.create('Demo.view.Employees')
        ]
    }]
});